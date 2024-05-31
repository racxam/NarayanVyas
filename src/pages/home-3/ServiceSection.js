import React from 'react';
import { Link } from 'react-router-dom';

import shapeImg1 from '../../assets/img/service/sv-shape-5.png';
import shapeImg2 from '../../assets/img/service/sv-shape-6.png';
import shapeImg3 from '../../assets/img/service/sv-shape-7.png';
import shapeImg4 from '../../assets/img/service/sv-shape-8.png';
import shapeImg5 from '../../assets/img/service/sv-shape-9.png';
import SingleServiceTwo from '../../components/Service/SingleServiceTwo';

const Service = () => {

    return (
        <div className="service-2__area service-2__space service-2__plr grey-bg p-relative">
            <div className="service-2__shape-1 d-none d-xxl-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="service-2__shape-2 d-none d-xxl-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="service-2__shape-3 d-none d-md-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="service-2__shape-4 d-none d-xl-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="service-2__shape-5 d-none d-lg-block">
                <img src={shapeImg5} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row align-items-end mb-60">
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="service-2__section-box">
                            <h4 className="section-blue-subtitle char-anim">Our Best Service</h4>
                            <h3 className="section-title char-anim">Experts in Every Aspect <br/>
                                Service lifecscle</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="service-2__top-text pt-35">
                            <p className="mb-0 char-anim-2">Business tailored it design help ambitious businesses like yours generate more
                                building driving web traffice management & support services profits to be
                                business agency elit, sed do eiusmod tempor. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleServiceTwo 
                            Icon="fa-signal-4"
                            Title="Get Latest Updates"
                        />
                    </div>
                    <div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleServiceTwo 
                            Icon="fa-globe"
                            Title="Research & Surveys"
                        />
                    </div>
                    <div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleServiceTwo 
                            Icon="fa-lightbulb-on"
                            Title="Social This Promotion"
                        />
                    </div>
                    <div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleServiceTwo 
                            Icon="fa-hand-holding-water"
                            Title="Growth base Marketing"
                        />
                    </div>
                    <div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleServiceTwo 
                            Icon="fa-bullhorn"
                            Title="Get Latest Updates"
                        />
                    </div>
                    <div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleServiceTwo 
                            Icon="fa-user-headset"
                            Title="Agency Best Service"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;