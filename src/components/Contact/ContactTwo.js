import React from 'react';
import shapeImg1 from '../../assets/img/contact/ct-shape-1.png';
import shapeImg2 from '../../assets/img/contact/ct-shape-2.png';
import shapeImg3 from '../../assets/img/contact/ct-shape-3.png';
import shapeImg4 from '../../assets/img/contact/ct-shape-4.png';
import sendEmail from './emailService'; // Adjust the path as needed

const ContactTwo = (props) => {
    const { itemClass } = props;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        await sendEmail(formData);
        e.target.reset();
    };

    return (
        <div className={itemClass ? itemClass : 'contact__area contact__plr-2 mb-10 p-relative fix'}>
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
                                    I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                </p>
                            </div>
                            <div className="contact__form wow animate__fadeInUp" data-wow-duration="1.1s">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="postbox__contact-input">
                                                <input type="text" name="name" placeholder="Your Name" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="postbox__contact-input">
                                                <input type="email" name="email" placeholder="Your Email address" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="postbox__contact-textarea">
                                                <textarea name="message" placeholder="Your Message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className="main-btn-sm tp-btn-hover alt-color"><span>Send Message</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactTwo;
