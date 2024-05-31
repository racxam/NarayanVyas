import React from 'react';
import { Link } from 'react-router-dom';
import SocialFeed from '../../components/SocialFeed';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

import projectSingleImg1 from '../../assets/img/project/pro-38.jpg';
import projectSingleImg2 from '../../assets/img/project/pro-39.jpg';
import projectSingleImg3 from '../../assets/img/project/pro-40.jpg';

const ProjectDetailsMain = () => {

	return (
		<main>
     <Breadcrumb
      pageTitle= "Project Details"
     />
		 
     <div className="project-details__area project-details__plr mt-100 mb-80">
      <div className="container-fluid">
        <div className="row">
         <div className="col-xl-12">
           <div className="project-details__item">
            <div className="project-details__img wow animate__fadeInUp" data-wow-duration="1.1s">
              <img src={projectSingleImg1} alt="" />
            </div>
            <div className="project-details__border">
              <div className="row align-items-center">
               <div className="col-xl-6 col-lg-7 wow animate__fadeInUp" data-wow-duration="1.1s">
                 <div className="project-details__left">
                  <h4>Projects Details:</h4>
                  <p>About : Phis are bound to ensue; and equal blame belongs to those who 
                    through weakness of will, which is the same as through.We have the <br/> 
                    and industry expertise to develop solutions that can connect the <br/>
                    you need to craft an idea for a completely new product or <br/>
                    elevate the quality of an existing solution.</p>
                 </div>
               </div>
               <div className="col-xl-6 col-lg-5 wow animate__fadeInUp" data-wow-duration="1.1s">
                 <div className="project-details__right">
                  <ul>
                    <li><i className="far fa-check-circle"></i><span>Client:</span>Burosa (USA)</li>
                    <li><i className="far fa-check-circle"></i><span>Date:</span>March 21, 2020</li>
                    <li><i className="far fa-check-circle"></i><span>Category:</span>Technology</li>
                    <li><i className="far fa-check-circle"></i><span>Location:</span>Dhaka</li>
                  </ul>
                 </div>
               </div>
              </div>
            </div>
           </div>
         </div>
        </div>
      </div>
     </div>

     <div className="social__area social__mlr pb-70">
      <div className="container-fluid">
        <SocialFeed />
      </div>
     </div>

     <div className="project-details__area pb-100">
      <div className="container">
        <div className="row">
         <div className="col-xl-12">
           <div className="project-details__item">
            <div className="project-details__img pb-50 wow animate__fadeInUp" data-wow-duration="1.1s">
              <img src={projectSingleImg2} alt="" />
            </div>
            <div className="project-details__text wow animate__fadeInUp" data-wow-duration="1.1s">
              <p>There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby we are the fast to
               injected humour,by injected humour, or randomised coved ceilings. are bound to ensue; and equal blame belongs can to bo erwtg mont be <br/>
               fao go not be hie best to those who through weakness .....</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium, totam rem aperiam eaquepsa quae abillo i
               architecto beatae vitae dicta sunt explicabo. Nemo enimpsam luptate quia voluptas aspernatur aut fugitdolor sit amet </p>  
              <p className="pb-40">There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby we are the fast to 
               injected humour,by injected humour, or randomised coved ceilings. are bound to ensue; and equal blame belongs can to bo erwtg mont be <br/>
               fao go not be hie best to those who through weakness ....</p> 
            </div> 
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 wow animate__fadeInLeft" data-wow-duration="1.1s">
               <div className="project-details__solution">
                 <h4>Final solution:</h4>
                 <p>Business tailored it design, management & support services
                  business agency elit, sed do eiusmod tempor. </p>
                 <ul>
                  <li><i className="far fa-check-square"></i><span>Business sagittis aliquaenim minim veniam leo.</span></li>
                  <li><i className="far fa-check-square"></i><span>We give management agency service. </span></li>
                  <li><i className="far fa-check-square"></i><span>Business sagittis aliquaenim minim veniam leo.</span></li>
                  <li><i className="far fa-check-square"></i><span>Bacteria Markers sagittis aliquaenim minim venia.</span></li>
                  <li><i className="far fa-check-square"></i><span>Nam nec mi euismod minim veniam leo.</span></li>
                  <li><i className="far fa-check-square"></i><span>We sagittis aliquaenim minim veniam leo.</span></li>
                 </ul>
                 <p>Business tailored it design, management & support services
                  business agency elit, sed do eiusmod tempor. </p>
               </div>
              </div>
              <div className="col-xl-7 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">
               <div className="project-details__img text-start text-lg-end">
                 <img src={projectSingleImg3} alt="" />
               </div>               
              </div>
            </div>
           </div>
         </div>
        </div>
      </div>
     </div>

     <CTA
      ctaBG={bgImg}
     />

   </main>
	);
}

export default ProjectDetailsMain;