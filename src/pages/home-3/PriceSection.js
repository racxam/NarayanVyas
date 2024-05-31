import React from 'react';
import { Link } from 'react-router-dom';

const Price = () => {

    return (
        <div className="price__area price__plr price__space grey-bg">
            <div className="container-fluid">
                <div className="row align-items-end mb-60">
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="feature__section-box">
                            <h4 className="section-blue-subtitle char-anim">Our Pricing Planing</h4>
                            <h3 className="section-title char-anim">IExperts in Every Aspect <br/>
                                Service lifecscle</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="price__top-text">
                            <p className="mb-0 char-anim-2">Business tailored it design help ambitious businesses like yours generate more
                                building driving web traffice management & support services profits to be
                                business agency elit, sed do eiusmod tempor. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="price__item text-center">
                            <div className="price__top-content">
                                <div className="price__icon">
                                <span><i className="fal fa-thumbs-up"></i></span>
                                </div>
                                <div className="price__text">
                                <h5 className="price__title-sm"><a href="#">Basic This Plan</a></h5>
                                </div>
                            </div>
                            <div className="price__content-list">
                                <ul>
                                    <li>$25</li>
                                    <li>We are privileged to work with.</li>
                                    <li>24/7 system monitoring</li>
                                    <li>Encourage every team member</li>
                                    <li>Remote best support</li>
                                    <li>Barriers preventing people.</li>
                                </ul>
                            </div>
                            <div className="price__button">
                                <Link className="main-btn tp-btn-hover alt-color-black" to="/price"><span>Learn More</span><b></b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="price__item text-center active">
                            <div className="price__top-content">
                                <div className="price__icon">
                                    <span><i className="fal fa-handshake"></i></span>
                                </div>
                                <div className="price__text">
                                    <h5 className="price__title-sm"><a href="#">Standard This Plan</a></h5>
                                </div>
                            </div>
                            <div className="price__content-list">
                                <ul>
                                    <li>$63</li>
                                    <li>We are privileged to work with.</li>
                                    <li>24/7 system monitoring</li>
                                    <li>Encourage every team member</li>
                                    <li>Remote best support</li>
                                    <li>Barriers preventing people.</li>
                                </ul>
                            </div>
                            <div className="price__button">
                                <Link className="main-btn white-bg tp-btn-hover alt-color-black" to="/price"><span>Learn More</span><b></b></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="price__item text-center">
                            <div className="price__top-content">
                                <div className="price__icon">
                                    <span><i className="fal fa-hand-holding-usd"></i></span>
                                </div>
                                <div className="price__text">
                                    <h5 className="price__title-sm"><a href="#">Premium This Plan</a></h5>
                                </div>
                            </div>
                            <div className="price__content-list">
                                <ul>
                                    <li>$95</li>
                                    <li>We are privileged to work with.</li>
                                    <li>24/7 system monitoring</li>
                                    <li>Encourage every team member</li>
                                    <li>Remote best support</li>
                                    <li>Barriers preventing people.</li>
                                </ul>
                            </div>
                            <div className="price__button">
                                <Link className="main-btn tp-btn-hover alt-color-black" to="/price"><span>Learn More</span><b></b></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;