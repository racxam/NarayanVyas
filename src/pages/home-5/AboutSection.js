import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/img/about/about-4.png';

import shapeImg1 from '../../assets/img/about/about-shape-6.png';
import shapeImg2 from '../../assets/img/about/about-shape-7.png';
import shapeImg3 from '../../assets/img/about/about-shape-8.png';
import shapeImg4 from '../../assets/img/about/about-shape-1.png';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="about-4__area about-4__plr black-bg-2 p-relative">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='PO_fBTkoznc' onClose={() => { openModal(); }} />
            <div className="about-4__shape-1 d-none d-xl-block">
               <img src={shapeImg1} alt="" />
            </div>
            <div className="about-4__shape-2 d-none d-xxl-block">
               <img src={shapeImg2} alt="" />
            </div>
            <div className="about-4__shape-3 d-none d-xxl-block">
               <img src={shapeImg3} alt="" />
            </div>
            <div className="about-4__shape-4 d-none d-lg-block">
               <img src={shapeImg2} alt="" />
            </div>
            <div className="about-4__shape-5 d-none d-lg-block">
               <img src={shapeImg4} alt="" />
            </div>
            <div className="about-4__bg">
               <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 wow animate__fadeInLeft" data-wow-duration="1.1s">
                            <div className="about-4__main-img text-center text-lg-start">
                                <img src={aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 wow animate__fadeInRight" data-wow-duration="1.1s"
                        >
                            <div className="about-4__item">
                                <div className="about-4__section-title pb-10">
                                    <h4 className="section-subtitle section-white-bg char-anim">Our About Now</h4>
                                    <h3 className="section-title text-white char-anim">We Managing Laren About <br/>
                                        Agency For Business.
                                    </h3>
                                </div>
                                <div className="about-4__content">
                                    <div className="about-4__text pb-7 wow animate__fadeInUp" data-wow-duration="1.1s"
                                    >
                                        <p className="char-anim-2">Business tailored it design, management & support services
                                            business agency elit, sed do eiusmod tempor. </p>
                                    </div>
                                    <div className="about-4__content-list wow animate__fadeInUp" data-wow-duration="1.1s"
                                    >
                                        <ul>
                                            <li><i className="fal fa-check-square"></i><span>Business sagittis leo service best
                                                company agency.</span></li>
                                            <li><i className="fal fa-check-square"></i><span>We give management service
                                                smart.</span></li>
                                        </ul>
                                    </div>
                                    <div className="about-4__button-box">
                                        <div className="about-4__button d-flex align-items-center">
                                            <div className="about-4__video wow animate__fadeInUp" data-wow-duration="1.1s"
                                            >
                                                <Link className="popup-video" to="#" onClick={() => { openModal(); }}><span><i className="fas fa-play"></i></span></Link>
                                            </div>
                                            <div className="about-4__video-text wow animate__fadeInUp" data-wow-duration="1.1s"
                                            >
                                                <a href="#"><span>Watch Video</span></a>
                                            </div>
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