import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../SectionTitle'

import socialImg1 from '../../assets/img/social/social-1.png';

const SingleSocialFeed = (props) => {
	const { itemClass, socialImg, Title, subTitle } = props;

    return (
        <div className={itemClass ? itemClass : 'social__item social__border-color-1 d-flex justify-content-between align-items-center'}>
            <div className="social__content-box d-flex align-items-center">
                <div className="social__icon">
                    <img src={socialImg ? socialImg : socialImg1} alt="" />
                </div>
                <div className="social__text">
                    <h4 className="social__title"><a href="#">{Title ? Title : 'Slack Best'}</a></h4>
                    <span>{subTitle ? subTitle : 'MESSAGING'}</span>
                </div>
            </div>
            <div className="social__link contact__color-1">
                <a href="#"><span><i className="fal fa-arrow-right"></i></span></a>
            </div>
        </div>
    );
}

export default SingleSocialFeed;