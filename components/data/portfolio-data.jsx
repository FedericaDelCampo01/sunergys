// Imágenes para Chacra por Camino Medellín
import chacraMain from "../../public/assets/img/sunergys/portfolio/chacra-camino-medellin-main.jpg";
import chacra1 from "../../public/assets/img/sunergys/portfolio/chacra-camino-medellin-1.jpg";
import chacra2 from "../../public/assets/img/sunergys/portfolio/chacra-camino-medellin-2.jpg";
import chacra3 from "../../public/assets/img/sunergys/portfolio/chacra-camino-medellin-3.jpg";

// Imágenes para Casa en Barrio San Nicolás
import sanNicolasMain from "../../public/assets/img/sunergys/portfolio/casa-san-nicolas-main.jpg";
import sanNicolas1 from "../../public/assets/img/sunergys/portfolio/casa-san-nicolas-1.jpeg";
import sanNicolas2 from "../../public/assets/img/sunergys/portfolio/casa-san-nicolas-2.jpeg";
import sanNicolas3 from "../../public/assets/img/sunergys/portfolio/casa-san-nicolas-3.jpeg";

// Imágenes para Casa Frente a la Playa Mansa
import playaMansaMain from "../../public/assets/img/sunergys/portfolio/casa-playa-mansa-main.jpg";
import playaMansa1 from "../../public/assets/img/sunergys/portfolio/casa-playa-mansa-1.jpg";
import playaMansa2 from "../../public/assets/img/sunergys/portfolio/casa-playa-mansa-2.jpg";
import playaMansa3 from "../../public/assets/img/sunergys/portfolio/casa-playa-mansa-3.jpg";

// Imágenes para Casa en Barrio La Tahona
import laTahonaMain from "../../public/assets/img/sunergys/portfolio/casa-la-tahona-main.jpg";
import laTahona1 from "../../public/assets/img/sunergys/portfolio/casa-la-tahona-1.jpg";
import laTahona2 from "../../public/assets/img/sunergys/portfolio/casa-la-tahona-2.jpg";
import laTahona3 from "../../public/assets/img/sunergys/portfolio/casa-la-tahona-3.jpg";

const portfolioData = [
    {        
        id: 'chacra-camino-medellin',
        title: 'Chacra por Camino Medellín',
        subtitle: 'Soluciones Rurales',
        image: chacraMain,
        galleryImages: [chacra1, chacra2, chacra3],
        description: 'En una propiedad de gran extensión, la demanda energética es elevada y constante. El objetivo fue desarrollar un sistema que brindara independencia eléctrica sin alterar la estética natural del paisaje, integrándose de forma armónica con el entorno rural.',
        challenges: [
            'Alta demanda energética debido a las dimensiones de la chacra',
            'Necesidad de preservar la estética y el carácter natural del entorno',
            'Optimización del rendimiento energético con mínima intervención visual'
        ],
        solution: 'Se diseñó un parque solar de alta potencia, cuidadosamente integrado a la arquitectura existente, logrando eficiencia energética, autonomía y una instalación visualmente discreta.',
        location: 'Camino Medellín',
        category: 'Proyecto Rural',
    },
    {        
        id: 'casa-barrio-san-nicolas',
        title: 'Casa en Barrio San Nicolás',
        subtitle: 'Instalación Residencial',
        image: sanNicolasMain,
        galleryImages: [sanNicolas1, sanNicolas2, sanNicolas3],
        description: 'La vivienda presenta un alto tránsito diario y un consumo energético significativo. El proyecto se enfocó en optimizar el consumo eléctrico de la residencia, manteniendo intactos los criterios estéticos y arquitectónicos de la propiedad.',
        challenges: [
            'Integración del sistema solar en una arquitectura de alto estándar',
            'Optimización del consumo en una residencia de uso intensivo',
            'Uso de tecnología eficiente sin impacto visual'
        ],
        solution: 'Se implementó un sistema fotovoltaico con paneles de última generación, integrados de forma armónica al diseño del techo, logrando una solución eficiente, discreta y alineada con la estética de la vivienda.',
        location: 'Barrio San Nicolás',
        category: 'Instalación Residencial',
    },
    {        
        id: 'casa-frente-playa-mansa',
        title: 'Casa Frente a la Playa Mansa',
        subtitle: 'Instalación Costera',
        image: playaMansaMain,
        galleryImages: [playaMansa1, playaMansa2, playaMansa3],
        description: 'Esta residencia frente al mar fue diseñada para aprovechar al máximo la exposición solar del litoral, garantizando eficiencia energética y alto rendimiento durante todo el año.',
        challenges: [
            'Exposición constante a un ambiente salino y corrosivo',
            'Altos picos de consumo durante la temporada estival',
            'Necesidad de materiales resistentes y de larga durabilidad'
        ],
        solution: 'Se seleccionaron componentes especialmente diseñados para entornos costeros, logrando un sistema robusto y confiable, capaz de mantener un rendimiento óptimo incluso en condiciones ambientales exigentes.',
        location: 'Playa Mansa',
        category: 'Instalación Residencial',
    },
    {        
        id: 'casa-barrio-la-tahona',
        title: 'Casa en Barrio La Tahona',
        subtitle: 'Sistema Inteligente',
        image: laTahonaMain,
        galleryImages: [laTahona1, laTahona2, laTahona3],
        description: 'El objetivo del proyecto fue acompañar el estilo de vida dinámico de la zona, implementando un sistema que permitiera una gestión eficiente del consumo energético en una residencia moderna.',
        challenges: [
            'Variabilidad en los patrones de consumo diario',
            'Necesidad de gestionar picos de demanda de forma inteligente',
            'Preparación del sistema para posibles ampliaciones futuras'
        ],
        solution: 'Se implementó un sistema fotovoltaico optimizado para la gestión de picos de consumo, asegurando eficiencia, flexibilidad operativa y un rendimiento sostenible a largo plazo.',
        location: 'Barrio La Tahona',
        category: 'Instalación Residencial',
    },
];

export default portfolioData;