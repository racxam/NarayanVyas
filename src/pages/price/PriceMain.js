import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';
import shapeImg1 from '../../assets/img/price/price-shape-6.png';
import shapeImg2 from '../../assets/img/price/price-shape-7.png';
import priceImg1 from '../../assets/img/price/price-icon-1.png';
import priceImg2 from '../../assets/img/price/price-icon-2.png';
import priceImg3 from '../../assets/img/price/price-icon-3.png';

const PriceMain = () => {
	return (
		<main>
     <Breadcrumb
      pageTitle= "Price"
     />
     
     <div className="price-2__area price-2__plr price-2__space">
      <div className="container-fluid">
        <div className="row">
         <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
           <div className="price-2__item fix">
            <div className="price-2__top-item">
              <h4 className="price-2__top-title">Business</h4>
              <i>$10<span>/Yr</span></i>
              <div className="price-2__shape">
               <img src={shapeImg1} alt="" />
               <div className="price-2__icon">
                 <img src={priceImg1} alt="" />
               </div>
              </div>
            </div>
            <div className="price-2__list">
              <h4 className="price-2__list-title">Basic This Plan</h4>
              <ul>
               <li><span><i className="far fa-check"></i>We are privileged to work with.</span></li>
               <li><span><i className="far fa-check"></i>24/7 system monitoring</span></li>
               <li><span><i className="far fa-check"></i>Encourage every team member</span></li>
               <li><span><i className="far fa-check"></i>Remote best support</span></li>
               <li><span><i className="far fa-check"></i>Barriers preventing people.</span></li>
              </ul>
            </div>
            <div className="price-2__button">
              <a className="main-btn-sm tp-btn-hover alt-color" href="#"><span>Learn More</span><b></b></a>
            </div>
           </div>
         </div>
         <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
           <div className="price-2__item active fix p-relative">
            <div className="price-2__item-shape d-none d-md-block">
              <img src={shapeImg2} alt="" />
            </div>
            <div className="price-2__top-item">
              <h4 className="price-2__top-title">Enterprice</h4>
              <i>$60<span>/Yr</span></i>
              <div className="price-2__shape">
               <img src={shapeImg1} alt="" />
               <div className="price-2__icon">
                 <img src={priceImg2} alt="" />
               </div>
              </div>
            </div>
            <div className="price-2__list z-index-3">
              <h4 className="price-2__list-title">Standard This Plan</h4>
              <ul>
               <li><span><i className="far fa-check"></i>We are privileged to work with.</span></li>
               <li><span><i className="far fa-check"></i>24/7 system monitoring</span></li>
               <li><span><i className="far fa-check"></i>Encourage every team member</span></li>
               <li><span><i className="far fa-check"></i>Remote best support</span></li>
               <li><span><i className="far fa-check"></i>Barriers preventing people.</span></li>
              </ul>
            </div>
            <div className="price-2__button">
              <a className="main-btn-sm white-bg tp-btn-hover alt-color-blue" href="#"><span>Learn More</span>
              <b></b></a>
            </div>
           </div>
         </div>
         <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
           <div className="price-2__item fix">
            <div className="price-2__top-item">
              <h4 className="price-2__top-title">Business</h4>
              <i>$280<span>/Yr</span></i>
              <div className="price-2__shape">
               <img src={shapeImg1} alt="" />
               <div className="price-2__icon">
                 <img src={priceImg3} alt="" />
               </div>
              </div>
            </div>
            <div className="price-2__list">
              <h4 className="price-2__list-title">Premium This Plan</h4>
              <ul>
               <li><span><i className="far fa-check"></i>We are privileged to work with.</span></li>
               <li><span><i className="far fa-check"></i>24/7 system monitoring</span></li>
               <li><span><i className="far fa-check"></i>Encourage every team member</span></li>
               <li><span><i className="far fa-check"></i>Remote best support</span></li>
               <li><span><i className="far fa-check"></i>Barriers preventing people.</span></li>
              </ul>
            </div>
            <div className="price-2__button">
              <a className="main-btn-sm tp-btn-hover alt-color" href="#"><span>Learn More</span><b></b></a>
            </div>
           </div>
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

export default PriceMain;