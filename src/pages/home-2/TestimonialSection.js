import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleTestimonialTwo from '../../components/Testimonial/SingleTestimonialTwo';
import SectionTitle from '../../components/SectionTitle';

import shapeImg1 from '../../assets/img/testimonial/testi-shape-7.png';
import shapeImg2 from '../../assets/img/testimonial/testi-shape-8.png';
import shapeImg3 from '../../assets/img/testimonial/testi-shape-9.png';
import shapeImg4 from '../../assets/img/testimonial/testi-shape-10.png';
import shapeImg5 from '../../assets/img/testimonial/testi-shape-11.png';

import testimonialImg1 from '../../assets/img/testimonial/testi-3.png';
import testimonialImg2 from '../../assets/img/testimonial/testi-shape-8.png';
import testimonialImg3 from '../../assets/img/testimonial/testi-shape-9.png';

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
        slidesPerView: '1'
    }

    return (
        <div className="testimonial-2__area testimonial-2__space grey-bg p-relative">
            <div className="testimonial-2__shape-3 d-none d-lg-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="testimonial-2__shape-4 d-none d-lg-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="testimonial-2__shape-5 d-none d-xl-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="testimonial-2__shape-6 d-none d-lg-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="testimonial-2__shape-7 d-none d-lg-block">
                <img src={shapeImg5} alt="" />
            </div>
            <div className="testimonial-2__shape-8 d-none d-lg-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <SectionTitle
                            sectionClass= "testimonial-2__section-title text-center pb-40 section-title-fixed-width"
                            subTitle= "Client Testimonial"
                            Title= "We Are the Best Software Company Manage.."
                        />
                    </div>
                </div>
                <div className="testimonial-2__slider-wrapper">
                    <div className="swiper-container testimonial-2__active">
                        <Swiper {...sliderOption} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonialTwo
                                    authorImg={testimonialImg1}
                                    Title="Sasan Barson"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonialTwo
                                    authorImg={testimonialImg3}
                                    Title="Marata Barson"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonialTwo
                                    authorImg={testimonialImg2}
                                    Title="Sasan Barson"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonialTwo
                                    authorImg={testimonialImg3}
                                    Title="Marata Barson"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className="testimonial-slider-dots z-index wow animate__fadeInUp"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;