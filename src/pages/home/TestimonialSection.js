import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleTestimonial from '../../components/Testimonial';
import SectionTitle from '../../components/SectionTitle';

import shapeImg1 from '../../assets/img/testimonial/client1_circle.png';
import shapeImg2 from '../../assets/img/testimonial/client2_circle.png';
import shapeImg3 from '../../assets/img/testimonial/testi-shape-9.png';
import shapeImg4 from '../../assets/img/testimonial/testi-shape-10.png';
import shapeImg5 from '../../assets/img/testimonial/testi-shape-11.png';

import client1 from '../../assets/img/testimonial/client1.png';
import client2 from '../../assets/img/testimonial/client2.png';
import client3 from '../../assets/img/testimonial/client1.png';
import client4 from '../../assets/img/testimonial/client2.png';
 
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
                <img src={shapeImg1} alt="" />
            </div>
            <div className="testimonial-2__shape-6 d-none d-lg-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="testimonial-2__shape-7 d-none d-lg-block">
                <img src={shapeImg5} alt="" />
            </div>
            <div className="testimonial-2__shape-8 d-none d-lg-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <SectionTitle
                            sectionClass="testimonial-2__section-title text-center pb-40 section-title-fixed-width"
                            subTitle="Client Testimonial"
                            Title="We Are the Best Software Company Manage.."
                        />
                    </div>
                </div>
                <div className="testimonial-2__slider-wrapper">
                    <div className="swiper-container testimonial-2__active">
                        <Swiper {...sliderOption} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonial
                                    authorImg={client1}
                                    Title="Hardik Dhiman"
                                    Designation="Research Consultant"
                                    Description="Mr. Narayan Vyas is an exceptional mentor in app development, IoT, and machine learning. His guidance has helped me excel in various projects, including IoT innovations and research papers. His patient and expert approach has greatly shaped my skills as a researcher. I highly recommend him to anyone seeking mentorship in technology. Thank you, Sir, for your invaluable support."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonial
                                    authorImg={client2}
                                    Title="Abid Hussain"
                                    Designation="Certified Gym Trainer"
                                    Description="Every time I need something fixed with my websites, Narayan is my “go to” guy. He does great and gets everything done in a timely manner. Great communication. Thank you Narayan!"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonial
                                    authorImg={client3}
                                    Title="Chahil Choudhary"
                                    Designation="Student"
                                    Description="I highly recommend Narayan Vyas, a cooperative and knowledgeable assistant professor in computer science. His technical expertise, dedication, and ability to explain complex concepts clearly make him an invaluable asset. Narayan sir's willingness to support students and colleagues is commendable, making him an outstanding contributor to any academic institution."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <SingleTestimonial
                                    authorImg={client4}
                                    Title="Emil Zając"
                                    Designation="Mobile App Developer"
                                    Description="Narayan has extensive experience in developing mobile applications in Flutter. He always responded quickly and gave a new perspective on how to solve the problem. He knows how to explain even the most difficult issues in a simple and quick way."

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