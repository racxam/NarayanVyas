import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import techData from '../../data/techData'; // Import techData

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Brand = (props) => {
    const { itemClass } = props;
    const sliderOption = {
        loop: true,
        spaceBetween: 40,
        slidesPerView: 12,
        centeredSlides: true,
        speed: 3000, // Adjust the speed to your preference
        autoplay: {
            delay: 0, // No delay
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 6,
            },
            991: {
                slidesPerView: 7,
            },
            1200: {
                slidesPerView: 11,
            },
        },
    };

    return (
        <div className={itemClass ? itemClass : 'brand__area brand__mlr brand__white-bg'}>
            <div className="container mt-0 mb-0">
                <div className="row">
                    <div className="col-12">
                        <div className="swiper-container brand__active">
                            <Swiper
                                {...sliderOption}
                                className="swiper-wrapper mySwiper"
                                modules={[Autoplay, Navigation]}
                                freeMode={true}
                                grabCursor={true}>
                                {techData.map((tech) => (
                                    <SwiperSlide key={tech.id} className="swiper-slide wow animate__fadeInUp" data-wow-duration=".7s">
                                        <div className="brand__img">
                                            <img src={tech.image} alt={tech.title} style={{ width: '70px' }} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;
