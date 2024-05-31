import React from 'react';
import CTA from '../../components/CTA';
import Faq from '../../components/Faq';
import Breadcrumb from '../../components/Breadcrumb';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

import serviceImg1 from '../../assets/img/service/service-details-1.jpg';
import serviceImg2 from '../../assets/img/service/service-details-2.jpg';

const ServiceDetailsMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle= "Service Details"
			/>
			
			<div className="service-details__area service-details__plr mt-110 mb-30">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-8 col-lg-7 wow animate__fadeInLeft" data-wow-duration="1.1s">
							<div className="service-details__main-img">
								<img src={serviceImg1} alt="" />
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 wow animate__fadeInRight" data-wow-duration="1.1s">
							<div className="service-details__service-item">
								<h4>All Service</h4>
								<ul>
									<li>Quality of an existing </li>
									<li>Agency best service</li>
									<li>Dedicate product best</li>
									<li>Team can help achieve</li>
									<li>Your business goals</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-12">
							<div className="service-details__item pt-40 wow animate__fadeInUp" data-wow-duration="1.1s">
								<div className="service-details__text">
									<p>will reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our professional this to It uses a dictionary of 2200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonableis therefore always free from repetition, injected humour,sure there isn’t anything embarrassing hidden in the middle of text. reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our professiona <br/> uses a dictionary of 2200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
									<p>will reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our professional this to It uses a dictionary of 2200 Latin<br/> words, combined with a handful of model sentence structures</p>
								</div>
								<div className="service-details__list wow animate__fadeInUp" data-wow-duration="1.1s">
									<ul>
										<li><i className="fal fa-check-square"></i><span>Great Depression.</span></li>
										<li><i className="fal fa-check-square"></i><span>Expertise & Innovation.</span></li>
										<li><i className="fal fa-check-square"></i><span>Leading Industrial.</span></li>
										<li><i className="fal fa-check-square"></i><span>Best Service.</span></li>
										<li><i className="fal fa-check-square"></i><span>Best Collection.</span></li>
										<li><i className="fal fa-check-square"></i><span>Service Industrial.</span></li>
										<li><i className="fal fa-check-square"></i><span>Great Depression.</span></li>
										<li><i className="fal fa-check-square"></i><span>Expertise & Innovation.</span></li>
										<li><i className="fal fa-check-square"></i><span>Great Depression.</span></li>
										<li><i className="fal fa-check-square"></i><span>Expertise & Innovation.</span></li>
										<li><i className="fal fa-check-square"></i><span>Leading Industrial.</span></li>
										<li><i className="fal fa-check-square"></i><span>Great Depression.</span></li>
									</ul>
								</div>
								<div className="service-details__main-img-2 wow animate__fadeInUp" data-wow-duration="1.1s">
									<img src={serviceImg2} alt="" />
								</div>            
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<div className="service-details__section-box">
								<h4 className="section-title">Save This Managing About The 
								Media For Business Elevate.</h4>
							</div>  
						</div>
						<div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<div className="service-details__right-text">
								<p>We generate Lorem Ipsum which looks reasonableis therefore always free from repetition, injected humour,sure there isn’t anything embarrassing hidden in the middle of text. reenergize your ome and enhance your life.</p>
							</div>  
						</div>
						<div className="col-xl-12 col-lg-12 mb-30">  
							<Faq />       
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

export default ServiceDetailsMain;