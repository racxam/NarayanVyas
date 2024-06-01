import React from 'react';
import About from './AboutSection';
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

const HomeMain = () => {
	return (
		<main>

			<Banner />
			
			<Brand />
			
			<Feature />

			<About />
			
			<Counter />
			
			<Service />
			
			<Project />
			
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