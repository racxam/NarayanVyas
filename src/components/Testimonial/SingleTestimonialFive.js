import { Link } from 'react-router-dom';

import authorImg from '../../assets/img/testimonial/testi-1.png';
import shaperImg from '../../assets/img/testimonial/testi-item-shape-1.png';

const SingleTestimonialFive = (props) => {
    const { itemClass, Shape, Image, Title, Designation, Description } = props;

    return (
        <div className={itemClass ? itemClass : 'testimonial__item d-flex justify-content-betweena align-items-center p-relative'}>
            <div className="testimonial__item d-flex justify-content-betweena align-items-center p-relative">
                <div className="testimonial__item-shape">
                    <img src={Shape ? Shape : shaperImg} alt="" />
                </div>
                <div className="testimonial__content">
                    <div className="testimonial__author-info">
                        <h5 className="testimonial__author-name">{Title ? Title : 'Karon Rubel'}</h5>
                        <span>{Designation ? Designation : 'Founder'}</span>
                    </div>
                    <div className="testimonial__content-text">
                        <p>{Description ? Description : 'We are privileged to work with hundreds future businesses, including many of the world’s software, and brands'}</p>    
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star star-color"></i>
                    </div>
                </div>
                <div className="testimonial__main-img">
                    <img src={Image ? Image : authorImg} alt={Title} />
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonialFive