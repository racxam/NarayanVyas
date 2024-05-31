import React from 'react';
import BlogDetailsMain from './BlogDetailsMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BlogDetails = () => {
  return (
    <>
      <Header 
        parentMenu="blog"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <BlogDetailsMain />
          <Footer />
        </div>
      </div>
          
    </>
  );
}

export default BlogDetails;
