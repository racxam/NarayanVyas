
import { Link } from 'react-router-dom';

import blogImg from '../../assets/img/blog/blog-10.jpg';

const SingleBlogFour = (props) => {
    const { itemClass, titleClass, Image, Title, Description, Author, publishedDate, btnText } = props;
    return (
        <div className={itemClass ? itemClass : 'blog-5__item  blog-5__item-box-1 d-flex align-items-center'}>
            <div className="blog-5__main-img">
                <Link to="/blog-details">
                    <img src={Image ? Image : blogImg} alt={Title} />
                </Link>
            </div>
            <div className="blog-5__content">
                <div className="blog-5__meta">
                    <span>By: {Author ? Author : 'Admin'}, {publishedDate ? publishedDate : 'January 6, 2023'}</span>
                </div>
                <h4 className={titleClass ? titleClass : 'blog-5__title-sm title-color-1'}>
                    <Link to="/blog-details">{Title ? Title : 'Devest For for This Blog Best Charity On'}</Link>
                </h4>
                <p>{Description ? Description : 'We’re not a regular agency. We’re a full-service digital marketing agency who focus on years and running it has been des'}</p>
                <div className="blog-5__link">
                    <Link to="/blog-details">{btnText ? btnText : 'Read more'}<i className="far fa-angle-right"></i></Link> 
                </div>  
            </div>
        </div>

    )
}

export default SingleBlogFour