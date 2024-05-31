
import Shape from '../../assets/img/testimonial/testi-item-shape-1.png';
import Image from '../../assets/img/testimonial/testi-1.png';

const SingleTestimonial = (props) => {
	const { itemClass, shapeImg, authorImg, Name, Designation, Description } = props;
    return (
        <div className={itemClass ? itemClass : 'testimonial__item d-flex justify-content-betweena align-items-center p-relative'}>
            <div className="testimonial__item-shape">
                <img src={shapeImg ? shapeImg : Shape} alt="" />
            </div>
            <div className="testimonial__content">
                <div className="testimonial__author-info">
                    <h5 className="testimonial__author-name">{Name ? Name : 'Karon Rubel'}</h5>
                    <span>{Designation ? Designation : 'Founder'}</span>
                </div>
                <div className="testimonial__content-text">
                    <p>{Description ? Description : 'We are privileged to work with hundreds future businesses, including many of the world’s software, and brands.'}</p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star star-color"></i>
                </div>
            </div>
            <div className="testimonial__main-img">
                <img src={authorImg ? authorImg : Image} alt="" />
            </div>
        </div>
    )
}

export default SingleTestimonial