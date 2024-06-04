import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = ({ itemClass, descClass, btnClass, titleClass, projectImage, Title, Description, btnText, btnURL }) => {
    return (
        <div className={itemClass}>
            <div className="project__thumb">
                <img src={projectImage} alt={Title} />
            </div>
            <div className="project__content">
                <h3 className={titleClass}>{Title}</h3>
                <p className={descClass}>{Description}</p>
                <Link to={btnURL} className={btnClass}>{btnText}</Link>
            </div>
        </div>
    );
}

export default SingleProject;
