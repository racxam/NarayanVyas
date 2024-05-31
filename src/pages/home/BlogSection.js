import React from 'react';

import SectionTitle from '../../components/SectionTitle'
import SingleBlog from '../../components/Blog';

import blogImg1 from '../../assets/img/blog/blog-1.jpg';
import blogImg2 from '../../assets/img/blog/blog-2.jpg';
import blogImg3 from '../../assets/img/blog/blog-3.jpg';

const Blog = () => {

    return (
        <div className="blog__area blog__mlr blog__space">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-xxl-9 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SectionTitle
                            sectionClass= "blog__section-box text-center pb-40 section-title-fixed-width"
                            subTitle= "Largest Blog News"
                            Title= "Perfect Contact This Software Company Manage."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleBlog
                            blogImg= {blogImg1}
                            blogClass= "blog__item"
                            categoryClass= "blog__catagory blog__catagory-color-1"
                            titleClass= "blog__title blog__title-color-1"
                            btnClass= "blog__link blog__link-color-1"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
                            blogCategory= "Business"
                            blogAuthor= "Admin"
                            publishedDate= "Jan,6, 2022"
                            btnText= "See More"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleBlog
                            blogImg= {blogImg2}
                            blogClass= "blog__item"
                            categoryClass= "blog__catagory blog__catagory-color-2"
                            titleClass= "blog__title blog__title-color-2"
                            btnClass= "blog__link blog__link-color-2"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
                            blogCategory= "Support"
                            blogAuthor= "Admin"
                            publishedDate= "Jan,6, 2022"
                            btnText= "See More"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleBlog
                            blogImg= {blogImg3}
                            blogClass= "blog__item"
                            categoryClass= "blog__catagory blog__catagory-color-3"
                            titleClass= "blog__title blog__title-color-3"
                            btnClass= "blog__link blog__link-color-3"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
                            blogCategory= "Business"
                            blogAuthor= "Admin"
                            publishedDate= "Jan,6, 2022"
                            btnText= "See More"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;