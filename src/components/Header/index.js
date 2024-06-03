import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MenuItems from './MenuItems';
import Topbar from './Topbar'

import Logo from '../../assets/img/logo/logo-1.png';
import offCanvasLogo from '../../assets/img/logo/footer-logo.png';
import Shape from '../../assets/img/offcanvas/offcanvas-shape-1.jpg';

const Header = (props) => {
	const { headerClass, parentMenu, headerLogo, topbarEnable } = props;

	const [menuOpen, setMenuOpen] = useState(false)
	const [offCanvasOpen, setOffCanvasOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false);
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	const [home, setHome] = useState(false)
	const [about, setAbout] = useState(false)
	const [service, setService] = useState(false)
	const [page, setPage] = useState(false)
	const [blog, setBlog] = useState(false)

	const openMobileMenu = menu => {
		if (menu === 'home') {
			setHome(!home)
			setAbout(false)
			setService(false)
			setPage(false)
			setBlog(false)
		}
		if (menu === 'about') {
			setHome(false)
			setAbout(!about)
			setService(false)
			setPage(false)
			setBlog(false)
		}
		if (menu === 'service') {
			setHome(false)
			setAbout(false)
			setService(!service)
			setPage(false)
			setBlog(false)
		}
		else if (menu === 'page') {
			setHome(false)
			setAbout(false)
			setService(false)
			setPage(!page)
			setBlog(false)
		}
		if (menu === 'blog') {
			setHome(false)
			setAbout(false)
			setService(false)
			setPage(false)
			setBlog(!blog)
		}
	};

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
			{topbarEnable ? <Topbar /> : ''}

			<header>
				<div id="header-sticky" className={`${headerClass ? headerClass : 'header__area header__transparent header__space header__plr'} ${isVisible ? 'header-sticky' : ''}`}>
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-xl-3 col-lg-3 col-7 col-md-6">
								<div className="header__logo">
									<Link to="/">
										{/* <img src={headerLogo ? headerLogo : Logo} alt="" /> */}
										<h2>Narayan Vyas</h2>

									</Link>
								</div>
							</div>
							<div className="col-xl-6 col-lg-7 d-none d-lg-block" >
								<div className="header__main-menu text-xxl-end text-center">
									<nav id="mobile-menu">
										<ul>
											<MenuItems
												parentMenu={parentMenu}
											/>
										</ul>
									</nav>
								</div>
							</div>
							<div className="col-xl-3 col-lg-7 col-5 col-md-6 mt-15" >
								<div className="header__action d-flex justify-content-end">
									<Link className="main-btn-sm d-none d-xl-block tp-btn-hover alt-color" to="/appointments">
										<span>Book Appointment</span>
										<b></b>
									</Link>
									<div className="header__menu-bar">
										<button onClick={() => { setOffCanvasOpen(true) }} className={menuOpen ? "it-menu-bar open" : "it-menu-bar"}><i className="far fa-bars"></i></button>
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
							<h1 style={{ color: "whitesmoke" }}>Narayan Vyas</h1>
							{/* <img src={offCanvasLogo} alt="" /> */}
						</Link>
					</div>
					<div className="itoffcanvas__text">
						<p>

							I'm Narayan Vyas, Founder & CEO of Web Dev Fusion, with over 7 years of experience in Web Design, UI/UX, and Mobile App Development. I've completed 100+ projects, delivering high-quality solutions. Get in touch to discuss how I can help your business thrive!</p>
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
								<a href="maito:contact@narayanvyas.com">contact@narayanvyas.com</a>
							</div>
						</div>
						<div className="it-info-wrapper mb-20 d-flex align-items-center">
							<div className="itoffcanvas__info-icon">
								<a href="#"><i className="fal fa-phone-alt"></i></a>
							</div>
							<div className="itoffcanvas__info-address">
								<span>Phone</span>
								<a href="tel:+918560014421">+918560014421</a>
							</div>
						</div>
						<div className="it-info-wrapper mb-20 d-flex align-items-center">
							<div className="itoffcanvas__info-icon">
								<a href="#"><i className="fas fa-map-marker-alt"></i></a>
							</div>
							<div className="itoffcanvas__info-address">
								<span>Location</span>
								<a href="htits://www.google.com/maps/@37.4801311,22.8928877,3z" target="_blank">Bhilwara</a>
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

export default Header;