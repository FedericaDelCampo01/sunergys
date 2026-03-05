"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import Link from "next/link";
import FormArea from "./form";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contacto" />        
            <HeaderOne />
            <BreadCrumb title="Contacto" innerTitle="Contáctanos" />
            <div className="contact__one section-padding-three">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: '25px',
                                alignItems: 'stretch'
                            }}>
                                {/* Teléfono */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '20px',
                                    padding: '25px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(249, 94, 25, 0.2)',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--primary-color-2)';
                                    e.currentTarget.style.background = 'rgba(249, 94, 25, 0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(249, 94, 25, 0.2)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        minWidth: '50px',
                                        background: 'var(--primary-color-2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px',
                                        color: 'var(--text-white)',
                                        flexShrink: 0,
                                        lineHeight: '1'
                                    }}>
                                        <i className="flaticon-telephone-call" style={{display: 'block'}}></i>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            marginBottom: '6px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Teléfono
                                        </div>
                                        <h6 style={{
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: 'var(--text-white)',
                                            margin: 0,
                                            lineHeight: '1.4'
                                        }}>
                                            <Link href="tel:+598095898008" style={{color: 'inherit', textDecoration: 'none'}}>+598 095 898 008</Link>
                                        </h6>
                                    </div>
                                </div>

                                {/* Correo electrónico */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '20px',
                                    padding: '25px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(249, 94, 25, 0.2)',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--primary-color-2)';
                                    e.currentTarget.style.background = 'rgba(249, 94, 25, 0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(249, 94, 25, 0.2)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        minWidth: '50px',
                                        background: 'var(--primary-color-2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px',
                                        color: 'var(--text-white)',
                                        flexShrink: 0,
                                        lineHeight: '1'
                                    }}>
                                        <i className="flaticon-mail" style={{display: 'block'}}></i>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            marginBottom: '6px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Correo electrónico
                                        </div>
                                        <h6 style={{
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: 'var(--text-white)',
                                            margin: 0,
                                            lineHeight: '1.4'
                                        }}>
                                            <Link href="mailto:contacto@sunergys.com" style={{color: 'inherit', textDecoration: 'none'}}>contacto@sunergys.com</Link>
                                        </h6>
                                    </div>
                                </div>

                                {/* Ubicación */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '20px',
                                    padding: '25px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(249, 94, 25, 0.2)',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--primary-color-2)';
                                    e.currentTarget.style.background = 'rgba(249, 94, 25, 0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(249, 94, 25, 0.2)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        minWidth: '50px',
                                        background: 'var(--primary-color-2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px',
                                        color: 'var(--text-white)',
                                        flexShrink: 0,
                                        lineHeight: '1'
                                    }}>
                                        <i className="flaticon-location-1" style={{display: 'block'}}></i>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            marginBottom: '6px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Ubicación
                                        </div>
                                        <h6 style={{
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: 'var(--text-white)',
                                            margin: 0,
                                            lineHeight: '1.4'
                                        }}>
                                            <Link href="https://google.com/maps" style={{color: 'inherit', textDecoration: 'none'}}>Havre 2210, Montevideo, Uruguay</Link>
                                        </h6>
                                    </div>
                                </div>

                                {/* Horario */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '20px',
                                    padding: '25px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(249, 94, 25, 0.2)',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--primary-color-2)';
                                    e.currentTarget.style.background = 'rgba(249, 94, 25, 0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(249, 94, 25, 0.2)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        minWidth: '50px',
                                        background: 'var(--primary-color-2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px',
                                        color: 'var(--text-white)',
                                        flexShrink: 0,
                                        lineHeight: '1'
                                    }}>
                                        <i className="flaticon-wall-clock" style={{display: 'block'}}></i>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            marginBottom: '6px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Horario de atención
                                        </div>
                                        <h6 style={{
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: 'var(--text-white)',
                                            margin: 0,
                                            lineHeight: '1.4'
                                        }}>
                                            Lun-Vie 09:00 - 17:00
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__form section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 lg-mb-25">
                            <div className="contact__form-area">
                                <h3>Ponte en contacto</h3>
                                <p style={{
                                    fontSize: '14px',
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    marginTop: '8px',
                                    marginBottom: '20px'
                                }}>
                                    Cargar Formulario Web para obtener su cotización sin costo
                                </p>
                                <FormArea />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact__one-map">
                                <iframe src="https://www.google.com/maps?q=Havre+2210,+Montevideo,+Uruguay&output=embed" loading="lazy" allowFullScreen style={{width: '100%', height: '100%', border: 0}}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;