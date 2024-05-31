import React from 'react';

import BrandTwo from '../../components/Brand/BrandTwo';
import TestimonialPart from './TestimonialSection';
import About from './AboutSection';
import Blog from './BlogSection';
import Contact from './ContactSection';
import Counter from './CounterSection';
import Banner from './HomeFiveBanner';
import Newsletter from './NewsletterSection';
import Project from './ProjectSection';
import Service from './ServiceSection';
import Work from './WorkSection';

const HomeFiveMain = () => {
	return (
		<main>
			<Banner />

         <BrandTwo
				itemClass="brand-3__area brand-3__plr brand-3__space black-bg-2"
			/>
      
         <About />
      
         <Service />
      
         <Counter />
      
         <Project />
      
         <TestimonialPart />
      
         <Work />
      
         <Contact />
      
         <Blog />
      
         <Newsletter />
      </main>
	);
}

export default HomeFiveMain;