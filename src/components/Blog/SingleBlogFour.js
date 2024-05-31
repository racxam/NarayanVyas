
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/blog/blog-4-1.jpg';

const SingleBlogFour = (props) => {
    const { itemClass, titleClass, categoryClass, Image, Title, Description, Author, Category, publishedDate, btnText } = props;
    return (
        <div className={itemClass ? itemClass : 'blog-4__item-bg'} style={{backgroundImage: `url(${Image ? Image : bgImg})`}} data-background="assets/img/blog/blog-4-1.jpg">
            <div className="blog-4__item p-relative">
                <div className={categoryClass ? categoryClass : 'blog-4__tag tag-color-1'}>
                    <span>{Category ? Category : 'Design'}</span>
                </div>
                <div className="blog-4__meta">
                    <span>By: {Author ? Author : 'Admn'}, {publishedDate ? publishedDate : 'January 6, 2022'}</span>
                </div>
                <div className="blog-4__content">
                    <h4 className={titleClass ? titleClass : 'blog-4__title title-color-1'}>
                        <Link to="/blog-details">{Title ? Title : 'We’re a Digital And Brand Leadership Blog'}</Link>
                    </h4>
                    <p>{Description ? Description : 'We’re not a regular agency. We’re a full-service digital marketing agency who focus on years and running it has been des'}</p>
                </div>
                <div className="blog-4__btn">
                    <Link to="/blog-details" className="border-btn-2">{btnText ? btnText : 'Read more'}<i className="far fa-angle-right"></i></Link>
                </div>
            </div>
        </div>

    )
}

export default SingleBlogFour