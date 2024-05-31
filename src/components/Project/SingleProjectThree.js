import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';

import projectImg from '../../assets/img/project/pro-10.jpg'
import projectImg1 from '../../assets/img/project/pro-4.jpg';
import projectImg2 from '../../assets/img/project/pro-5.jpg';
import projectImg3 from '../../assets/img/project/pro-6.jpg';
import projectImg4 from '../../assets/img/project/pro-7.jpg';
import projectImg5 from '../../assets/img/project/pro-8.jpg';
import projectImg6 from '../../assets/img/project/pro-9.jpg';
import projectImg7 from '../../assets/img/project/pro-10.jpg';

import projectImg8 from '../../assets/img/project/pro-24.jpg';
import projectImg9 from '../../assets/img/project/pro-25.jpg';
import projectImg10 from '../../assets/img/project/pro-26.jpg';
import projectImg11 from '../../assets/img/project/pro-27.jpg';
import projectImg12 from '../../assets/img/project/pro-28.jpg';
import projectImg13 from '../../assets/img/project/pro-29.jpg';
import projectImg14 from '../../assets/img/project/pro-30.jpg';

import projectImg15 from '../../assets/img/project/pro-35.jpg';
import projectImg16 from '../../assets/img/project/pro-36.jpg';
import projectImg17 from '../../assets/img/project/pro-37.jpg';

import projectImg18 from '../../assets/img/project/pro-43.jpg';
import projectImg19 from '../../assets/img/project/pro-44.jpg';
import projectImg20 from '../../assets/img/project/pro-45.jpg';
import projectImg21 from '../../assets/img/project/pro-46.jpg';
import projectImg22 from '../../assets/img/project/pro-47.jpg';

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
      id: 6,
      image: projectImg6,
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
    {
      id: 21,
      image: projectImg21,
    },
    {
      id: 22,
      image: projectImg22,
    },
];

const SingleProjectThree = (props) => {
    const { itemClass, Image, Title, Category, CategoryTwo } = props;

    // State
	  const [toggle, setToggle] = React.useState(false);
	  const [sIndex, setSIndex] = React.useState(0);

    // Handler
    const lightBoxHandler = (status, value) => {
        setToggle(status);
        setSIndex(value);
    };

	return(
        <div className={itemClass ? itemClass : 'project-3__item'}>
            <div className="project-3__main-img">
                <img src={Image ? Image : projectImg} alt={Title} />
                <div className="project-3__img-icon">
                    <Link className="popup-image" to="#" onClick={() => {lightBoxHandler(true);}}>
                        <i className="fal fa-search-plus"></i>
                    </Link>
                </div>
                <div className="project-3__img-text">
                    <h4><Link to="/project-details">{Title ? Title : 'Research & Surveys'}</Link></h4>
                    <i>{Category ? Category : 'Business'}  / <span>{CategoryTwo ? CategoryTwo : 'Branding'}</span></i>
                </div>
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
	)
}

export default SingleProjectThree