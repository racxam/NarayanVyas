import React from 'react';
import Brand from '../../components/Brand';
import About from './AboutSection';
import Blog from './BlogSection';
import Contact from './ContactSection';
import Feature from './FeatureSection';
import Banner from './HomeThreeBanner';
import Price from './PriceSection';
import Project from './ProjectSection';
import Service from './ServiceSection';
import Team from './TeamSection';
import Video from './VideoSection';

const HomeThreeMain = () => {
	return (
		<main>
			<Banner />
			
			<Feature />
			
			<About />
			
			<Service />
			
			<Project />
			
			<Video />
			
			<Team />
			
			<Brand
				itemClass="brand__area brand__mlr brand__white-bg-3"
			/>
			
			<Contact />
			
			<Price />
			
			<Blog />


		</main>
	);
}

export default HomeThreeMain;