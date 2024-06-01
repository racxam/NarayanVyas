import React from 'react';
import Testimonial from './TestimonialSection';
import Breadcrumb from '../../components/Breadcrumb';
import Contact from '../../components/Contact/ContactTwo';
import CTA from '../../components/CTA';
import Brand from '../../components/Brand';

import aboutImg from '../../assets/img/about/about-6.png';
import bgImg from '../../assets/img/cta/cta-bg-2.png';
import videoBg from '../../assets/img/video/video-bg-4.png';
import videoImg from '../../assets/img/video/video-bg-6.png';

import Team from './TeamSection';
import Feature from './FeatureSection';
import Work from './WorkSection';

const HomeMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle= "Book an Appointment"
			/>

			<Brand
				itemClass="brand-2__area brand-2__space"
			/>
			
			<div className="about-3__area about-3__space about-3__plr about-3__plr-2">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-6 col-md-12 mb-70 wow animate__fadeInLeft" data-wow-duration="1.1s">
							<div className="about-3__item-img p-relative">
								<img src={aboutImg} alt="" />
								<div className="about-3__button about-3__button-wrapper d-flex align-items-center">
									<div className="about-3__video">
										<a href="#"><i className="fas fa-play"></i></a>
									</div>
									<div className="about-3__video-text">
										<a href="#"><span>Watch Video</span></a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 mb-70 wow animate__fadeInRight" data-wow-duration="1.1s">
							<div className="about-3__item about-3__wrapper-item">
								<div className="about-3__section-title pb-10">
									<h4 className="section-blue-subtitle char-anim">Our About Now</h4>
									<h3 className="section-title char-anim">We Managing Laren About <br/>
									Agency For <i>Business</i>.
									</h3>
								</div>
								<div className="about-3__content">
									<div className="about-3__text pb-7">
										<p className="char-anim-2">Business tailored it design, management & support services business agency elit, sed do eiusmod tempor. </p>
									</div>
									<div className="about-3__content-list about-3__content-list-2">
										<ul>
											<li><i className="fal fa-check-square"></i><span>Business sagittis aliquaenim minim veniam leo.</span></li>
											<li><i className="fal fa-check-square"></i><span>We give management agency service. </span></li>
											<li><i className="far fa-angle-double-right"></i><span>Business tailored it design, management & services. </span></li>
										</ul>
									</div>              
									<div className="about-3__button">
										<a className="main-btn-sm tp-btn-hover alt-color" href="#">
											<span>About More</span><b></b>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<Feature />
			
			<Team />
			
			<Work />
			
			<Testimonial />
			
			<div className="funfact-2__area funfact-2__space">
				<div className="funfact-2__bg fix" style={{backgroundImage: `url(${videoBg})`}}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-6 col-lg-6 col-md-7">
								<div className="funfact-2__content">
									<div className="funfact-2__text wow animate__fadeInUp" data-wow-duration=".7s">
									<h4 className="section-title text-white char-anim wow animate__fadeInUp" data-wow-duration=".9s">Our Business Service <br/>
										Apps of Agency.</h4>
									</div> 
									<div className="funfact-2__button wow animate__fadeInUp" data-wow-duration="1.1s">
									<a className="border-btn-3 bg-color-1 mb-20 mr-15" href="#"><i className="fab fa-apple"></i> App Store</a>
									<a className="border-btn-3 bg-color-2 mb-20" href="#"><i className="fas fa-cloud"></i>Play Store</a>
									</div> 
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 col-md-5">
								<div className="funfact-2__main-img d-none d-md-block wow animate__fadeInUp" data-wow-duration="1.1s">
									<img src={videoImg} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<Contact />
			
			{/* <CTA
				ctaBG={bgImg}
				btnText="Book Appointment"
			/> */}
    </main>
	);
}

export default HomeMain;