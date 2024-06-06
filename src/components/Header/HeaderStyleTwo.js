import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import MenuItems from './MenuItems'

import Logo from '../../assets/img/logo/logo-2.png';
import offCanvasLogo from '../../assets/img/logo/footer-logo.png';
import Shape from '../../assets/img/offcanvas/offcanvas-shape-1.jpg';

const HeaderStyleTwo = (props) => {
	const { headerClass, parentMenu, headerNormalLogo, headerStickyLogo } = props;

	const [menuOpen, setMenuOpen] = useState(false)
	const [offCanvasOpen, setOffCanvasOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false);
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	const [home, setHome] = useState(false)
	const [pages, setPages] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setPages(false)
		}
		else if (menu === 'pages') {
			setHome(false)
			setPages(!pages)
		}
	};

	const location = useLocation();

	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setInnerWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<header>
				<div className={`${headerClass ? headerClass : 'header__area header__border header-five header__transparent header__plr'} ${isVisible ? 'header-sticky' : ''}`}>
					<div className={isVisible ? 'menu-bar menu-sticky sticky' : 'menu-bar menu-sticky'}>
						<div className="container-fluid">
							<div className="row align-items-center">
								<div className="col-xxxl-2 col-xxl-3 col-xl-3 col-lg-3 col-7 col-md-6">
									<div className="header__logo header__logo-border text-start text-lg-center">
										<Link to="/">
											<img src={headerNormalLogo ? headerNormalLogo : Logo} alt="" />
										</Link>
									</div>
								</div>
								<div className="col-xxxl-6 col-xxl-6 col-xl-6 col-lg-7 d-none d-lg-block">
									<div className="header__main-menu header__white-menu text-center">
										<nav id="mobile-menu">
											<ul>
												<MenuItems
													parentMenu={parentMenu}
												/>
											</ul>
										</nav>
									</div>
								</div>
								<div className="col-xxxl-4 col-xxl-3 col-xl-3 col-lg-2 col-5 col-md-6">
									<div className="header__action header__action-border d-flex justify-content-end align-items-center">
										<div className="header__menu-bar">
											<button onClick={() => { setOffCanvasOpen(true) }} className={menuOpen ? "it-menu-bar bars-color open" : "it-menu-bar bars-color"}><i className="far fa-bars"></i></button>
										</div>
										<Link to="/contact" className="main-btn-sm tp-btn-hover alt-color-white d-none d-xxl-block">
											<span>Book Appointment</span>
											<b></b>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="it-offcanvas-area">
				<div className={offCanvasOpen ? 'itoffcanvas opened' : 'itoffcanvas'}>
					<div className="it-offcanva-bottom-shape d-none d-xxl-block">
						<img src={Shape} alt="" />
					</div>
					<div className="itoffcanvas__close-btn">
						<button onClick={() => { setOffCanvasOpen(false) }} className="close-btn"><i className="fal fa-times"></i></button>
					</div>
					<div className="itoffcanvas__logo">
						<Link to="/">
							<img src={offCanvasLogo} alt="" />
						</Link>
					</div>
					<div className="itoffcanvas__text">
						<p>Suspendisse interdum consectetur libero id. Fermentum leo vel orci porta non. Euismod viverra nibh
							cras pulvinar suspen.</p>
					</div>
					<div className={innerWidth < 992 ? 'mobile-menu mean-container' : 'd-none'}>
						<div className="mean-bar">
							<nav className="mean-nav">
								<ul>
									<MenuItems />
								</ul>
							</nav>
						</div>
					</div>
					<div className="itoffcanvas__info">
						<h3 className="offcanva-title">Get In Touch</h3>
						<div className="it-info-wrapper mb-20 d-flex align-items-center">
							<div className="itoffcanvas__info-icon">
								<a href="#"><i className="fal fa-envelope"></i></a>
							</div>
							<div className="itoffcanvas__info-address">
								<span>Email</span>
								<a href="maito:hello@yourmail.com">hello@yourmail.com</a>
							</div>
						</div>
						<div className="it-info-wrapper mb-20 d-flex align-items-center">
							<div className="itoffcanvas__info-icon">
								<a href="#"><i className="fal fa-phone-alt"></i></a>
							</div>
							<div className="itoffcanvas__info-address">
								<span>Phone</span>
								<a href="tel:(00)45611227890">(00) 456 1122 7890</a>
							</div>
						</div>
						<div className="it-info-wrapper mb-20 d-flex align-items-center">
							<div className="itoffcanvas__info-icon">
								<a href="#"><i className="fas fa-map-marker-alt"></i></a>
							</div>
							<div className="itoffcanvas__info-address">
								<span>Location</span>
								<a href="htits://www.google.com/maps/@37.4801311,22.8928877,3z" target="_blank" rel="noreferrer">Riverside 255,
									San Francisco, USA </a>
							</div>
						</div>
					</div>
					<div className="itoffcanvas__social">
						<div className="social-icon">
							<a href="#"><i className="fab fa-twitter"></i></a>
							<a href="#"><i className="fab fa-instagram"></i></a>
							<a href="#"><i className="fab fa-facebook-square"></i></a>
							<a href="#"><i className="fab fa-dribbble"></i></a>
						</div>
					</div>
				</div>
			</div>

			{offCanvasOpen ?
				<div className="body-overlay apply" onClick={() => { setOffCanvasOpen(false) }}></div> :
				<div className="body-overlay"></div>
			}
		</>
	);
}

export default HeaderStyleTwo;