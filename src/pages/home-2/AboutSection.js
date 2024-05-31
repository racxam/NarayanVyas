import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/img/about/about-2.png';
import shapeImg1 from '../../assets/img/about/about-shape-3.png';
import shapeImg2 from '../../assets/img/about/about-shape-4.png';
import shapeImg3 from '../../assets/img/about/about-shape-5.png';

const About = () => {

    return (
        <div className="about-2__area pt-100 pb-130 p-relative fix">
            <div className="about-2__shape-1 d-none d-xl-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="about-2__shape-2 d-none d-xl-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="about-2__shape-3 d-none d-xl-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInLeft" data-wow-duration="1.1s">
                        <div className="about-2__main-img p-relative">
                            <img src={aboutImg} alt="" />
                            <div className="about-2__main-img-content d-flex align-items-center">
                                <div className="about-2__icon">
                                    <span><i className="fal fa-check-circle"></i></span>
                                </div>
                                <div className="about-2__img-text">
                                    <h5>1283k+</h5>
                                    <span>Complete Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="about-2__item">
                            <div className="about-2__section-title">
                                <h4 className="section-subtitle char-anim">Our About Now</h4>
                                <h3 className="section-title char-anim">We This Managing About
                                    Media For Business</h3>
                            </div>
                            <div className="about-2__text">
                                <p className="char-anim-2">Business tailored it design, management & support services
                                business agency elit, sed do eiusmod tempor. </p>
                            </div>
                            <div className="about-2__list-item wow animate__fadeInUp" data-wow-duration="1.1s">
                                <h4 className="about-2__list-title">Personal Infos:</h4>
                                <ul>
                                    <li><span>First Name: Boran</span></li>
                                    <li><span>Address: Dubai</span></li>
                                    <li><span>Age: 24 Years</span></li>
                                    <li><span>Nationality: Tunisian</span></li>
                                    <li><span>Freelance: Available</span></li>
                                    <li><span>Email: you@mail.com</span></li>
                                </ul>
                            </div>
                            <div className="about-2__button wow animate__fadeInUp" data-wow-duration="1.1s">
                                <Link to="/job-details" className="it-btn tp-btn-hover alt-color">
                                    <span>
                                        Download CV<i className="fal fa-arrow-to-bottom"></i>
                                    </span>
                                    <b></b>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;