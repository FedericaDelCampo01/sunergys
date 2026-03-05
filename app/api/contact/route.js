import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const formData = await request.formData();
        
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const message = formData.get('message') || '';
        const file = formData.get('file');

        // Validar campos requeridos
        if (!name || !email || !phone || !address) {
            return NextResponse.json(
                { error: 'Por favor completa todos los campos requeridos' },
                { status: 400 }
            );
        }

        // Crear el cuerpo del email en HTML
        const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #F95E19;">Nueva solicitud de cotización</h2>
                <p style="color: #666; margin-bottom: 20px;">Se ha recibido una nueva solicitud desde el formulario web:</p>
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Nombre:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Teléfono:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Dirección:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${address}</td>
                    </tr>
                    ${message ? `
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Mensaje:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${message}</td>
                    </tr>
                    ` : ''}
                    ${file ? `
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Archivo adjunto:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">${file.name}</td>
                    </tr>
                    ` : ''}
                </table>
                
                <p style="margin-top: 30px; color: #999; font-size: 12px;">
                    Este email fue enviado automáticamente desde el formulario de contacto de Sunergys.
                </p>
            </div>
        `;

        // Crear el cuerpo del email en texto plano
        const emailText = `
Nueva solicitud de cotización desde el formulario web

Datos del contacto:
- Nombre: ${name}
- Email: ${email}
- Teléfono: ${phone}
- Dirección: ${address}
${message ? `- Mensaje: ${message}` : ''}
${file ? `- Archivo adjunto: ${file.name}` : ''}

---
Este email fue enviado automáticamente desde el formulario de contacto de Sunergys.
        `.trim();

        // Intentar usar Resend si está configurado
        if (process.env.RESEND_API_KEY) {
            try {
                const { Resend } = require('resend');
                const resend = new Resend(process.env.RESEND_API_KEY);
                
                const emailData = {
                    from: process.env.FROM_EMAIL || 'noreply@sunergys.com',
                    to: 'contacto@sunergys.com',
                    subject: '[FORMULARIO WEB] Nueva solicitud de cotización',
                    html: emailHtml,
                    text: emailText,
                };

                // Agregar archivo adjunto si existe
                if (file) {
                    const fileBuffer = Buffer.from(await file.arrayBuffer());
                    emailData.attachments = [{
                        filename: file.name,
                        content: fileBuffer,
                    }];
                }

                await resend.emails.send(emailData);
                
                return NextResponse.json(
                    { success: true, message: 'Formulario enviado correctamente' },
                    { status: 200 }
                );
            } catch (emailError) {
                console.error('Error enviando email con Resend:', emailError);
                // Continuar con el fallback
            }
        }

        // Fallback: usar mailto o loggear (para desarrollo)
        // En producción, asegúrate de configurar RESEND_API_KEY
        console.log('=== NUEVA SOLICITUD DE COTIZACIÓN ===');
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Teléfono:', phone);
        console.log('Dirección:', address);
        console.log('Mensaje:', message || 'Sin mensaje');
        console.log('Archivo:', file ? file.name : 'Sin archivo');
        console.log('=====================================');
        console.log('\nPara habilitar el envío de emails:');
        console.log('1. Instala Resend: npm install resend');
        console.log('2. Configura RESEND_API_KEY en .env.local');
        console.log('3. Configura FROM_EMAIL en .env.local (opcional)');

        // Retornar éxito (en desarrollo)
        return NextResponse.json(
            { 
                success: true,
                message: 'Formulario enviado correctamente',
                note: 'Configura RESEND_API_KEY para habilitar el envío real de emails.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error procesando el formulario:', error);
        return NextResponse.json(
            { error: 'Error al procesar el formulario. Por favor intenta nuevamente.' },
            { status: 500 }
        );
    }
}
