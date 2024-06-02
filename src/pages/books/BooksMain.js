import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productImg1 from '../../assets/img/books/few-shot-zero-shot-igi.jpg';
import productImg2 from '../../assets/img/books/ai-driven-alzheimer-igi.jpg';
import productImg3 from '../../assets/img/books/quantam-for-biomedical-igi.jpg';
import productImg4 from '../../assets/img/books/water-management-igi.jpg';
import productImg5 from '../../assets/img/books/quantum-machine-learning-degruyter.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const BooksMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="Books"
			/>

			<div className="product__area product__plr mt-100 mb-70">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<div className="product__title-sm wow animate__fadeInUp" data-wow-duration="1.1s">
								<h4>Showing All Published Books</h4>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg1}
								Title='Applying Machine Learning Techniques to Bioinformatics: Few-Shot and Zero-Shot Methods'
								Publisher='IGI Global'
								Price='$340'
								Url='/books/applying-ml-in-bioinformatics-igi'
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg2}
								Title='AI-Driven Alzheimers Disease Detection and Prediction'
								Publisher='IGI Global'
								Price='$425'
								Url='/books/ai-driven-alzheimer-disease-prediction-igi'
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg3}
								Title='Quantum Innovations at the Nexus of Biomedical Intelligence'
								Publisher='IGI Global'
								Price='$330'
								Url='/books/quantum-in-biomedical-igi'
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg4}
								Title='Innovations in Machine Learning and IoT for Water Management'
								Publisher='IGI Global'
								Price='$300'
								Url='innovation-in-ml-iot-water-management-igi'
							/>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SingleProduct
								Image={productImg5}
								Title='Quantum Machine Learning: Quantum Algorithms and Neural Networks'
								Publisher='De Gruyter'
								Price='144,95 €'
								Url='/books/quantum-machine-learning-degruyter'
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

export default BooksMain;