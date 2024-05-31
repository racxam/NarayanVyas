import React from 'react';
import { Link } from 'react-router-dom';


import featureShape from '../../assets/img/feature/fea-item-spahe-1.png';

import featureImg from '../../assets/img/feature/fea-1.png';

const SingleFeatureTwo = (props) => {
	const { Shape, Image, Title, Description, btnText, btnURL } = props;

	return (
		<div className="feature__item item-space feature__color-1 text-center p-relative">
			<div className="feature__item-shape">
				<img src={Shape ? Shape : featureShape} alt="" />
			</div>
			<div className="feature__icon icon-space z-index">
				<span>
					<img src={Image ? Image : featureImg} alt="" />
				</span>
			</div>
			<div className="feature__content pt-50">
				<h4 className="feature__title title-border">{Title ? Title : 'Creative Design'}</h4>
				<p>{Description ?Description : 'Business is the knowledge or master event. Identify the error of the we website coding page speed.'}</p>
			</div>
			<div className="feature__link">
				<Link to={`/ ${btnURL ? btnURL : 'service-details'}`}>{btnText ? btnText : 'See More'}<i className="far fa-arrow-right"></i></Link>
			</div>
		</div>
	);
}

export default SingleFeatureTwo;




