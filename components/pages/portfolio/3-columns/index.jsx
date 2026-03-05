"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ThreeColumns from "./three-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioThreeColumns = () => {
    return (
        <>
            <SEO pageTitle='Nuestros Proyectos' />
            <HeaderOne />
            <BreadCrumb title="Nuestros Proyectos" innerTitle="Nuestros Proyectos" />
            <ThreeColumns />        
            <FooterOne />          
            <ScrollToTop />
        </>
    );
};

export default PortfolioThreeColumns;