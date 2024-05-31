import React from 'react';

import SocialFeed from '../../components/SocialFeed';
import SectionTitle from '../../components/SectionTitle'

import shapeImg1 from '../../assets/img/social/social-shape-1.png';

const Social = () => {

    return (
        <div className="social__area social__plr black-bg p-relative z-index"> 
            <div className="social__shape-1  d-none d-xl-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xxxl-7 col-xxl-8 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SectionTitle
                            sectionClass= "social__section-box pb-60 text-center section-title-fixed-width"
                            titleClass= "section-title text-white title-anim"
                            subTitleClass= "section-subtitle section-white-bg title-anim"
                            subTitle= "Best Social Feed"
                            Title= "Perfect Contact This Software Company Manage"
                        />
                    </div>
                </div>
                <SocialFeed />
            </div>
        </div>
    );
}

export default Social;