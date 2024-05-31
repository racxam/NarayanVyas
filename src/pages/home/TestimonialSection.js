import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleTestimonial from '../../components/Testimonial';
import SectionTitle from '../../components/SectionTitle';

import shapeImg1 from '../../assets/img/testimonial/testi-shape-2.png';
import shapeImg2 from '../../assets/img/testimonial/testi-shape-3.png';
import shapeImg3 from '../../assets/img/testimonial/testi-shape-4.png';

import testimonialImg1 from '../../assets/img/testimonial/testi-1.png';
import testimonialImg2 from '../../assets/img/testimonial/testi-2.jpg';
import testimonialImg3 from '../../assets/img/testimonial/testi-1.png';
import testimonialImg4 from '../../assets/img/testimonial/testi-2.jpg';

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
        <div className="testimonial__area testimonial__plr black-bg p-relative">
            <div className="testimonial__shape-1">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="testimonial__shape-2">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="testimonial__shape-3">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-xxl-9 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SectionTitle
                            sectionClass= "testimonial__section-box text-center z-index pb-40 section-title-fixed-width"
                            subTitleClass= "section-subtitle section-white-bg"
                            titleClass= "section-title text-white"
                            subTitle= "Client Testimonial"
                            Title= "Perfect Contact This Software Company Manage."
                        />
                    </div>
                </div>
                <div className="testimonial__slider-wrapper z-index wow animate__fadeInUp" data-wow-duration="1.1s">
                    <div className="swiper-container testimonial__active">
                        <Swiper {...sliderOption} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonial
                                    authorImg={testimonialImg1}
                                />   
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonial
                                    authorImg={testimonialImg2}
                                />   
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonial
                                    authorImg={testimonialImg3}
                                />   
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonial
                                    authorImg={testimonialImg4}
                                />   
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonial
                                    authorImg={testimonialImg2}
                                />   
                            </SwiperSlide>
                        </Swiper>
                        <div className="testimonial-slider-dots wow animate__fadeInUp"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;