
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo/footer-logo.png';
import footerBG from '../../assets/img/footer/footer-bg.jpg';

const Footer = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <footer>
            <div className={footerClass ? footerClass : 'footer__area footer__plr'} style={{ backgroundImage: `url(${footerBG})` }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-1">
                                <div className="footer__logo">
                                    <Link to="/">
                                        {/* <img src={footerLogo ? footerLogo : Logo} alt="" /> */}
                                        <h2 style={{ color: 'whitesmoke' }}>Narayan Vyas</h2>
                                    </Link>
                                </div>
                                <div className="footer__content">
                                    <div className="footer__text">
                                        <p>Empowering Innovation in Mobile Development, IoT, and Research</p>
                                    </div>
                                    <div className="footer-3__social-box">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-2">
                                <h4 className="footer__title"><Link to="/service">Services</Link></h4>
                                <div className="footer__menu-list">
                                    <ul>
                                        <li><a href="/services/mobile-app-development"><i className="fal fa-angle-right"></i>&ensp;Mobile Application Development</a></li>
                                        <li><a href="/services/iot-solutions"><i className="fal fa-angle-right"></i>&ensp;IoT Solutions</a></li>
                                        <li><a href="/services/research-and-development"><i className="fal fa-angle-right"></i>&ensp;Research & Development</a></li>
                                        <li><a href="/services/project-consultancy"><i className="fal fa-angle-right"></i>&ensp;Project Consultancy</a></li>
                                        <li><a href="/services/training-and-workshops"><i className="fal fa-angle-right"></i>&ensp;Training & Workshops</a></li>
                                        <li><a href="/services/publication-assistance"><i className="fal fa-angle-right"></i>&ensp;Publication Assistance</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-3">
                                <h4 className="footer__title">
                                    <a href="#">Important Links</a>
                                </h4>
                                <div className="footer__menu-list">
                                    <ul>
                                        <li><a href="https://www.fiverr.com/narayanvyas" target='_blank'><i className="fal fa-angle-right"></i>&ensp;Fiverr</a></li>
                                        <li><a href="https://www.teacheron.com/tutor/3CgM" target='_blank'><i className="fal fa-angle-right"></i>&ensp;TeacherOn</a></li>
                                        <li><a href="https://github.com/narayanvyas/" target='_blank'><i className="fal fa-angle-right"></i>&ensp;Github</a></li>
                                        <li><a href="https://www.scopus.com/authid/detail.uri?authorId=57221967474" target='_blank'><i className="fal fa-angle-right"></i>&ensp;Scopus</a></li>
                                        <li><a href="https://www.researchgate.net/profile/Narayan-Vyas" target='_blank'><i className="fal fa-angle-right"></i>&ensp;ResearchGate</a></li>
                                        <li><a href="/contact"><i className="fal fa-angle-right"></i>&ensp;Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-4">
                                <h4 className="footer__title"><a href="#">Need Consultancy?</a></h4>
                                <div className="footer__text">
                                    <p>Empowering Innovation in Mobile Development, IoT, and Research</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright__area copyright__plr black-bg-3">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 wow animate__slideInUp" data-wow-duration="1.1s">
                            <div className="copyright__text">
                                <span>Copyright Narayan Vyas 2024, All Right Reserved</span>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="copyright__item text-start text-md-end">
                                <span><a href="/">Home</a></span>
                                <span><a href="/about-me">About</a></span>
                                <span><a href="privacy-policy">Privacy Policy</a></span>
                                <span><a href="/terms-of-service">Terms of Service</a></span>
                                <span><a href="/disclaimer">Disclaimer</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;