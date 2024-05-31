import React from 'react';
import { Link } from 'react-router-dom';

import Brand from '../../components/Brand';
import Project from './ProjectSection';
import Feature from './FeatureSection';
import Banner from './HomeFourBanner';
import Skill from './SkillSection';
import Solution from './SolutionSection';
import Work from './WorkSection';
import WorkTwo from './WorkSectionTwo';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import Newsletter from './NewletterSection';
import Video from './VideoSection';

const HomeFourMain = () => {
	return (
		<main>
			<Banner />

			<Brand 
				itemClass="brand-2__area brand-2__space"
			/>
			
			<Work />
			
			<Skill />
			
			<Solution />
			
			<Feature />
			
			<WorkTwo />
			
			<Project />
			
			<Testimonial />
			
			<Video />
			
			<Newsletter />
			
			<Blog />
		</main>
	);
}

export default HomeFourMain;