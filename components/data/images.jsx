/**
 * Configuración de imágenes de Sunergys
 * 
 * Cuando subas las imágenes a las carpetas correspondientes,
 * actualiza las rutas aquí para que se usen en toda la web.
 */

// ============================================
// BANNER PRINCIPAL (Home)
// ============================================
// Coloca tus imágenes en: public/assets/img/sunergys/banner/
// Para ahora usamos una foto de proyecto como hero principal.
import banner1 from "../../public/assets/img/sunergys/portfolio/casa-la-tahona-main.jpg";
import banner2 from "../../public/assets/img/sunergys/portfolio/casa-la-tahona-main.jpg";

export const bannerImages = {
    slide1: banner1,  // Cambiar a: import banner1 from "../../public/assets/img/sunergys/banner/banner-1.jpg";
    slide2: banner2,  // Cambiar a: import banner2 from "../../public/assets/img/sunergys/banner/banner-2.jpg";
    // slide3: banner3, // Descomentar si tienes tercera imagen
};

// ============================================
// SECCIÓN "QUIENES SOMOS" (About)
// ============================================
// Coloca tus imágenes en: public/assets/img/sunergys/about/
import about1 from "../../public/assets/img/sunergys/about/about-1.jpg";
import about2 from "../../public/assets/img/sunergys/about/about-2.jpg";
import aboutExperience from "../../public/assets/img/sunergys/about/about-experience.jpg";

export const aboutImages = {
    main: about1,      // Imagen principal (400x480) - lado izquierdo grande - HOME
    secondary: about2, // Imagen secundaria (287x280) - pequeño cuadro abajo - HOME
    experience: aboutExperience, // Imagen de la página "Sobre Nosotros" - ABOUT PAGE
};

// ============================================
// SERVICIOS
// ============================================
// Coloca tus imágenes en: public/assets/img/sunergys/services/
// Estas se usarán en la página de servicios y en las tarjetas

export const serviceImages = {
    residencial: null, // import residencial from "../../public/assets/img/sunergys/services/residencial.jpg";
    empresarial: null, // import empresarial from "../../public/assets/img/sunergys/services/empresarial.jpg";
    rural: null, // import rural from "../../public/assets/img/sunergys/services/rural.jpg";
};

// ============================================
// PORTFOLIO / PROYECTOS
// ============================================
// Coloca tus imágenes en: public/assets/img/sunergys/portfolio/
import portfolio1 from "../../public/assets/img/sunergys/portfolio/pedrosk-320.jpg";
import portfolio2 from "../../public/assets/img/sunergys/portfolio/pedrosk-325.jpg";
import portfolio3 from "../../public/assets/img/sunergys/portfolio/pedrosk-329.jpg";
import portfolio4 from "../../public/assets/img/sunergys/portfolio/pedrosk-331.jpg";
import portfolio5 from "../../public/assets/img/sunergys/portfolio/pedrosk-334.jpg";
import portfolio6 from "../../public/assets/img/sunergys/portfolio/pedrosk-335.jpg";

export const portfolioImages = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
];

// ============================================
// EQUIPO
// ============================================
// Coloca las fotos en: public/assets/img/sunergys/team/
import team1 from "../../public/assets/img/team/team-1.jpg"; // Reemplazar
import team2 from "../../public/assets/img/team/team-2.jpg"; // Reemplazar
import team3 from "../../public/assets/img/team/team-3.jpg"; // Reemplazar

export const teamImages = {
    bautista: team1, // Cambiar a: import bautista from "../../public/assets/img/sunergys/team/bautista-de-castro.jpg";
    margarita: team2, // Cambiar a: import margarita from "../../public/assets/img/sunergys/team/margarita-navarro.jpg";
    liesvy: team3, // Cambiar a: import liesvy from "../../public/assets/img/sunergys/team/liesvy-delgado.jpg";
};

// ============================================
// SECCIÓN "POR QUÉ ELEGIRNOS" (Choose Us)
// ============================================
// Opción 1: Imagen (comentado porque estamos usando video)
// Si prefieres usar imagen, descomenta estas líneas y comenta el video:
// import chooseUsImage from "../../public/assets/img/sunergys/choose-us/choose-us-1.jpg";
// export const chooseUsImages = {
//     main: chooseUsImage, // Imagen principal (665x649) - lado derecho grande
// };
export const chooseUsImages = {
    main: null, // No se usa cuando hay video
};

// Video "Por qué elegirnos": URL centralizada en @/lib/videos (chooseUs).
// La sección Choose Us importa desde allí. Ya no se usa variable de entorno.

// ============================================
// VIDEOS
// ============================================
// Opción 1: ID de YouTube (recomendado)
// Si tu video es: https://www.youtube.com/watch?v=ABC123
// El ID es: ABC123

export const videos = {
    about: "a9-5CzwTdDs", // Video de YouTube: https://www.youtube.com/watch?v=a9-5CzwTdDs
    instalacion: null, // Agregar otro video si tienes
};

// Opción 2: Archivo MP4 local
// Si prefieres subir el video, colócalo en: public/assets/img/sunergys/videos/
// Y descomenta estas líneas:
// import videoAbout from "../../public/assets/img/sunergys/videos/video-about.mp4";
// export const videoFiles = {
//     about: videoAbout,
// };

// ============================================
// BREADCRUMB (Páginas internas)
// ============================================
// Coloca tus imágenes en: public/assets/img/sunergys/breadcrumb/
import breadcrumbBg from "../../public/assets/img/sunergys/breadcrumb/breadcrumb.jpg";
import breadcrumbServices from "../../public/assets/img/sunergys/breadcrumb/breadcrumb-services.jpg";
import breadcrumbWhyUs from "../../public/assets/img/sunergys/breadcrumb/breadcrumb-why-us.jpg";

export const breadcrumbImages = {
    default: breadcrumbBg, // Imagen del breadcrumb (1920x400) - se usa por defecto
    services: breadcrumbServices, // Imagen del breadcrumb para "Nuestros Servicios" (1920x400)
    whyUs: breadcrumbWhyUs, // Imagen del breadcrumb para "Por Qué Elegirnos" (1920x400)
};
