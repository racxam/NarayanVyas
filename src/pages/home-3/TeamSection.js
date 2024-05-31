import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleTeam from '../../components/Team';

import teamImg1 from '../../assets/img/team/team-1.jpg';
import teamImg2 from '../../assets/img/team/team-2.jpg';
import teamImg3 from '../../assets/img/team/team-3.jpg';
import teamImg4 from '../../assets/img/team/team-4.jpg';

const Team = () => {

  return (
    <div className="team__area team__space team__plr team__bg grey-bg">
      <div className="container-fluid">
        <div className="row align-items-end mb-60">
          <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="team__section-box">
              <h4 className="section-blue-subtitle char-anim">Meet Team Member</h4>
              <h3 className="section-title char-anim">Industries we Meet This <br/>
                Team Meamber.</h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="team__top-text pt-35">
              <p className="mb-0 char-anim-2">Business tailored it design help ambitious businesses like yours generate more
                building driving web traffice management & support services profits to be
                business agency elit, sed do eiusmod tempor. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg1}
              Title="Barasa Perats"
              Designation="Founder"
            />
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg2}
              Title="Laraso Marten"
              Designation="Co-Founder"
            />
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg3}
              Title="Karsta Lerans"
              Designation="Manager"
            />
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg4}
              Title="Rotera Barsa"
              Designation="Manager"
            />
          </div>
          <div className="col-xl-12 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="team__button text-center">
              <Link className="main-btn tp-btn-hover alt-color-blue" to="/about-us"><span>Join our Team</span><b></b></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;