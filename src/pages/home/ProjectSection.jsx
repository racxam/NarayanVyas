import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';

import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';

import projectImg1 from '../../assets/img/project/pro-1.jpg';
import projectImg2 from '../../assets/img/project/pro-2.jpg';
import projectImg3 from '../../assets/img/project/pro-3.jpg';
import projectImg4 from '../../assets/img/project/pro-1.jpg';
import projectImg5 from '../../assets/img/project/pro-3.jpg';
import projectImg6 from '../../assets/img/project/pro-2.jpg';

SwiperCore.use([Mousewheel]);

const Project = ({ subTitle, title, slidesToShow }) => {

    const sliderOption = {
        pagination: {
            el: '.project-slider-dots',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        mousewheel: {
            enabled: false,
        },
        loop: true,
        spaceBetween: 30,
        slidesPerView: slidesToShow ? slidesToShow : '3',
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {

              slidesPerView: slidesToShow?slidesToShow-2:'2',
            },
            991: {
              slidesPerView: slidesToShow?slidesToShow:'3',


            },
        },
    }

    return (
        <div className="project__area project-height pt-10">
            <div className="container">
                <div className="row align-items-end pb-60">
                    <div className="col-lg-6 col-md-9">
                        <SectionTitle
                            sectionClass="project__section-box wow itfadeUp"
                            subTitleClass="section-subtitle char-anim"
                            titleClass="section-title char-anim"
                            subTitle={subTitle ? subTitle : "My Projects"}
                            Title={title ? title : "Showcasing Excellence in Technology and Innovation"}
                        />
                    </div>
                    <div className="col-lg-6 col-md-3">
                        <div className="project__section-arrow d-flex align-items-center justify-content-end">
                            <div className="swiper-button swiper-button-prev">
                                <button><i className="far fa-arrow-left"></i></button>
                            </div>
                            <div className="swiper-button swiper-button-next">
                                <button><i className="far fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{width:"90vw"}}>
                <div className="swiper-container project__active">
                    <Swiper {...sliderOption} mousewheel={true} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item">
                                <Link to="/project-details"><img src={projectImg1} alt="" /></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item">
                                <Link to="/project-details"><img src={projectImg2} alt="" /></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item">
                                <Link to="/project-details"><img src={projectImg3} alt="" /></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item">
                                <Link to="/project-details"><img src={projectImg4} alt="" /></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item">
                                <Link to="/project-details"><img src={projectImg5} alt="" /></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item">
                                <Link to="/project-details"><img src={projectImg6} alt="" /></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item">
                                <Link to="/project-details"><img src={projectImg3} alt="" /></Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="project-slider-dots"></div>
                </div>
            </div>
        </div>
    );
}

export default Project;