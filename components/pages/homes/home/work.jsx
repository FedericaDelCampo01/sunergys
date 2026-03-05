
import Link from "next/link";
import image1 from "../../../../public/assets/img/sunergys/process/process-01.png";
import image2 from "../../../../public/assets/img/sunergys/process/process-02.png";
import image3 from "../../../../public/assets/img/sunergys/process/process-03.png";
import image4 from "../../../../public/assets/img/sunergys/process/process-04.png";

const WorkArea = () => {
    return (
        <>
            <div className="work__process section-padding">
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-xl-12">
                            <div className="work__process-title t-center">
                                <span className="subtitle-one">Cómo trabajamos</span>
                                <h2>Nuestro proceso de trabajo</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 dark_image">
                        <div className="col-lg-3 col-sm-6 lg-mb-45">
                            <div className="work__process-item">
                                <p><span>Paso 01</span></p>
                                <img src={image1.src} alt="image" />
                                <h6>Diagnóstico Inicial</h6>
                                <p className="des">Evaluamos tus necesidades y el potencial solar de tu espacio.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-mb-45">
                            <div className="work__process-item">
                                <p><span>Paso 02</span></p>
                                <img src={image2.src} alt="image" />
                                <h6>Propuesta Personalizada</h6>
                                <p className="des">Diseñamos una solución adaptada a tus requerimientos.</p>
                            </div>					
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-mb-45">
                            <div className="work__process-item">
                                <p><span>Paso 03</span></p>
                                <img src={image3.src} alt="image" />
                                <h6>Instalación Profesional</h6>
                                <p className="des">Implementamos tu sistema con los más altos estándares.</p>
                            </div>					
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="work__process-item">
                                <p><span>Paso 04</span></p>
                                <img src={image4.src} alt="image" />
                                <h6>Seguimiento Continuo</h6>
                                <p className="des">Brindamos soporte técnico y mantenimiento permanente.</p>
                            </div>						
                        </div>
                    </div>
                </div>
            </div>
        </>      
    );
};

export default WorkArea;