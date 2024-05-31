import React from 'react';
import { Link } from 'react-router-dom';

import featureImg1 from '../../assets/img/feature/fea-icon-1.png';
import featureImg2 from '../../assets/img/feature/fea-icon-1.png';
import featureImg3 from '../../assets/img/feature/fea-icon-3.png';
import featureImg4 from '../../assets/img/feature/fea-icon-4.png';
import featureImg5 from '../../assets/img/feature/fea-icon-5.png';

const Feature = () => {

    return (
        <div className="feature-2__area feature-2__mlr pb-60">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl col-xl-4 col-lg-4 col-sm-6 col-md-4 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="feature-2__item text-center">
                            <div className="feature-2__item-overly"></div>
                            <div className="feature-2__icon feature-2__icon-color-1 z-index">
                                <span><img src={featureImg1} alt="" /></span>
                            </div>
                            <div className="feature-2__text z-index">
                                <h4 className="feature-2__title-sm">Development</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl col-xl-4 col-lg-4 col-sm-6 col-md-4 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="feature-2__item text-center">
                            <div className="feature-2__item-overly"></div>
                            <div className="feature-2__icon feature-2__icon-color-2 z-index">
                                <span><img src={featureImg2} alt="" /></span>
                            </div>
                            <div className="feature-2__text z-index">
                                <h4 className="feature-2__title-sm">Marketing</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl col-xl-4 col-lg-4 col-sm-6 col-md-4 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="feature-2__item text-center">
                            <div className="feature-2__item-overly"></div>
                            <div className="feature-2__icon feature-2__icon-color-3 z-index">
                                <span><img src={featureImg3} alt="" /></span>
                            </div>
                            <div className="feature-2__text z-index">
                                <h4 className="feature-2__title-sm">Promoting</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl col-xl-4 col-lg-4 col-sm-6 col-md-4 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="feature-2__item text-center">
                            <div className="feature-2__item-overly"></div>
                            <div className="feature-2__icon feature-2__icon-color-4 z-index">
                                <span><img src={featureImg4} alt="" /></span>
                            </div>
                            <div className="feature-2__text z-index">
                                <h4 className="feature-2__title-sm">Optimization</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl col-xl-4 col-lg-4 col-sm-6 col-md-4 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="feature-2__item text-center">
                            <div className="feature-2__item-overly"></div>
                            <div className="feature-2__icon feature-2__icon-color-5 z-index">
                                <span><img src={featureImg5} alt="" /></span>
                            </div>
                            <div className="feature-2__text z-index">
                                <h4 className="feature-2__title-sm">Discovery</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;