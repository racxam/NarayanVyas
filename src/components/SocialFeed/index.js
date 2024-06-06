import React from 'react';

import socialImg1 from '../../assets/img/social/social-1.png';
import socialImg2 from '../../assets/img/social/social-2.png';
import socialImg3 from '../../assets/img/social/social-3.png';
import socialImg4 from '../../assets/img/social/social-4.png';
import Globals from '../../Globals';

const SocialFeed = (props) => {
    return (
        <div className="row">
            <div className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                <div className="social__item social__border-color-2 d-flex align-items-center justify-content-between">
                    <div className="social__content-box d-flex align-items-center">
                        <div className="social__icon">
                            <img src={socialImg2} alt="" />
                        </div>
                        <div className="social__text">
                            <h4 className="social__title"><a href={Globals.facebookUrl} target='_blank'>Instagram</a></h4>
                            <span>{Globals.facebookUsername}</span>
                        </div>
                    </div>
                    <div className="social__link social__color-2">
                        <a href={Globals.facebookUrl} target='_blank'><span><i className="fal fa-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                <div className="social__item social__border-color-4 d-flex align-items-center justify-content-between">
                    <div className="social__content-box d-flex align-items-center">
                        <div className="social__icon">
                            <img src={socialImg4} alt="" />
                        </div>
                        <div className="social__text">
                            <h4 className="social__title"><a href={Globals.linkedinUrl} target='_blank' rel='noreferrer'>Linkedin </a></h4>
                            <span>{Globals.linkedinUsername}</span>
                        </div>
                    </div>
                    <div className="social__link social__color-4">
                        <a href={Globals.linkedinUrl} target='_blank'><span><i className="fal fa-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 d-xl-none d-xxl-block wow animate__fadeInUp" data-wow-duration="1.1s">
                <div className="social__item social__border-color-1 d-flex justify-content-between align-items-center">
                    <div className="social__content-box d-flex align-items-center">
                        <div className="social__icon">
                            <img src={socialImg1} alt="" />
                        </div>
                        <div className="social__text">
                            <h4 className="social__title"><a href={Globals.githubUrl} target='_blank'>GitHub</a></h4>
                            <span>{Globals.githubUsername}</span>
                        </div>
                    </div>
                    <div className="social__link contact__color-1">
                        <a href={Globals.githubUrl} target='_blank'><span><i className="fal fa-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                <div className="social__item social__border-color-3 d-flex align-items-center justify-content-between">
                    <div className="social__content-box d-flex align-items-center">
                        <div className="social__icon">
                            <img src={socialImg3} alt="" />
                        </div>
                        <div className="social__text">
                            <h4 className="social__title"><a href={`${Globals.globalEmailUrl}`} target='_blank'>Gmail</a></h4>
                            <span>{Globals.globalEmail}</span>
                        </div>
                    </div>
                    <div className="social__link social__color-3">
                        <a href={`${Globals.globalEmailUrl}`} target='_blank'><span><i className="fal fa-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialFeed;