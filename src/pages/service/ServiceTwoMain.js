import React from 'react';
import CTA from '../../components/CTA';
import Breadcrumb from '../../components/Breadcrumb';
import SingleServiceTwo from '../../components/Service/SingleServiceTwo';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const ServiceTwoMain = () => {
	return (
		<main>

			<Breadcrumb
				pageTitle= "Service Two"
			/>
			
			<div className="service-2__area service-2__space service-2__plr">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceTwo 
								Icon="fa-signal-4"
								Title="Get Latest Updates"
							/>
						</div>
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceTwo 
								Icon="fal fa-globe"
								Title="Research & Surveys"
							/>
						</div>
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceTwo 
								Icon="fal fa-lightbulb-on"
								Title="Social This Promotion"
							/>
						</div>
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceTwo 
								Icon="fal fa-hand-holding-water"
								Title="Growth base Marketing"
							/>
						</div>
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceTwo 
								Icon="fas fa-bullhorn"
								Title="Get Latest Updates"
							/>
						</div>
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceTwo 
								Icon="fal fa-hand-holding-water"
								Title="Agency best Service"
							/>
						</div>
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceTwo 
								Icon="far fa-cog"
								Title="Gear Best Service"
							/>
						</div>
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceTwo 
								Icon="fas fa-landmark"
								Title="Support Agency"
							/>
						</div>
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceTwo 
								Icon="fas fa-key"
								Title="Ideation & Evaluation"
							/>
						</div>
						<div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s" data-wow-delay="2.5s">
							<SingleServiceTwo 
								Icon="fal fa-hand-holding-water"
								Title="Online Marketing"
							/>
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

export default ServiceTwoMain;