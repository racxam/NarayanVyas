import React from 'react';
import SingleBlogThree from '../../components/Blog/SingleBlogThree';

import blogImg1 from '../../assets/img/blog/blog-7.jpg';
import blogImg2 from '../../assets/img/blog/blog-8.jpg';
import blogImg3 from '../../assets/img/blog/blog-9.jpg';

const Blog = () => {

  return (
    <div className="blog-3__area blog-3__mlr pt-120 pb-70">
      <div className="container-fluid">
        <div className="row align-items-end mb-60">
          <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="feature__section-box">
              <h4 className="section-blue-subtitle char-anim">Our Largest Blog</h4>
              <h3 className="section-title char-anim">We Experts in Every News <br/>
                Let's make project</h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div className="blog-3__top-text">
              <p className="mb-0 char-anim-2">Business tailored it design help ambitious businesses like yours generate more
                building driving web traffice management & support services profits to be
                business agency elit, sed do eiusmod tempor. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s"
            >
            <SingleBlogThree
              Image= {blogImg1}
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
            <SingleBlogThree
              Image= {blogImg2}
              Title= "We’re a Digital And Brand Leadership Blog"
              Description= "There are many variations of passages of agency Lorem Ipsum Fasts injecte"
              blogCategory= "Business"
              blogAuthor= "Admin"
              publishedDate= "Jan,6, 2022"
              btnText= "Read More"
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s"
            >
            <SingleBlogThree
              Image= {blogImg3}
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