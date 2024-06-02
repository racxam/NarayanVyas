import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productImg1 from '../../assets/img/cfc/secure-energy-wiley.jpg';
import productImg2 from '../../assets/img/cfc/iomt-wiley.jpg';
import productImg3 from '../../assets/img/cfc/multimodal-wiley.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const CFCMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="Call For Chapters"
			/>

			<div className="product__area product__plr mt-100 mb-70">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<div className="product__title-sm wow animate__fadeInUp" data-wow-duration="1.1s">
								<h4>Showing All Call For Chapters</h4>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg1}
								Title='Secure Energy Optimization: Leveraging IoT And AI For Enhanced Efficiency'
								Publisher='Wiley'
								Price='Not Released'
								Url='/cfc/secure-energy-wiley'
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg2}
								Title='Internet of Medicine (IoM) For Smart Healthcare'
								Publisher='Wiley'
								Price='Not Released'
								Url='/cfc/ai-driven-alzheimer-disease-prediction-igi'
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg3}
								Title='Multimodal Data Fusion for Bioinformatics AI'
								Publisher='Wiley'
								Price='Not Released'
								Url='/cfc/quantum-in-biomedical-igi'
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

export default CFCMain;