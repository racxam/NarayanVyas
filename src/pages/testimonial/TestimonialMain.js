import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

import testimonialImg1 from '../../assets/img/testimonial/testi-8.jpg';
import testimonialImg2 from '../../assets/img/testimonial/testi-9.jpg';
import testimonialImg3 from '../../assets/img/testimonial/testi-10.jpg';
import testimonialImg4 from '../../assets/img/testimonial/testi-11.jpg';
import testimonialImg5 from '../../assets/img/testimonial/testi-12.jpg';
import testimonialImg6 from '../../assets/img/testimonial/testi-13.jpg';

import SingleTestimonial from '../../components/Testimonial';

const TestimonialMain = () => {
	return (
		<main>
     <Breadcrumb
      pageTitle= "Testimonial"
     />
     
     <div className="testimonial__area testimonial__plr p-relative">
      <div className="container-fluid">
        <div className="row justify-content-center">
         <div className="col-xl-7 col-xxl-9">
           <div className="testimonial__section-box text-center z-index pb-40">
            <h4 className="section-blue-subtitle title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Client Testimonial</h4>
            <h3 className="section-title title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Perfect Contact This Softwer <br/>Company Manage.</h3>
           </div>
         </div>
        </div>
        <div className="row">
         <div className="col-xl-6 col-lg-12 col-md-12 col-sm-6 pb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
          <SingleTestimonial
            authorImg={testimonialImg1}
           /> 
         </div>
         <div className="col-xl-6 col-lg-12 col-md-12 col-sm-6 pb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
          <SingleTestimonial
            authorImg={testimonialImg2}
           /> 
         </div>
         <div className="col-xl-6 col-lg-12 col-md-12 col-sm-6 pb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
          <SingleTestimonial
            authorImg={testimonialImg3}
           /> 
         </div>
         <div className="col-xl-6 col-lg-12 col-md-12 col-sm-6 pb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
          <SingleTestimonial
            authorImg={testimonialImg4}
           /> 
         </div>
         <div className="col-xl-6 col-lg-12 col-md-12 col-sm-6 pb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
          <SingleTestimonial
            authorImg={testimonialImg5}
           /> 
         </div>
         <div className="col-xl-6 col-lg-12 col-md-12 col-sm-6 pb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
          <SingleTestimonial
            authorImg={testimonialImg6}
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

export default TestimonialMain;