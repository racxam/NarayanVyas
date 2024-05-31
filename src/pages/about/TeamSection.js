import React from 'react';
import SingleTeam from '../../components/Team';

import teamImg1 from '../../assets/img/team/team-1.jpg';
import teamImg2 from '../../assets/img/team/team-2.jpg';
import teamImg3 from '../../assets/img/team/team-3.jpg';
import teamImg4 from '../../assets/img/team/team-4.jpg';
import teamImg5 from '../../assets/img/team/team-5.jpg';
import teamImg6 from '../../assets/img/team/team-6.jpg';
import teamImg7 from '../../assets/img/team/team-7.jpg';
import teamImg8 from '../../assets/img/team/team-8.jpg';

const Team = () => {
  return (
    <div className="team__area team__space-2 team__plr grey-bg">
      <div className="container-fluid">
        <div className="row align-items-end justify-content-center mb-60">
          <div className="col-xl-12 col-lg-6 col-md-9 col-sm-10">
            <div className="feature__section-box text-center">
              <h4 className="section-blue-subtitle title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Meet Team Member</h4>
              <h3 className="section-title title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Industries we Meet This <br/>Team Meamber.</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg1}
              Title="Barasa Perats"
              Designation="Founder"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg2}
              Title="Laraso Marten"
              Designation="Founder"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg3}
              Title="Rotera Barsa"
              Designation="Founder"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg4}
              Title="Karsta Lerans"
              Designation="Founder"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg5}
              Title="Rotera Barsa"
              Designation="Founder"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg6}
              Title="Barasa Perats"
              Designation="Founder"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg7}
              Title="Laraso Marten"
              Designation="Manager"
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <SingleTeam
              Image={teamImg8}
              Title="Karsta Lerans"
              Designation="Founder"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;