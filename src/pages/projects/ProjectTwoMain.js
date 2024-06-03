import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Masonry from 'react-masonry-css';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import SingleProject from '../../components/Project';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

import projectImg1 from '../../assets/img/project/pro-4.jpg';
import projectImg2 from '../../assets/img/project/pro-5.jpg';
import projectImg3 from '../../assets/img/project/pro-6.jpg';
import projectImg4 from '../../assets/img/project/pro-7.jpg';
import projectImg5 from '../../assets/img/project/pro-8.jpg';
import projectImg6 from '../../assets/img/project/pro-9.jpg';
import projectImg7 from '../../assets/img/project/pro-35.jpg';
import projectImg8 from '../../assets/img/project/pro-36.jpg';
import projectImg9 from '../../assets/img/project/pro-37.jpg';

const ProjectTwoMain = () => {
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
  const tabStyle = 'nav justify-content-center project-2__button-box masonary-menu';

 	return (
	 	<main>
			<Breadcrumb
				pageTitle= "Portfolio Two"
			/>
			
			<div className="project-2__area project-2__plr-3 p-relative fix">
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
						<TabPanel>
							<Masonry
								breakpointCols={breakpointColumnsObj}
								className="my-masonry-grid"
								columnClassName="my-masonry-grid_column">
								{/* array of JSX items */}
								<div>
									<SingleProject
										Image={projectImg1}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg2}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg3}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg4}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg5}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg6}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg7}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg8}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg9}
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
								<div>
									<SingleProject
										Image={projectImg5}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg6}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg7}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg8}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg9}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg1}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg2}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg3}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg4}
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
								<div>
									<SingleProject
										Image={projectImg3}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg4}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg5}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg6}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg1}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg2}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg7}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg8}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg9}
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
								<div>
									<SingleProject
										Image={projectImg1}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg2}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg3}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg4}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg5}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg6}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg7}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg8}
										Title="Conference On Projects"
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg9}
										Title="Conference On Projects"
									/>
								</div>
							</Masonry>
						</TabPanel>
						<div className="row justify-content-center">
							<div className="col-xl-7 wow animate__fadeInUp" data-wow-duration="1.1s">
								<div className="button text-center pt-20">
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

export default ProjectTwoMain;