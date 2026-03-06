"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import About from "./about";
import Simulator from "./simulator";
import CtaSimulator from "./cta-simulator";
import ChooseUs from "./choose-us";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import FooterOne from "@/components/layout/footers/footer-one";
import BannerOne from "./banner";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import bgImage from "../../../../public/assets/img/shape/shape-9.png";

const HomeOne = () => {
    return (
        <div>
            <SEO pageTitle='Solar Energy' />
            <HeaderOne />
            <BannerOne />
            <CtaSimulator />
            <About />
            <Simulator />
            <ChooseUs />
            <Portfolio />
            <div className="testimonial__one section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
                <Testimonial />
            </div>
            <FooterOne />
            <ScrollToTop />
        </div>
    );
};

export default HomeOne;