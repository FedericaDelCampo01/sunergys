"use client";
import Link from 'next/link';
import MainMenu from './header-menu';
import { useState, useEffect } from 'react';
import logo from "../../../public/assets/img/logo.png";
import MobileMenuPopup from './mobile-menu/menu-area';

const HeaderOne = () => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div className={`header__area ${isSticky ? 'header__sticky-sticky-menu' : ''}`}>
            <div className="custom__container">
                <div className="header__area-menubar">
                    <div className="header__area-menubar-left one">
                        <div className="header__area-menubar-left-logo">
                            <Link href="/"><img src={logo.src} alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="header__area-menubar-center">
                        <div className="header__area-menubar-center-menu">
                            <MainMenu />
                        </div>
                    </div>
                    <div className="header__area-menubar-right">
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="flaticon-menu-2" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo} addClass="" />
        </>
    );
};

export default HeaderOne;