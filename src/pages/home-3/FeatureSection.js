import React from 'react';
import { Link } from 'react-router-dom';

import shapeImg1 from '../../assets/img/feature/fea-item-spahe-1.png';

import featureImg1 from '../../assets/img/feature/fea-1.png';
import featureImg2 from '../../assets/img/feature/fea-2.png';
import featureImg3 from '../../assets/img/feature/fea-3.png';
import featureImg4 from '../../assets/img/feature/fea-4.png';
import SingleFeatureTwo from '../../components/Feature/SingleFeatureTwo';

const Feature = () => {

    return (
        <div className="feature__area feature__mlr pt-100 pb-40">
            <div className="container-fluid">
                <div className="row align-items-end mb-150">
                    <div className="col-xl-6 col-lg-6">
                        <div className="feature__section-box">
                            <h4 className="section-blue-subtitle char-anim">We Best Features</h4>
                            <h3 className="section-title char-anim">Experts in Every Aspect <br/>
                                Service lifecscle</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="feature__top-text">
                            <p className="mb-0 char-anim-2">Business tailored it design help ambitious businesses like yours generate more
                                building driving web traffice management & support services profits to be
                                business agency elit, sed do eiusmod tempor. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleFeatureTwo
                            Image={featureImg1}
                            Title="Creative Design"
                            Description="Business is the knowledge or master event. Identify the error of the we website coding page speed."
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleFeatureTwo
                            Image={featureImg2}
                            Title="Web Development"
                            Description="Business is the knowledge or master event. Identify the error of the we website coding page speed."
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleFeatureTwo
                            Image={featureImg3}
                            Title="Online Marketing"
                            Description="Business is the knowledge or master event. Identify the error of the we website coding page speed."
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleFeatureTwo
                            Image={featureImg4}
                            Title="Graphic Design"
                            Description="Business is the knowledge or master event. Identify the error of the we website coding page speed."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;