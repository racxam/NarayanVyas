import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const RegisterMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle= "Register"
			/>
			
			<div className="Register__area Register__plr mt-100 mb-70">
				<div className="container">
					<div className="row justify-content-center">
					<div className="col-xl-10">
						<div className="Register__box">
							<h4 className="Register__title wow animate__fadeInUp" data-wow-duration="1.1s">Register your Account</h4>
							<div className="Register__form">
								<form action="#">
								<div className="row">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
										<input type="text" placeholder="First Name*" />
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
										<input type="text" placeholder="Last Name*" />
									</div>
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 wow animate__fadeInUp" data-wow-duration="1.1s">
										<input type="email" placeholder="Email*" />
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
										<input type="password" placeholder="Password*" />
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
										<input type="password" placeholder="Confirm Password*" />
									</div>
									<div className="Register__checkbox wow animate__fadeInUp" data-wow-duration="1.1s">
										<input type="checkbox" id="Remember" name="fav_language" value="Remember" />
										<label for="Remember">I agree with the Team of service</label>
									</div>
									<div className="button wow animate__fadeInUp" data-wow-duration="1.1s">
										<button className="yellow-btn tp-btn-hover alt-color"><span>REGISTER NOW</span>
										<b></b></button>
									</div>
								</div>
								</form>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			
			<CTA
				ctaBG={bgImg}
			/>

    </main>
	);
}

export default RegisterMain;