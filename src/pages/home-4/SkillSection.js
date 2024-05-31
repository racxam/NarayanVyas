import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/skill/skill-bg.png';
import skillImg1 from '../../assets/img/skill/skill-img-1.png';
import SingleProgress from '../../components/Progress';

const Skill = () => {

    return (
        <div className="skill-area skill-bg skill__plr" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 mb-60">
                        <div className="skill__section-box">
                            <h5 className="section-subtitle section-white-bg char-anim wow animate__fadeInUp" data-wow-duration="1.1s">Our Skill Now</h5>
                            <h4 className="section-title char-anim text-white wow animate__fadeInUp" data-wow-duration="1.1s">Contributing To Important <br/>
                            Global are Skill.</h4>
                            <div className="skill-text wow animate__fadeInUp" data-wow-duration="1.1s">                                 
                            <p className="char-anim-2">Business tailored it design, management & support services <br/>
                                business agency elit, sed do eiusmod tempor. </p>
                            </div>
                        </div>
                        <div className="tpdrive-progress mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SingleProgress 
                                Title="HTML"
                                Progress="98"
                            />
                            <SingleProgress 
                                Title="JAVASCRIPT"
                                Progress="65"
                            />
                            <SingleProgress 
                                Title="WORDPRESS"
                                Progress="35"
                            />
                        </div>
                        <div className="skill__btn wow animate__fadeInUp" data-wow-duration="1.1s">
                            <Link to="/about-me" className="main-btn tp-btn-hover alt-color-black mr-20 mb-20 wow animate__fadeInUp" data-wow-duration="1.1s"
                             >
                                <span>Skill More</span>
                                <b></b>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="work-img-box text-end">
                            <img src={skillImg1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;