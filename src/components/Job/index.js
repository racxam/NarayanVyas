import { Link } from 'react-router-dom';

import jobImg from '../../assets/img/about/job-2.png'

const SingleJob = (props) => {
    const { itemClass, Image, Title, Location, officeTime, salaryRange, btnText } = props;
	return(
        <div className={itemClass ? itemClass : 'job__item'}>
            <div className="job__top-item d-flex align-items-center pb-30">
                <div className="job__img pr-20">                              
                    <img src={Image ? Image : jobImg} alt="" />
                </div>
                <h5 className="job__title-sm">{Title ? Title : 'Lead Product Design'}</h5>
            </div>
            <div className="job__meta">
                <span><i className="fas fa-map-marker-alt"></i>{Location ? Location : 'London,Dhaka'}</span>
                <span className="clock"><i className="fal fa-clock"></i>{officeTime ? officeTime : '08:00 am - 10:00 am'}</span>
            </div>
            <div className="job__list">
                <ul>
                    <li><i className="fal fa-check-square"></i><span>Full Time</span></li>
                    <li><i className="fal fa-check-square"></i><span>Remote Job</span></li>
                    <li><i className="fal fa-check-square"></i><span>Enginer job</span></li>
                    <li><i className="fal fa-check-square"></i><span>Caress Bank</span></li>
                </ul>
            </div>
            <div className="job__salary">
                <span>{`$ ${salaryRange ? salaryRange : '30k - 50k'}`} /<i>Year</i></span>
            </div>
            <div className="job__button">
                <Link className="apply-btn" to="/job-details">{btnText ? btnText : 'Apply Now'}</Link>
            </div>
        </div>
	)
}

export default SingleJob