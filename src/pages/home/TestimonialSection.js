// src/components/Testimonial/index.js
import images from '../../assets/images';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleTestimonial from '../../components/Testimonial';
import SectionTitle from '../../components/SectionTitle';
import Globals from '../../Globals';
import testimonialsData from '../../data/testimonialsData';

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
    };

    return (
        <div className="testimonial-2__area pb-30 grey-bg testimonial-2__space p-relative">
            <div className="testimonial-2__shape-3 d-none d-lg-block custom-testimonial-img">
                <img src={images.testimonials.hardikDhimanImg} alt="" />
            </div>
            <div className="testimonial-2__shape-4 d-none d-lg-block custom-testimonial-img">
                <img src={images.testimonials.abidHussainImg} alt="" />
            </div>
            <div className="testimonial-2__shape-5 d-none d-xl-block custom-testimonial-img">
                <img src={images.testimonials.chahilChoudharyImg} alt="" />
            </div>
            {/* <div className="testimonial-2__shape-6 d-none d-lg-block custom-testimonial-img">
                <img src={images.emilZajacImg} alt="" />
            </div> */}
            {/* <div className="testimonial-2__shape-7 d-none d-lg-block custom-testimonial-img">
                <img src={images.hardikDhimanImg} alt="" />
            </div> */}
            <div className="testimonial-2__shape-8 d-none d-lg-block custom-testimonial-img">
                <img src={images.testimonials.chahilChoudharyImg} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <SectionTitle
                            sectionClass="testimonial-2__section-title text-center pb-40 section-title-fixed-width"
                            subTitle={Globals.testimonialsSectionHeading}
                            Title={Globals.testimonialsSectionSubheading}
                        />
                    </div>
                </div>
                <div className="testimonial-2__slider-wrapper">
                    <div className="swiper-container testimonial-2__active">
                        <Swiper {...sliderOption} className="swiper-wrapper">
                            {testimonialsData.map((testimonial, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                    <SingleTestimonial
                                        authorImg={testimonial.authorImg}
                                        Title={testimonial.Title}
                                        Designation={testimonial.Designation}
                                        Description={testimonial.Description}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="testimonial-slider-dots z-index wow animate__fadeInUp"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
