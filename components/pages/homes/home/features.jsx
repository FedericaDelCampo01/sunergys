import bgImage from "../../../../public/assets/img/shape/shape-10.png";
import avatar from "../../../../public/assets/img/avatar/user.png";

const Features = () => {
    return (
        <>
        <div className="features__one section-padding">
            <div className="container">
                <div className="row al-center features__one-bg" style={{backgroundImage: `url(${bgImage.src})`}}>
                    <div className="col-lg-5 lg-mb-25">
                        <div className="features__one-left">
                            <h4>Tu Socio Confiable en Energía</h4>
                            <div className="features__one-left-client lg-jc-center dark_image">
                                <img src={avatar.src} alt="client-image" />
                                <h6>12,000+ Reseñas de Clientes</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="features__one-right lg-jc-center">
                            <div className="features__one-right-item">
                                <div className="features__one-right-item-icon">
                                    <i className="flaticon-profit"></i>
                                </div>
                                <div className="features__one-right-item-content">
                                    <h6>Ahorro Financiero</h6>
                                    <p>Reduce significativamente tus costos energéticos con soluciones solares eficientes y rentables.</p>
                                </div>
                            </div>
                            <div className="features__one-right-item">
                                <div className="features__one-right-item-icon">
                                    <i className="flaticon-best-customer-experience"></i>
                                </div>
                                <div className="features__one-right-item-content">
                                    <h6>Amplia Experiencia</h6>
                                    <p>Años de experiencia en instalaciones solares con los más altos estándares de calidad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default Features;