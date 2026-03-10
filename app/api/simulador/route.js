import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8 MB
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

/**
 * Calcula la inversión en USD a partir del consumo anual (suma de 12 meses kWh).
 * Fórmulas de negocio Sunergys.
 */
function calcularInversionUSD(consumo_12_meses_kwh) {
  const consumo = Number(consumo_12_meses_kwh) || 0;
  if (consumo <= 0) return { inversion_usd: 0, nro_paneles: 0, potencia_calculada: 0 };

  const potencia_calculada = consumo / 1300;
  const nro_paneles = Math.round((potencia_calculada * 1000) / 585);

  // Inversor: rango (sin incluir el mayor) → precio unitario (cantidad = 1)
  let inversor_costo = 857;
  if (potencia_calculada <= 5) inversor_costo = 857;
  else if (potencia_calculada <= 8) inversor_costo = 1324;
  else if (potencia_calculada <= 12) inversor_costo = 1754;
  else if (potencia_calculada <= 22) inversor_costo = 2638;
  else if (potencia_calculada <= 44) inversor_costo = 3389;
  else inversor_costo = 3389; // > 44 kW, mismo que último rango

  // Costo insumo = (nro paneles)*115 + (nro paneles)*50 + 78 + 27.30 + 14.82 + inversor
  const costo_insumo =
    nro_paneles * 115 + nro_paneles * 50 + 78 + 27.3 + 14.82 + inversor_costo;

  // Instalación: 1300 + oficial*66.67 + medio_oficial*200 + insumos*1000 + transporte_grua*1200
  const oficial = nro_paneles <= 19 ? 5 : 10;
  const medio_oficial = nro_paneles <= 19 ? 1 : 2;
  const insumos = nro_paneles <= 24 ? 1 : 2;
  const transporte_grua = nro_paneles > 20 ? 1 : 0;
  const costo_instalacion =
    1300 +
    oficial * 66.67 +
    medio_oficial * 200 +
    insumos * 1000 +
    transporte_grua * 1200;

  const costos_totales = costo_insumo + costo_instalacion;

  // Porcentaje margen según consumo
  let porcentaje_margen = 0.55;
  if (consumo < 12000) porcentaje_margen = 0.55;
  else if (consumo < 18000) porcentaje_margen = 0.5;
  else if (consumo < 25000) porcentaje_margen = 0.45;
  else porcentaje_margen = 0.4;

  const margen_ganancia = costos_totales * porcentaje_margen;
  const inversion_usd = margen_ganancia + costos_totales;

  return {
    inversion_usd: Math.round(inversion_usd * 100) / 100,
    nro_paneles,
    potencia_calculada: Math.round(potencia_calculada * 100) / 100,
  };
}

const TC = 38.4; // Tipo de cambio UYU/USD

