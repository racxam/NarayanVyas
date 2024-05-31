import React from 'react';
import SingleBlogFour from '../../components/Blog/SingleBlogFive';

import blogImg1 from '../../assets/img/blog/blog-10.jpg';
import blogImg2 from '../../assets/img/blog/blog-11.jpg';
import blogImg3 from '../../assets/img/blog/blog-12.jpg';
import blogImg4 from '../../assets/img/blog/blog-13.jpg';

const Blog = () => {

    return (
        <div className="blog-5__area blog-5__space blog-5__plr  black-bg-2">
            <div className="container-fluid">
               <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-8">
                     <div className="blog-5__section-title text-center pb-40">
                        <h4 className="section-subtitle section-white-bg title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Largest Blog News</h4>
                        <h3 className="section-title text-white title-anim wow animate__fadeInUp" data-wow-duration="1.1s">Perfect Contact This Softwer <br/>
                           Company Manage.
                        </h3> 
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-6 col-xl-12 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleBlogFour
                            Image= {blogImg1}
                            itemClass= "blog-5__item  blog-5__item-box-1 d-flex align-items-center"
                            titleClass= "blog-5__title-sm title-color-1"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Author= "Admin"
                            publishedDate= "Jan,6, 2022"
                        />
                    </div>
                    <div className="col-xxl-6 col-xl-12 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleBlogFour
                            Image= {blogImg2}
                            itemClass= "blog-5__item  blog-5__item-box-2 d-flex align-items-center"
                            titleClass= "blog-5__title-sm title-color-2"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Author= "Admin"
                            publishedDate= "Jan,6, 2022"
                        />
                    </div>
                    <div className="col-xxl-6 col-xl-12 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleBlogFour
                            Image= {blogImg3}
                            itemClass= "blog-5__item  blog-5__item-box-3 d-flex align-items-center"
                            titleClass= "blog-5__title-sm title-color-3"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Author= "Admin"
                            publishedDate= "Jan,6, 3032"
                        />
                    </div>
                    <div className="col-xxl-6 col-xl-12 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SingleBlogFour
                            Image= {blogImg4}
                            itemClass= "blog-5__item  blog-5__item-box-4 d-flex align-items-center"
                            titleClass= "blog-5__title-sm title-color-4"
                            Title= "Devest For Ukraine for This Blog Best Charity On"
                            Author= "Admin"
                            publishedDate= "Jan,6, 2022"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;