import React from 'react';

import SectionTitle from '../../components/SectionTitle'
import SingleBlogTwo from '../../components/Blog/SingleBlogTwo';

import blogImg1 from '../../assets/img/blog/blog-1.jpg';
import blogImg2 from '../../assets/img/blog/blog-2.jpg';
import blogImg3 from '../../assets/img/blog/blog-3.jpg';

const Blog = () => {

    return (
        <div className="blog-2__area blog-2__plr mt-100 mb-40">
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
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleBlogTwo
                            blogImg= {blogImg1}
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
                            publishedDate= "Jan,6, 2022"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleBlogTwo
                            blogImg= {blogImg2}
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
                            blogAuthor= "Admin"
                            publishedDate= "Jan,6, 2022"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s"
                        >
                        <SingleBlogTwo
                            blogImg= {blogImg3}
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
                            publishedDate= "Jan,6, 2022"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;