/** Ahorro anual (USD) = consumo anual UY / TC; consumo anual UY = consumo_IA * 5.76576 * 1.22 */
function calcularAhorroAnualUSD(consumo_12_meses_kwh) {
  const consumo = Number(consumo_12_meses_kwh) || 0;
  if (consumo <= 0) return 0;
  const consumo_anual_UY = consumo * 5.76576 * 1.22;
  const ahorro_anual = consumo_anual_UY / TC;
  return Math.round(ahorro_anual * 100) / 100;
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const email = formData.get('email');
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { error: 'No se recibió ningún archivo' },
        { status: 400 },
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'El archivo es demasiado grande. Máximo 8 MB.' },
        { status: 400 },
      );
    }

    const mimeType = file.type || 'application/octet-stream';

    if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
      return NextResponse.json(
        {
          error:
            'Tipo de archivo no permitido. Solo se aceptan imágenes (JPG o PNG) o PDFs.',
        },
        { status: 400 },
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      console.warn(
        '[SIMULADOR] OPENAI_API_KEY no está configurada. Devuelve error de configuración.',
      );
      return NextResponse.json(
        {
          error:
            'Servicio de análisis no configurado. Falta la OPENAI_API_KEY en el servidor.',
        },
        { status: 500 },
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const prompt = `
En esta factura de UTE (o factura eléctrica similar), busca la sección que muestre la evolución del consumo de energía en kWh por mes.

Puede aparecer como:
- Una tabla (por ejemplo "Evolución de consumo de energía activa (kWh)", "Evolución en el Consumo Eléctrico", o título similar).
- Un gráfico de barras donde el eje Y sea kWh y el eje X muestre meses (ej.: Fb, Mr, Ab, My, Jn, Jl, Ag, St, Oc, Nv, Dc, En).

Extrae los valores de consumo (kWh) de los últimos 12 meses, en orden cronológico (del más antiguo al más reciente). Si es un gráfico, estima el valor de cada barra según la escala del eje Y.

Devuelve únicamente JSON válido con este formato:

{
  "ultimos_12_meses_kwh": [numero1, numero2, ..., numero12]
}

No agregues texto adicional.
Si no encuentras ninguna tabla ni gráfico con consumos mensuales en kWh, devuelve:

{
  "ultimos_12_meses_kwh": null
}
    `.trim();

    let raw;

    if (mimeType === 'application/pdf') {
      // Flujo para PDF: subir el archivo como File a OpenAI y usar Responses API
      let uploadedFile;
      try {
        uploadedFile = await openai.files.create({
          file, // File nativo del App Router, el SDK arma multipart/form-data
          purpose: 'assistants',
        });
      } catch (apiError) {
        console.error('[SIMULADOR] Error subiendo PDF a OpenAI Files:', apiError);
        if (apiError?.status === 413) {
          return NextResponse.json(
            {
              error:
                'El PDF es demasiado pesado para analizarlo automáticamente. Probá con un archivo más liviano o recortado, o subí una imagen de la factura.',
            },
            { status: 400 },
          );
        }
        throw apiError;
      }

      try {
        const response = await openai.responses.create({
          model: 'gpt-4.1-mini',
          input: [
            {
              role: 'user',
              content: [
                { type: 'input_text', text: prompt },
                {
                  type: 'input_file',
                  file_id: uploadedFile.id,
                },
              ],
            },
          ],
          text: {
            format: {
              type: 'json_object',
            },
          },
        });

        raw = response.output?.[0]?.content?.[0]?.text;
      } catch (apiError) {
        console.error('[SIMULADOR] Error llamando a OpenAI Responses para PDF:', apiError);
        if (apiError?.status === 413) {
          return NextResponse.json(
            {
              error:
                'La factura en PDF es demasiado pesada o compleja para analizarla automáticamente. Probá con un archivo más liviano o recortado, o subí una imagen de la factura.',
            },
            { status: 400 },
          );
        }
        throw apiError;
      }
    } else {
      // Flujo original para imágenes: chat.completions con image_url en base64
      const base64 = buffer.toString('base64');

      const completion = await openai.chat.completions.create({
        model: 'gpt-4.1-mini',
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              {
                type: 'image_url',
                image_url: {
                  url: `data:${mimeType};base64,${base64}`,
                },
              },
            ],
          },
        ],
      });

      raw = completion.choices[0]?.message?.content;
    }

    if (!raw) {
      return NextResponse.json(
        { error: 'La IA no devolvió contenido.' },
        { status: 500 },
      );
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      console.error('[SIMULADOR] Error parseando JSON de OpenAI:', raw);
      return NextResponse.json(
        { error: 'La IA no devolvió JSON válido.' },
        { status: 500 },
      );
    }

    const values = data?.ultimos_12_meses_kwh;

    if (!values) {
      return NextResponse.json(
        {
          error:
            'No se pudo encontrar la evolución de consumo (tabla o gráfico de kWh por mes) en la factura.',
        },
        { status: 400 },
      );
    }

    if (!Array.isArray(values) || values.length === 0) {
      return NextResponse.json(
        { error: 'El formato de datos recibidos no es válido.' },
        { status: 500 },
      );
    }

    const numbers = values.map((value) => {
      const asString = String(value).replace(',', '.');
      const num = Number(asString);
      if (!Number.isFinite(num)) {
        throw new Error(`Valor no numérico en la lista: ${value}`);
      }
      return num;
    });

    const consumo_12_meses_kwh = numbers.reduce(
      (acc, val) => acc + val,
      0,
    );

    const { inversion_usd, nro_paneles, potencia_calculada } =
      calcularInversionUSD(consumo_12_meses_kwh);

    const ahorro_anual_usd = calcularAhorroAnualUSD(consumo_12_meses_kwh);

    // ROI % = ahorro anual USD / inversión USD (en %). Plazo repago (años) = inversión USD / ahorro anual USD
    const roi_pct =
      inversion_usd > 0 && ahorro_anual_usd > 0
        ? Math.round((ahorro_anual_usd / inversion_usd) * 10000) / 100
        : null;
    const plazo_repago_anios =
      ahorro_anual_usd > 0
        ? Math.round((inversion_usd / ahorro_anual_usd) * 100) / 100
        : null;

    // Si tenemos email del usuario y Resend configurado, reenviamos la factura al equipo de Sunergys
    if (email && process.env.RESEND_API_KEY) {
      try {
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #F95E19;">Nueva simulación desde la web</h2>
            <p style="color: #666; margin-bottom: 20px;">
              Un usuario ha utilizado el simulador y subió una factura de UTE.
            </p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email del usuario:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Consumo últimos 12 meses (kWh):</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${consumo_12_meses_kwh}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Inversión estimada (USD):</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${inversion_usd}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Ahorro anual estimado (USD):</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${ahorro_anual_usd}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">ROI estimado (%):</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${roi_pct ?? 'N/D'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Plazo de repago (años):</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${plazo_repago_anios ?? 'N/D'}</td>
              </tr>
            </table>
            <p style="margin-top: 30px; color: #999; font-size: 12px;">
              Este email fue enviado automáticamente desde el simulador de la web de Sunergys.
            </p>
          </div>
        `;

        const emailText = `
Nueva simulación desde la web

Email del usuario: ${email}
Consumo últimos 12 meses (kWh): ${consumo_12_meses_kwh}
Inversión estimada (USD): ${inversion_usd}
Ahorro anual estimado (USD): ${ahorro_anual_usd}
ROI estimado (%): ${roi_pct ?? 'N/D'}
Plazo de repago (años): ${plazo_repago_anios ?? 'N/D'}

Se adjunta la imagen de la factura enviada por el usuario.
        `.trim();

        const emailData = {
          from: process.env.FROM_EMAIL || 'noreply@sunergys.com',
          to: 'contacto@sunergys.com',
          subject: '[SIMULADOR] Nueva simulación con factura adjunta',
          html: emailHtml,
          text: emailText,
        };

        if (file) {
          emailData.attachments = [
            {
              filename: file.name || 'factura-ute.jpg',
              content: buffer,
            },
          ];
        }

        await resend.emails.send(emailData);
      } catch (emailError) {
        console.error('[SIMULADOR] Error enviando email con Resend:', emailError);
      }
    }

    return NextResponse.json({
      consumo_12_meses_kwh,
      inversion_usd,
      ahorro_anual_usd,
      roi_pct,
      plazo_repago_anios,
      nro_paneles,
      potencia_calculada_kw: potencia_calculada,
    });
  } catch (error) {
    console.error('[SIMULADOR] Error en /api/simulador:', error);
    return NextResponse.json(
      { error: 'No se pudo procesar la factura' },
      { status: 500 },
    );
  }
}

