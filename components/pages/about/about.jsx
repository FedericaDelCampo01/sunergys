"use client";
import { useEffect, useRef, useState } from "react";
import Team from "../homes/home/team";

// Hook personalizado para detectar cuando un elemento entra en el viewport
const useScrollReveal = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Opcional: desconectar después de la primera vez
                    if (options.once !== false) {
                        observer.unobserve(element);
                    }
                } else if (options.once === false) {
                    setIsVisible(false);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px'
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return [ref, isVisible];
};

const AboutMain = () => {
    const [aboutRef, aboutVisible] = useScrollReveal();
    const [missionRef, missionVisible] = useScrollReveal();
    const [teamRef, teamVisible] = useScrollReveal();

    return (
        <>
            {/* Sección Sobre Nosotros */}
            <div className="about__section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div 
                                ref={aboutRef}
                                className="about__section-content"
                                style={{
                                    opacity: aboutVisible ? 1 : 0,
                                    transform: aboutVisible ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                                }}
                            >
                                <h2>Energía solar simple</h2>
                                <div className="about__section-divider"></div>
                                <p>En Sunergys, nos dedicamos a ofrecer soluciones solares integrales para hogares y negocios. Nuestro enfoque se centra en la atención al detalle y en proporcionar un servicio llave en mano que simplifique el proceso para nuestros clientes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Nuestra Misión */}
            <div className="mission__section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div 
                                ref={missionRef}
                                className="mission__section-content"
                                style={{
                                    opacity: missionVisible ? 1 : 0,
                                    transform: missionVisible ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
                                }}
                            >
                                <h2>Nuestra Misión</h2>
                                <div className="mission__section-divider"></div>
                                <p>En Sunergys combinamos años de experiencia con un <strong>compromiso inquebrantable hacia la sostenibilidad</strong>. Ofrecemos soluciones solares personalizadas que reducen costos, maximizan eficiencia y cuidan el medio ambiente. Nuestra misión es ayudarte a transformar tu energía en un futuro más limpio y rentable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Nuestro Equipo */}
            <div className="section-padding" style={{paddingBottom: '80px'}}>
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-lg-12">
                            <div 
                                ref={teamRef}
                                className="team__section-intro"
                                style={{
                                    opacity: teamVisible ? 1 : 0,
                                    transform: teamVisible ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
                                }}
                            >
                                <h2>Nuestro Equipo</h2>
                                <div className="team__section-divider"></div>
                                <p>Nuestro equipo está compuesto por expertos en energía solar con años de trayectoria en el rubro. Nos enfocamos en poder brindarle a nuestros clientes la mejor experiencia con atención de calidad.</p>
                            </div>
                        </div>
                    </div>
                    <Team />                
                </div>
            </div>
        </>
    );
};

export default AboutMain;