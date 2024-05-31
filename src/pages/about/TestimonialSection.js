import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleTestimonialFive from '../../components/Testimonial/SingleTestimonialFive';
import SectionTitle from '../../components/SectionTitle';

import shapeImg1 from '../../assets/img/testimonial/testi-shape-2.png';
import shapeImg2 from '../../assets/img/testimonial/testi-shape-3.png';
import shapeImg3 from '../../assets/img/testimonial/testi-shape-4.png';

import testimonialImg1 from '../../assets/img/testimonial/testi-1.png';
import testimonialImg2 from '../../assets/img/testimonial/testi-2.jpg';

const Testimonial = () => {
  const sliderOption = {
    pagination: {
     el: '.testimonial-slider-dots',
     clickable: true
    },
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev'
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: '2',
    breakpoints: {
      0: {
       slidesPerView: 1,
      },
      1200: {
       slidesPerView: 2,
      },
    }
  }

  return (
    <div className="testimonial__area testimonial__plr blue-bg p-relative">
      <div className="testimonial__shape-1 d-none d-lg-block">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="testimonial__shape-2">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="testimonial__shape-3">
        <img src={shapeImg3} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <SectionTitle
              sectionClass= "testimonial-2__section-title text-center pb-40 section-title-fixed-width"
              subTitleClass="section-subtitle section-white-bg title-anim wow animate__fadeInUp"
              titleClass="section-title text-white title-anim wow animate__fadeInUp"
              subTitle= "Client Testimonial"
              Title= "We Are the Best Software Company Manage.."
            />
          </div>
        </div>
        <div className="testimonial-2__slider-wrapper">
          <div className="swiper-container testimonial-2__active">
            <Swiper {...sliderOption} className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <SingleTestimonialFive
                  Image={testimonialImg1}
                  Title="Sasan Barson"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <SingleTestimonialFive
                  Image={testimonialImg2}
                  Title="Marata Barson"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <SingleTestimonialFive
                  Image={testimonialImg1}
                  Title="Sasan Barson"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <SingleTestimonialFive
                  Image={testimonialImg2}
                  Title="Marata Barson"
                />
              </SwiperSlide>
            </Swiper>
            <div className="testimonial-slider-dots z-index"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;