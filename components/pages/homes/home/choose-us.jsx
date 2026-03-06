import Link from 'next/link';
import React from 'react';
import { chooseUsImages } from "@/components/data/images";
import { videos } from "@/lib/videos";

const ChooseUs = () => {
    const videoUrl = videos.chooseUs;
    
    return (
        <>
            <div className="choose__us section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="choose__us-area">
                                <div className="choose__us-area-title">
                                    <span className="subtitle-one">¿Por Qué Elegirnos?</span>
                                    <h2>Sunergys, tu socio ideal en energía solar</h2>
                                    <p>La confianza no es solo una palabra para nosotros; es nuestro compromiso. Los clientes nos eligen porque ofrecemos calidad, precios competitivos y atención personalizada.</p>
                                </div>
                                <div className="choose__us-area-list">
                                    <div className="choose__us-area-list-item">
                                        <i className="flaticon-deal"></i>
                                        <div className="choose__us-area-list-item-bottom">
                                            <h6>Precios competitivos</h6>									
                                        </div>
                                    </div>
                                    <div className="choose__us-area-list-item">
                                        <i className="flaticon-talk"></i>
                                        <div className="choose__us-area-list-item-bottom">
                                            <h6>Atención personalizada</h6>									
                                        </div>
                                    </div>
                                    <div className="choose__us-area-list-item">
                                        <i className="flaticon-global-shipping"></i>
                                        <div className="choose__us-area-list-item-bottom">
                                            <h6>Productos de calidad</h6>									
                                        </div>
                                    </div>
                                </div>
                                <div className="choose__us-area-bottom">
                                    <Link className="btn-one" href="/contact">Conoce más</Link>
                                    <div className="choose__us-area-bottom-tel sm-mt-25">
                                        <h6>¿Tienes alguna pregunta?<br/>Contáctanos al <Link href="tel:+598095898008">+598 095 898 008</Link></h6>
                                    </div>
                                </div>
                                <div className="choose__us-area-image dark_image">
                                    {videoUrl ? (
                                        <video 
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline
                                            className="choose__us-video"
                                        >
                                            <source src={videoUrl} type="video/mp4" />
                                        </video>
                                    ) : chooseUsImages.main ? (
                                        <img src={chooseUsImages.main.src} alt="image" />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default ChooseUs;