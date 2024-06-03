import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SingleProject from '../../components/Project';

// awards certificates
import certificateImg1 from '../../assets/img/certificates/awards/icaiihi_2023_session_chair.jpg';
import certificateImg2 from '../../assets/img/certificates/awards/ssn_college_workshop_2021.jpg';
import certificateImg3 from '../../assets/img/certificates/awards/icdsns_2023_reviewer.jpg';
import certificateImg4 from '../../assets/img/certificates/awards/nimitcon_2023_reviewer.jpg';
import certificateImg5 from '../../assets/img/certificates/awards/ieeextream_proctor.jpg';
// membership certificates
import certificateImg6 from '../../assets/img/certificates/memberships/ieee_membership.jpg';
import certificateImg7 from '../../assets/img/certificates/memberships/acm_membership.jpg';
import certificateImg8 from '../../assets/img/certificates/memberships/grss_membership.jpg';
import certificateImg9 from '../../assets/img/certificates/memberships/ieee_young_professional.jpg';
import certificateImg10 from '../../assets/img/certificates/memberships/ieee_consultant_network.jpg';
// course certificates
import certificateImg11 from '../../assets/img/certificates/courses/coursera_blockchain.jpg';
import certificateImg12 from '../../assets/img/certificates/courses/innobuzz_ceh.jpg';
import certificateImg13 from '../../assets/img/certificates/courses/udemy_arduino.jpg';
import certificateImg14 from '../../assets/img/certificates/courses/udemy_ethereum_solidity.jpg';
import certificateImg15 from '../../assets/img/certificates/courses/udemy_flutter.jpg';
import certificateImg16 from '../../assets/img/certificates/courses/sololearn_html.jpg';
import certificateImg17 from '../../assets/img/certificates/courses/sololearn_css.jpg';
import certificateImg18 from '../../assets/img/certificates/courses/udemy_kicad.jpg';
import certificateImg19 from '../../assets/img/certificates/courses/udemy_respberry_pi.jpg';
import certificateImg20 from '../../assets/img/certificates/courses/vskills_html5.jpg';


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
		<div className="project-2__area project-2__plr-3 project-2__space p-relative fix wow animate__fadeInUp" data-wow-duration="1.1s" style={{ paddingTop: "10px" }}>
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
									Image={certificateImg1}
									Title="ICAIHI 2023 Session Chair"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg2}
									Title="SSN College Workshop 2021"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg3}
									Title="ICDSNS 2023 Reviewer"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg4}
									Title="NimitCon 2023 Reviewer"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg5}
									Title="IEEE Xtreme Proctor"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg6}
									Title="IEEE Membership"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg7}
									Title="ACM Membership"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg8}
									Title="GRSS Membership"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg9}
									Title="IEEE Young Professional"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg10}
									Title="IEEE Consultant Network"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg11}
									Title="Coursera Blockchain"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg12}
									Title="Innobuzz CEH"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg13}
									Title="Udemy Arduino"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg14}
									Title="Udemy Ethereum & Solidity"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg15}
									Title="Udemy Flutter"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg16}
									Title="Sololearn HTML"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg17}
									Title="Sololearn CSS"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg18}
									Title="Udemy KiCad"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg19}
									Title="Udemy Raspberry Pi"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg20}
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
									Image={certificateImg1}
									Title="ICAIHI 2023 Session Chair"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg2}
									Title="SSN College Workshop 2021"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg3}
									Title="ICDSNS 2023 Reviewer"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg4}
									Title="NimitCon 2023 Reviewer"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg5}
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
									Image={certificateImg6}
									Title="IEEE Membership"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg7}
									Title="ACM Membership"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg8}
									Title="GRSS Membership"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg9}
									Title="IEEE Young Professional"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg10}
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
									Image={certificateImg11}
									Title="Coursera Blockchain"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg12}
									Title="Innobuzz CEH"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg13}
									Title="Udemy Arduino"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg14}
									Title="Udemy Ethereum & Solidity"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg15}
									Title="Udemy Flutter"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg16}
									Title="Sololearn HTML"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg17}
									Title="Sololearn CSS"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg18}
									Title="Udemy KiCad"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg19}
									Title="Udemy Raspberry Pi"


								/>
							</div>
							<div>
								<SingleProject
									Image={certificateImg20}
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
