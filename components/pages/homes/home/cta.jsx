import React from 'react';
import Link from 'next/link';
import ctaBg from "../../../../public/assets/img/shape/shape-6.png";

const CtaArea = () => {
    return (        
        <div className="cta__one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="cta__one-area" style={{backgroundImage: `url(${ctaBg.src})`}}>
                            <div className="row align-items-center">
                                <div className="col-lg-7 lg-mb-25">
                                    <div className="cta__one-title lg-t-center">
                                        <h3>¡Aprovecha el Sol<br/>¡Instala Energía Solar Hoy!</h3>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="cta__one-contact lg-jc-center">
                                        <div className="cta__one-contact-icon">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <div className="cta__one-contact-info">
                                            <span>Contacto gratuito 24/7</span>
                                            <h6><Link href="tel:+598095898008">+598 095 898 008</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaArea;