import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay} from 'swiper/modules';
import { bannerImages } from "@/components/data/images";
import bannerBg from "../../../../public/assets/img/shape/shape-3.png";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/assets/img/logo.png";

const slideControl = {
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    autoplay: {
        delay: 5500,
        reverseDirection: false,
        disableOnInteraction: false,
    },
};

const BannerOne = () => {
    return (
            <>
            <div className="banner__one">
                <Swiper modules={[EffectFade, Autoplay]} {...slideControl} >
                    <SwiperSlide>
                        <div className="banner__one-image">
                            <div className="banner__one-video-full">
                                <Image
                                    src={bannerImages.slide1}
                                    alt="Sunergys - Energía solar para tu empresa"
                                    fill
                                    priority
                                    className="banner__one-video-background"
                                />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="banner__one-content">
                                            <div className="banner__one-logo">
                                                <Image src={logo} alt="Sunergys Logo" width={200} height={80} priority />
                                            </div>
                                            <h1>Impulsando el futuro energético</h1>
                                            <div className="banner__one-content-button">
                                                <Link className="btn-one" href="/contact">Contactanos</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__one-image">
                            <div className="banner__one-video-full">
                                <Image
                                    src={bannerImages.slide2}
                                    alt="Sunergys - Soluciones solares a medida"
                                    fill
                                    priority={false}
                                    className="banner__one-video-background"
                                />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="banner__one-content">
                                            <div className="banner__one-logo">
                                                <Image src={logo} alt="Sunergys Logo" width={200} height={80} priority />
                                            </div>
                                            <h1>Energía solar para tu futuro</h1>
                                            <div className="banner__one-content-button">
                                                <Link className="btn-one" href="/contact">Contactanos</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="container">
                    <div className="row column-reverse">
                        <div className="col-xl-12">
                            <div className="banner__one-capacity">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-4 col-sm-4 sm-mb-15">
                                            <div className="banner__one-capacity-item text-center">
                                                <h3>TIR 16-22%</h3>
                                                <h6>anual</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 sm-mb-15">
                                            <div className="banner__one-capacity-item text-center">
                                                <h3>ROI &lt; 5 años</h3>
                                                <h6>retorno de inversión</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="banner__one-capacity-item text-center">
                                                <h3>100% ahorro</h3>
                                                <h6>en factura UTE</h6>
                                            </div>
                                        </div>
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

export default BannerOne;