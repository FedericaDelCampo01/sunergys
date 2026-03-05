// Las imágenes se cargarán desde: public/assets/img/sunergys/team/
import bautistaImage from "../../public/assets/img/sunergys/team/bautista-de-castro.jpeg";
import liesvyImage from "../../public/assets/img/sunergys/team/liesvy-delgado.jpeg";
import margaritaImage from "../../public/assets/img/sunergys/team/margarita-navarro.jpeg";
import faustinaImage from "../../public/assets/img/sunergys/team/faustina-torrendell.jpeg";

const teamData = [
    {
        id: 'bautista-de-castro',
        image: bautistaImage,
        name: 'Bautista De Castro',
        position: 'Gerente General',
        mail: 'bautista@sunergys.com',
        phone: '+598 XX XXX XXX',
        category: 'founder',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'liesvy-delgado',
        image: liesvyImage,
        name: 'Liesvy Delgado',
        position: 'Ing. Eléctrico',
        mail: 'liesvy@sunergys.com',
        phone: '+598 XX XXX XXX',
        category: 'founder',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'margarita-navarro',
        image: margaritaImage,
        name: 'Margarita Navarro',
        position: 'Asesora Legal',
        mail: 'margarita@sunergys.com',
        phone: '+598 XX XXX XXX',
        category: 'writer',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'faustina-torrendell',
        image: faustinaImage,
        name: 'Faustina Torrendell',
        position: 'Asesora en Marketing',
        mail: 'faustina@sunergys.com',
        phone: '+598 XX XXX XXX',
        category: 'marketing',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
];

export default teamData;