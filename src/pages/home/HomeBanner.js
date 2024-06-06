import React from 'react';
import { Link } from 'react-router-dom';
import Globals from '../../Globals';
import images from '../../assets/images';

import shapeImg1 from '../../assets/img/slider/shape-1.png';
import shapeImg2 from '../../assets/img/slider/shape-2.png';
import shapeImg3 from '../../assets/img/slider/shape-3.png';
import shapeImg4 from '../../assets/img/slider/shape-4.png';
import shapeImg5 from '../../assets/img/slider/shape-5.png';
import shapeImg6 from '../../assets/img/slider/shape-6.png';
import shapeImg7 from '../../assets/img/slider/shape-7.png';
import shapeImg8 from '../../assets/img/slider/shape-8.png';
import shapeImg9 from '../../assets/img/slider/shape-9.png';
import shapeImg10 from '../../assets/img/slider/shape-10.png';
import shapeImg11 from '../../assets/img/slider/shape-11.png';

const Banner = () => {

    return (
        <div className="slider__area grey-bg slider__space slider__plr p-relative z-index fix">
            <div className="slider__shape-top-1 d-none d-xl-block wow animate__fadeInUp" data-wow-duration="1.1s"
            >
                <img src={shapeImg1} alt="" />
            </div>
            <div className="slider__shape-top-2 d-none d-xl-block wow animate__fadeInLeft" data-wow-duration="1.1s"
            >
                <img src={shapeImg2} alt="" />
            </div>
            <div className="slider__shape-top-3 d-none d-xl-block wow animate__fadeInRight" data-wow-duration="1.1s"
            >
                <img src={shapeImg3} alt="" />
            </div>
            <div className="slider__shape-top-4 d-none d-xl-block wow animate__fadeInRight" data-wow-duration="1.1s"
            >
                <img src={shapeImg4} alt="" />
            </div>
            <div className="slider__shape-top-5 d-none d-xxl-block">
                <img src={shapeImg5} alt="" />
            </div>
            <div className="slider__shape-top-6 d-none d-lg-block">
                <img src={shapeImg6} alt="" />
            </div>
            <div className="slider__shape-top-7 d-none d-sm-block">
                <img src={shapeImg7} alt="" />
            </div>
            <div className="slider__shape-top-8">
                <img src={shapeImg8} alt="" />
            </div>
            <div className="slider__shape-top-9 d-none d-xl-block">
                <img src={shapeImg9} alt="" />
            </div>
            <div className="slider__shape-top-10">
                <img src={shapeImg10} alt="" />
            </div>
            <div className="slider__shape-top-11">
                <img src={shapeImg11} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="slider__section-box">
                            <h4 className="section-subtitle char-anim wow animate__fadeInUp" data-wow-duration="1.1s"
                            >{Globals.homePageShortTagLine}</h4>
                            <h3 className="hero-title-2 char-anim wow animate__fadeInUp" data-wow-duration="1.1s"
                            >{Globals.homePageTagline}</h3>
                        </div>
                        <div className="slider__content wow animate__fadeInUp para-justi" data-wow-duration="1.1s" >
                            <p className="char-anim-2">{Globals.homePageHeaderDescription}</p>
                        </div>
                        <div className="slider__btn wow animate__fadeInUp" data-wow-duration="1.1s">
                            <Link to="/appointments" className="main-btn tp-btn-hover alt-color">
                                <span>Get Started</span>
                                <b></b>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="slider__thumb">
                            <img src={images.misc.userProfileHome} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;