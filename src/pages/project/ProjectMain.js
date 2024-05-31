import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';
import projectImg1 from '../../assets/img/project/pro-43.jpg';
import projectImg2 from '../../assets/img/project/pro-44.jpg';
import projectImg3 from '../../assets/img/project/pro-45.jpg';
import projectImg4 from '../../assets/img/project/pro-46.jpg';
import projectImg5 from '../../assets/img/project/pro-47.jpg';
import SingleProjectThree from '../../components/Project/SingleProjectThree';

const ProjectMain = () => {
  let tab1 = "All",
    tab2 = "Development",
    tab3 = "App Design",
    tab4 = "Branding Design"
    const tabStyle = 'nav nav-pill justify-content-center mb-3';

	return (
		<main>
			<Breadcrumb
				pageTitle= "Portfolio"
			/>
			
			<div className="project-3__area project-3__space-2 project-3__inner-wrapper project-3__plr">
				<div className="container">
				<Tabs>
					<div className="row justify-content-center">
						<div className="col-xl-12 col-lg-12 wow animate__fadeInUp" data-wow-duration="1.1s">
							<div className="project-3__project-tab text-center">
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
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg2}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg3}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg4}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg5}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
							</TabPanel>
							<TabPanel className="row">
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg2}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg4}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg3}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg5}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
							</TabPanel>
							<TabPanel className="row">
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg4}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg3}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg2}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
							</TabPanel>
							<TabPanel className="row">
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
							</TabPanel>
							<TabPanel className="row">
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
								<div className="col-xl-12">
									<SingleProjectThree
										Image={projectImg1}
										Title="Conference On Projects"
										Category="Business"
										CategoryTwo="Branding"
									/>
								</div>
							</TabPanel>
						</div>
					</div>
					<div className="row">
						<div className="col wow animate__fadeInUp" data-wow-duration="1.1s">
							<div className="project__details-btn text-center">
								<Link className="main-btn tp-btn-hover alt-color" to="/contact"><span>Get Started</span><b></b></Link>
							</div>
						</div>
					</div>
				</Tabs>
				</div>
			</div>
			
			<CTA
				ctaBG={bgImg}
			/>

    </main>
	);
}

export default ProjectMain;