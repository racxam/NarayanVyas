import React from 'react';
import emailjs from 'emailjs-com';

import shapeImg1 from '../../assets/img/contact/ct-shape-1.png';
import shapeImg2 from '../../assets/img/contact/ct-shape-2.png';
import shapeImg3 from '../../assets/img/contact/ct-shape-3.png';
import shapeImg4 from '../../assets/img/contact/ct-shape-4.png';

const ContactTwo = (props) => {
    const { itemClass } = props;
 
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('', '', e.target, '')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }

    return (
        <div className={itemClass ? itemClass : 'contact__area contact__plr-2 mt-200 mb-100 p-relative fix'} >
            <div className="contact__shape-1 d-none d-lg-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="contact__shape-2 d-none d-md-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="contact__shape-3 d-none d-md-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="contact__shape-4 d-none d-md-block">
                <img src={shapeImg4} alt="" />
            </div>
            {/* <div className="contact__border"> */}
            <div className="">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="contact__section-title pb-10">
                                <h4 className="section-subtitle char-anim">Get In Contact</h4>
                                <h3 className="section-title char-anim">Feel free to get in touch! <br /></h3>
                            </div>
                            <div className="contact__text">
                                <p className="char-anim-2">

                                 I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. </p>
                            </div>
                            <div className="contact__form wow animate__fadeInUp" data-wow-duration="1.1s">
                                <form action="#" onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="postbox__contact-input">
                                                <input type="text" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="postbox__contact-input">
                                                <input type="email" placeholder="Your Email address" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="postbox__contact-textarea">
                                                <textarea placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="contact__button wow animate__fadeInUp" data-wow-duration="1.1s">
                                <a className="main-btn-sm  tp-btn-hover alt-color" href="#"><span>Send Message</span><b></b></a>
                            </div>
                        </div>
                        {/* <div className="col-xl-4 col-lg-5">
                            <div className="contact__left-side">
                                <div className="contact__item d-flex align-items-center wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <div className="contact__icon">
                                        <span><a href="#"><i className="fal fa-phone-alt"></i></a></span>
                                    </div>
                                    <div className="contact__content">
                                        <h4 className="contact__title-sm">Call This Now</h4>
                                        <span><a href="tel:+918560014421">+918560014421
                                       </a></span>
                                    </div>
                                </div>
                                <div className="contact__item d-flex align-items-center wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <div className="contact__icon">
                                        <span><a href="#"><i className="fal fa-envelope-open-text"></i></a></span>
                                    </div>
                                    <div className="contact__content">
                                        <h4 className="contact__title-sm">Your Message</h4>
                                        <span><a href="mailto:contact@narayanvyas.com">contact@narayanvyas.com</a></span>
                                    </div>
                                </div>
                                <div className="contact__item d-flex align-items-center wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <div className="contact__icon">
                                        <span><a href="#"><i className="fal fa-map-marker-check"></i></a></span>
                                    </div>
                                    <div className="contact__content">
                                        <h4 className="contact__title-sm">Your location</h4>
                                        <span>Web Dev Fusion, I-379, New Bapu Nagar, Bhilwara, Rajasthan, 311001</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactTwo;




