import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import images from '../../assets/images';
import shapeImg1 from '../../assets/img/about/about-shape-3.png';
import shapeImg2 from '../../assets/img/about/about-shape-4.png';
import shapeImg3 from '../../assets/img/about/about-shape-5.png';
import Globals from '../../Globals';

const About = () => {

    return (
        <div className="about-2__area pt-10 pb-10 p-relative fix">
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
                            <img src={images.misc.aboutImg} alt="" />
                            <div className="about-2__main-img-content d-flex align-items-center">
                                <div className="about-2__icon">
                                    <span><i className="fal fa-check-circle"></i></span>
                                </div>
                                <div className="about-2__img-text">
                                    <h5>{Globals.totalExperience}+</h5>
                                    <span>Years of Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="about-2__item">
                            <div className="about-2__section-title">
                                <h4 className="section-subtitle char-anim">{Globals.aboutSectionHeading}</h4>
                                <h3 className="section-title char-anim">{Globals.homePageAboutHeader}</h3>
                            </div>
                            <div className="about-2__text">
                                <p className="char-anim-2">{Globals.aboutSectionSubheading}</p>
                            </div>
                            <div className="about-2__list-item wow animate__fadeInUp" data-wow-duration="1.1s">
                                <h4 className="about-2__list-title">Key Highlights:</h4>
                                <ul>
                                    <li><span>{Globals.aboutPublicationHighlight}</span></li>
                                    <li><span>{Globals.aboutCitationHighlight}</span></li>
                                    <li><span>{Globals.aboutStudentsHighlight}</span></li>
                                    <li><span>{Globals.aboutBooksHighlight}</span></li>
                                    <li><span>{Globals.aboutHIndexHighlight}</span></li>
                                    <li><span>{Globals.aboutWorkshopHighlight}</span></li>
                                </ul>
                            </div>
                            <div className="about-2__button wow animate__fadeInUp" data-wow-duration="1.1s">
                                <Link to="/appointments" className="it-btn tp-btn-hover alt-color">
                                    <span>
                                        Book Appointment
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