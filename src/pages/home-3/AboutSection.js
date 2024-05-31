import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/img/about/about-3.png';
import shapeImg1 from '../../assets/img/about/about-shape-1.png';
import shapeImg2 from '../../assets/img/about/about-shape-2.png';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="about-3__area about-3__space about-3__plr p-relative">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='PO_fBTkoznc' onClose={() => { openModal(); }} />
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-70 wow animate__fadeInLeft" data-wow-duration="1.1s">
                        <div className="about-3__item">
                            <img src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-70 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="about-3__item">
                            <div className="about-3__section-title pb-10">
                                <h4 className="section-blue-subtitle char-anim">Our About Now</h4>
                                <h3 className="section-title char-anim">We Managing Laren About <br/>
                                Agency For Business.
                                </h3>
                            </div>
                            <div className="about-3__content">
                                <div className="about-3__text pb-7">
                                    <p className="char-anim-2">Business tailored it design, management & support services
                                        business agency elit, sed do eiusmod tempor. </p>
                                    </div>
                                    <div className="about-3__content-list wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <ul>
                                        <li><i className="fal fa-check-square"></i><span>Business sagittis leo.</span></li>
                                        <li><i className="fal fa-check-square"></i><span>We give management</span></li>
                                        <li><i className="fal fa-check-square"></i><span>Unlimited Bandwidth</span></li>
                                        <li><i className="fal fa-check-square"></i><span>Business management</span></li>
                                    </ul>
                                    <div className="about-3__text">
                                        <p>Business tailored it design, management & support services
                                            business agency elit, sed do eiusmod tempor. </p>
                                    </div>
                                </div>
                                <div className="about-3__button-box d-flex align-items-center">
                                    <div className="about-3__button pr-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                                        <Link className="main-btn-sm tp-btn-hover alt-color" to="/about-us">
                                            <span>About More</span>
                                            <b></b>
                                        </Link>
                                    </div>
                                    <div className="about-3__button d-flex align-items-center wow animate__fadeInUp" data-wow-duration="1.1s">
                                        <div className="about-3__video">
                                            <Link className="popup-video" to="#" onClick={() => { openModal(); }}><i className="fas fa-play"></i></Link>
                                        </div>
                                        <div className="about-3__video-text">
                                            <Link to="#" onClick={() => { openModal(); }}><span>Watch Video</span></Link>
                                        </div>
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