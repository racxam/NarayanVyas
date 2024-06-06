import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper';

import brandImg1 from '../../assets/img/brand/fiverr.png';
import brandImg2 from '../../assets/img/brand/gitHub.png';
import brandImg3 from '../../assets/img/brand/googleScholar.png';
import brandImg4 from '../../assets/img/brand/scopus.png';
import brandImg5 from '../../assets/img/brand/Linkedin.png';
import brandImg6 from '../../assets/img/brand/researchGate.png';
import brandImg7 from '../../assets/img/brand/teacheron.png';
import brandImg8 from '../../assets/img/brand/vidwan.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Brand = (props) => {
    const { itemClass } = props;
    const sliderOption = {
        loop: true,
        spaceBetween: 38,
        slidesPerView: '5',
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        }
    }
    return (
        <div className={itemClass ? itemClass : 'brand__area brand__mlr brand__white-bg'} >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="swiper-container brand__active ">
                            <Swiper {...sliderOption} className="swiper-wrapper mySwiper"


                                centeredSlides={true}


                                modules={[Autoplay, Pagination, Navigation]}




                            >
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration=".7s">
                                    <div className="brand__img">
                                        <a href="https://www.fiverr.com/narayanvyas" target='_blank' rel='noreferrer'>
                                            <img src={brandImg1} alt="" style={{ cursor: 'pointer' }} />

                                        </a>



                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration=".9s">
                                    <div className="brand__img">
                                        <a href="https://github.com/narayanvyas/" target='_blank' rel='noreferrer'>

                                            <img src={brandImg2} alt="" style={{ cursor: 'pointer' }} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <div className="brand__img">
                                        <a href="https://scholar.google.com/citations?user=aFSIhMoAAAAJ" target='_blank' rel='noreferrer'>

                                            <img src={brandImg3} alt="" style={{ cursor: 'pointer' }} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.3s">

                                    <div className="brand__img" >
                                        <a href="https://www.scopus.com/authid/detail.uri?authorId=57221967474" target='_blank' rel='noreferrer'>

                                            <img src={brandImg4} alt="" style={{ cursor: 'pointer' }} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.5s">
                                    <div className="brand__img">
                                        <a href="https://www.linkedin.com/in/narayanvyas87/" target='_blank' rel='noreferrer'>

                                            <img src={brandImg5} alt="" style={{ cursor: 'pointer' }} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.5s">
                                    <div className="brand__img">
                                        <a href="https://www.researchgate.net/profile/Narayan-Vyas" target='_blank' rel='noreferrer'>

                                            <img src={brandImg6} alt="" style={{ cursor: 'pointer' }} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.5s">
                                    <div className="brand__img">
                                        <a href="https://www.teacheron.com/tutor/3CgM" target='_blank' rel='noreferrer'>

                                            <img src={brandImg7} alt="" style={{ cursor: 'pointer' }} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide wow animate__fadeInUp" data-wow-duration="1.5s">

                                    <div className="brand__img">
                                        <a href="https://vidwan.inflibnet.ac.in/profile/526462" target='_blank' rel='noreferrer'>

                                            <img src={brandImg8} alt="" style={{ cursor: 'pointer' }} />
                                        </a>
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

export default Brand;