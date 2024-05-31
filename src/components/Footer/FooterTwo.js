
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo/footer-logo.png';
import blogImg1 from '../../assets/img/footer/ft-1.png';
import blogImg2 from '../../assets/img/footer/ft-2.png';
import shapeImg1 from '../../assets/img/footer/ft-shape-1.png';
import shapeImg2 from '../../assets/img/footer/ft-shape-2.png';
import footerBG from '../../assets/img/footer/footer-bg.jpg';

const FooterTwo = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <footer>
            <div className={footerClass ? footerClass : 'footer-2__area footer-2__plr p-relative fix'} style={{backgroundImage: `url(${footerBG})`}}>
                <div className="footer-2__shape-1 d-none d-xl-block">
                    <img src={shapeImg1} alt="" />
                </div>
                <div className="footer-2__shape-2 d-none d-xl-block">
                    <img src={shapeImg2} alt="" />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="footer-2__widget footer-2-col-1">
                                <div className="footer-2__logo">
                                    <Link to="/">
                                        <img src={footerLogo ? footerLogo : Logo} alt="" />
                                    </Link>
                                </div>
                                <div className="footer-2__content">
                                    <div className="footer-2__text">
                                        <p>Our approach to itis unique around 
                                            know work an we know doesn’t work
                                            verified factors in play.</p>
                                    </div>
                                    <div className="footer-2__social-box">
                                        <span>Social Media:</span> <br/>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="footer-2__widget footer-2-col-2">
                                <h4 className="footer-2__title"><a href="#">Service</a></h4>                     
                                <div className="footer-2__menu-list">
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
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="footer-2__widget footer-2-col-3">
                                <h4 className="footer-2__title"><a href="#">Support Link</a></h4>                     
                                <div className="footer-2__menu-list">
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
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="footer-2__widget footer-2-col-4">
                                <h4 className="footer-2__title"><a href="#">Newslatter</a></h4>
                                <div className="footer-2__content d-flex align-items-center pb-25">
                                    <div className="footer-2__content-img mr-25 p-relative">
                                        <img src={blogImg1} alt="" />
                                        <div className="footer-2__content-img-number">
                                            <span>01</span>
                                        </div>
                                    </div>
                                    <div className="footer-2__content-text">
                                        <span>23 jun 2023</span>
                                        <h4><a href="#">Get around easily <br/>
                                            york service</a></h4>
                                    </div>
                                </div>                     
                                <div className="footer-2__content d-flex align-items-center">
                                    <div className="footer-2__content-img mr-25 p-relative">
                                        <img src={blogImg2} alt="" />
                                        <div className="footer-2__content-img-number">
                                            <span>02</span>
                                        </div>
                                    </div>
                                    <div className="footer-2__content-text">
                                        <span>23 jun 2023</span>
                                        <h4><a href="#">Get around easily <br/>
                                            york service</a></h4>
                                    </div>
                                </div>                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="copyright__area copyright__plr-2 black-bg-3">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="copyright__text text-center text-md-start">
                                <span>Copyright Sorex 2022, All Right Reserved</span>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="copyright__item text-center text-md-end">
                                <span><a href="#">Home</a></span>
                                <span><a href="#">Cases</a></span>
                                <span><a href="#">About</a></span>
                                <span><a href="#">Privacy &amp; Policy</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterTwo;