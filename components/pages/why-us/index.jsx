"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";
import ChooseUs from "../homes/home/choose-us";
import WorkArea from "../homes/home/work";
import Testimonial from "../homes/home/testimonial";
import bgImage from "../../../public/assets/img/shape/shape-9.png";

const WhyUsPage = () => {
  return (
    <>
      <SEO pageTitle="Por Qué Elegirnos | " />
      <HeaderOne />
      <BreadCrumb title="Por Qué Elegirnos" innerTitle="Por Qué Elegirnos" image="whyUs" />
      <ChooseUs />
      <WorkArea />
      <div className="testimonial__one section-padding" style={{ backgroundImage: `url(${bgImage.src})` }}>
        <Testimonial />
      </div>
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default WhyUsPage;


