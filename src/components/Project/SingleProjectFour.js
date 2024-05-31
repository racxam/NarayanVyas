import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';

import projectImg from '../../assets/img/project/pro-14.jpg';
import projectImg1 from '../../assets/img/project/pro-14.jpg';
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

const SingleProjectFour = (props) => {
    const { itemClass, categoryClass, TitleClass, btnClass, Image, Title, Description, Category, btnText } = props;

    // State
	  const [toggle, setToggle] = React.useState(false);
	  const [sIndex, setSIndex] = React.useState(0);

    // Handler
    const lightBoxHandler = (status, value) => {
        setToggle(status);
        setSIndex(value);
    };

	return(
        <div className={itemClass ? itemClass : 'project-4__item p-relative'}>
            <div className="project-4__main-img">
                <img src={Image ? Image : projectImg} alt="" />
            </div>
            <div className="project-4__content-box">
                <div className={categoryClass ? categoryClass : 'project-4__category category-color-1'}>
                    <span>{Category ? Category : 'Marketing'}</span>
                </div>
                <div className="project-4__text">
                    <h4 className={TitleClass ? TitleClass : "project-4__title-sm title-color-1"}>
                        <Link to="/project-details">{Title ? Title : 'Agency Best Projects'}</Link>
                    </h4>
                    <p>{Description ? Description : 'Business building it before the tab providet management, Payroll & Worksite'}</p>
                </div>
                <div className={btnClass ? btnClass : "project-4__link link-color-1"}>
                    <Link to="/project-details"><span>{btnText ? btnText : "Read More"}<i className="fal fa-arrow-right"></i></span></Link>
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

export default SingleProjectFour