import React from 'react';
import BlogMain from './BlogMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Blog = () => {
  return (
    <>
      <Header 
        parentMenu="blog"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <BlogMain />
          <Footer />
        </div>
      </div>
          
    </>
  );
}

export default Blog;
