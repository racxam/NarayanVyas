import React from 'react';

import SingleBlogFour from '../../components/Blog/SingleBlogFour';

import blogImg1 from '../../assets/img/blog/blog-4-1.jpg';
import blogImg2 from '../../assets/img/blog/blog-4-1.jpg';
import blogImg3 from '../../assets/img/blog/blog-4-1.jpg';

const Blog = () => {

    return (
        <div className="blog-4__area pb-80 blog-4__mlr">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="blog-4__section-box text-center mb-50">
                                    <h5 className="section-subtitle title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Our Blog & Article</h5>
                                    <h4 className="section-title title-anim wow animate__fadeInUp" data-wow-duration="1.1s">We Digital Creators News <br/>
                                        Let's make blog</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleBlogFour
                            Image= {blogImg1}
                            categoryClass= "blog-4__tag tag-color-1"
                            titleClass= "blog-4__title title-color-1"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
                            blogCategory= "Business"
                            blogAuthor= "Admin"
                            publishedDate= "Jan,6, 2022"
                            btnText= "Read More"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleBlogFour
                            Image= {blogImg2}
                            categoryClass= "blog-4__tag tag-color-2"
                            titleClass= "blog-4__title title-color-2"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
                            blogCategory= "Support"
                            blogAuthor= "Admin"
                            publishedDate= "Jan,6, 2022"
                            btnText= "Read More"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleBlogFour
                            Image= {blogImg3}
                            categoryClass= "blog-4__tag tag-color-3"
                            titleClass= "blog-4__title title-color-3"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
                            blogCategory= "Business"
                            blogAuthor= "Admin"
                            publishedDate= "Jan,6, 2022"
                            btnText= "Read More"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;