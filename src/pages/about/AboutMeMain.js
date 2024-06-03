import React from 'react';
import { Link } from 'react-router-dom';

import CTA from '../../components/CTA';
import SocialFeed from '../../components/SocialFeed';
import ContactTwo from '../../components/Contact/ContactTwo';
import Breadcrumb from '../../components/Breadcrumb';

import aboutImg from '../../assets/img/about/narayan_vyas_Profile_photo_forAbout.png'
import aboutImg2 from '../../assets/img/about/about-2.jpg'

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const HomeMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="About Me"
			/>
  
			<div className="about-5__area about-5__plr" >
				<div className="container-fluid">
					<div className="about-5__border">
						<div className="row align-items-center">
							<div className="col-xl-5 col-lg-5 wow tpfadeUp" data-wow-duration="1.1s">
								<div className="about-5__main-img text-center text-lg-start">
									<Link to="/about-us"><img src={aboutImg} alt="" /></Link>
								</div>
							</div>
							<div className="col-xl-7 col-lg-7">
								<div className="about-5__content-box">
									<h4 className="about-5__content-title wow tpfadeUp" data-wow-duration="1.1s">About Me:</h4>
									<div className="about-5__content">
										<div className="about-5__text wow tpfadeUp" data-wow-duration="1.1s">
											<p>About : My name is Narayan Vyas, I am a professional Web Developer, Android / iOS App Developer and a Teacher. I have good experience in Arduino, Electronics, Internet of Things, Robotics, HTML5, CSS3, BootStrap, WordPress, Flutter, JavaScript, jQuery and SEO. I have completed more than 50 projects for my clients in past 7 years. I am currently Founder & CEO of Web Dev Fusion. </p>
										</div>
										<div className="about-5__content-list wow tpfadeUp" data-wow-duration="1.1s">
											<ul>
												<li><i className="fal fa-check-circle"></i><span>Name: 	Narayan Vyas</span></li>
												<li><i className="fal fa-check-circle"></i><span>Address: Bhilwara</span></li>
												<li><i className="fal fa-check-circle"></i><span>Age: 24 Years</span></li>
												<li><i className="fal fa-check-circle"></i><span>Nationality: Indian</span></li>
												<li><i className="fal fa-check-circle"></i><span>Freelance: Available</span></li>
												<li><i className="fal fa-check-circle"></i><span>Email: contact@narayanvyas.com</span></li>
											</ul>
										</div>
										<div className="about-5__button wow tpfadeUp" data-wow-duration="1.1s">
											<Link className="main-btn tp-btn-hover alt-color" to="/about-us">
												<span>About More</span>
												<b></b>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="social__area social__plr-2 p-relative z-index">
				<div className="container-fluid">
					<SocialFeed />
				</div>
			</div>

			{/* <div className="about-details__area about-details__plr">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration="1.1s">
              	<div className="about-details__main-img">
               	<Link to="/about-us"><img src={aboutImg2} alt="" /></Link>
              	</div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration="1.1s">
              	<div className="about-details__content">
               	<h4 className="about-details__title">Personal Awards:</h4>
               	<div className="about-details__text">
                 	<p>Business tailored it design, management & support services business agency elit, sed do eiusmod tempor. </p>
               	</div>
               	<div className="about-details__content-list">
									<ul>
										<li><i className="fal fa-check-square"></i><span>Business sagittis aliquaenim minim veniam leo.</span></li>
										<li><i className="fal fa-check-square"></i><span>We give management agency service. </span></li>
										<li><i className="fal fa-check-square"></i><span>Business sagittis aliquaenim minim veniam leo.</span></li>
										<li><i className="fal fa-check-square"></i><span>Bacteria Markers sagittis aliquaenim minim venia.</span></li>
										<li><i className="fal fa-check-square"></i><span>Nam nec mi euismod minim veniam leo.</span></li>
										<li><i className="fal fa-check-square"></i><span>We sagittis aliquaenim minim veniam leo.</span></li>
									</ul>
               	</div>
               	<div className="about-details__text">
                 	<p>Business tailored it design, management & support services business agency elit, sed do eiusmod tempor. </p>
               	</div>
              	</div>
            </div>
            <div className="col-xl-12">
              <div className="about-details__text-2 pt-50 wow tpfadeUp" data-wow-duration="1.1s">
               	<p>There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby we are the fast to mane agency fast taking <br/>injected humour,by injected humour, or randomised coved ceilings. are bound to ensue; and equal blame belongs can to bo erwtg mont be business perfect <br/>fao go not be hie best to those who through weakness .....</p>
               	<p>Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium, totam rem aperiam eaquepsa quae abillo inventore veritatis et quasi <br/>architecto beatae vitae dicta sunt explicabo. Nemo enimpsam luptate quia voluptas aspernatur aut fugitdolor sit amet </p>  
               	<p>There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby we are the fast to mane agency fast taking <br/>injected humour,by injected humour, or randomised coved ceilings. are bound to ensue; and equal blame belongs can to bo erwtg mont be business perfect <br/>fao go not be hie best to those who through weakness .....</p>  
              </div>
            </div>
          </div>
				</div>
			</div> */}

			<ContactTwo />
			<CTA />
		</main>
	);
}

export default HomeMain;