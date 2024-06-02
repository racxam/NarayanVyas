import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SingleProject from '../../components/Project';

// awards certificates
import projectImg1 from '../../assets/img/certificates/awards/icaiihi_2023_session_chair.jpg';
import projectImg2 from '../../assets/img/certificates/awards/ssn_college_workshop_2021.jpg';
import projectImg3 from '../../assets/img/certificates/awards/icdsns_2023_reviewer.jpg';
import projectImg4 from '../../assets/img/certificates/awards/nimitcon_2023_reviewer.jpg';
import projectImg5 from '../../assets/img/certificates/awards/ieeextream_proctor.jpg';
// membership certificates
import projectImg6 from '../../assets/img/certificates/memberships/ieee_membership.jpg';
import projectImg7 from '../../assets/img/certificates/memberships/acm_membership.jpg';
import projectImg8 from '../../assets/img/certificates/memberships/grss_membership.jpg';
import projectImg9 from '../../assets/img/certificates/memberships/ieee_young_professional.jpg';
import projectImg10 from '../../assets/img/certificates/memberships/ieee_consultant_network.jpg';
// course certificates
import projectImg11 from '../../assets/img/certificates/courses/coursera_blockchain.jpg';
import projectImg12 from '../../assets/img/certificates/courses/innobuzz_ceh.jpg';
import projectImg13 from '../../assets/img/certificates/courses/udemy_arduino.jpg';
import projectImg14 from '../../assets/img/certificates/courses/udemy_ethereum_solidity.jpg';
import projectImg15 from '../../assets/img/certificates/courses/udemy_flutter.jpg';
import projectImg16 from '../../assets/img/certificates/courses/sololearn_html.jpg';
import projectImg17 from '../../assets/img/certificates/courses/sololearn_css.jpg';
import projectImg18 from '../../assets/img/certificates/courses/udemy_kicad.jpg';
import projectImg19 from '../../assets/img/certificates/courses/udemy_respberry_pi.jpg';
import projectImg20 from '../../assets/img/certificates/courses/vskills_html5.jpg';


const certificateMasonary = () => {
    const breakpointColumnsObj = {
		default: 5,
		1200: 5,
		992: 3,
		576: 2 
	};

	let tab1 = "All",
		tab2 = "Awards",
		tab3 = "Memberships",
		tab4 = "Courses"
	const tabStyle = 'nav justify-content-center project-2__button-box masonary-menu';

  return (
    <div className="project-2__area project-2__plr-3 project-2__space p-relative fix wow animate__fadeInUp" data-wow-duration="1.1s" style={{paddingTop:"10px"}}>
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
								<div >
									<SingleProject
										Image={projectImg1}
										Title="ICAIHI 2023 Session Chair"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg2}
										Title="SSN College Workshop 2021"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg3}
										Title="ICDSNS 2023 Reviewer"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg4}
										Title="NimitCon 2023 Reviewer"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg5}
										Title="IEEE Xtreme Proctor"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg6}
										Title="IEEE Membership"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg7}
										Title="ACM Membership"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg8}
										Title="GRSS Membership"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg9}
										Title="IEEE Young Professional"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg10}
										Title="IEEE Consultant Network"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg11}
										Title="Coursera Blockchain"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg12}
										Title="Innobuzz CEH"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg13}
										Title="Udemy Arduino"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg14}
										Title="Udemy Ethereum & Solidity"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg15}
										Title="Udemy Flutter"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg16}
										Title="Sololearn HTML"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg17}
										Title="Sololearn CSS"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg18}
										Title="Udemy KiCad"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg19}
										Title="Udemy Raspberry Pi"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg20}
										Title="Vskills HTML5"


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
										Image={projectImg1}
										Title="ICAIHI 2023 Session Chair"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg2}
										Title="SSN College Workshop 2021"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg3}
										Title="ICDSNS 2023 Reviewer"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg4}
										Title="NimitCon 2023 Reviewer"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg5}
										Title="IEEE Xtreme Proctor"


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
										Image={projectImg6}
										Title="IEEE Membership"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg7}
										Title="ACM Membership"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg8}
										Title="GRSS Membership"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg9}
										Title="IEEE Young Professional"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg10}
										Title="IEEE Consultant Network"


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
										Image={projectImg11}
										Title="Coursera Blockchain"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg12}
										Title="Innobuzz CEH"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg13}
										Title="Udemy Arduino"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg14}
										Title="Udemy Ethereum & Solidity"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg15}
										Title="Udemy Flutter"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg16}
										Title="Sololearn HTML"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg17}
										Title="Sololearn CSS"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg18}
										Title="Udemy KiCad"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg19}
										Title="Udemy Raspberry Pi"


									/>
								</div>
								<div>
									<SingleProject
										Image={projectImg20}
										Title="Vskills HTML5"


									/>
								</div>
							</Masonry>
						</TabPanel>
					</Tabs>
				</div>
			</div>
  )
}

export default certificateMasonary
