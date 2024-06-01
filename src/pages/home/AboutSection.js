import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/img/about/about-1.png';
import shapeImg1 from '../../assets/img/about/about-shape-1.png';
import shapeImg2 from '../../assets/img/about/about-shape-2.png';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="about__area pb-100 p-relative">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='PO_fBTkoznc' onClose={() => { openModal(); }} />
            <div className="about__shape-1 d-none d-md-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="about__shape-2 d-none d-xl-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInLeft" data-wow-duration="1.1s">
                        <div className="about__img">
                            <img src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="about__section-box pb-10">
                            <h4 className="section-subtitle char-anim">About Me</h4>
                            <h3 className="section-title char-anim">Delivering Excellence in Technology and Research
                            </h3>
                        </div>
                        <div className="about__content">
                            <p className="char-anim-2">With 8+ years of professional experience, I have great contribution in research and development</p>
                        </div>
                        <div className="about__list-item">
                            <ul>
                                <li>
                                    <i className="far fa-check"></i>
                                    <span>8 h-index in Scopus</span>
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    <span>Taught students from 12+ countries</span>
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    <span>6+ Workshops conducted</span>
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    <span>36 Publications indexed in Scopus</span>
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    <span>9 Books authored and edited</span>
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    <span>170 Citations in academic research</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row gx-0">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 about__border-right">
                                <div className="about__contact-box d-flex align-items-center">
                                    <div className="about__contact-icon">
                                        <span><i className="fas fa-phone-alt"></i></span>
                                    </div>
                                    <div className="about__contact-number">
                                        <a href="mailto:contact@narayanvyas.com">contact@narayanvyas.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div
                                    className="about__video d-flex justify-content-md-center justify-content-start align-items-center">
                                    <div className="about__video-icon">
                                        <a className="popup-video" onClick={() => { openModal(); }} href="#"><i className="fas fa-play"></i></a>
                                    </div>
                                    <div className="about__video-text">
                                        <Link to="#" onClick={() => { openModal(); }} >Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;