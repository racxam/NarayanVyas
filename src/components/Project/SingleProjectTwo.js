import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';

import projectImg from '../../assets/img/project/pro-10.jpg';
import projectImg1 from '../../assets/img/project/pro-10.jpg';
import projectImg2 from '../../assets/img/project/pro-5.jpg';
import projectImg3 from '../../assets/img/project/pro-6.jpg';
import projectImg4 from '../../assets/img/project/pro-7.jpg';
import projectImg5 from '../../assets/img/project/pro-8.jpg';
import projectImg6 from '../../assets/img/project/pro-9.jpg';

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
];

const SingleProjectTwo = (props) => {
    const { itemClass, Image, Title, Category } = props;

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
            </div>
            <div className="project-3__content d-flex align-items-center justify-content-between">
                <div className="project-3__content-text">
                    <h5 className="project-3__title-sm"><Link to="/project-details">{Title ? Title : 'Research & Surveys'}</Link></h5>
                    <span>{Category ? Category : 'Brand Strategy'}</span>
                </div>
                <div className="project-3__icon">
                    <Link to="/project-details"><i className="fal fa-arrow-right"></i></Link>
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

export default SingleProjectTwo