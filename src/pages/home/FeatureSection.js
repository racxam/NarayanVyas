import React from 'react';

import SectionTitle from '../../components/SectionTitle'
import SingleFeature from '../../components/Feature';

import featureImg1 from '../../assets/img/feature/fea-1.png';
import featureImg2 from '../../assets/img/feature/fea-2.png';
import featureImg3 from '../../assets/img/feature/fea-3.png';

const Feature = () => {

  return (
    <div className="feature__area feature__mlr ">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SectionTitle />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleFeature
              Image={featureImg1}
              Title='Mobile Application Development'
              Description='Receive expert guidance on developing high-quality, user-friendly mobile applications. My experience ensures your app performs excellently and meets business goals.'
              btnText='See More'
              btnURL='services/mobile-app-development'
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleFeature
              Image={featureImg3}
              Title='Research and Development'
              Description='Benefit from my extensive research background in computer science, including Machine Learning, Deep Learning, and Computer Vision. Enhance your projects with my expertise.'
              btnText='See More'
              btnURL='services/research-and-development'
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleFeature
              Image={featureImg2}
              Title='Internet of Things (IoT) Solutions'
              Description='Utilize my deep knowledge in IoT to create smart, efficient systems. I provide tailored solutions to help you harness the power of connected devices'
              btnText='See More'
              btnURL='services/iot-solutions'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;