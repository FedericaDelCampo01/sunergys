import Link from 'next/link';
import React from 'react';

const MainMenu = () => {
    return (
        <>    
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/about-us">Sobre Nosotros</Link></li>
                <li><Link href="/services">Nuestros Servicios</Link></li>
                <li><Link href="/calcula-tu-ahorro">Simulador</Link></li>
                <li><Link href="/why-us">Por Qué Elegirnos</Link></li>
                <li><Link href="/contact">Contacto</Link></li>
            </ul>  
        </>
    );
};

export default MainMenu;