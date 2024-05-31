import React from 'react';
import { Link } from 'react-router-dom';

import SocialFeed from '../../components/SocialFeed';
import SectionTitle from '../../components/SectionTitle'

import socialImg1 from '../../assets/img/social/social-1.png';
import socialImg2 from '../../assets/img/social/social-2.png';
import socialImg3 from '../../assets/img/social/social-3.png';
import socialImg4 from '../../assets/img/social/social-4.png';

const Social = () => {

    return (
        <div className="social__area social__mlr pt-100 pb-70">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xxxl-7 col-xxl-8 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SectionTitle
                            sectionClass= "social__section-box pb-60 text-center section-title-fixed-width"
                            subTitle= "Best Social Feed"
                            Title= "Perfect Contact This Software Company Manage."
                        />
                    </div>
                </div>
                <SocialFeed />
            </div>
        </div>
    );
}

export default Social;