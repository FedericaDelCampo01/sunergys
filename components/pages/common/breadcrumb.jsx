import Link from 'next/link';
import { breadcrumbImages } from "@/components/data/images";

const BreadCrumb = ({title, innerTitle, image}) => {
    const breadcrumbImage = image ? breadcrumbImages[image] || breadcrumbImages.default : breadcrumbImages.default;
    const backgroundPosition = image === "whyUs" ? "center 20%" : "center";
    return (
        <div className={`breadcrumb__area ${image === "whyUs" ? "breadcrumb__area-top" : ""}`} style={{backgroundImage: `url(${breadcrumbImage.src})`, backgroundPosition: backgroundPosition}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb__area-content">
                            <h1>{title}</h1>
                            <ul>
                                <li><Link href="/">Inicio</Link><i className="fa-regular fa-angle-right"></i></li>
                                <li>{innerTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;