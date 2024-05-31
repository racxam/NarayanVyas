import { Link } from 'react-router-dom';

import authorImg from '../../assets/img/testimonial/testi-1.png';

const SingleTestimonialFour = (props) => {
    const { itemClass, Image, Title, Designation, Description } = props;

    return (
        <div className={itemClass ? itemClass : 'testimonial-4__item text-center'}>
            <div className="testimonial-4__item-shape">
                <span><i className="fas fa-comments"></i></span>
            </div>
            <div className="testimonial-4__icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star star-color"></i>
            </div>
            <div className="testimonial-4__text">
                <p>{Description ? Description : 'We are privileged to work with hundreds future businesses, including many of the world’s software, and brands'}</p>
            </div>
            <div className="testimonial-4__author-info">
                <Link to="/testimonial">
                    <h4 className="testimonial-4__author-name">{Title ? Title : 'Marata Barson'}</h4>
                </Link>
                <span>{Designation ? Designation : 'Manager'}</span>
            </div>
            <div className="testimonial-4__author-img">
                <img src={Image ? Image : authorImg} alt={Title} />
            </div>
        </div>
    )
}

export default SingleTestimonialFour