import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import SingleProject from '../../components/Project';
// achievemetns certi
import projectImg1 from '../../assets/img/certificates/Acheivements/0001-3-min.jpg';
import projectImg2 from '../../assets/img/certificates/Acheivements/IEEE-Conference-Certificate.jpg';
import projectImg3 from '../../assets/img/certificates/Acheivements/IEEE-Membership-Certificate.jpg';
// ai certificates
import projectImg4 from '../../assets/img/certificates/AI Certificates/0001-min.jpg';
import projectImg5 from '../../assets/img/certificates/AI Certificates/Arduino-min.jpg';
import projectImg6 from '../../assets/img/certificates/AI Certificates/UC-47FU85S3-min.jpg';
import projectImg7 from '../../assets/img/certificates/AI Certificates/UC-TKC2KR19-min.jpg';
import projectImg8 from '../../assets/img/certificates/AI Certificates/UC-TRGOH7JJ-min.jpg';
//web certificates
import projectImg9 from '../../assets/img/certificates/Web Certificates/CCA-Certificate-HTML-Level-1_2-1-min.jpg';
import projectImg10 from '../../assets/img/certificates/Web Certificates/CCA-Certificate-Javascript-Level-1_2-1-min.jpg';
import projectImg11 from '../../assets/img/certificates/Web Certificates/Narayan_Vyas__Certificate_2-1-min.jpg';
import projectImg12 from '../../assets/img/certificates/Web Certificates/Sololearn-HTML-Fundamental-min.jpg';
import projectImg13 from '../../assets/img/certificates/Web Certificates/Sololearn-HTML.jpg';


import bgImg from '../../assets/img/cta/cta-bg-2.png';

const ProjectMasonaryMain = () => {
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 2,
    576: 1
  };

	let tab1 = "All",
	tab2 = "Achievements",
	tab3 = "Web Certificates",
	tab4 = "AI  Certificates"
  const tabStyle = 'nav justify-content-center project-2__button-box masonary-menu';

 	return (
	 	<main>
			<Breadcrumb
				pageTitle= "My Certificates"
			/>
			
			<div className="project-2__area project-2__plr-3 project-2__space p-relative fix">
				<div className="container-fluid">
					<Tabs>
						<div className="row">
							<div className="col-xl-12">
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
								<div>
									<SingleProject
										Image={projectImg1}
										Title="2021 Certificate of IEEE Membership"
										categoryOne="ACHIEVEMENT"
										categoryTwo=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg2}
										Title="CERTIFICATE OF PRESENTATION"
										categoryOne="ACHIEVEMENT"
										categoryTwo=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg3}
										Title="2020 Certificate of Membership"
										categoryOne="ACHIEVEMENT"
										categoryTwo=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg4}
										Title="HTML Fundamentals course"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg5}
										Title="Javascript Level 1"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg6}
										Title="HTML Level 1"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg7}
										Title="HTML Fundamentals course"
										categoryOne=" "
										
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg8}
										Title="HTMLS Developer"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg9}
										Title="Tech Explorations™ KiCad"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg10}
										Title="Tech Explorations ™ Basic electronics for Arduino Makers"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg11}
										Title="Tech Explorations ™ Arduino Steps"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg12}
										Title="Certfied Information Security Expert"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg13}
										Title="Flutter & Dart"
										categoryOne=" "
									/>
								</div>
							</Masonry>
						</TabPanel>
						{/* //achievemetns */}
						<TabPanel>
							<Masonry
								breakpointCols={breakpointColumnsObj}
								className="my-masonry-grid"
								columnClassName="my-masonry-grid_column">
								<div>
									<SingleProject
										Image={projectImg1}
										Title="2021 Certificate of IEEE Membership"
										categoryOne="ACHIEVEMENT"
										categoryTwo=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg2}
										Title="CERTIFICATE OF PRESENTATION"
										categoryOne="ACHIEVEMENT"
										categoryTwo=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg3}
										Title="2020 Certificate of Membership"
										categoryOne="ACHIEVEMENT"
										categoryTwo=" "
									/>
								</div>
								
							</Masonry>
						</TabPanel>
						{/* //ai certificates */}
						<TabPanel>
							<Masonry
								breakpointCols={breakpointColumnsObj}
								className="my-masonry-grid"
								columnClassName="my-masonry-grid_column">
								<div>
									<SingleProject
										Image={projectImg4}
										Title="HTML Fundamentals course"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg5}
										Title="Javascript Level 1"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg6}
										Title="HTML Level 1"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg7}
										Title="HTML Fundamentals course"
										categoryOne=" "
										
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg8}
										Title="HTMLS Developer"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg9}
										Title="Tech Explorations™ KiCad"
										categoryOne=" "
									/>
								</div>
								
							</Masonry>
						</TabPanel>
						<TabPanel>
							<Masonry
								breakpointCols={breakpointColumnsObj}
								className="my-masonry-grid"
								columnClassName="my-masonry-grid_column">
								<div>
									<SingleProject
										Image={projectImg10}
										Title="Tech Explorations ™ Basic electronics for Arduino Makers"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg11}
										Title="Tech Explorations ™ Arduino Steps"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg12}
										Title="Certfied Information Security Expert"
										categoryOne=" "
									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg13}
										Title="Flutter & Dart"
										categoryOne=" "
									/>
								</div>
								
								
							</Masonry>
						</TabPanel>
					</Tabs>
				</div>
			</div>
			
      <CTA
        ctaBG={bgImg}
      />
    </main>
	);
}

export default ProjectMasonaryMain;