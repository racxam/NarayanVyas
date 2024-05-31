import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import SingleProjectTwo from '../../components/Project/SingleProjectTwo';

import SectionTitle from '../../components/SectionTitle';

import projectImg1 from '../../assets/img/project/pro-10.jpg';
import projectImg2 from '../../assets/img/project/pro-11.jpg';
import projectImg3 from '../../assets/img/project/pro-12.jpg';
import projectImg4 from '../../assets/img/project/pro-13.jpg';
import projectImg5 from '../../assets/img/project/pro-63.jpg';
import projectImg6 from '../../assets/img/project/pro-64.jpg';
import projectImg7 from '../../assets/img/project/pro-65.jpg';
import projectImg8 from '../../assets/img/project/pro-66.jpg';
import projectImg9 from '../../assets/img/project/pro-67.jpg';
import projectImg10 from '../../assets/img/project/pro-68.jpg';
import projectImg11 from '../../assets/img/project/pro-69.jpg';
import projectImg12 from '../../assets/img/project/pro-70.jpg';
import projectImg13 from '../../assets/img/project/pro-71.jpg';
import projectImg14 from '../../assets/img/project/pro-72.jpg';

const Project = () => {
  let tab1 = "All",
    tab2 = "Development",
    tab3 = "App Design",
    tab4 = "Branding Design"
    const tabStyle = 'nav nav-pill justify-content-end mb-3';

  return (
    <div className="project-3__area project-3__space project-3__plr">
      <div className="container-fluid">
      <Tabs>
        <div className="row align-items-end">
             <div className="col-xl-6 col-lg-6">
                        <div className="project-3__section-box">
                            <h4 className="section-blue-subtitle char-anim">Our Projects Work</h4>
                            <h3 className="section-title char-anim">We Are the Best Softwer <br/>
                                Company Manage.</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="project-3__project-tab">
                            <TabList className={tabStyle}>
                                <Tab><button>{tab1}</button></Tab>
                                <Tab><button>{tab2}</button></Tab>
                                <Tab><button>{tab3}</button></Tab>
                                <Tab><button>{tab4}</button></Tab>
                            </TabList>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="tab-content" id="pills-tabContent">
                        <TabPanel className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration=".7s">
                                        <SingleProjectTwo
                                            Image={projectImg1}
                                            Title="Research & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.0s">
                                        <SingleProjectTwo
                                            Image={projectImg2}
                                            Title="Apps Of Design"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration=".7s">
                                        <SingleProjectTwo
                                            Image={projectImg3}
                                            Title="Development of Service"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.0s">
                                        <SingleProjectTwo
                                            Image={projectImg4}
                                            Title="Branding & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration=".7s">
                                        <SingleProjectTwo
                                            Image={projectImg5}
                                            Title="Branding & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.0s">
                                        <SingleProjectTwo
                                            Image={projectImg6}
                                            Title="Research & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration=".7s">
                                        <SingleProjectTwo
                                            Image={projectImg3}
                                            Title="Research & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.0s">
                                        <SingleProjectTwo
                                            Image={projectImg4}
                                            Title="Research & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration=".7s">
                                        <SingleProjectTwo
                                            Image={projectImg5}
                                            Title="Branding & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.0s">
                                        <SingleProjectTwo
                                            Image={projectImg6}
                                            Title="Research & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration=".7s">
                                        <SingleProjectTwo
                                            Image={projectImg7}
                                            Title="Research & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.0s">
                                        <SingleProjectTwo
                                            Image={projectImg2}
                                            Title="Research & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration=".7s">
                                        <SingleProjectTwo
                                            Image={projectImg3}
                                            Title="Branding & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.0s">
                                        <SingleProjectTwo
                                            Image={projectImg4}
                                            Title="Research & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration=".7s">
                                        <SingleProjectTwo
                                            Image={projectImg5}
                                            Title="Research & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                    <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.0s">
                                        <SingleProjectTwo
                                            Image={projectImg6}
                                            Title="Branding & Surveys"
                                            Category="Brand Strategy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
            </div>
        </div>
    );
}

export default Project;