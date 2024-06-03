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
				pageTitle="Projects"
			/>

			<div class='container mt-100 mb-100'>
			</div>
			<CTA
				btnText={"Book Appointment"}
			/>

		</main>
	);
}

export default ProjectMain;