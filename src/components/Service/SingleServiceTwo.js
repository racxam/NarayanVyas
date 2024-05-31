import React from 'react';
import { Link } from 'react-router-dom';

const SingleServiceTwo = (props) => {
	const { itemClass, Icon, Title, Description, btnURL, btnText } = props;
	return(
        <div className={itemClass ? itemClass : 'service-2__item-wrapper'}>
            <div className="service-2__item d-flex z-index">
                <div className="service-2__icon">
                    <span><i className={`fal ${Icon ? Icon : 'fa-signal-4'}`}></i></span>
                </div>
                <div className="service-2__content">
                    <h4 className="service-2__title-sm"><Link to="/service-details">{Title ? Title : 'Get Latest Updates'}</Link></h4>
                    <p>{Description ? Description : 'We help ambitious businesses like yours generate more profits to be building driving web traffice'}</p>
                    <div className="service-2__link">
                        <Link to={`/${btnURL ? btnURL : 'service-details'}`}>{btnText ? btnText : 'Choose Details'}<i className="fal fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default SingleServiceTwo