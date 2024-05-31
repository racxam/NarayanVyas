import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';

import projectImg from '../../assets/img/project/pro-4.jpg';
// achievemetns certi
import projectImg1 from '../../assets/img/certificates/Acheivements/0001-3-min.jpg';
import projectImg2 from '../../assets/img/certificates/Acheivements/IEEE-Conference-Certificate.jpg';
import projectImg3 from '../../assets/img/certificates/Acheivements/IEEE-Membership-Certificate.jpg';
// ai certificates
import projectImg4 from '../../assets/img/certificates/AI Certificates/0001-min.jpg';
import projectImg5 from '../../assets/img/certificates/AI Certificates/Arduino-min.jpg';
import projectImg6 from '../../assets/img/certificates/AI Certificates/UC-47FU85S3-min.jpg';
import projectImg7 from '../../assets/img/certificates/AI Certificates/UC-TKC2KR19-min.jpg';
import projectImg8 from '../../assets/img/certificates/AI Certificates/UC-TRGOH7JJ-min.jpg';
//web certificates
import projectImg9 from '../../assets/img/certificates/Web Certificates/CCA-Certificate-HTML-Level-1_2-1-min.jpg';
import projectImg10 from '../../assets/img/certificates/Web Certificates/CCA-Certificate-Javascript-Level-1_2-1-min.jpg';
import projectImg11 from '../../assets/img/certificates/Web Certificates/Narayan_Vyas__Certificate_2-1-min.jpg';
import projectImg12 from '../../assets/img/certificates/Web Certificates/Sololearn-HTML-Fundamental-min.jpg';
import projectImg13 from '../../assets/img/certificates/Web Certificates/Sololearn-HTML.jpg';

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
];

const SingleProject = (props) => {
    const { itemClass, Image, Title, categoryOne, categoryTwo } = props;

    

    // State
	  const [toggle, setToggle] = React.useState(false);
	  const [sIndex, setSIndex] = React.useState(0);

    // Handler
    const lightBoxHandler = (status, value) => {
        setToggle(status);
        setSIndex(value-1);
    };
  
    
	return(
        <div className={itemClass ? itemClass : 'project-2__item'}>
            <div className="project-2__thumb">
                <Link to="/project-details">
                    <img src={Image ? Image : projectImg} alt="" />

                </Link>                     
                <div className="project-2__img-icon">

                    <Link className="popup-image" to="#" onClick={() => {lightBoxHandler(true, dataImages.find(obj=>obj.image===Image).id)}}><i className="fal fa-search-plus"></i></Link>
                </div>
                <div className="project-2__img-text">
                    <h4><Link to="#" onClick={() => {lightBoxHandler(true,1);}}>{Title ? Title : 'Certificates'}</Link></h4>
                    <i>{categoryOne ? categoryOne : 'ACHIEVEMENT'}   <span>{categoryTwo ? categoryTwo : 'CERTIFICATION'}</span></i>
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