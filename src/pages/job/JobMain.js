import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';
import SingleJob from '../../components/Job';


import jobImg1 from '../../assets/img/about/job-1.png';
import jobImg2 from '../../assets/img/about/job-2.png';
import jobImg3 from '../../assets/img/about/job-3.png';
import jobImg4 from '../../assets/img/about/job-4.png';
import jobImg5 from '../../assets/img/about/job-5.png';
import jobImg6 from '../../assets/img/about/job-6.png';
import Brand from '../../components/Brand';

const JobMain = () => {
	return (
		<main>
			<Breadcrumb
			pageTitle= "Job"
			/>
			
			<div className="job__area job__plr mt-110">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleJob
								Image={jobImg1}
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleJob
								Image={jobImg2}
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleJob
								Image={jobImg3}
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleJob
								Image={jobImg4}
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleJob
								Image={jobImg5}
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleJob
								Image={jobImg6}
							/>
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

export default JobMain;