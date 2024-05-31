import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import videoBG from '../../assets/img/video/video-bg-2.jpg';

const Video = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="video-2__area video-2__space video-2__bg" style={{backgroundImage: `url(${videoBG})`}}>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='PO_fBTkoznc' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="video-2__content text-center">
                            <div className="video-2__section-title pb-20 wow animate__fadeInUp" data-wow-duration="1.1s">
                                <h4 className="section-title title-anim">Make Sure Next Website Level?</h4>
                            </div>
                            <div className="video-2__button-box d-flex justify-content-center">
                                <div className="video-2__btn wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <Link to ="/about-us" className="white-btn tp-btn-hover alt-color"><span>Learn More</span>
                                        <b></b>
                                    </Link>
                                </div>
                                <div className="video-2__icon wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <Link className="popup-video" to="#" onClick={() => { openModal(); }}><span><i className="fas fa-play"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;