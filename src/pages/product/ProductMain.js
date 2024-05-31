import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productImg1 from '../../assets/img/product/product-1.jpg';
import productImg2 from '../../assets/img/product/product-2.jpg';
import productImg3 from '../../assets/img/product/product-3.jpg';
import productImg4 from '../../assets/img/product/product-4.jpg';
import productImg5 from '../../assets/img/product/product-5.jpg';
import productImg6 from '../../assets/img/product/product-6.jpg';
import productImg7 from '../../assets/img/product/product-7.jpg';
import productImg8 from '../../assets/img/product/product-8.jpg';
import productImg9 from '../../assets/img/product/product-9.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const ProductMain = () => {
	return (
		<main>
			<Breadcrumb
			pageTitle= "Product"
			/>

			<div className="product__area product__plr mt-100 mb-70">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<div className="product__title-sm wow animate__fadeInUp" data-wow-duration="1.1s">
								<h4>Showing all All Products:</h4>
							</div>
						</div>
					</div>
					<div className="row">
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
					</div>
				</div>
			</div>
			
			<CTA
				ctaBG={bgImg}
			/>

    </main>
	);
}

export default ProductMain;