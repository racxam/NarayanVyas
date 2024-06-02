import React from 'react';
import About from '../home-2/AboutSection';
import Blog from './BlogSection';
import Brand from '../../components/Brand';
import Company from './CompanySection';
import Counter from '../home-5/CounterSection';
import CTA from './CtaSection';
import Feature from './FeatureSection';
import Banner from './HomeBanner';
import Project from './ProjectSection';
import Service from './ServiceSection';
import Testimonial from './TestimonialSection';
import Social from './SocialSection';
import Contact from '../../components/Contact/ContactTwo'

import CertificationSection from './CertificationSection';

const HomeMain = () => {
	return (
		<main>

			<Banner />
			
			{/* Currently hiding the Brands menu as it might cause copyright related issues */}
			{/* <Brand /> */}
			

			{/* Hiding this seciton also coz it is same as the project section  */}
			{/* <Feature /> */}

			<About />
			
			<Counter />
			
			<Service />
			
			<CertificationSection/>
			
			<Project 
			slidesToShow={"4"}
			/>
			
			
			{/* <Social /> */}
			
			{/* <Company /> */}
			
			{/* <Testimonial /> */}
			<Contact/>
			
			 
			{/* <Blog /> */}
			
			<CTA />



		</main>
	);
}

export default HomeMain;