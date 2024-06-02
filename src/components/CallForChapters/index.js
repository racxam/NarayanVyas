import React from 'react'
import productImg1 from '../../assets/img/cfc/secure-energy-wiley.jpg';
import productImg2 from '../../assets/img/cfc/iomt-wiley.jpg';
import productImg3 from '../../assets/img/cfc/multimodal-wiley.jpg';
import SingleProduct from '../../components/Product';
import SectionTitle from '../../components/SectionTitle/index'
import SingleProductWithImageOnly from '../Product/single_product_with_image_only';

const index = () => {
	return (
		<div className="product__area product__plr mt-100 mb-70">
			<div className="container-fluid">
				{/* <div className="row">
						<div className="col-xl-12">
							<div className="product__title-sm wow animate__fadeInUp" data-wow-duration="1.1s">
								<h4>Showing All Call For Chapters</h4>
							</div>
						</div>
					</div> */}


				<div className="col-xl-12 col-lg-8 wow animate__fadeIn mt-100" data-wow-duration="1.1s">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SectionTitle
								sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
								subTitle="Call For Chapters"
								Title="Submit Your Quality Chapter"
							/>
						</div>
					</div>


				</div>
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
						<SingleProductWithImageOnly
							Image={productImg1}
							Title='Secure Energy Optimization: Leveraging IoT And AI For Enhanced Efficiency'
							Publisher='Wiley'
							Price='Not Released'
							Url='/cfc/secure-energy-wiley'
						/>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
						<SingleProductWithImageOnly
							Image={productImg2}
							Title='Internet of Medicine (IoM) For Smart Healthcare'
							Publisher='Wiley'
							Price='Not Released'
							Url='/cfc/ai-driven-alzheimer-disease-prediction-igi'
						/>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
						<SingleProductWithImageOnly
							Image={productImg3}
							Title='Multimodal Data Fusion for Bioinformatics AI'
							Publisher='Wiley'
							Price='Not Released'
							Url='/cfc/quantum-in-biomedical-igi'
						/>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
						<SingleProductWithImageOnly
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
	)
}

export default index
