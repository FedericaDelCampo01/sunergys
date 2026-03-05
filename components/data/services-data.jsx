import image1 from "../../public/assets/img/service/service-6.jpg";
import image2 from "../../public/assets/img/service/service-4.jpg";
import image3 from "../../public/assets/img/service/service-3.jpg";
import image4 from "../../public/assets/img/service/service-1.jpg";
import image5 from "../../public/assets/img/service/service-5.jpg";
import image6 from "../../public/assets/img/service/service-2.jpg";

const servicesData = [
    {
        id: 'instalaciones-residenciales',
        icon: <i className="flaticon-solar-panel-3"></i>,
        title: 'Instalaciones Residenciales',
        des: 'Sistemas fotovoltaicos personalizados para tu hogar. Reduce tu factura eléctrica con energía solar de calidad.',        
        image: image1,
    },
    {
        id: 'soluciones-empresariales',
        icon: <i className="flaticon-maintenance"></i>,
        title: 'Soluciones Empresariales',
        des: 'Optimiza los costos energéticos de tu empresa con sistemas solares diseñados para alto rendimiento.',        
        image: image2,
    },
    {
        id: 'proyectos-rurales',
        icon: <i className="flaticon-renewable-energy"></i>,
        title: 'Proyectos Rurales',
        des: 'Energía solar para riego, maquinaria y otras necesidades del sector rural. Soluciones adaptadas al campo.',        
        image: image3,
    },
];

export default servicesData;