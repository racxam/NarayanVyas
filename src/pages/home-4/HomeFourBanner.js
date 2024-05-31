import React from 'react';
import { Link } from 'react-router-dom';

import sliderBg1 from '../../assets/img/slider/slider-4-bg.png';
import sliderImg1 from '../../assets/img/slider/slider-4.png';
import shapeImg1 from '../../assets/img/slider/shape-20.png';
import shapeImg2 from '../../assets/img/slider/shape-21.png';
import shapeImg3 from '../../assets/img/slider/shape-22.png';
import shapeImg4 from '../../assets/img/slider/shape-23.png';
import shapeImg5 from '../../assets/img/slider/shape-24.png';
import shapeImg6 from '../../assets/img/slider/shape-26.png';
import shapeImg7 from '../../assets/img/slider/shape-27.png';
import shapeImg8 from '../../assets/img/slider/shape-40.png';
import shapeImg9 from '../../assets/img/slider/shape-41.png';

const Banner = () => {

    return (
        <div className="slider-4__area slider-4__space slider-4__plr slider-4__bg p-relative fix">
            <div className="slider-4__big-text d-none d-xxl-block">
                <h2>Sorex</h2>
            </div>
            <div className="slider-4__shape-1 d-none d-md-block">
                <img src={sliderBg1} alt="" />
            </div>
            <div className="slider-4__shape-2 d-none d-xl-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="slider-4__shape-3 d-none d-lg-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="slider-4__shape-4 d-none d-lg-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="slider-4__shape-5 d-none d-xl-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="slider-4__shape-6 d-none d-md-block">
                <img src={shapeImg5} alt="" />
            </div>
            <div className="slider-4__shape-8 d-none d-xxl-block">
                <img src={shapeImg6} alt="" />
            </div>
            <div className="slider-4__shape-9 d-none d-md-block">
                <img src={shapeImg7} alt="" />
            </div>
            <div className="slider-4__shape-10 d-none d-xl-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="slider-4__shape-11 d-none d-md-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="slider-4__item">
                            <div className="slider-4__section-title">
                            <h4 className="hero-3-title char-anim wow animate__fadeInUp" data-wow-duration="1.1s">Agency
                                Digital <span>Business</span> <br/> Design of Culture & Best Digital Agency.</h4>
                            </div>
                            <div className="slider-4__content">
                            <div className="slider-4__text wow animate__fadeInUp" data-wow-duration="1.1s">
                                <p className="char-anim-2">Business agency best right tailored it design, managementDuis Cras ante massa,<br/>
                                    consectetur feugiat auctor.nec enim luctus, feugiat arcuelob</p>
                            </div>
                            <div className="slider-4__button">
                                <Link className="main-btn tp-btn-hover alt-color-black mr-20 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"  to="/contact">
                                    <span>Get A Quote</span>
                                    <b></b>
                                </Link>
                                <Link to="/contact" className="main-btn white-bg tp-btn-hover alt-color-black mr-20 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <span>Contact Us</span>
                                    <b></b>
                                </Link>
                            </div>
                            <div className="slider-4__social  wow animate__fadeInUp" data-wow-duration="1.1s">
                                <h5>Available For:</h5>
                                <i className="fab fa-windows"></i>
                                <i className="fab fa-apple apple"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="slider-4__img-wrapper p-relative">
                            <div className="slider-4__main-img">
                                <img src={sliderImg1} alt="" />
                            </div>
                            <div className="slider-4__img-shape-1">
                                <img src={shapeImg8} alt="" />
                            </div>
                            <div className="slider-4__img-shape-2 d-none d-lg-block">
                                <img src={shapeImg9} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;