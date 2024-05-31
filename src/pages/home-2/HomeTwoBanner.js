import React from 'react';
import { Link } from 'react-router-dom';

import sliderImg1 from '../../assets/img/slider/slider-2.png';
import shapeImg1 from '../../assets/img/slider/shape-12.png';
import shapeImg2 from '../../assets/img/slider/shape-6.png';
import shapeImg3 from '../../assets/img/slider/shape-14.png';
import shapeImg4 from '../../assets/img/slider/shape-11.png';
import shapeImg5 from '../../assets/img/slider/shape-5.png';
import shapeImg6 from '../../assets/img/slider/shape-13.png';
import shapeImg7 from '../../assets/img/slider/shape-black.png';

const Banner = () => {

    return (
        <div className="slider-2__area grey-bg slider-2__space slider-2__plr p-relative z-index fix">
            <div className="slider-2__shape-1 d-none d-md-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="slider-2__shape-2 d-none d-md-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="slider-2__shape-3 d-none d-xxl-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="slider-2__shape-4 d-none d-xxl-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="slider-2__shape-5 d-none d-xl-block">
                <img src={shapeImg5} alt="" />
            </div>
            <div className="slider-2__shape-6 d-none d-xl-block">
                <img src={shapeImg6} alt="" />
            </div>
            <div className="slider-2__shape-7">
                <img src={shapeImg7} alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="slider-2__wrapper z-index">
                            <div className="slider-2__section-box">
                                <h4 className="section-subtitle char-anim wow animate__fadeInUp" data-wow-duration=".7s">HELLO , MY NAME IS</h4>
                                <h3 className="hero-title char-anim wow animate__fadeInUp" data-wow-duration=".7s">ABoran <span>Sorasn</span></h3>   
                            </div>
                            <div className="slider-2__content">
                                <h4 className="slider-2__title-sm char-anim wow animate__fadeInUp" data-wow-duration=".9s">I Am Web Developer.</h4>
                                <p className="char-anim-2 wow animate__fadeInUp" data-wow-duration="1.1s">Business tailored it design, management & support services
                                business agency elit, sed do eiusmod tempor.</p>   
                            </div>
                            <div className="slider-2__btn wow animate__fadeInUp" data-wow-duration="1.1s">
                            <Link to="/job-details" className="main-btn tp-btn-hover alt-color">
                                <span>Download CV</span>
                                <b></b>
                            </Link>  
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="slider-2__thumb text-center">
                            <img src={sliderImg1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;