import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import SingleProject from '../../components/Project';
import CertificationSection from '../../components/certificates/certificateMasonary';

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

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const CertificatesMasonaryMain = () => {
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
		<main>
			<Breadcrumb
				pageTitle="My Certifications"
			/>

			
			<CertificationSection/>
			<CTA

			/>
		</main>
	);
}

export default CertificatesMasonaryMain;
