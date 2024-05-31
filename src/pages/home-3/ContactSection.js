import React from 'react';
import Faq from '../../components/Faq';

const Contact = () => {

    return (
        <div className="contact__area contact__mlr fix pt-120 pb-90">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">
						<div className="contact__section-title pb-10">
							<h4 className="section-blue-subtitle char-anim">Get In Contact</h4>
							<h3 className="section-title char-anim">Feel free to get in touch <br/>
								Contact with me.</h3>  
						</div>
						<div className="contact__text">
							<p className="char-anim-2">Business tailored it design, management & support services
								business agency elit, sed do eiusmod tempor. </p> 
						</div>
						<div className="contact__form-2">
							<form action="#">
								<div className="row">
								<div className="col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
									<div className="contact__from-2-input">
										<input type="text" placeholder="Your Name" />
									</div>
								</div>
								<div className="col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
									<div className="contact__from-2-input">
										<input type="email" placeholder="Your Email" />
									</div>
								</div>
								<div className="col-sm-12 wow animate__fadeInUp" data-wow-duration="1.1s">
									<div className="contact__from-2-input">
										<textarea placeholder="Message"></textarea>
									</div>
								</div>
								</div>                    
							</form>
						</div>
						<div className="contact__button wow animate__fadeInUp" data-wow-duration="1.1s">
							<button className="main-btn tp-btn-hover alt-color-black"><span>Send Request</span>
								<b></b>
							</button>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">   
						<Faq />           
					</div>
				</div>
			</div>
		</div>
    );
}

export default Contact;