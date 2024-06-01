import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/cta/cta-bg.png';

const CTA = (props) => {
	const { ctaBG, ctaClass, Title, Description, btnText, btnURL } = props;

	return (
		<div className={ctaClass ? ctaClass : 'cta__area cta__bg cta__bg-2 cta__plr p-relative wow animate__fadeInUp'} data-wow-duration="1.1s" style={{ backgroundImage: `url(${ctaBG ? ctaBG : bgImg})` }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta__section-wrapper text-center">
							<div className="cta__section-box">
								<h4 className="cta__title text-white wow animate__fadeInUp" data-wow-duration="1.1s">{Title ? Title : 'Need Help?'}</h4>
								<p className="text-white  wow animate__fadeInUp" data-wow-duration="1.1s">{Description ? Description : 'Book an Appointment for Expert Consultancy Schedule a session for Mobile App Development consultancy or Research Guidance tailored to your needs.'}</p>
							</div>
							<div className="cta__btn wow animate__fadeInUp" data-wow-duration="1.1s">
								<Link to={`/${btnURL ? btnURL : 'appointments'}`} className="white-btn tp-btn-hover alt-color"><span>{btnText ? btnText : 'Get Started'}</span><b></b></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CTA;




