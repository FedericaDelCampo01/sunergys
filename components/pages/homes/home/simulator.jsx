"use client";
import React, { useState } from 'react';

const Simulator = () => {
    const [file, setFile] = useState(null);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const buildResultsFromConsumo = (consumoAnualKwh, apiData = {}) => {
        const consumo = Math.max(consumoAnualKwh || 0, 1000);
        // Inversión: viene del backend en USD si existe
        const inversionUsd = apiData.inversion_usd;
        const ahorroAnualUsd = apiData.ahorro_anual_usd;
        const potenciaKw = apiData.potencia_calculada_kw != null
            ? apiData.potencia_calculada_kw
            : Math.max(3, Math.round(consumo / 1300));
        const inversionParaAhorro = inversionUsd != null ? inversionUsd : (potenciaKw * 15000);
        const ahorroAnualFallback = Math.round((inversionParaAhorro / (5 * 12)) * 12);
        const tiempoRecuperoAnios = ahorroAnualFallback > 0 ? inversionParaAhorro / ahorroAnualFallback : 5;

        const formatUSD = (value) =>
            'US$ ' + Number(value || 0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        const formatUY = (value) =>
            '$' + Number(value || 0).toLocaleString('es-UY');

        return {
            inversion: inversionUsd != null ? formatUSD(inversionUsd) : formatUSD(consumo / 585 * 165),
            tiempoRecupero: apiData.plazo_repago_anios != null ? `${Number(apiData.plazo_repago_anios).toFixed(1)} años` : `${tiempoRecuperoAnios.toFixed(1)} años`,
            roiPct: apiData.roi_pct != null ? `${Number(apiData.roi_pct).toFixed(1)} %` : null,
            ahorroAnual: ahorroAnualUsd != null ? formatUSD(ahorroAnualUsd) : formatUY(ahorroAnualFallback),
        };
    };

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Validar que el email esté cargado antes de usar el simulador
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                setError('Por favor ingresá un email válido antes de subir tu factura.');
                e.target.value = '';
                setFile(null);
                return;
            }

            setFile(selectedFile);
            setResults(null);
            setError(null);
            setLoading(true);

            try {
                const formData = new FormData();
                formData.append('file', selectedFile);
                formData.append('email', email);

                const response = await fetch('/api/simulador', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();

                if (!response.ok || data.error) {
                    console.error('Error desde /api/simulador:', data.error);
                    setError(
                        data.error || 'No pudimos leer la factura. Por favor subila de nuevo o probá con otra imagen.',
                    );
                } else {
                    const consumo = data.consumo_12_meses_kwh;
                    setResults(buildResultsFromConsumo(consumo, data));
                }
            } catch (err) {
                console.error('Error llamando a /api/simulador:', err);
                setError(
                    'Hubo un problema procesando la factura. Por favor subila de nuevo o probá con otra imagen.',
                );
            } finally {
                setLoading(false);
            }
        } else {
            setFile(null);
            setResults(null);
            setError(null);
            setLoading(false);
        }
    };

    const handleTakePhoto = () => {
        // Por ahora solo UI, la lógica se agregará después
        alert('Funcionalidad de foto próximamente');
    };

    return (
        <div className="simulator__section" style={{padding: '60px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-8 mx-auto">
                        <div className="simulator__content text-center">
                            {/* Título principal */}
                            <div className="service__one-title t-center" style={{marginBottom: '40px'}}>
                                <h2>Simulá tu ahorro con energía solar</h2>
                                <div style={{width: '100px', height: '3px', background: 'var(--primary-color-2)', margin: '15px auto 25px'}}></div>
                                <p style={{maxWidth: '700px', margin: '0 auto', fontSize: '18px', lineHeight: '28px', color: 'rgba(255, 255, 255, 0.8)'}}>
                                    Descubrí cuánto podrías ahorrar y cuál sería la inversión estimada a partir de tu factura eléctrica.
                                </p>
                            </div>

                            {/* Bajada */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(249, 94, 25, 0.2)',
                                borderRadius: '12px',
                                padding: '35px',
                                marginBottom: '40px',
                                textAlign: 'left'
                            }}>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '26px',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    marginBottom: '20px'
                                }}>
                                    <strong style={{color: 'var(--primary-color-2)'}}>Subí una factura de UTE en imagen o foto</strong> —o sacala ahora desde tu celular—
                                    y te mostramos una estimación clara de:
                                </p>
                                
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                        {[
                                        'Inversión necesaria',
                                        'Plazo de repago',
                                        'ROI',
                                        'Ahorro anual estimado'
                                    ].map((item, index) => (
                                        <li key={index} style={{
                                            fontSize: '16px',
                                            lineHeight: '32px',
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            paddingLeft: '25px',
                                            position: 'relative',
                                            marginBottom: '10px'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--primary-color-2)',
                                                fontWeight: 'bold',
                                                fontSize: '20px'
                                            }}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                
                                <p style={{
                                    fontSize: '14px',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    marginTop: '20px',
                                marginBottom: 0,
                                    fontStyle: 'italic'
                                }}>
                                    Sin compromiso. En pocos pasos.
                                </p>
                            </div>

                            {/* Campo de email obligatorio */}
                            <div style={{
                                maxWidth: '500px',
                                margin: '0 auto 30px',
                                textAlign: 'left'
                            }}>
                                <label style={{
                                    display: 'block',
                                    fontSize: '14px',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    marginBottom: '8px',
                                    fontWeight: 500
                                }}>
                                    Tu email (obligatorio para usar el simulador)
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) setError(null);
                                    }}
                                    required
                                    placeholder="tu@correo.com"
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        background: 'rgba(0, 0, 0, 0.4)',
                                        color: 'var(--text-white)',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                />
                                <p style={{
                                    fontSize: '12px',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    marginTop: '6px',
                                    marginBottom: 0
                                }}>
                                    Usamos este correo para asociar tu simulación y enviar la factura a nuestro equipo.
                                </p>
                            </div>

                            {/* Botones de acción */}
                            <div style={{
                                display: 'flex',
                                gap: '20px',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginBottom: '25px'
                            }}>
                                {/* Botón Subir factura */}
                                <label style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '16px 32px',
                                    cursor: 'pointer',
                                    minWidth: '200px',
                                    background: 'var(--primary-color-2)',
                                    color: 'var(--text-white)',
                                    borderRadius: '8px',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    border: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#e04e0f';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--primary-color-2)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                    <input
                                        type="file"
                                        accept="image/*,application/pdf"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                    <i className="fa-regular fa-upload" style={{marginRight: '10px'}}></i>
                                    Subir factura
                                </label>

                                {/* Botón Sacar foto */}
                                <button
                                    onClick={handleTakePhoto}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '16px 32px',
                                        minWidth: '200px',
                                        border: '2px solid var(--primary-color-2)',
                                        background: 'transparent',
                                        color: 'var(--primary-color-2)',
                                        borderRadius: '8px',
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--primary-color-2)';
                                        e.currentTarget.style.color = 'var(--text-white)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = 'var(--primary-color-2)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <i className="fa-regular fa-camera" style={{marginRight: '10px'}}></i>
                                    Sacar foto ahora
                                </button>
                            </div>

                            {/* Texto de ayuda */}
                            <p style={{
                                fontSize: '14px',
                                color: 'rgba(255, 255, 255, 0.6)',
                                marginTop: '20px',
                                marginBottom: 0
                            }}>
                                Aceptamos imágenes (JPG o PNG), PDFs de la factura o foto tomada en el momento.<br />
                                Solo necesitamos que se vea el consumo (kWh) y los datos principales.
                            </p>

                            {/* Loading */}
                            {loading && (
                                <div style={{
                                    marginTop: '40px',
                                    padding: '60px 40px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        border: '4px solid rgba(249, 94, 25, 0.2)',
                                        borderTop: '4px solid var(--primary-color-2)',
                                        borderRadius: '50%',
                                        margin: '0 auto 30px',
                                        animation: 'spin 1s linear infinite'
                                    }}></div>
                                    <h3 style={{
                                        fontSize: '24px',
                                        fontWeight: '600',
                                        color: 'var(--text-white)',
                                        marginBottom: '10px'
                                    }}>
                                        Analizando tu factura...
                                    </h3>
                                    <p style={{
                                        fontSize: '16px',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        marginBottom: '20px'
                                    }}>
                                        Estamos calculando tu ahorro potencial
                                    </p>
                                    {file && (
                                        <p style={{
                                            fontSize: '14px',
                                            color: 'rgba(255, 255, 255, 0.5)',
                                            fontStyle: 'italic'
                                        }}>
                                            Archivo: {file.name}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Error: pedir volver a subir */}
                            {error && !loading && (
                                <div style={{
                                    marginTop: '40px',
                                    padding: '35px 30px',
                                    background: 'rgba(200, 60, 40, 0.1)',
                                    border: '2px solid rgba(220, 80, 60, 0.4)',
                                    borderRadius: '16px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        background: 'rgba(220, 80, 60, 0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        fontSize: '28px',
                                        color: '#dc5040'
                                    }}>
                                        <i className="fa-regular fa-circle-exclamation"></i>
                                    </div>
                                    <h3 style={{
                                        fontSize: '22px',
                                        fontWeight: '600',
                                        color: 'var(--text-white)',
                                        marginBottom: '12px'
                                    }}>
                                        No pudimos leer tu factura
                                    </h3>
                                    <p style={{
                                        fontSize: '16px',
                                        color: 'rgba(255, 255, 255, 0.85)',
                                        marginBottom: '20px',
                                        lineHeight: '1.5'
                                    }}>
                                        {error}
                                    </p>
                                    <p style={{
                                        fontSize: '15px',
                                        color: 'var(--primary-color-2)',
                                        fontWeight: '600',
                                        marginBottom: 0
                                    }}>
                                        Subí la factura de nuevo o probá con otra imagen
                                    </p>
                                </div>
                            )}

                            {/* Resultados */}
                            {results && !loading && (
                                <div style={{
                                    marginTop: '40px',
                                    padding: '35px 30px',
                                    background: 'linear-gradient(135deg, rgba(249, 94, 25, 0.1) 0%, rgba(249, 94, 25, 0.05) 100%)',
                                    border: '2px solid rgba(249, 94, 25, 0.3)',
                                    borderRadius: '16px',
                                    boxShadow: '0 10px 40px rgba(249, 94, 25, 0.2)'
                                }}>
                                    <div style={{
                                        textAlign: 'center',
                                        marginBottom: '30px'
                                    }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            background: 'var(--primary-color-2)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 15px',
                                            fontSize: '28px',
                                            color: 'var(--text-white)',
                                            boxShadow: '0 8px 25px rgba(249, 94, 25, 0.4)'
                                        }}>
                                            <i className="fa-regular fa-check-circle"></i>
                                        </div>
                                        <h3 style={{
                                            fontSize: '28px',
                                            fontWeight: '700',
                                            color: 'var(--text-white)',
                                            marginBottom: '8px'
                                        }}>
                                            ¡Tu estimación está lista!
                                        </h3>
                                        <p style={{
                                            fontSize: '15px',
                                            color: 'rgba(255, 255, 255, 0.8)'
                                        }}>
                                            Basado en tu consumo actual
                                        </p>
                                    </div>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                                        gap: '20px',
                                        marginBottom: '25px'
                                    }}>
                                        {/* Inversión necesaria */}
                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(249, 94, 25, 0.2)',
                                            borderRadius: '12px',
                                            padding: '25px 20px',
                                            textAlign: 'center',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <div style={{
                                                fontSize: '28px',
                                                color: 'var(--primary-color-2)',
                                                marginBottom: '12px'
                                            }}>
                                                <i className="fa-regular fa-dollar-sign"></i>
                                            </div>
                                            <div style={{
                                                fontSize: '36px',
                                                fontWeight: '700',
                                                color: 'var(--text-white)',
                                                marginBottom: '8px',
                                                lineHeight: '1'
                                            }}>
                                                {results.inversion}
                                            </div>
                                            <div style={{
                                                fontSize: '14px',
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                fontWeight: '500'
                                            }}>
                                                Inversión necesaria (USD) + IVA
                                            </div>
                                        </div>

                                        {/* Plazo de repago (años) */}
                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(249, 94, 25, 0.2)',
                                            borderRadius: '12px',
                                            padding: '25px 20px',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '28px',
                                                color: 'var(--primary-color-2)',
                                                marginBottom: '12px'
                                            }}>
                                                <i className="fa-regular fa-clock"></i>
                                            </div>
                                            <div style={{
                                                fontSize: '36px',
                                                fontWeight: '700',
                                                color: 'var(--text-white)',
                                                marginBottom: '8px',
                                                lineHeight: '1'
                                            }}>
                                                {results.tiempoRecupero}
                                            </div>
                                            <div style={{
                                                fontSize: '14px',
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                fontWeight: '500'
                                            }}>
                                                Plazo de repago (años)
                                            </div>
                                        </div>

                                        {/* ROI % */}
                                        {results.roiPct != null && (
                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(249, 94, 25, 0.2)',
                                            borderRadius: '12px',
                                            padding: '25px 20px',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '28px',
                                                color: 'var(--primary-color-2)',
                                                marginBottom: '12px'
                                            }}>
                                                <i className="fa-regular fa-percent"></i>
                                            </div>
                                            <div style={{
                                                fontSize: '36px',
                                                fontWeight: '700',
                                                color: 'var(--text-white)',
                                                marginBottom: '8px',
                                                lineHeight: '1'
                                            }}>
                                                {results.roiPct}
                                            </div>
                                            <div style={{
                                                fontSize: '14px',
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                fontWeight: '500'
                                            }}>
                                                ROI
                                            </div>
                                        </div>
                                        )}

                                    </div>

                                    {/* Información adicional */}
                                    <div style={{
                                        marginTop: '25px',
                                        paddingTop: '25px',
                                        borderTop: '1px solid rgba(249, 94, 25, 0.2)',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{
                                            fontSize: '42px',
                                            fontWeight: '700',
                                            color: 'var(--primary-color-2)',
                                            marginBottom: '10px'
                                        }}>
                                            {results.ahorroAnual}
                                        </div>
                                        <div style={{
                                            fontSize: '16px',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontWeight: '500'
                                        }}>
                                            Ahorro anual estimado (USD)
                                        </div>
                                    </div>

                                    {/* Botón de contacto */}
                                    <div style={{
                                        textAlign: 'center',
                                        marginTop: '30px'
                                    }}>
                                        <a href="/contact" className="btn-one" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '16px 35px',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            textDecoration: 'none'
                                        }}>
                                            <i className="fa-regular fa-phone" style={{marginRight: '10px'}}></i>
                                            Consultar ahora
                                        </a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simulator;
