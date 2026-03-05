import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo.png";
import ctaBg from "../../../public/assets/img/shape/shape-7.png";
import ctaFooterImage from "../../../public/assets/img/sunergys/portfolio/chacra-camino-medellin-main.jpg";
import footerBg from "../../../public/assets/img/shape/shape-13.png";

const FooterOne = () => {
    return (
        <>
        <div className="footer__cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer__cta-area" style={{backgroundImage: `url(${ctaBg.src})`}}>
                            <div className="row al-center">
                                <div className="col-lg-9">
                                    <div className="footer__cta-area-left">
                                        <h3>¡Aprovecha el sol, instala energía solar hoy!</h3>
                                        <div className="footer__cta-area-left-btn lg-jc-center">
                                            <Link className="btn-one" href="/request-quote">Comienza hoy</Link>
                                            <div className="footer__cta-area-left-btn-tel author">
                                                <i className="flaticon-phone-call"></i>
                                                <div className="info">
                                                    <span>¿Necesitas ayuda?</span>
                                                    <h6><Link href="tel:+598095898008">+598 095 898 008</Link></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 lg-mt-25">
                                    <div className="footer__cta-area-right t-right lg-t-center">
                                        <div className="footer__cta-area-right-image dark_image">
                                            <img src={ctaFooterImage.src} alt="Energía solar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__area" style={{backgroundImage: `url(${footerBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5 lg-mb-25">
                            <div className="footer__area-widget">
                            <div className="logo">
                                <Link href="/"><img src={logo.src} alt="Logo-image" /></Link>
                            </div>
                            <div className="footer__area-widget-company">
                                <p><Link href="https://google.com/maps">Havre 2210, Montevideo, Uruguay</Link></p>
                                <div className="social__icon mt-60">
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7">
                        <div className="row">
                            <div className="col-sm-6 col-12 sm-mt-25">
                                <div className="footer__area-widget">
                                    <h6>Teléfono</h6>
                                    <div className="footer__area-widget-info mb-35">
                                        <p><Link href="tel:+598095898008">+598 095 898 008</Link></p>
                                    </div>
                                    <h6>Correo</h6>
                                    <div className="footer__area-widget-info">
                                        <p><Link href="mailto:contacto@sunergys.com">contacto@sunergys.com</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-12 sm-mt-25">
                                <div className="footer__area-widget">
                                    <h6>Recursos</h6>
                                    <div className="footer-widget-menu">
                                        <ul>
                                            <li><Link href="/about-us">Sobre Nosotros</Link></li>
                                            <li><Link href="/testimonial">Testimonios</Link></li>
                                            <li><Link href="/#why-us">Por Qué Elegirnos</Link></li>
                                            <li><Link href="/contact">Contáctanos</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__area lg-t-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Copyright 2024 - Todos los derechos reservados por Sunergys</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright__area-menu t-right lg-t-center lg-mt-5">
                                <ul>
                                    <li><Link href="/contact-two">Política de Privacidad</Link></li>
                                    <li><Link href="/contact-two">Términos y Condiciones</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>		
        </div>     
        </>
    );
};

export default FooterOne;