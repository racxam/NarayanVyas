import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionTitle from '../../components/SectionTitle';
import SingleProject from '../../components/Project';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';


import shapeImg1 from '../../assets/img/project/pro-shape-1.png';
import shapeImg2 from '../../assets/img/project/pro-shape-2.png';
import shapeImg3 from '../../assets/img/project/pro-shape-4.png';
import shapeImg4 from '../../assets/img/project/pro-shape-5.png';

import projectImg1 from '../../assets/img/project/pro-4.jpg';
import projectImg2 from '../../assets/img/project/pro-5.jpg';
import projectImg3 from '../../assets/img/project/pro-6.jpg';
import projectImg4 from '../../assets/img/project/pro-7.jpg';
import projectImg5 from '../../assets/img/project/pro-8.jpg';
import projectImg6 from '../../assets/img/project/pro-9.jpg';

const dataImages = [
    {
      id: 1,
      image: projectImg1,
    },
    {
      id: 2,
      image: projectImg2,
    },
    {
      id: 3,
      image: projectImg3,
    },
    {
      id: 4,
      image: projectImg4,
    },
    {
      id: 5,
      image: projectImg5,
    },
    {
      id: 6,
      image: projectImg6,
    },
];

const Project = () => {
	let tab1 = "All",
	tab2 = "Development",
	tab3 = "App Design",
	tab4 = "Branding Design"
   const tabStyle = 'nav justify-content-center project-2__button-box masonary-menu';
   
	// State
	const [toggle, setToggle] = React.useState(false);
	const [sIndex, setSIndex] = React.useState(0);

	// Handler
	const lightBoxHandler = (status, value) => {
		setToggle(status);
		setSIndex(value);
	};

    return (
        <div className="project-2__area project-2__plr project-2__space p-relative fix">
            <div className="project-2__shape-1 d-none d-lg-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="project-2__shape-2 d-none d-lg-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="project-2__shape-3 d-none d-lg-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="project-2__shape-4 d-none d-lg-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <SectionTitle
                            sectionClass= "project-2__section-box text-center pb-30 section-title-fixed-width"
                            subTitle= "Our Projects Work"
                            Title= "Here Are the Best Projects Company Manage."
                        />
                    </div>
                </div>
                <Tabs>
                    <div className="row">
                        <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <TabList className={tabStyle}>
                                <Tab><button>{tab1}</button></Tab>
                                <Tab><button>{tab2}</button></Tab>
                                <Tab><button>{tab3}</button></Tab>
                                <Tab><button>{tab4}</button></Tab>
                            </TabList>
                        </div>
                    </div>
                    <TabPanel className="row">
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProject
                                Image={projectImg1}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 grid-item wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProject
                                Image={projectImg6}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProject
                                Image={projectImg2}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProject
                                Image={projectImg3}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProject
                                Image={projectImg4}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProject
                                Image={projectImg5}
                                Title="Conference On Projects"
                            />
                        </div>
                    </TabPanel>
                    <TabPanel className="row">
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProject
                                Image={projectImg2}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProject
                                Image={projectImg3}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 grid-item wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProject
                                Image={projectImg4}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 grid-item wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProject
                                Image={projectImg2}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProject
                                Image={projectImg3}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProject
                                Image={projectImg5}
                                Title="Conference On Projects"
                            />
                        </div>
                    </TabPanel>
                    <TabPanel className="row">
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProject
                                Image={projectImg1}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProject
                                Image={projectImg2}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProject
                                Image={projectImg3}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProject
                                Image={projectImg5}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProject
                                Image={projectImg4}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProject
                                Image={projectImg6}
                                Title="Conference On Projects"
                            />
                        </div>
                    </TabPanel>
                    <TabPanel className="row">
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProject
                                Image={projectImg2}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProject
                                Image={projectImg4}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProject
                                Image={projectImg2}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".6s">
                            <SingleProject
                                Image={projectImg3}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration=".9s">
                            <SingleProject
                                Image={projectImg4}
                                Title="Conference On Projects"
                            />
                        </div>
                        <div className="col-xxxl-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProject
                                Image={projectImg5}
                                Title="Conference On Projects"
                            />
                        </div>
                    </TabPanel>
                </Tabs>
                <LightBox
                    state={toggle}
                    event={lightBoxHandler}
                    data={dataImages}
                    imageWidth="600px"
                    imageHeight="500px"
                    thumbnailHeight={50}
                    thumbnailWidth={50}
                    setImageIndex={setSIndex}
                    imageIndex={sIndex}
                />
            </div>
        </div>
    );
}

export default Project;