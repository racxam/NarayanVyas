import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/slider/slider-bg-3.png';
import Image from '../../assets/img/about/about-5.png';

import shapeImg1 from '../../assets/img/slider/shape-32.png';
import shapeImg2 from '../../assets/img/slider/shape-33.png';
import shapeImg3 from '../../assets/img/slider/shape-34.png';
import shapeImg4 from '../../assets/img/slider/shape-35.png';
import shapeImg5 from '../../assets/img/slider/shape-24.png';
import shapeImg6 from '../../assets/img/slider/shape-22.png';

const Breadcrumb = (props) => {
	const { pageTitle, breadcrumbsImg, breadcrumbsBg } = props;

	return (
		<div className="breadcrumb__area breadcrumb__plr breadcrumb__space breadcrumb__bg breadcrumb__overlay p-relative fix" style={{backgroundImage: `url(${breadcrumbsBg ? breadcrumbsBg : bgImg})`}}>
			<div className="breadcrumb__shape-1 d-none d-md-block wow animate__fadeInRight" data-wow-duration="1.1s">
				<img src={shapeImg1} alt="" />
			</div>
			<div className="breadcrumb__shape-2 d-none d-md-block ">
				<img src={shapeImg2} alt="" />
			</div>
			<div className="breadcrumb__shape-3 d-none d-xxl-block">
				<img src={shapeImg3} alt="" />
			</div>
			<div className="breadcrumb__shape-4">
				<img src={shapeImg4} alt="" />
			</div>
			<div className="breadcrumb__shape-5">
				<img src={shapeImg5} alt="" />
			</div>
			<div className="breadcrumb__shape-6">
				<img src={shapeImg6} alt="" />
			</div>
			
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-xxl-6 col-xl-6 col-lg-6">
						<div className="breadcrumb__content z-index">
							<h3 className="breadcrumb__title char-anim wow animate__fadeInUp" data-wow-duration="1.1s">{pageTitle ? pageTitle : 'About Us'}</h3>
							<div className="breadcrumb__button wow animate__fadeInUp" data-wow-duration="1.1s">
								<Link to="/">Home<i className="far fa-angle-right"></i><span>{pageTitle ? pageTitle : 'About Us'}</span></Link>
							</div>  
						</div>
					</div>
					<div className="col-xxl-6 col-xl-6 col-lg-6">
						<div className="breadcrumb__main-img text-end">
						<img src={breadcrumbsImg ? breadcrumbsImg : Image} alt="" 
						
						/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Breadcrumb;




