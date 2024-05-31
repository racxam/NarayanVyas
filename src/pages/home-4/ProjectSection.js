import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SectionTitle from '../../components/SectionTitle';
import SingleProjectFour from '../../components/Project/SingleProjectFour';

import projectImg1 from '../../assets/img/project/pro-14.jpg';
import projectImg2 from '../../assets/img/project/pro-15.jpg';
import projectImg3 from '../../assets/img/project/pro-16.jpg';

import projectImg4 from '../../assets/img/project/pro-51.jpg';
import projectImg5 from '../../assets/img/project/pro-52.jpg';
import projectImg6 from '../../assets/img/project/pro-53.jpg';
import projectImg7 from '../../assets/img/project/pro-54.jpg';
import projectImg8 from '../../assets/img/project/pro-55.jpg';
import projectImg9 from '../../assets/img/project/pro-56.jpg';
import projectImg10 from '../../assets/img/project/pro-57.jpg';
import projectImg11 from '../../assets/img/project/pro-58.jpg';
import projectImg12 from '../../assets/img/project/pro-59.jpg';
import projectImg13 from '../../assets/img/project/pro-60.jpg';
import projectImg14 from '../../assets/img/project/pro-61.jpg';
import projectImg15 from '../../assets/img/project/pro-62.jpg';

const Project = () => {
    let tab1 = "All",
        tab2 = "Development",
        tab3 = "App Design",
        tab4 = "Branding Design"
        const tabStyle = 'nav nav-pill justify-content-center mb-3';

    return (
        <div className="project-4__area project-4__space grey-bg-2">
            <div className="container-fluid">
                <Tabs>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-4__section-box text-center mb-30">
                                <h5 className="section-subtitle title-anim">Our Projects Work</h5>
                                <h4 className="section-title title-anim">We Are the Best Softwer <br/>
                                Company Manage.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="project-4__project-tab">
                                <TabList className={tabStyle}>
                                    <Tab><button>{tab1}</button></Tab>
                                    <Tab><button>{tab2}</button></Tab>
                                    <Tab><button>{tab3}</button></Tab>
                                    <Tab><button>{tab4}</button></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>
                    <TabPanel className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-1"
                                TitleClass="project-4__title-sm title-color-1"
                                btnClass="project-4__link link-color-1"
                                Image={projectImg1}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-2"
                                TitleClass="project-4__title-sm title-color-2"
                                btnClass="project-4__link link-color-2"
                                Image={projectImg2}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-3"
                                TitleClass="project-4__title-sm title-color-3"
                                btnClass="project-4__link link-color-3"
                                Image={projectImg3}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                    </TabPanel> 
                    <TabPanel className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-2"
                                TitleClass="project-4__title-sm title-color-2"
                                btnClass="project-4__link link-color-2"
                                Image={projectImg2}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-3"
                                TitleClass="project-4__title-sm title-color-3"
                                btnClass="project-4__link link-color-3"
                                Image={projectImg3}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-1"
                                TitleClass="project-4__title-sm title-color-1"
                                btnClass="project-4__link link-color-1"
                                Image={projectImg1}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                    </TabPanel> 
                    <TabPanel className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-2"
                                TitleClass="project-4__title-sm title-color-2"
                                btnClass="project-4__link link-color-2"
                                Image={projectImg2}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-1"
                                TitleClass="project-4__title-sm title-color-1"
                                btnClass="project-4__link link-color-1"
                                Image={projectImg1}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-3"
                                TitleClass="project-4__title-sm title-color-3"
                                btnClass="project-4__link link-color-3"
                                Image={projectImg3}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                    </TabPanel> 
                    <TabPanel className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-3"
                                TitleClass="project-4__title-sm title-color-3"
                                btnClass="project-4__link link-color-3"
                                Image={projectImg3}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-1"
                                TitleClass="project-4__title-sm title-color-1"
                                btnClass="project-4__link link-color-1"
                                Image={projectImg1}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProjectFour
                                categoryClass="project-4__category category-color-2"
                                TitleClass="project-4__title-sm title-color-2"
                                btnClass="project-4__link link-color-2"
                                Image={projectImg2}
                                Category="Marketing"
                                Title="Agency Best Projects"
                            />
                        </div>
                    </TabPanel> 

                </Tabs>
            </div>
        </div>
    );
}

export default Project;