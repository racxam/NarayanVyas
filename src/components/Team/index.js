import { Link } from 'react-router-dom';

import teamImg from '../../assets/img/team/team-1.jpg'

const SingleTeam = (props) => {
    const { itemClass, Image, Title, Designation } = props;
	return(
        <div className={itemClass ? itemClass : 'team__item text-center'}>
            <div className="team__main-thumb">
                <img src={Image ? Image : teamImg} alt={Title} />
                <div className="team__social-box">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="team__author-info">
                <h5 className="team__author-name">
                    <Link to="/about-me">{Title ? Title : 'Barasa Perats'}</Link>
                </h5>
                <span>{Designation ? Designation : 'Founder'}</span>
            </div>
        </div>
	)
}

export default SingleTeam