import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import SkillBarItem from "../../common/skill-bar";
import CircleBar from "../../common/circle-bar";
import { aboutImages, videos } from "@/components/data/images";
import shape1 from "../../../../public/assets/img/shape/shape-11.png";
import shape2 from "../../../../public/assets/img/shape/shape-11-dark.png";
import shape3 from "../../../../public/assets/img/shape/shape-12.png";

const About = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };
    return (
        <>
        <div className="about__one section-padding pt-0">
            <img className="about__one-shape dark-n" src={shape1.src} alt="shape" />
            <img className="about__one-shape light-n" src={shape2.src} alt="shape" />
            <div className="container">
                <div className="row al-center">
                    <div className="col-xl-6 col-lg-5 lg-mb-25">
                        <div className="about__one-left">
                            <div className="about__one-left-image dark_image">
                                <img src={aboutImages.main.src} alt="about-image" />
                                <img className="about__one-left-image-shape" src={shape3.src} alt="shape" />
                                <div className="about__one-left-image-two">
                                    <img src={aboutImages.secondary.src} alt="about-image" />
                                </div>
                                <div className="about__one-left-image-content">
                                    <CircleBar progressBar={87} />
                                    <h6>Incremento en la eficiencia energética</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="about__one-right">
                            <div className="about__one-right-title">
                                <span className="subtitle-one">Quienes somos</span>
                                <h2>Energía solar con experiencia y pasión</h2>
                                <p>En Sunergys combinamos años de experiencia con un compromiso inquebrantable hacia la sostenibilidad. Ofrecemos soluciones solares personalizadas que reducen costos, maximizan eficiencia y cuidan el medio ambiente.</p>
                            </div>
                            <div className="about__one-right-skill">
                                <div className="skill__area-item">
                                    <div className="skill__area-item-content">
                                        <h6>Costos asociados a energía ahorrados</h6>
                                    </div>
                                    <div className="skill__area-item-inner">
                                        <SkillBarItem countUp={76} />
                                    </div>
                                </div>
                            </div>
                            <div className="about__one-right-bottom">
                                <div className="about__one-right-bottom-btn">
                                    <Link className="btn-one" href="/contact">Contactar ahora</Link>
                                </div>
                                <div className="about__one-right-bottom-video">
                                    <div className="about__one-right-bottom-video-icon video video-pulse">
                                        <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                    </div>
                                    <span>Ver video</span>								
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId={videos.about} onClose={() => setOpenVideo(false)} />
        </>
    );
};

export default About;