import React from 'react';
import { Link } from 'react-router-dom';

import workBg from '../../assets/img/work/wk-bg.png';

import shapeImg1 from '../../assets/img/work/work-shape-11.png';
import shapeImg2 from '../../assets/img/slider/shape-20.png';
import shapeImg3 from '../../assets/img/slider/shape-17.png';

import workImg1 from '../../assets/img/work/wk-1.png';
import workImg2 from '../../assets/img/work/wk-2.png';
import workImg3 from '../../assets/img/work/wk-3.png';
import workImg4 from '../../assets/img/work/wk-4.png';

const WorkTwo = () => {

    return (
        <div className="work-2__area work-2__space work-2__bg work-2__plr p-relative">
            <div className="work-2__shape-1  d-none d-lg-block">
                <img src={workBg} alt="" />
            </div>
            <div className="work-2__shape-2 d-none d-xl-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="work-2__shape-3 d-none d-xl-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="work-2__shape-4 d-none d-xl-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="work-2__section-box text-center pb-40">
                            <h5 className="section-subtitle section-white-bg title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Our Working Agency</h5>
                            <h4 className="section-title text-white title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Perfectfrom customers Work</h4>
                        </div>
                    </div>
                </div>
                <div className="work-2__item-bg">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="work-2__item-box z-index text-center">
                                <div className="work-2__img-wraper p-relative">
                                    <div className="work-2__main-img mb-35">
                                        <img src={workImg1} alt="" />
                                        <div className="work-2__number">
                                            <span>01</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-2__content">
                                    <h4 className="work-2__title-sm"><Link to="/project-details">Markting of Business</Link></h4>
                                    <p>Being able to crank videos
                                        ocalize them different 
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="work-2__item-box z-index text-center">
                                <div className="work-2__img-wraper p-relative">
                                    <div className="work-2__main-img mb-35">
                                        <img src={workImg2} alt="" />                                    
                                        <div className="work-2__number">
                                            <span>02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-2__content">
                                    <h4 className="work-2__title-sm"><Link to="/project-details">Markting of Business</Link>
                                    </h4>
                                    <p>Being able to crank videos
                                        ocalize them different 
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="work-2__item-box z-index text-center">
                                <div className="work-2__img-wraper p-relative">
                                    <div className="work-2__main-img mb-35">
                                        <img src={workImg3} alt="" />                                    
                                        <div className="work-2__number">
                                            <span>03</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-2__content">
                                    <h4 className="work-2__title-sm"><Link to="/project-details">Markting of Business</Link></h4>
                                    <p>Being able to crank videos
                                        ocalize them different 
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="work-2__item-box z-index text-center">
                                <div className="work-2__img-wraper p-relative">
                                    <div className="work-2__main-img mb-35">
                                        <img src={workImg4} alt="" />
                                        <div className="work-2__number">
                                            <span>04</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-2__content">
                                    <h4 className="work-2__title-sm"><Link to="/project-details">Markting of Business</Link></h4>
                                    <p>Being able to crank videos
                                        ocalize them different 
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default WorkTwo;