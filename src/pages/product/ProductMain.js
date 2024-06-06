import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import Project from '../home/ProjectSection';
import bgImg from '../../assets/img/cta/cta-bg-2.png';

const ProductMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="Call for Chapters"
			/>

			<div className="product__area product__plr mt-100 mb-70">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<div className="product__title-sm wow animate__fadeInUp" data-wow-duration="1.1s">
								<h4>Showing all Call for Chapters</h4>
							</div>
						</div>
					</div>

					{/* <div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg1}
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg2}
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg3}
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg4}
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg5}
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg6}
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg7}
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg8}
							/>
						</div>
					</div> */}

					<Project


						title={"Call for Chapters"}
						subTitle={"List of Call for Chapters"}
						slidesToShow={"4"}
					/>





				</div>
			</div>

			<CTA
				ctaBG={bgImg}
				btnText={"Book Appointment"}
			/>

		</main>
	);
}

export default ProductMain;