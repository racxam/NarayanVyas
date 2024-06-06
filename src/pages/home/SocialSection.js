import React from 'react';
import { Link } from 'react-router-dom';

import SocialFeed from '../../components/SocialFeed';
import SectionTitle from '../../components/SectionTitle'

const Social = () => {

    return (
        <div className="social__area social__mlr">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xxxl-7 col-xxl-8 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SectionTitle
                            sectionClass="social__section-box pb-60 text-center section-title-fixed-width"
                            subTitle="Best Social Feed"
                            Title="Perfect Contact This Software Company Manage."
                        />
                    </div>
                </div>
                <SocialFeed />
            </div>
        </div>
    );
}

export default Social;