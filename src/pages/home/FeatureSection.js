import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../components/SectionTitle'
import SingleFeature from '../../components/Feature';

import featureImg1 from '../../assets/img/feature/fea-1.png';
import featureImg2 from '../../assets/img/feature/fea-2.png';
import featureImg3 from '../../assets/img/feature/fea-3.png';

const Feature = () => {

  return (
    <div className="feature__area feature__mlr pt-100 pb-70">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SectionTitle />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleFeature
              Image= {featureImg1}
              Title= 'Creative Design'
              Description= 'Business is the knowledge or master event. Identify the error of the we ebsite coding page speed.'
              btnText= 'See More'
              btnURL= '/service-details'
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleFeature
              Image= {featureImg3}
              Title= 'Online Marketing'
              Description= 'Business is the knowledge or master event. Identify the error of the we ebsite coding page speed.'
              btnText= 'See More'
              btnURL= '/service-details'
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleFeature
              Image= {featureImg2}
              Title= 'Digital Marketing'
              Description= 'Business is the knowledge or master event. Identify the error of the we ebsite coding page speed.'
              btnText= 'See More'
              btnURL= '/service-details'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;