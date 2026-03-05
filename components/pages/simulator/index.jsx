"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import Simulator from "../homes/home/simulator";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";

const SimulatorPage = () => {
    return (
        <>
            <SEO pageTitle="Calculá tu Ahorro" />
            <HeaderOne />
            <BreadCrumb title="Calculá tu Ahorro" innerTitle="Calculá tu Ahorro" image="services" />
            <Simulator />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default SimulatorPage;
