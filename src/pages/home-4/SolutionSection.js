import React from 'react';
import { Link } from 'react-router-dom';

import shapeImg1 from '../../assets/img/work/work-shape-4.png';
import shapeImg2 from '../../assets/img/work/work-shape-5.png';
import shapeImg3 from '../../assets/img/work/work-shape-6.png';
import shapeImg4 from '../../assets/img/work/work-shape-7.png';

const Solution = () => {

    return (
        <div className="solution-area solution__plr solution__space p-relative">
            <div className="solution__shape-1 d-none d-lg-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="solution__shape-2 d-none d-lg-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="solution__shape-3 d-none d-lg-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="solution__shape-4 d-none d-xxl-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="container-fluid">
                <div className="solution__wrapper">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="skill__section-box text-center mb-50">
                                <h5 className="section-subtitle title-anim wow animate__fadeInUp" data-wow-duration="1.1s">What We Provide</h5>
                                <h4 className="section-title title-anim wow animate__fadeInUp" data-wow-duration="1.1s">This Solutions For Promotin</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="solution-item">
                                <div className="solution-top text-center">
                                    <span>Digital Marketing</span>
                                </div> 
                                <div className="solution-feature-list">
                                    <ul>
                                        <li><span>Report an Issue on 311</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Housing Authority</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>City Recreation</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Pay Code Violation Fines</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Find Affordable Housing</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Parking Permission</span> <i className="far fa-long-arrow-right"></i></li>
                                    </ul>
                                </div> 
                                <div className="solution-link color-1">
                                    <Link to="/about-us">See Discover More <i className="far fa-plus"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="solution-item">
                                <div className="solution-top color-2 text-center">
                                    <span>Digital Marketing</span>
                                </div> 
                                <div className="solution-feature-list">
                                    <ul>
                                        <li><span>Report an Issue on 311</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Housing Authority</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>City Recreation</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Pay Code Violation Fines</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Find Affordable Housing</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Parking Permission</span> <i className="far fa-long-arrow-right"></i></li>
                                    </ul>
                                </div> 
                                <div className="solution-link color-2">
                                    <Link to="/about-us">See Discover More <i className="far fa-plus"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="solution-item">
                                <div className="solution-top color-3 text-center">
                                    <span>Digital Marketing</span>
                                </div> 
                                <div className="solution-feature-list">
                                    <ul>
                                        <li><span>Report an Issue on 311</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Housing Authority</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>City Recreation</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Pay Code Violation Fines</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Find Affordable Housing</span> <i className="far fa-long-arrow-right"></i></li>
                                        <li><span>Parking Permission</span> <i className="far fa-long-arrow-right"></i></li>
                                    </ul>
                                </div> 
                                <div className="solution-link color-3">
                                    <Link to="/about-us">See Discover More <i className="far fa-plus"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solution;