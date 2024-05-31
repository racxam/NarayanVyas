import React from 'react';
import { Link } from 'react-router-dom';

import shapeImg from '../../assets/img/work/work-shape-1.png';

import workIcon from '../../assets/img/work/work-icon-1.png';

const SingleServiceThree = (props) => {
	const { itemClass, borderClass, btnClass, titleClass, Icon, Shape, Title, Description } = props;
	return(
        <div className={itemClass ? itemClass : 'work__wrapper text-center'}>
            <div className="work__item-box">
                <div className={borderClass ? borderClass :'work__item item-bg-1'}>
                    <div className="work__content">
                        <h4 className={titleClass ? titleClass :'work__title-sm work__title-color-1'}>
                            <Link to="/service-details">{Title ? Title : 'Growth of Marketing Solution'}</Link>
                        </h4>
                        <p>{Description ? Description : 'Business building it before the tab providet management, Payroll & Worksite Services full-fledged applica best agency'}</p>
                    </div>
                    <div className="work__icon">
                        <img src={Icon ? Icon : workIcon} alt="" />
                    </div>
                    <div className="work__shape">
                        <img src={Shape ? Shape : shapeImg} alt="" />
                    </div>
                </div>
            </div>
            <div className={btnClass ? btnClass :'work__link link-bg-1'}>
                <Link to="/service-details">
                    <span><i className="far fa-long-arrow-alt-right"></i></span>
                </Link>
            </div>
        </div>
	)
}

export default SingleServiceThree