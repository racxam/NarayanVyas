import React from 'react';
import About from './AboutSection';
import Banner from './HomeTwoBanner';
import Social from './SocialSection';
import Service from './ServiceSection'
import Project from './ProjectSection';
import Testimonial from './TestimonialSection';
import Brand from '../../components/Brand';
import Blog from './BlogSection';
import Video from './VideoSection';
import Contact from '../../components/Contact';

const HomeTwoMain = () => {
	return (
		<main>
         <Banner />

         <Social />
			
         <About />

         <Service />

         <Project />

         <Testimonial />
				  
         <Video />

         <Contact />

         <Blog />
				  
         <Brand
            itemClass="brand__area brand__mlr brand__white-bg-2"
         />


      </main>
	);
}

export default HomeTwoMain;