import React from 'react';
import About from '../home/AboutSection';
import Counter from '../home/CounterSection';
import CTA from './CtaSection';
import Banner from './HomeBanner';
import Project from './ProjectSection';
import Service from './ServiceSection';
import Testimonial from '../home/TestimonialSection';
import HomePagePublications from './HomePagePublications';
import Contact from '../../components/Contact/Contact'
import Books from '../../components/Books/index'

import CertificationSection from './CertificationSection';
import CFCComponent from '../../components/CallForChapters/index'



const HomeMain = () => {
	return (
		<main>

			<Banner />

			{/* Currently hiding the Brands menu as it might cause copyright related issues */}
			{/* <Brand /> */}


			{/* Hiding this seciton also coz it is same as the project section  */}
			{/* <Feature /> */}

			<About />

			<Books />

			<CFCComponent />

			<Counter />

			<Service />

			<HomePagePublications />

			<CertificationSection />

			<Project
				
			/>

			<Testimonial />

			<Contact />

			<CTA />

			{/* <Social /> */}

			{/* <Company /> */}
		</main>
	);
}

export default HomeMain;