import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleTestimonialFour from '../../components/Testimonial/SingleTestimonialFour';

import shapeImg1 from '../../assets/img/testimonial/testi-shape-2.png';
import shapeImg2 from '../../assets/img/testimonial/testi-shape-14.png';

import testimonialImg1 from '../../assets/img/testimonial/testi-4.jpg';
import testimonialImg2 from '../../assets/img/testimonial/testi-5.jpg';
import testimonialImg3 from '../../assets/img/testimonial/testi-6.jpg';
import testimonialImg4 from '../../assets/img/testimonial/testi-7.jpg';

const TestimonialPart = () => {
   const sliderOption = {
       pagination: {
         el: '.testimonial-4-slider-dots',
         clickable: true
       },
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
       },
       loop: true,
       spaceBetween: 30,
       slidesPerView: '3',
       breakpoints: {
         0: {
           slidesPerView: 1,
         },
         991: {
           slidesPerView: 2,
         },
         1200: {
           slidesPerView: 3,
         },
      }
   }

    return (
        <div className="testimonial-4__area testimonial-4__plr testimonial-4__space p-relative black-bg-4">
            <div className="testimonial-4__shape-1 d-none d-lg-block">
               <img src={shapeImg1} alt="" />
            </div>
            <div className="testimonial-4__shape-2 d-none d-lg-block">
               <img src={shapeImg2} alt="" />
            </div>
            <div className="container-fluid">
               <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-8">
                     <div className="testimonial-4__section-box text-center">
                        <a href="#"><h4 className="section-subtitle section-white-bg title-anim wow animate__fadeInUp" data-wow-duration="1.1s"
                           >Client Testimonial</h4></a>
                        <h3 className="section-title text-white title-anim wow animate__fadeInUp" data-wow-duration="1.1s"
                           >Perfect Contact This Softwer <br/>
                           Company Manage.</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="testimonial-4__slider-wrapper">
                     <div className="swiper-container testimonial-4__active">
                        <Swiper {...sliderOption} className="swiper-wrapper">
                           <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                              <SingleTestimonialFour
                                 Title="Karon Bobel"
                                 Designation="Founder"
                                 Image={testimonialImg1}
                              />
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                              <SingleTestimonialFour
                                 Title="Karon Bobel"
                                 Designation="Founder"
                                 Image={testimonialImg2}
                              />
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                              <SingleTestimonialFour
                                 Title="Karon Bobel"
                                 Designation="Founder"
                                 Image={testimonialImg3}
                              />
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                              <SingleTestimonialFour
                                 Title="Karon Bobel"
                                 Designation="Founder"
                                 Image={testimonialImg4}
                              />
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                              <SingleTestimonialFour
                                 Title="Karon Bobel"
                                 Designation="Founder"
                                 Image={testimonialImg2}
                              />
                           </SwiperSlide>
                        </Swiper>
                        <div className="testimonial-4-slider-dots text-center z-index"></div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    );
}

export default TestimonialPart;