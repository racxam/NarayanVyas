import React from 'react';

import featureIcon1 from '../../assets/img/feature/fea-icon-1.png';
import featureIcon2 from '../../assets/img/feature/fea-icon-2.png';
import featureIcon3 from '../../assets/img/feature/fea-icon-3.png';
import featureIcon4 from '../../assets/img/feature/fea-icon-4.png';
import featureIcon5 from '../../assets/img/feature/fea-icon-5.png';

const Feature = () => {
  return (
    <div className="feature-2__area feature-2__mlr z-index-5 pb-60">
      <div className="container-fluid">
        <div className="row row-cols-5 row-cols-xxl-5 row-cols-xl-5">
          <div className=" col-xxl col-lg-4 col-sm-6 col-md-4 col-12 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="feature-2__item text-center">
              <div className="feature-2__item-overly"></div>
              <div className="feature-2__icon feature-2__icon-color-1 z-index">
                <span><img src={featureIcon1} alt="" /></span>
              </div>
              <div className="feature-2__text z-index">
                <h4 className="feature-2__title-sm">Development</h4>
              </div>
            </div>
          </div>
          <div className=" col-xxl col-lg-4 col-sm-6 col-md-4 col-12 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="feature-2__item text-center">
              <div className="feature-2__item-overly"></div>
              <div className="feature-2__icon feature-2__icon-color-2 z-index">
                <span><img src={featureIcon2} alt="" /></span>
              </div>
              <div className="feature-2__text z-index">
                <h4 className="feature-2__title-sm">Marketing</h4>
              </div>
            </div>
          </div>
          <div className=" col-xxl col-lg-4 col-sm-6 col-md-4 col-12 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="feature-2__item text-center">
              <div className="feature-2__item-overly"></div>
              <div className="feature-2__icon feature-2__icon-color-3 z-index">
                <span><img src={featureIcon3} alt="" /></span>
              </div>
              <div className="feature-2__text z-index">
                <h4 className="feature-2__title-sm">Promoting</h4>
              </div>
            </div>
          </div>
          <div className=" col-xxl col-lg-4 col-sm-6 col-md-4 col-12 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="feature-2__item text-center">
              <div className="feature-2__item-overly"></div>
              <div className="feature-2__icon feature-2__icon-color-4 z-index">
                <span><img src={featureIcon4} alt="" /></span>
              </div>
              <div className="feature-2__text z-index">
                <h4 className="feature-2__title-sm">Optimization</h4>
              </div>
            </div>
          </div>
          <div className=" col-xxl col-lg-4 col-sm-6 col-md-4 col-12 mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="feature-2__item text-center">
              <div className="feature-2__item-overly"></div>
              <div className="feature-2__icon feature-2__icon-color-5 z-index">
                <span><img src={featureIcon5} alt="" /></span>
              </div>
              <div className="feature-2__text z-index">
                <h4 className="feature-2__title-sm">Discovery</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;