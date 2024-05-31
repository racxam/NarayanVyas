import React from 'react';
import { Link } from 'react-router-dom';

import Shape from '../../assets/img/service/sv-item-shape-1.png'
import Image from '../../assets/img/service/sv-icon-shape-1.png'

const SingleServiceFour = (props) => {
	const { itemClass, titleClass, shapeImg, serviceIconBg, Title, Description, btnText, btnURL, btnClass } = props;
	return(
        <div className={itemClass ? itemClass : 'service__item service__item-bg p-relative fix'}>
            <div className="service__shape-1">
                <img src={Shape ? Shape : shapeImg} alt="" />
            </div>
            <div className="service__icon-wrapper pb-25 p-relative">
                <div className="service__icon-bg">
                    <img src={serviceIconBg ? serviceIconBg : Image} alt="" />
                </div>
                <div className="service__inner-icon inner-hight">
                    <span><a href="#"><i className="fal fa-plug"></i></a></span>
                </div>
            </div>
            <div className="service__content">
                <h4 className={titleClass ? titleClass : 'service__title service__title-color-1'}>
                    <Link to={`/${btnURL ? btnURL : 'service-details'}`}>{Title ? Title : 'Get Latest Updates'} </Link>
                </h4>
                <p className="text-white">{Description ? Description : 'Business building it before the tab providet management, Payroll & Worksite Services full-fledged.'}</p>
            </div>
            <div className={btnClass ? btnClass : 'service__link service__link-color-1'}>
                <Link to={`/${btnURL ? btnURL : 'service-details'}`}>
                    {btnText ? btnText : 'Read More'}<i className="fal fa-arrow-right"></i>
                </Link>
            </div>
        </div>
	)
}

export default SingleServiceFour