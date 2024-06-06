import React from 'react';
import CTA from '../../components/CTA';
import Breadcrumb from '../../components/Breadcrumb';
import serviceImg1 from '../../assets/img/service/iot-solutions.jpg';

const KwizzleMobileAppProjectMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="Kwizzle Mobile App"
			/>

			<div className="service-details__area service-details__plr mt-110 mb-30">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-8 col-lg-7 wow animate__fadeInLeft" data-wow-duration="1.1s">
							<div className="service-details__main-img">
								<img src={serviceImg1} alt="" />
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 wow animate__fadeInRight" data-wow-duration="1.1s">
							<div className="service-details__service-item">
								<h4>What you will get?</h4>
								<ul>
									<li>Flutter, APIs</li>
									<li>Dart</li>
									<li>Australia</li>
									<li>6 Months</li>
									<li>Custom APIs</li>
								</ul>
							</div>

						</div>
					</div>
					<div className="row">
						<div className="col-xl-12">
							<div className="service-details__item pt-40 wow animate__fadeInUp" data-wow-duration="1.1s">
								<div className="service-details__text">
									<p>Kwizzles is an innovative mobile application designed to facilitate an immersive exploration of Hindu scriptures through an engaging quiz-based format. The app features meticulously crafted quizzes sourced from revered Hindu texts such as the Bhagavad Gita, Ramayana, Mahabharata, Puranas, and Upanishads, covering spiritual teachings, moral lessons, historical events, and mythical narratives. Kwizzles caters to users of all backgrounds and expertise levels, providing a platform to deepen their understanding of ancient Hindu wisdom and philosophy.</p>
									<p>With a seamless user experience, Kwizzles allows users to create personalized accounts, track their progress, manage streaks, and compete on leaderboards. The app offers quizzes tailored to individual interests and proficiency levels, making learning both enjoyable and rewarding. Additionally, interactive features like discussion forums and social sharing options foster a sense of community and camaraderie, enabling users to engage with like-minded individuals, exchange insights, and build meaningful connections.</p>
									<p>Kwizzles is more than just a quiz application; it is a gateway to enlightenment, guiding users on a transformative journey of self-discovery and spiritual growth. Each quiz offers an opportunity to delve deeper into the mysteries of existence, uncover hidden truths, and gain valuable insights into the nature of reality. Join the vibrant community of seekers and scholars on Kwizzles and embark on a journey of learning, exploration, and enlightenment today.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<CTA
				btnText={"Book Appointment"}
			/>

		</main>
	);
}

export default KwizzleMobileAppProjectMain;