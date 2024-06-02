import React from 'react';
import { Link } from 'react-router-dom';

import sliderImg1 from '../../assets/img/slider/slider-3.png';
import shapeImg1 from '../../assets/img/slider/shape-15.png';
import shapeImg2 from '../../assets/img/slider/shape-16.png';
import shapeImg3 from '../../assets/img/slider/shape-17.png';
import shapeImg4 from '../../assets/img/slider/shape-18.png';
import shapeImg5 from '../../assets/img/slider/shape-19.png';

const Banner = () => {

    return (
        <div className="slider-3__area slider-3__space slider-3__plr grey-bg p-relative fix">
            <div className="slider-3__shape-1">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="slider-3__shape-2 d-none d-lg-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="slider-3__shape-3 d-none d-md-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="slider-3__shape-4 d-none d-md-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="slider-3__shape-5 d-none d-lg-block">
                <img src={shapeImg5} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="slider-3__item">
                            <div className="slider-3__section-title">
                                <h5 className="section-blue-subtitle char-anim">We Are Business Agency!</h5>
                                <h4 className="hero-2-title char-anim">We Are Best <span>Agency </span>
                                    Startup Business.</h4>
                            </div>
                            <div className="slider-3__content">
                                <div className="slider-3__text wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <p className="char-anim-2">Business tailored it design, management & support services <br />
                                        business agency elit, sed do eiusmod tempor.</p>
                                </div>
                                <div className="slider-3__content-list wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <ul>
                                        <li><i className="fal fa-check-square"></i><span>Business ndisse suscipit sagittis leo.</span>
                                        </li>
                                        <li><i className="fal fa-check-square"></i><span>We gives employer management</span></li>
                                    </ul>
                                </div>
                                <div className="slider-3__button">
                                    <Link to="/contact" className="main-btn-sm mr-20 mb-20 wow animate__fadeInUp tp-btn-hover alt-color" data-wow-duration="1.1s">
                                        <span>Book Appointment</span>
                                        <b></b>
                                    </Link>
                                    <Link to="/contact" className="border-btn mb-20 wow animate__fadeInUp tp-btn-hover alt-color" data-wow-duration="1.1s">
                                        <span>Contact Us</span>
                                        <b></b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="slider-3__main-img">
                            <img src={sliderImg1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;