import React from 'react';
import Link from 'next/link';
import serviceBg from "../../../../public/assets/img/shape/shape-9.png";

const Services = () => {
    // Datos para "Cómo trabajamos"
    const howWeWorkData = [
        {
            icon: <i className="flaticon-solar-panel-3"></i>,
            title: 'Consultoría',
            des: 'Analizamos tu consumo y definimos la mejor solución solar.',
        },
        {
            icon: <i className="flaticon-maintenance"></i>,
            title: 'Diseño e instalación fotovoltaica',
            des: 'Implementamos sistemas a medida, listos para generar desde el día uno.',
        },
        {
            icon: <i className="flaticon-renewable-energy"></i>,
            title: 'Infraestructura eléctrica',
            des: 'Adaptamos y ejecutamos las instalaciones necesarias para un funcionamiento seguro y eficiente.',
        },
    ];

    return (
        <div className="service__one" style={{backgroundImage: `url(${serviceBg.src})`}}>
            <div className="container">
                <div className="row mb-35">
                    <div className="col-xl-12">
                        <div className="service__one-title t-center">
                            <span className="subtitle-one">Pioneros en la innovación</span>
                            <h2>Nuestros servicios</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {howWeWorkData?.map((data, id) => (
                        <div className="col-lg-4 col-md-6" key={id} style={{display: 'flex'}}>
                            <div className="how-we-work-item" style={{
                                position: 'relative',
                                padding: '40px 30px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(249, 94, 25, 0.2)',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                cursor: 'default',
                                width: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary-color-2)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(249, 94, 25, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(249, 94, 25, 0.2)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '60px',
                                    height: '60px',
                                    background: 'var(--primary-color-2)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    fontWeight: '700',
                                    color: 'var(--text-white)',
                                    boxShadow: '0 4px 15px rgba(249, 94, 25, 0.3)'
                                }}>
                                    {id + 1}
                                </div>
                                <div style={{
                                    marginTop: '30px',
                                    marginBottom: '20px',
                                    fontSize: '48px',
                                    color: 'var(--primary-color-2)'
                                }}>
                                    {data.icon}
                                </div>
                                <h6 style={{
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    marginBottom: '15px',
                                    color: 'var(--text-white)'
                                }}>
                                    {data.title}
                                </h6>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    margin: 0
                                }}>
                                    {data.des}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;