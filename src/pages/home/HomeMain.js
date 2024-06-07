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
import Brand from '../../components/Brand'
import CertificationSection from './CertificationSection';
import CFCComponent from '../../components/CallForChapters/index'



const HomeMain = () => {
	return (
		<main>

			<Banner />

			<Brand />

			<About />

			<Books />

			<CFCComponent />

			<Counter />

			<Service />

			<HomePagePublications />

			<CertificationSection />

			<Project />

			<Testimonial />

			<Contact />

			<CTA />

			{/* <Social /> */}

			{/* <Company /> */}
		</main>
	);
}

export default HomeMain;