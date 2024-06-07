import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../components/SectionTitle';
import projectsData from '../../data/projectsData';
import ProjectCard from '../../components/Project/ProjectCard';
import Globals from '../../Globals';



const Project = ({ subTitle, title}) => {
    const sliderOption = {
        pagination: {
            el: '.project-slider-dots',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        spaceBetween:"150px",
        freeMode:"true",
        grabCursor:"true",
        // slidesPerView: 'auto',
        breakpoints:{
            320: {
              slidesPerView: 'auto',
  
            },
            480: {
              slidesPerView: 'auto',
  
            },
            640: {
  
              slidesPerView: '2',
              spaceBetween:"15px"
  
            },
            768: {
  
              slidesPerView: '2',
              spaceBetween:"15px"
  
            },
            1024: {
              slidesPerView: '3',
              spaceBetween:"150px",


              
              
            },1400:{
                slidesPerView: '4',
                spaceBetween:"150px",
  
              
            }
          }}
         
    

    return (
        <div className="product__area product__plr mt-100 mb-80">
            <div className="container-fluid">
                <div className="row align-items-end pb-60">
                    <div className="col-lg-6 col-md-9">
                        <SectionTitle
                            sectionClass="project__section-box wow itfadeUp"
                            subTitleClass="section-subtitle char-anim"
                            titleClass="section-title char-anim"
                            subTitle={subTitle ? subTitle : Globals.projectsSectionHeading}
                            Title={title ? title : Globals.projectsSectionSubheading}
                        />
                    </div>

                    <div className="col-lg-6 col-md-3">
                        <div className="project__section-arrow d-flex align-items-center justify-content-end mt-20">
                            <div className="swiper-button swiper-button-prev">
                                <button><i className="far fa-arrow-left"></i></button>
                            </div>
                            <div className="swiper-button swiper-button-next">
                                <button><i className="far fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-container project__active">
                    <Swiper {...sliderOption} className="swiper-wrapper">
                        {projectsData.map(project => (
                            <SwiperSlide key={project.id} className="swiper-slide">
                                <div className="project__item">
                                    <ProjectCard project={project} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="project-slider-dots"></div>
                </div>
            </div>
        </div>
    );
};

export default Project;
