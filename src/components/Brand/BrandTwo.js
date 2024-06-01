import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import brandImg1 from '../../assets/img/brand/brand-5.png';
import brandImg2 from '../../assets/img/brand/brand-6.png';
import brandImg3 from '../../assets/img/brand/brand-7.png';
import brandImg4 from '../../assets/img/brand/brand-5.png';
import brandImg5 from '../../assets/img/brand/brand-6.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const BrandTwo = (props) => {
	const {itemClass} = props;
    const sliderOption = {
        loop: true,
        spaceBetween: 50,
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
        <div className={itemClass ? itemClass : 'brand__area brand__mlr brand__white-bg'}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="swiper-container brand__active">
                            <Swiper {...sliderOption} className="swiper-wrapper"


                               autoplay={{
                                 delay: 100,
                                 disableOnInteraction: false,
                               }}
                               pagination={{
                                 clickable: true,
                               }}
                               navigation={true}

                            >
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration=".7s">
                                    <div className="brand__img brand-3__img-color">
                                        <img src={brandImg1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration=".9s">
                                    <div className="brand__img brand-3__img-color">
                                        <img src={brandImg2} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <div className="brand__img brand-3__img-color">
                                        <img src={brandImg3} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.3s">
                                    <div className="brand__img brand-3__img-color">
                                        <img src={brandImg4} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.5s">
                                    <div className="brand__img brand-3__img-color">
                                        <img src={brandImg5} alt="" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandTwo;