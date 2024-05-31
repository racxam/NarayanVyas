import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SingleProject from '../../components/Project';

import projectImg1 from '../../assets/img/project/pro-17.jpg';
import projectImg2 from '../../assets/img/project/pro-18.jpg';
import projectImg3 from '../../assets/img/project/pro-19.jpg';
import projectImg4 from '../../assets/img/project/pro-20.jpg';
import projectImg5 from '../../assets/img/project/pro-21.jpg';
import projectImg6 from '../../assets/img/project/pro-22.jpg';

const Project = () => {
    const breakpointColumnsObj = {
        default: 3,
        1200: 3,
        992: 2,
        576: 1
    };

    let tab1 = "All",
        tab2 = "Development",
        tab3 = "App Design",
        tab4 = "Branding Design"
        const tabStyle = 'nav nav-pill justify-content-center mb-3 project-2__button-box project-2__button-box-2 masonary-menu';

    return (
        <div className="project-2__area project-2__plr-2 black-bg-2 project-2__space">
            <div className="container-fluid">
                <Tabs>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="project-2__section-box text-center  pb-30">
                                <h4 className="section-subtitle section-white-bg title-anim wow animate__fadeInUp" data-wow-duration="1.1s"
                                >Our Projects Work</h4>
                                <h3 className="section-title text-white title-anim wow animate__fadeInUp" data-wow-duration="1.1s"
                                >We Are the Best Projects <br/>
                            Company Manage.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <TabList className={tabStyle}>
                                <Tab><button>{tab1}</button></Tab>
                                <Tab><button>{tab2}</button></Tab>
                                <Tab><button>{tab3}</button></Tab>
                                <Tab><button>{tab4}</button></Tab>
                            </TabList>
                        </div>
                    </div>
                    <TabPanel>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {/* array of JSX items */}
                            <div className="wow animate__fadeInUp" data-wow-duration=".9s">
                                <SingleProject
                                    Image={projectImg1}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.1s">
                                <SingleProject
                                    Image={projectImg2}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.5s">
                                <SingleProject
                                    Image={projectImg3}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration=".9s">
                                <SingleProject
                                    Image={projectImg4}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.1s">
                                <SingleProject
                                    Image={projectImg5}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.5s">
                                <SingleProject
                                    Image={projectImg6}
                                    Title="Conference On Projects"
                                />
                            </div>
                        </Masonry>
                    </TabPanel>
                    <TabPanel>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {/* array of JSX items */}
                            <div className="wow animate__fadeInUp" data-wow-duration=".9s">
                                <SingleProject
                                    Image={projectImg1}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.1s">
                                <SingleProject
                                    Image={projectImg3}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.5s">
                                <SingleProject
                                    Image={projectImg2}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration=".9s">
                                <SingleProject
                                    Image={projectImg4}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.1s">
                                <SingleProject
                                    Image={projectImg6}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.5s">
                                <SingleProject
                                    Image={projectImg5}
                                    Title="Conference On Projects"
                                />
                            </div>
                        </Masonry>
                    </TabPanel>
                    <TabPanel>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {/* array of JSX items */}
                            <div className="wow animate__fadeInUp" data-wow-duration=".9s">
                                <SingleProject
                                    Image={projectImg4}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.1s">
                                <SingleProject
                                    Image={projectImg2}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.5s">
                                <SingleProject
                                    Image={projectImg3}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration=".9s">
                                <SingleProject
                                    Image={projectImg1}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.1s">
                                <SingleProject
                                    Image={projectImg5}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.5s">
                                <SingleProject
                                    Image={projectImg6}
                                    Title="Conference On Projects"
                                />
                            </div>
                        </Masonry>
                    </TabPanel>
                    <TabPanel>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {/* array of JSX items */}
                            <div className="wow animate__fadeInUp" data-wow-duration=".9s">
                                <SingleProject
                                    Image={projectImg1}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.1s">
                                <SingleProject
                                    Image={projectImg3}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.5s">
                                <SingleProject
                                    Image={projectImg2}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration=".9s">
                                <SingleProject
                                    Image={projectImg4}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.1s">
                                <SingleProject
                                    Image={projectImg5}
                                    Title="Conference On Projects"
                                />
                            </div>
                            <div className="wow animate__fadeInUp" data-wow-duration="1.5s">
                                <SingleProject
                                    Image={projectImg6}
                                    Title="Conference On Projects"
                                />
                            </div>
                        </Masonry>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default Project;