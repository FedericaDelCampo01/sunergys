"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Testimonial from "../../homes/home/testimonial";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Nuestros Servicios" />
            <HeaderOne />
            <BreadCrumb title="Nuestros Servicios" innerTitle="Nuestros Servicios" image="services" />
            <ServicesMain />
            <div className="testimonial-service section-padding">
                <Testimonial />
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;