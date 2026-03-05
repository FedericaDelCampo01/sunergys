import React from 'react';
// Imágenes por defecto (para proyectos que aún no tienen sus propias imágenes)
import defaultImage1 from '../../../../public/assets/img/portfolio/portfolio-7.jpg';
import defaultImage2 from '../../../../public/assets/img/portfolio/portfolio-8.jpg';
import defaultImage3 from '../../../../public/assets/img/portfolio/portfolio-9.jpg';

const PortfolioDetailsMain = ({singleData}) => {
    // Usar las imágenes de la galería del proyecto si existen, sino usar las por defecto
    const galleryImages = singleData.galleryImages && singleData.galleryImages.length >= 3 
        ? singleData.galleryImages 
        : [defaultImage1, defaultImage2, defaultImage3];
    return (
        <div className="portfolio__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="portfolio__details-image dark_image">
                            <img src={singleData.image.src} alt="portfolio" />
                            <div className="portfolio__details-meta">
                                <div className="portfolio__details-meta-item">
                                    <span>Categoría :</span>
                                    <h6>{singleData.category || singleData.title}</h6>
                                </div>
                                <div className="portfolio__details-meta-item">
                                    <span>Ubicación :</span>
                                    <h6>{singleData.location || 'Uruguay'}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>El Proyecto</h3>
                    </div>
                    <div className="col-lg-8">
                        <p>{singleData.description || 'Descripción del proyecto no disponible.'}</p>
                    </div>
                </div>
                <div className="row mt-30 dark_image">
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src={galleryImages[0].src} alt="portfolio" />
                    </div>
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src={galleryImages[1].src} alt="portfolio" />
                    </div>
                    <div className="col-sm-4">
                        <img className="img__full" src={galleryImages[2].src} alt="portfolio" />
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>Desafíos</h3>
                    </div>
                    <div className="col-lg-8">
                        {singleData.challenges && singleData.challenges.length > 0 ? (
                            <ul className="portfolio__details-challenges">
                                {singleData.challenges.map((challenge, index) => (
                                    <li key={index}>{challenge}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Información de desafíos no disponible.</p>
                        )}
                    </div>
                </div>
                <div className="row mt-20">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>La Solución</h3>
                    </div>
                    <div className="col-lg-8">
                        <p>{singleData.solution || 'Información de la solución no disponible.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsMain;