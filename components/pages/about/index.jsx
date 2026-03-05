"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="Sobre Nosotros" />
        <HeaderOne />
        <BreadCrumb title="Sobre Nosotros" innerTitle="Sobre la Empresa" />
        <AboutMain />
        <FooterOne />        
        <ScrollToTop />
      </>
    );
};

export default AboutUs;