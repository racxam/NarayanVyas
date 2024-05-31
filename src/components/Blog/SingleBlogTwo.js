
import { Link } from 'react-router-dom';

import Image from '../../assets/img/blog/blog-1.jpg'
import userImg from '../../assets/img/blog/blog-meta-1.png'

const SingleBlogTwo = (props) => {
    const { blogImg, blogClass, titleClass, btnClass, Title, Description, authorImg, blogAuthor, publishedDate, btnText } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-2__item text-center'}>
            <div className="blog-2__thumb fix">
                <a className="popup-image" href={blogImg ? blogImg : Image}>
                    <img src={blogImg ? blogImg : Image} alt="" />
                </a>
            </div>
            <div className="blog-2__content">
                <div className="blog-2__meta-box">
                    <div className="blog-2__meta d-flex align-items-center">
                        <div className="blog-2__meta-img">
                            <img src={authorImg ? authorImg : userImg} alt="" />
                        </div>
                        <div className="blog-2__date">
                            <span>{blogAuthor ? blogAuthor : 'Mris Jonsong'} / {publishedDate ? publishedDate : 'Nov 4, 2020'}</span>
                        </div>
                    </div>
                </div>
                <div className="blog-2__content-text">
                    <h4 className={titleClass ? titleClass : 'blog-2__content-title-sm'}>
                        <Link to="/blog-details">{Title ? Title : 'Devest For Ukraine This Blog  Best Charite On'}</Link>
                    </h4>
                    <p>{Description ? Description : 'There are many variations of passages of agency Lorem Ipsum Fasts injecte.'}</p>   
                </div>
                <div className="blog-2__content-button">
                    <div className={btnClass ? btnClass : 'main-btn-sm tp-btn-hover alt-color'}>
                        <Link to="/blog-details"><span>{btnText ? btnText : 'Read More'}</span></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleBlogTwo