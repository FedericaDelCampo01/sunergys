import Link from 'next/link';
import shape from "../../../../public/assets/img/shape/shape-5.png";

const ServicesMain = () => {
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

    // Datos para "Soluciones según tu necesidad"
    const solutionsData = [
        {
            icon: <i className="flaticon-solar-panel-3"></i>,
            title: 'Residencial',
            subtitle: 'Energía limpia para tu hogar',
            des: 'Sistemas diseñados para reducir la factura eléctrica, aumentar la autonomía energética y acompañar el crecimiento del consumo familiar con una solución confiable y de bajo mantenimiento.',
        },
        {
            icon: <i className="flaticon-maintenance"></i>,
            title: 'Empresarial',
            subtitle: 'Eficiencia energética para tu operación',
            des: 'Instalaciones orientadas a optimizar costos, mejorar la previsibilidad del gasto energético y fortalecer la sostenibilidad del negocio sin afectar la continuidad productiva.',
        },
        {
            icon: <i className="flaticon-renewable-energy"></i>,
            title: 'Rural',
            subtitle: 'Energía donde más la necesitás',
            des: 'Soluciones robustas para bombeo, riego, maquinaria o instalaciones aisladas, pensadas para entornos exigentes donde la disponibilidad y la estabilidad energética son clave.',
        },
    ];

    return (
        <>
            {/* Sección: Cómo trabajamos */}
            <div className="service-one section-padding-three">
                <div className="container">
                    <div className="row mb-35">
                        <div className="col-xl-12">
                            <div className="service__one-title t-center">
                                <h2>Cómo trabajamos</h2>
                                <div style={{width: '100px', height: '3px', background: 'var(--primary-color-2)', margin: '15px auto 25px'}}></div>
                                <p style={{maxWidth: '800px', margin: '20px auto 0', fontSize: '18px', lineHeight: '28px', marginBottom: '40px'}}>
                                    Acompañamos todo el proceso, desde el análisis inicial hasta la puesta en marcha, con un enfoque llave en mano que simplifica cada etapa y garantiza resultados confiables.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4" style={{marginTop: '20px'}}>
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
                                    cursor: 'default'
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

            {/* Sección: Soluciones según tu necesidad */}
            <div className="service-one section-padding-three">
                <div className="container">
                    <div className="row mb-35">
                        <div className="col-xl-12">
                            <div className="service__one-title t-center">
                                <h2>Soluciones según tu necesidad</h2>
                                <div style={{width: '100px', height: '3px', background: 'var(--primary-color-2)', margin: '15px auto 25px'}}></div>
                                <p style={{maxWidth: '800px', margin: '20px auto 0', fontSize: '18px', lineHeight: '28px'}}>
                                    Desarrollamos soluciones adaptadas a cada tipo de proyecto, considerando el perfil de consumo, la operativa y el entorno para lograr la máxima eficiencia energética y económica.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        {solutionsData?.map((data, id) => (
                            <div className="col-lg-4 col-md-6" key={id} style={{display: 'flex'}}>
                                <div className="service__one-item" style={{
                                    backgroundImage: `url(${shape.src})`,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--primary-color-2)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(249, 94, 25, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                    <div className="service__one-item-icon">
                                        {data.icon}
                                    </div>
                                    <div className="service__one-item-content" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6>{data.title}</h6>
                                        <p style={{fontWeight: '600', marginBottom: '10px', color: 'var(--primary-color-2)'}}>{data.subtitle}</p>
                                        <p style={{flex: 1}}>{data.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesMain;
