import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';

import projectImg from '../../assets/img/project/pro-4.jpg';
import certificatesData from '../../data/certificatesData';

const SingleCertificate = (props) => {
    const { itemClass, Image, Title } = props;

    // State
    const [toggle, setToggle] = useState(false);
    const [sIndex, setSIndex] = useState(0);

    // Handler
    const lightBoxHandler = (status, value) => {
        setToggle(status);
        setSIndex(value);
    };

    return (
        <div className={itemClass ? itemClass : 'project-2__item'}>
            <div className="project-2__thumb">
                <Link to="/project-details">
                    <img src={Image ? Image : projectImg} alt="" />
                </Link>
                <div className="project-2__img-icon">
                    <Link
                        className="popup-image"
                        to="#"
                        onClick={() => {
                            const index = certificatesData.findIndex(obj => obj.image === Image);
                            if (index !== -1) {
                                lightBoxHandler(true, index);
                            }
                        }}
                    >
                        <i className="fal fa-search-plus"></i>
                    </Link>
                </div>
                <div className="project-2__img-text">
                    <h5>
                        <Link
                            to="#"
                            onClick={() => {
                                const index = certificatesData.findIndex(obj => obj.image === Image);
                                if (index !== -1) {
                                    lightBoxHandler(true, index);
                                }
                            }}
                        >
                            {Title ? Title : 'Certificates'}
                        </Link>
                    </h5>
                </div>
                <LightBox
                    state={toggle}
                    event={lightBoxHandler}
                    data={certificatesData.map((item, index) => ({ id: index, image: item.image }))}
                    imageWidth="600px"
                    imageHeight="500px"
                    thumbnailHeight={50}
                    thumbnailWidth={50}
                    setImageIndex={setSIndex}
                    imageIndex={sIndex}
                />
            </div>
        </div>
    );
};

export default SingleCertificate;