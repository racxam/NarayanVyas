import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';

import projectImg from '../../assets/img/project/pro-4.jpg';
// awards certificates
import projectImg1 from '../../assets/img/certificates/awards/icaiihi_2023_session_chair.jpg';
import projectImg2 from '../../assets/img/certificates/awards/ssn_college_workshop_2021.jpg';
import projectImg3 from '../../assets/img/certificates/awards/icdsns_2023_reviewer.jpg';
import projectImg4 from '../../assets/img/certificates/awards/nimitcon_2023_reviewer.jpg';
import projectImg5 from '../../assets/img/certificates/awards/ieeextream_proctor.jpg';
// membership certificates
import projectImg6 from '../../assets/img/certificates/memberships/ieee_membership.jpg';
import projectImg7 from '../../assets/img/certificates/memberships/acm_membership.jpg';
import projectImg8 from '../../assets/img/certificates/memberships/grss_membership.jpg';
import projectImg9 from '../../assets/img/certificates/memberships/ieee_young_professional.jpg';
import projectImg10 from '../../assets/img/certificates/memberships/ieee_consultant_network.jpg';
// course certificates
import projectImg11 from '../../assets/img/certificates/courses/coursera_blockchain.jpg';
import projectImg12 from '../../assets/img/certificates/courses/innobuzz_ceh.jpg';
import projectImg13 from '../../assets/img/certificates/courses/udemy_arduino.jpg';
import projectImg14 from '../../assets/img/certificates/courses/udemy_ethereum_solidity.jpg';
import projectImg15 from '../../assets/img/certificates/courses/udemy_flutter.jpg';
import projectImg16 from '../../assets/img/certificates/courses/sololearn_html.jpg';
import projectImg17 from '../../assets/img/certificates/courses/sololearn_css.jpg';
import projectImg18 from '../../assets/img/certificates/courses/udemy_kicad.jpg';
import projectImg19 from '../../assets/img/certificates/courses/udemy_respberry_pi.jpg';
import projectImg20 from '../../assets/img/certificates/courses/vskills_html5.jpg';

const dataImages = [
  {
    id: 1,
    image: projectImg1,
  },
  {
    id: 2,
    image: projectImg2,
  },
  {
    id: 3,
    image: projectImg3,
  },
  {
    id: 4,
    image: projectImg4,
  },
  {
    id: 5,
    image: projectImg5,
  },
  {
    id: 6,
    image: projectImg6,
  },
  {
    id: 7,
    image: projectImg7,
  },
  {
    id: 8,
    image: projectImg8,
  },
  {
    id: 9,
    image: projectImg9,
  },
  {
    id: 10,
    image: projectImg10,
  },
  {
    id: 11,
    image: projectImg11,
  },
  {
    id: 12,
    image: projectImg12,
  },
  {
    id: 13,
    image: projectImg13,
  },
  {
    id: 14,
    image: projectImg14,
  },
  {
    id: 15,
    image: projectImg15,
  },
  {
    id: 16,
    image: projectImg16,
  },
  {
    id: 17,
    image: projectImg17,
  },
  {
    id: 18,
    image: projectImg18,
  },
  {
    id: 19,
    image: projectImg19,
  },
  {
    id: 20,   
    image: projectImg20,
  },
];

const SingleProject = (props) => {
  const { itemClass, Image, Title, categoryOne, categoryTwo } = props;



  // State
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);

  // Handler
  const lightBoxHandler = (status, value) => {
    setToggle(status);
    setSIndex(value - 1);
  };


  return (
    <div className={itemClass ? itemClass : 'project-2__item' } >
      <div className="project-2__thumb">
        <Link to="/project-details" >
          <img src={Image ? Image : projectImg} alt="" />

        </Link>
        <div className="project-2__img-icon"   >

          <Link className="popup-image" to="#" onClick={() => { lightBoxHandler(true, dataImages.find(obj => obj.image === Image).id) }}><i className="fal fa-search-plus"></i></Link>
        </div>
        <div className="project-2__img-text">
          <h5><Link to="#" onClick={() => { lightBoxHandler(true, 1); }}>{Title ? Title : 'Certificates'}</Link></h5>
        </div>
        <LightBox
          state={toggle}
          event={lightBoxHandler}
          data={dataImages}
          imageWidth="600px"
          imageHeight="500px"
          thumbnailHeight={50}
          thumbnailWidth={50}
          setImageIndex={setSIndex}
          imageIndex={sIndex}
          
        />
      </div>
    </div>
  )
}

export default SingleProject