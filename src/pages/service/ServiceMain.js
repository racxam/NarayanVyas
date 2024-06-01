import React from 'react';
import SingleService from '../../components/Service';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';
import serviceIconBg1 from '../../assets/img/service/sv-icon-shape-13.png'
import serviceIconBg2 from '../../assets/img/service/sv-icon-shape-14.png'
import serviceIconBg3 from '../../assets/img/service/sv-icon-shape-15.png'
import serviceIconBg4 from '../../assets/img/service/sv-icon-shape-16.png'
import serviceIconBg5 from '../../assets/img/service/sv-icon-shape-17.png'
import serviceIconBg6 from '../../assets/img/service/sv-icon-shape-18.png'
import serviceIconBg7 from '../../assets/img/service/sv-icon-shape-19.png'
import serviceIconBg8 from '../../assets/img/service/sv-icon-shape-20.png'
import serviceIconBg9 from '../../assets/img/service/sv-icon-shape-21.png'
import serviceIconBg10 from '../../assets/img/service/sv-icon-shape-24.png'
import serviceIconBg11 from '../../assets/img/service/sv-icon-shape-22.png'
import serviceIconBg12 from '../../assets/img/service/sv-icon-shape-23.png'

const ServiceMain = () => {
	return (
		<main>

			<Breadcrumb
				pageTitle= "Books"
			/>
			
			<div className="service__area service__plr mt-100 mb-20 p-relative">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-1"
								titleClass= "service__title color-1"
								descClass= "text-white"
								serviceIcon= "fal fa-plug"
								serviceIconBg= {serviceIconBg1}
								Title= "Get Latest Updates"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-2"
								titleClass= "service__title color-2"
								descClass= "text-white"
								serviceIcon= "fal fa-seedling"
								serviceIconBg= {serviceIconBg2}
								Title= "Growth Marketing"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-3"
								titleClass= "service__title color-3"
								descClass= "text-white"
								serviceIcon= "fal fa-tv"
								serviceIconBg= {serviceIconBg3}
								Title= "Website Of Branding"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-4"
								titleClass= "service__title color-4"
								descClass= "text-white"
								serviceIcon= "fal fa-lightbulb-on"
								serviceIconBg= {serviceIconBg4}
								Title= "Social This Promotion"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-5"
								titleClass= "service__title color-5"
								descClass= "text-white"
								serviceIcon= "fas fa-bullhorn"
								serviceIconBg= {serviceIconBg5}
								Title= "Get Latest Updates"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-6"
								titleClass= "service__title color-6"
								descClass= "text-white"
								serviceIcon= "fal fa-user-headset"
								serviceIconBg= {serviceIconBg6}
								Title= "Agency best Service"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div> 
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-7"
								titleClass= "service__title color-7"
								descClass= "text-white"
								serviceIcon= "fas fa-cog"
								serviceIconBg= {serviceIconBg7}
								Title= "Dashboard For Web"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-8"
								titleClass= "service__title color-8"
								descClass= "text-white"
								serviceIcon= "fas fa-wifi"
								serviceIconBg= {serviceIconBg8}
								Title= "Network For Service"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-9"
								titleClass= "service__title color-9"
								descClass= "text-white"
								serviceIcon= "fad fa-chess-clock-alt"
								serviceIconBg= {serviceIconBg9}
								Title= "Right Agency Updates"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div>        
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-10"
								titleClass= "service__title color-10"
								descClass= "text-white"
								serviceIcon= "fad fa-chart-area"
								serviceIconBg= {serviceIconBg10}
								Title= "Website Of Branding"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s" data-wow-delay="2.5s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-11"
								titleClass= "service__title color-11"
								descClass= "text-white"
								serviceIcon= "far fa-compass"
								serviceIconBg= {serviceIconBg11}
								Title= "Agency best Service"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
							/> 
						</div> 
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s" data-wow-delay="2.5s">
							<SingleService
								itemClass= "service__item service__item-bg p-relative fix shape-none"
								btnClass= "service__link service__link-color-12"
								titleClass= "service__title color-12"
								descClass= "text-white"
								serviceIcon= "fas fa-chart-pie"
								serviceIconBg= {serviceIconBg12}
								Title= "Get Latest Updates"
								Description= "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
								btnText= "Read More"
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

export default ServiceMain;