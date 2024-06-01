
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
                    <h5 className="testimonial__author-name">{Name ? Name : 'Hardik Dhiman'}</h5>
                    <span>{Designation ? Designation : 'Research Trainee'}</span>
                </div>
                <div className="testimonial__content-text">
                    <p>{Description ? Description : 'Mr. Narayan Vyas is a transformative mentor, proficient in a myriad of disciplines including app development, IoT, and machine learning. Under his guidance, I\'ve excelled in various projects, from IoT innovations to impactful research papers and book chapters. His patient and empathetic approach, coupled with his unparalleled expertise, have been instrumental in shaping my journey as a confident and capable researcher. I am deeply grateful for his mentorship and wholeheartedly recommend him to anyone seeking guidance and inspiration in the realm of technology. Thank you, Sir for your invaluable support and guidance.'}</p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
            <div className="testimonial__main-img">
                <img src={authorImg ? authorImg : Image} alt="" />
            </div>
        </div>
    )
}

export default SingleTestimonial