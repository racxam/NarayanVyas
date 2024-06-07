import React, { useState } from 'react';
import shapeImg1 from '../../assets/img/contact/ct-shape-1.png';
import shapeImg2 from '../../assets/img/contact/ct-shape-2.png';
import shapeImg3 from '../../assets/img/contact/ct-shape-3.png';
import shapeImg4 from '../../assets/img/contact/ct-shape-4.png';
import Globals from '../../Globals';
import { sendEmail, getEmailData } from './emailService';

const Contact = (props) => {
    const { itemClass } = props;
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const clearMessages = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        clearMessages();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        try {
            const emailData = await getEmailData(formData, [], Globals.globalEmail, Globals.globalEmail, [], [], false, '', true);
            await sendEmail(emailData);
            setSuccessMessage('Your message has been sent successfully!');
        } catch (error) {
            setErrorMessage('There was an error sending your message. Please try again later.');
        } finally {
            setLoading(false);
            setTimeout(clearMessages, 10000); // Clear messages after 10 seconds
        }

        e.target.reset();
    };

    return (
        <div className={itemClass ? itemClass : 'contact__area contact__plr-2 p-relative fix'}>
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
                                <h4 className="section-subtitle char-anim">{Globals.contactSectionHeading}</h4>
                                <h3 className="section-title char-anim">{Globals.contactSectionSubheading}<br /></h3>
                            </div>
                            <div className="contact__text">
                                <p className="char-anim-2">{Globals.contactSectionDescription}</p>
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
                                        <div className="col-sm-6">
                                            <div className="postbox__contact-input">
                                                <input type="text" name="phone" placeholder="Your Phone Number" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="postbox__contact-input">
                                                <input type="text" name="subject" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="postbox__contact-textarea">
                                                <textarea name="message" placeholder="Your Message" required></textarea>
                                            </div>
                                        </div>
                                        {successMessage && (
                                            <div className="col-sm-12">
                                                <div className="alert alert-success">
                                                    <span>{successMessage}</span>
                                                    <button type="button" className="close" onClick={clearMessages}>&times;</button>
                                                </div>
                                            </div>
                                        )}
                                        {errorMessage && (
                                            <div className="col-sm-12">
                                                <div className="alert alert-danger">
                                                    <span>{errorMessage}</span>
                                                    <button type="button" className="close" onClick={clearMessages}>&times;</button>
                                                </div>
                                            </div>
                                        )}
                                        <div className="col-sm-12">
                                            <button type="submit" className="main-btn-sm tp-btn-hover alt-color">
                                                {loading ? <span className="loading-spinner"></span> : <span>Send Message</span>}
                                            </button>
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
};

export default Contact;
