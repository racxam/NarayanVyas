import { Link } from 'react-router-dom';

import shapeImg1 from '../../assets/img/testimonial/testi-shape-5.png';
import shapeImg2 from '../../assets/img/testimonial/testi-shape-6.png';
import Image from '../../assets/img/testimonial/testi-3.png';

const SingleTestimonial = (props) => {
    const { itemClass, authorImg, Title, Designation, Description } = props;

    return (
        <div className={itemClass ? itemClass : 'testimonial-2__item text-center p-relative'}>
            <div className="testimonial-2__shape-1 d-none d-sm-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="testimonial-2__shape-2 d-none d-sm-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="testimonial-2__main-thumb">
                <img src={authorImg ? authorImg : Image} alt="" />
            </div>
            <div className="testimonial-2__content">
                <div className="testimonial-2__author-info">
                    <h4 className="testimonial-2__author-name">
                        <Link to="/testimonial">{Title ? Title : 'Marata Barson'}</Link>
                    </h4>
                    <span>{Designation ? Designation : 'Manager'}</span>
                </div>
                <div className="testimonial-2__text">
                    <div className="testimonial-2__star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>{Description ? Description : 'All the Lorem Ipsum generators on the Internet tend predefined as necessary, making this the the Internet uses a dictionary'} </p>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonial