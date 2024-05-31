import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleTestimonialThree from '../../components/Testimonial/SingleTestimonialThree';

import shapeImg1 from '../../assets/img/testimonial/testi-shape-12.png';
import shapeImg2 from '../../assets/img/testimonial/testi-shape-6.png';
import shapeImg3 from '../../assets/img/slider/shape-27.png';
import shapeImg4 from '../../assets/img/slider/shape-27.png';

import testimonialImg1 from '../../assets/img/testimonial/testi-4.png';

const Testimonial = () => {
    const sliderOption = {
        pagination: {
          el: '.testimonial-3-slider-dots',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        spaceBetween: 30,
        slidesPerView: '1'
    }

    return (
        <div className="testimonial-3__area testimonial-3__space p-relative">
            <div className="testimonial-3__shape-1 d-none d-xl-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="testimonial-3__shape-2 d-none d-lg-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="testimonial-3__shape-3 d-none d-xl-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="testimonial-3__shape-4 d-none d-lg-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testimonial-3__section-box text-center pb-40">
                            <h5 className="section-subtitle title-anim wow animate__fadeInUp" data-wow-duration=".6s">Our Testimonial</h5>
                            <h4 className="section-title title-anim wow animate__fadeInUp" data-wow-duration=".7s">We Digital Team Creators <br/>
                            Client Manage.</h4>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 wow animate__fadeInLeft" data-wow-duration="1.1s">
                        <div className="testimonial-3__main-img p-relative text-center">
                            <img src={testimonialImg1} alt="" />
                            <div className="testimonial-3__icon">
                                <span><i className="fas fa-quote-right"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="testimonial-2__slider-wrapper">
                            <div className="swiper-container testimonial-3__active">
                                <Swiper {...sliderOption} className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                                        <SingleTestimonialThree
                                            Title="Jemil Barson"
                                            Designation="Manager"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <SingleTestimonialThree
                                            Title="Marata Barson"
                                            Designation="Manager"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <SingleTestimonialThree
                                            Title="Sturard Barson"
                                            Designation="Manager"
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            <div className="testimonial-3-slider-dots text-center text-lg-start z-index"></div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;