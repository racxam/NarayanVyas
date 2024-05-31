import React from 'react';
import { Link } from 'react-router-dom';

import workIcon1 from '../../assets/img/work/work-icon-1.png';
import workIcon2 from '../../assets/img/work/work-icon-2.png';
import workIcon3 from '../../assets/img/work/work-icon-3.png';

const Work = () => {

    return (
        <div className="work-3__area work-3__plr work-3__space black-bg-2">
            <div className="container-fluid">
               <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="work-3__left-side">
                            <div className="work-3__section-box">
                                <h4 className="section-subtitle section-white-bg char-anim wow animate__fadeInUp" data-wow-duration="1.1s">Our Working Process</h4>
                                <h3 className="section-title text-white char-anim wow animate__fadeInUp" data-wow-duration="1.1s">We Best Great Service <br/>
                                    with Process
                                </h3>
                            </div>
                            <div className="work-3__text wow animate__fadeInUp" data-wow-duration="1.1s">
                                <p className="char-anim-2">Business tailored it design, management & support services
                                business agency elit, sed do eiusmod tempor. </p>
                            </div>
                            <div className="work-3__button wow animate__fadeInUp" data-wow-duration="1.1s">
                                <p>Discover our collax inner system we specialize in designing, building, shipping and scaling beautiful, usable product
                                    tailored it design, management & support services</p>
                                <Link className="main-btn tp-btn-hover alt-color-white" to="/about-us">
                                    <span>Get Started</span>
                                    <b></b>
                                </Link>   
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="work-3__wrapper-box">
                            <div className="work-3__wrapper work-3__item-1 mb-30">
                                <div className="work-3__item">
                                    <div className="work-3__content d-flex align-items-center mb-15">
                                        <div className="work-3__icon icon-color-1">
                                            <span><i className="fas fa-lightbulb-on"></i></span>
                                        </div>
                                        <div className="work-3__title">
                                            <h4 className="work-3__section-title title-color-1"><Link to="/project-details">Social This Promotion</Link></h4>
                                        </div>
                                    </div>
                                    <div className="work-3__right-text">
                                        <p>Business building it before the tab providet best aency srvice management, Payroll.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="work-3__wrapper work-3__item-2 mb-30">
                                <div className="work-3__item">
                                    <div className="work-3__content d-flex align-items-center mb-15">
                                        <div className="work-3__icon icon-color-2">
                                            <span><i className="fas fa-cogs"></i></span>
                                        </div>
                                        <div className="work-3__title">
                                            <h4 className="work-3__section-title title-color-2"><Link  to="/project-details"> Apply This  Principles </Link></h4>
                                        </div>
                                    </div>
                                    <div className="work-3__right-text">
                                        <p>Business building it before the tab providet best aency srvice management, Payroll.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="work-3__wrapper work-3__item-3 mb-30">
                                <div className="work-3__item">
                                    <div className="work-3__content d-flex align-items-center mb-15">
                                        <div className="work-3__icon icon-color-3">
                                            <span><i className="fas fa-chart-bar"></i></span>
                                        </div>
                                        <div className="work-3__title">
                                            <h4 className="work-3__section-title title-color-3"><Link to="/project-details">Embedded Off Systems</Link></h4>
                                        </div>
                                    </div>
                                    <div className="work-3__right-text">
                                        <p>Business building it before the tab providet best aency srvice management, Payroll.</p>
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

export default Work;