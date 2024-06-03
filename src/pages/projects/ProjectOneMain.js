import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import SingleProject from '../../components/Project';

import projectImg1 from '../../assets/img/project/pro-24.jpg';
import projectImg2 from '../../assets/img/project/pro-25.jpg';
import projectImg3 from '../../assets/img/project/pro-26.jpg';
import projectImg4 from '../../assets/img/project/pro-27.jpg';
import projectImg5 from '../../assets/img/project/pro-28.jpg';
import projectImg6 from '../../assets/img/project/pro-29.jpg';
import projectImg7 from '../../assets/img/project/pro-30.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';


const ProjectOneMain = () => {
  let tab1 = "All",
    tab2 = "Development",
    tab3 = "App Design",
    tab4 = "Branding Design"
   const tabStyle = 'nav justify-content-center project-2__button-box masonary-menu';

	return (
		<main>
     <Breadcrumb
      pageTitle= "Portfolio Two"
     />
		 
      <div className="project-2__area project-2__plr project-2__space p-relative">
        <div className="container-fluid">
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
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat3 cat5 cat2">
            <SingleProject
              Image={projectImg2}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat4 cat2">
            <SingleProject
              Image={projectImg3}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat3 cat4 cat5">
            <SingleProject
              Image={projectImg4}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat4 cat3">
            <SingleProject
              Image={projectImg5}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg6}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg7}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
         </TabPanel>
         <TabPanel className="row">
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat5">
            <SingleProject
              Image={projectImg2}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat3 cat5 cat2">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat4 cat2">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat3 cat4 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat4 cat3">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
         </TabPanel>
         <TabPanel className="row">
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat3 cat5 cat2">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat4 cat2">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat3 cat4 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat4 cat3">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
         </TabPanel>
         <TabPanel className="row">
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat3 cat5 cat2">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat4 cat2">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat3 cat4 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat4 cat3">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
           <div className="col-xl-6 col-lg-6 col-md-6 grid-item cat2 cat4 cat3 cat5">
            <SingleProject
              Image={projectImg1}
              Title="Conference On Projects"
            />
           </div>
         </TabPanel>
         <div className="row justify-content-center">
           <div className="col-xl-7">
            <div className="button text-center pt-50">              
              <Link className="main-btn tp-btn-hover alt-color" to="/project-details"><span>Read More</span><b></b></Link>
            </div>
           </div>
         </div>
        </Tabs>
        </div>
      </div>
			
      <CTA
				btnText={"Book Appointment"}
			/>

    </main>
	);
}

export default ProjectOneMain;