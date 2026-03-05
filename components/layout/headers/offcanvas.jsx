import Link from 'next/link';
import logo from "../../../public/assets/img/logo.png";
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen, addClass }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${addClass} ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
				<div className="header__area-menubar-right-sidebar-popup-logo">
				<Link href='/'>
					<img className='logo_one' src={logo.src} alt="logo" />
					<img className='logo_two' src={logo.src} alt="logo" />
					<img className='logo_three' src={logo.src} alt="logo" />
				</Link>
				</div>
				<p>Conviértete en parte de la revolución solar.<br />Contáctanos y descubre cómo podemos ayudarte.</p>
				<div className="header__area-menubar-right-sidebar-popup-contact">
					<h4 className="mb-30">Contacto</h4>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-phone-alt icon-animation"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Llamar Ahora</span>
							<h6><Link href="tel:+598095898008">+598 095 898 008</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-envelope"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Enviar Email</span>
							<h6><Link href="mailto:info@sunergys.com">info@sunergys.com</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-map-marker-alt"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Nuestra Oficina</span>
							<h6><Link href="https://google.com/maps" target="_blank">Havre 2210, Montevideo, Uruguay</Link></h6>
						</div>
					</div>
				</div>
				<div className="header__area-menubar-right-sidebar-popup-social social__icon">
					<Social />
				</div>
			</div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;