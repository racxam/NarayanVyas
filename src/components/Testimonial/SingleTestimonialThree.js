import { Link } from 'react-router-dom';

const SingleTestimonialThree = (props) => {
    const { itemClass, Title, Designation, Description, DescriptionTwo } = props;

    return (
        <div className={itemClass ? itemClass : 'testimonial-3__content text-center text-lg-start'}>
            <div className="testimonial-3__content text-center text-lg-start">
                <div className="testimonial-3__content-icon">
                    <span><i className="fal fa-quote-right"></i></span>
                </div>
                <div className="testimonial-3__text">
                    <p className="pb-10">{Description ? Description : 'All the lorem Ipsum generators on the Internet predefined as necessary, making this the the Internet uses a dictionary'}</p>
                    <p>{DescriptionTwo ? DescriptionTwo : 'We’re a full-service digital marketing agency who focus on  consistent messages'}</p>                                 
                </div>
                <div className="testimonial-3__author-info pb-15">
                    <h4 className="testimonial-3__author-name">{Title ? Title : 'Marata Barson'}</h4> 
                    <span>{Designation ? Designation : 'Manager'}</span>                               
                </div>
                <div className="testimonial-3__star">
                    <i className="fas fa-star"></i>                              
                    <i className="fas fa-star"></i>                              
                    <i className="fas fa-star"></i>                              
                    <i className="fas fa-star star-color"></i>                              
                    <i className="fas fa-star star-color"></i>                              
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonialThree