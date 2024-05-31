import React from 'react';
import CTA from '../../components/CTA';
import Breadcrumb from '../../components/Breadcrumb';
import SingleServiceThree from '../../components/Service/SingleServiceThree';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

import shapeImg1 from '../../assets/img/work/work-shape-1.png';
import shapeImg2 from '../../assets/img/work/work-shape-2.png';
import shapeImg3 from '../../assets/img/work/work-shape-3.png';
import shapeImg4 from '../../assets/img/work/work-shape-12.png';
import shapeImg5 from '../../assets/img/work/work-shape-13.png';
import shapeImg6 from '../../assets/img/work/work-shape-14.png';
import shapeImg7 from '../../assets/img/work/work-shape-15.png';
import shapeImg8 from '../../assets/img/work/work-shape-16.png';
import shapeImg9 from '../../assets/img/work/work-shape-17.png';

import workIcon1 from '../../assets/img/work/work-icon-1.png';
import workIcon2 from '../../assets/img/work/work-icon-2.png';
import workIcon3 from '../../assets/img/work/work-icon-3.png';
import workIcon4 from '../../assets/img/work/work-icon-4.png';
import workIcon5 from '../../assets/img/work/work-icon-5.png';
import workIcon6 from '../../assets/img/work/work-icon-6.png';
import workIcon7 from '../../assets/img/work/work-icon-7.png';
import workIcon8 from '../../assets/img/work/work-icon-8.png';
import workIcon9 from '../../assets/img/work/work-icon-9.png';

const ServiceThreeMain = () => {
	return (
		<main>

			<Breadcrumb
				pageTitle= "Service Three"
			/>
			
			<div className="work__area work__space-2 work__plr work__inner-wra../../pper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceThree
								Icon={workIcon1}
								Shape={shapeImg1}
								borderClass="work__item item-bg-1"
								titleClass="work__title-sm work__title-color-1"
								btnClass="work__link link-bg-1"
								Title="Growth of Marketing Solution"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceThree
								Icon={workIcon2}
								Shape={shapeImg2}
								borderClass="work__item item-bg-2"
								titleClass="work__title-sm work__title-color-2"
								btnClass="work__link link-bg-2"
								Title="Business This Marketing Consultation"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceThree
								Icon={workIcon3}
								Shape={shapeImg3}
								borderClass="work__item item-bg-3"
								titleClass="work__title-sm work__title-color-3"
								btnClass="work__link link-bg-3"
								Title="Research And Beyond Business"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceThree
								Icon={workIcon4}
								Shape={shapeImg4}
								borderClass="work__item item-bg-4"
								titleClass="work__title-sm work__title-color-4"
								btnClass="work__link link-bg-4"
								Title="Godaddy User Flow Solution"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceThree
								Icon={workIcon5}
								Shape={shapeImg5}
								borderClass="work__item item-bg-5"
								titleClass="work__title-sm work__title-color-5"
								btnClass="work__link link-bg-5"
								Title="Business For Network Service"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceThree
								Icon={workIcon6}
								Shape={shapeImg6}
								borderClass="work__item item-bg-6"
								titleClass="work__title-sm work__title-color-6"
								btnClass="work__link link-bg-6"
								Title="Contact Design Trend Business"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceThree
								Icon={workIcon7}
								Shape={shapeImg7}
								borderClass="work__item item-bg-7"
								titleClass="work__title-sm work__title-color-7"
								btnClass="work__link link-bg-7"
								Title="Design System like Marketing"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceThree
								Icon={workIcon8}
								Shape={shapeImg8}
								borderClass="work__item item-bg-8"
								titleClass="work__title-sm work__title-color-8"
								btnClass="work__link link-bg-8"
								Title="Customer Agency Support Consultation"
							/>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleServiceThree
								Icon={workIcon9}
								Shape={shapeImg9}
								borderClass="work__item item-bg-9"
								titleClass="work__title-sm work__title-color-9"
								btnClass="work__link link-bg-9"
								Title="Online And Business Marketing"
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

export default ServiceThreeMain;