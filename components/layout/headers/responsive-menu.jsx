"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) =>
    value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) =>
    value == activeMenus ? { display: "block" } : { display: "none" };
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

export default ResponsiveMenu;