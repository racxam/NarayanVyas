import React from 'react';
import { Link } from 'react-router-dom';
import publications from '../../data/publicationsData'; // Import the publications data
import './HomePagePublications.css'; // Import the CSS file

import SectionTitle from '../../components/SectionTitle';
import shapeImg1 from '../../assets/img/service/sv-shape-1.png';
import shapeImg2 from '../../assets/img/service/sv-shape-2.png';
import Globals from '../../Globals';

// Function to parse date in MM/YYYY format
const parseDate = (dateString) => {
    const [month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1);
};

// Sort publications by date, latest first
publications.sort((a, b) => parseDate(b.date) - parseDate(a.date));

// Function to highlight "N. Vyas" in the contributors' string using dangerouslySetInnerHTML
const highlightContributors = (contributors) => {
    return contributors.replace(/N\. Vyas/g, '<strong>N. Vyas</strong>');
};

const HomePagePublications = () => {
    return (
        <div className="service__area service__mlr pt-100 pb-100 p-relative mt-1">
            <div className="service__shape-1">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="service__shape-2">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="container-fluid" >
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SectionTitle
                            sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
                            subTitle={Globals.publicationSectionHeading}
                            Title={Globals.publicationSectionSubheading}
                        />
                    </div>
                </div>
                <div className="row" >
                    <div className="publications-grid wow animate__fadeInUp" data-wow-duration="1.1s">
                        {publications.slice(0, 6).map((pub, index) => (
                            <div key={index} className="publication-card">
                                <div className="publication-number-box">
                                    <div className="publication-number">{index + 1}</div>
                                </div>
                                <div className="publication-content">
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-title">
                                        {pub.title}
                                    </a>
                                    <p className="publication-contributors">
                                        <i className="fas fa-user" style={{ color: '#c0392b', fontSize: '0.9em' }}></i> <strong>{pub.type === 'Book' ? 'Editors' : 'Authors'}:</strong> <span dangerouslySetInnerHTML={{ __html: highlightContributors(pub.contributors) }} />
                                    </p>
                                    <p className="publication-date-type-publisher">
                                        <i className="far fa-calendar-alt" style={{ color: '#f39c12', fontSize: '0.9em' }}></i> {pub.date} &nbsp;
                                        <i className="fas fa-book" style={{ color: '#27ae60', fontSize: '0.9em' }}></i> {pub.type} &nbsp;
                                        <i className="far fa-building" style={{ color: '#2980b9', fontSize: '0.9em' }}></i> {pub.publisher}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="contact__button wow animate__fadeInUp mt-60" data-wow-duration="1.1s">
                        <Link className="main-btn-sm tp-btn-hover alt-color" to="/publications"><span>View More</span><b></b></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePagePublications;
