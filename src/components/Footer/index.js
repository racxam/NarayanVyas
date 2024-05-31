
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo/footer-logo.png';
import footerBG from '../../assets/img/footer/footer-bg.jpg';

const Footer = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <footer>
            <div className={footerClass ? footerClass : 'footer__area footer__plr'} style={{backgroundImage: `url(${footerBG})`}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-1">
                                <div className="footer__logo">
                                    <Link to="/">
                                        {/* <img src={footerLogo ? footerLogo : Logo} alt="" /> */}
                                        <h2 style={{color:'whitesmoke'}}>Narayan Vyas</h2>
                                    </Link>
                                </div>
                                <div className="footer__content">
                                <div className="footer__text">
                                    <p>Our approach to itis unique around
                                        know work an we know doesn’t work
                                        verified factors in play.</p>
                                </div>
                                <div className="footer__number-wrapper d-flex align-items-center">
                                    <div className="footer__number-icon">
                                        <span><i className="fal fa-phone-alt"></i></span>
                                    </div>
                                    <div className="footer__number-info">
                                        <span>Have Any Questions?</span>
                                        <a href="tel:+918560014421">+918560014421</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-2">
                                <h4 className="footer__title"><Link to="/service">Service</Link></h4>
                                <div className="footer__menu-list">
                                <ul>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">WordPress</a></li>
                                    <li><a href="#">Online Marketing</a></li>
                                    <li><a href="#">Content</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-3">
                                <h4 className="footer__title">
                                    <a href="#">Support Link</a>
                                </h4>
                                <div className="footer__menu-list">
                                    <ul>
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">Development</a></li>
                                        <li><a href="#">WordPress</a></li>
                                        <li><a href="#">Online Marketing</a></li>
                                        <li><a href="#">Content</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-4">
                                <h4 className="footer__title"><a href="#">Newslatter</a></h4>
                                <div className="footer__content">
                                <p>Our approach to itis unique around
                                    know work an we know.</p>
                                </div>
                                <div className="footer__input">
                                    <form action="#">
                                        <input type="email" placeholder="Your email" />
                                        <button className="subscribe-btn">Subscribe </button>
                                    </form>
                                </div>
                                <div className="footer__social-box">
                                    <span>Social Media:</span>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
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
                                <span>Copyright Sorex 2023, All Right Reserved</span>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="copyright__item text-start text-md-end">
                                <span><a href="#">Home</a></span>
                                <span><a href="#">Cases</a></span>
                                <span><a href="#">About</a></span>
                                <span><a href="#">Privacy & Policy</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;