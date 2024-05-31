
import { Link } from 'react-router-dom';

import blogImg from '../../assets/img/blog/blog-7.jpg';

const SingleBlogThree = (props) => {
    const { itemClass, Image, Title, Description, Author, publishedDate, btnText } = props;
    return (
        <div className={itemClass ? itemClass : 'blog-3__item'}>
            <div className="blog-3__main-thumb fix">
                <a className="popup-image" href={Image ? Image : blogImg}>
                    <img src={Image ? Image : blogImg} alt={Title} />
                </a>
                <div className="blog-3__thumb-overly">
                    <span>Business</span>
                </div>
            </div>
            <div className="blog-3__content">
                <div className="blog-3__meta">
                    <span>{Author ? Author : 'Mris Jonsong'} / {publishedDate ? publishedDate : 'Nov 4, 2022'}</span>
                </div>
                <div className="blog-3__text">
                    <h4 className="blog-3__title-sm">
                        <Link to="/blog-details">{Title ? Title : 'Devest For Ukraine This Best of blog Charite On'}</Link>
                    </h4>
                    <p>{Description ? Description : 'There are many variations of passages agency Lorem Ipsum Fasts injecte'}</p>   
                </div>
                <div className="blog-3__link">
                    <Link to="/blog-details">{btnText ? btnText : 'Read More'}<i className="fal fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>

    )
}

export default SingleBlogThree