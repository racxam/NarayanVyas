import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleServiceThree from '../../components/Service/SingleServiceThree';

import shapeImg1 from '../../assets/img/work/work-shape-1.png';
import shapeImg2 from '../../assets/img/work/work-shape-2.png';
import shapeImg3 from '../../assets/img/work/work-shape-3.png';

import workIcon1 from '../../assets/img/work/work-icon-1.png';
import workIcon2 from '../../assets/img/work/work-icon-2.png';
import workIcon3 from '../../assets/img/work/work-icon-3.png';

const Work = () => {
    const sliderOption = {
        pagination: {
          el: '.work-slider-dots',
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
            576: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
        }
    }

    return (
        <div className="work__area work__space work__plr">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-md-9">
                        <div className="work__section-box text-center">
                            <h5 className="section-subtitle title-anim wow animate__fadeInUp" data-wow-duration="1.1s">How It Works</h5>
                            <h4 className="section-title title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Experts Every Aspect <br/> Service Work.</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="work__slider-wrapper">
                            <div className="swiper-container work__active">
                                <Swiper  {...sliderOption} className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                                        <SingleServiceThree
                                            Icon={workIcon1}
                                            Shape={shapeImg1}
                                            borderClass="work__item item-bg-1"
                                            titleClass="work__title-sm work__title-color-1"
                                            btnClass="work__link link-bg-1"
                                            Title="Growth of Marketing Solution"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                                        <SingleServiceThree
                                            Icon={workIcon2}
                                            Shape={shapeImg2}
                                            borderClass="work__item item-bg-2"
                                            titleClass="work__title-sm work__title-color-2"
                                            btnClass="work__link link-bg-2"
                                            Title="Business This Marketing Consultation"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                                        <SingleServiceThree
                                            Icon={workIcon3}
                                            Shape={shapeImg3}
                                            borderClass="work__item item-bg-3"
                                            titleClass="work__title-sm work__title-color-3"
                                            btnClass="work__link link-bg-3"
                                            Title="Research And Beyond Business"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                                        <SingleServiceThree
                                            Icon={workIcon2}
                                            Shape={shapeImg2}
                                            borderClass="work__item item-bg-4"
                                            titleClass="work__title-sm work__title-color-4"
                                            btnClass="work__link link-bg-4"
                                            Title="Business This Marketing Consultation"
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="work-slider-dots"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;