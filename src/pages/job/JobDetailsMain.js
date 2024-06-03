import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';
import aboutImg1 from '../../assets/img/about/about-3.jpg';
import aboutImg2 from '../../assets/img/about/about-4.jpg';

const JobDetailsMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle= "Job Details"
			/>
			
			<div className="job-details__area job-details__mlr pt-110 pb-80">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-7 col-lg-7">
							<div className="job-details__item wow animate__fadeInUp" data-wow-duration="1.1s">
								<div className="job-details__author-info pb-25">
									<h5>Palli Karma-Sahayak Foundation</h5>
									<span>PRODUCT MANAGEMENT</span>
								</div>
								<div className="job-details__list pb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
									<span>Job description:</span>
									<p>There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of
									Lorem Ipsum Fastsby we are the fast to mane agency fast takinginjected humour,by injected humou
									fao go not be hie best to those who through weakness .....</p>
									<ul>
									<li>Standard campaign-level metrics such as how many users have entered</li>
									<li>How many exited are readily available in Leanplum. Also automatically captured
										and calculated are a host of metrics to help you. </li>
									<li>We area best understand user interaction with campaign messages</li>
									<li>Standard campaign-level metrics such as how many users have entered
										Gaining a deep understanding of our customers’ needs, requirements,
										feedback systems, and performing data analysis.</li>
									</ul> 
									<div className="job-details__img pt-30 pb-45">
										<img src={aboutImg1} alt="" />
									</div>
									<ul>
									<li>Required skills : 4-year experience in managing complex digital products; 
										C1+ English; experience in Agile</li>
									<li>Location : rangpur,dhaka remotely in the EU </li>
									</ul> 
								</div>
								<div className="job-details__summary pb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
									<h4>job summary:</h4>
									<ul>
									<li>
										<div className="job-details__content d-flex align-items-center">
											<div className="job-details__icon">
												<i className="fas fa-map-marker-alt"></i>
											</div>
											<div className="job-details__text">
												<span>Location</span>
												<i>London,Dhaka 0231</i>
											</div>
										</div>
									</li>
									<li>
										<div className="job-details__content d-flex align-items-center">
											<div className="job-details__icon">
												<i className="fas fa-briefcase"></i>
											</div>
											<div className="job-details__text">
												<span>Job Type</span>
												<i>Full Time</i>
											</div>
										</div>
									</li>
									<li>
										<div className="job-details__content d-flex align-items-center">
											<div className="job-details__icon">
												<i className="fas fa-dollar-sign"></i>
											</div>
											<div className="job-details__text">
												<span>Salary </span>
												<i>36k - 50k</i>
											</div>
										</div>
									</li>
									<li>
										<div className="job-details__content d-flex align-items-center">
											<div className="job-details__icon">
												<i className="fas fa-building"></i>
											</div>
											<div className="job-details__text">
												<span>Qualification</span>
												<i>B.S.S</i>
											</div>
										</div>
									</li>
									<li>
										<div className="job-details__content d-flex align-items-center">
											<div className="job-details__icon">
												<i className="far fa-pencil-alt"></i>
											</div>
											<div className="job-details__text">
												<span>Experience</span>
												<i>2 - 4 Years</i>
											</div>
										</div>
									</li>
									<li>
										<div className="job-details__content d-flex align-items-center">
											<div className="job-details__icon">
												<i className="fas fa-globe"></i>
											</div>
											<div className="job-details__text">
												<span>Website</span>
												<i>demo.com</i>
											</div>
										</div>
									</li>
									</ul>
								</div>
								<div className="job-details__img pb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
									<img src={aboutImg2} alt="" />
								</div>
								<div className="job-details__text-2 wow animate__fadeInUp" data-wow-duration="1.1s">
									<p>There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of
									Lorem Ipsum Fastsby we are the fast to mane agency fast takinginjected humour,by injected humou
									fao go not be hie best to those who through weakness .....</p>
									<p>Lorem Ipsum generators on the Internet tend to repeat predefined necessary making this
									the first true generator or sit amet, consectetur adipiscing.</p>  
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-lg-5 job-right-box wow animate__fadeInUp" data-wow-duration="1.1s">
							<div className="row">
								<div className="col-sm-6">
									<div className="postbox__contact-input">
									<input type="text" placeholder="Your Name" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="postbox__contact-input">
									<input type="email" placeholder="Your Email" />
									</div>
								</div>
								<div className="col-sm-12">
									<div className="postbox__contact-textarea mb-30">
									<textarea placeholder="Message"></textarea>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="postbox__submit-btn">
									<button className="w-100 it-btn">Apply Now</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<CTA
				btnText={"Book Appointment"}
			/>
		</main>
	);
}

export default JobDetailsMain;