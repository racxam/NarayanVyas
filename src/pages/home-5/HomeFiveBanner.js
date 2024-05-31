import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import sliderImg from '../../assets/img/slider/slider-5.png';

import shapeImg1 from '../../assets/img/slider/shape-29.png';
import shapeImg2 from '../../assets/img/slider/shape-5.png';
import shapeImg3 from '../../assets/img/slider/shape-11.png';
import shapeImg4 from '../../assets/img/slider/shape-30.png';
import shapeImg5 from '../../assets/img/slider/shape-31.png';
import shapeImg6 from '../../assets/img/slider/shape-38.png';
import shapeImg7 from '../../assets/img/slider/shape-37.png';
import shapeImg8 from '../../assets/img/slider/shape-39.png';

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="slider-5__area slider-5__space slider-5__plr black-bg-2 p-relative fix">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='PO_fBTkoznc' onClose={() => { openModal(); }} />
            <div className="slider-5__shape-1 d-none d-xxxl-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="slider-5__shape-2 d-none d-lg-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="slider-5__shape-3 d-none d-xl-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="slider-5__shape-4 d-none d-xxl-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="slider-5__shape-5 d-none d-xxl-block">
                <img src={shapeImg5} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="slider-5__item">
                            <div className="slider-5__section-title">
                                <h4 className="hero-5-title text-white char-anim wow animate__fadeInUp" data-wow-duration="1.1s"
                                    >We Design It-Service Agency<br/>
                                    Simple Busines <span>Grow to </span></h4>
                            </div>
                            <div className="slider-5__content">
                                <div className="slider-5__text wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <p className="char-anim-2">Business tailored it design, management & support services <br/>
                                    business agency elit, sed do eiusmod tempor.</p>
                                </div>
                                <div className="slider-5__content-list wow animate__fadeInUp" data-wow-duration="1.1s"
                                    >
                                    <ul>
                                        <li><i className="fal fa-check-square"></i><span>Business sagittis leo it service agency.</span>
                                        </li>
                                        <li><i className="fal fa-check-square"></i><span>We give management service smart.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="slider-5__button-box d-flex align-items-center">
                                    <div className="slider-5__button mr-40 wow animate__fadeInUp" data-wow-duration="1.1s"
                                    >
                                        <Link className="main-btn tp-btn-hover alt-color-white" to="/about-us">
                                        <span>Get Started</span>
                                        <b></b>
                                        </Link>
                                    </div>
                                    <div className="slider-5__icon wow animate__fadeInUp" data-wow-duration="1.1s"
                                    >
                                        <Link className="popup-video" to="#" onClick={() => { openModal(); }}><span><i className="fas fa-play"></i></span></Link>
                                        <a href="#">
                                            <h5>How It Works</h5>
                                        </a>
                                    </div>
                                </div>
                                <div className="slider-5__social-box wow animate__fadeInUp" data-wow-duration="1.1s"
                                >
                                    <span>Social Media:</span>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="slider-5__wrapper-img">
                            <div className="slider-5__main-img p-relative">
                                <img src={sliderImg} alt="" />
                                <div className="slider-5__main-img-content d-flex align-items-center">
                                    <div className="slider-5__img-icon">
                                    <span><i className="fal fa-check-circle"></i></span>
                                    </div>
                                    <div className="slider-5__img-text">
                                    <h5>1283k+</h5>
                                    <span>Complete Projects</span>
                                    </div>
                                </div>
                                <div className="slider-5__sub-img-1 d-none d-sm-block">
                                    <img src={shapeImg6} alt="" />
                                </div>
                                <div className="slider-5__sub-img-2 d-none d-sm-block">
                                    <img src={shapeImg7} alt="" />
                                </div>
                                <div className="slider-5__sub-img-3 d-none d-sm-block">
                                    <img src={shapeImg8} alt="" />
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;