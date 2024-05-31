import React from 'react';
import { Link } from 'react-router-dom';

import featureImg from '../../assets/img/feature/fea-1.png';

const SingleFeature = (props) => {
	const { Title, Description, Image, btnText, btnURL } = props;

	return (
		<div className="feature__item feature__color-3 text-center">
			<div className="feature__icon z-index">
				<span>
					<img src={Image ? Image : featureImg} alt={Title} />
				</span>
			</div>
			<div className="feature__content">
				<h4 className="feature__title">{Title ? Title : 'Online Marketing'}</h4>
				<p>{Description ? Description : 'Business is the knowledge or master event. Identify the error of the we website coding page speed.'}</p>
			</div>
			<div className="feature__link">
				<Link to={`/ ${btnURL ? btnURL : 'service-details'}`}>{btnText ? btnText : 'See More'}<i className="far fa-arrow-right"></i></Link>
			</div>
		</div>
	);
}

export default SingleFeature;




