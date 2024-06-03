import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

import editorsBiographies from '../../data/editorsBiographies';
import booksData from '../../data/booksData';
import BookDetails from '../../components/BookDetails';
import getRelatedBooks from '../../utils/getRelatedBooks';

const AIDrivenAlzheimerIGIDetailsMain = () => {
  const bookDetails = booksData.find(book => book.id === 'applying-ml-techniques-to-bioinformatics');
  if (!bookDetails) {
    return <div>Book details not found.</div>;
  }

  const relatedBooks = getRelatedBooks('applying-ml-techniques-to-bioinformatics');

  return (
    <main>
      <Breadcrumb pageTitle="Book Details" />
      <BookDetails {...bookDetails} editorsBiographies={editorsBiographies} />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="product__title-sm wow animate__fadeInUp" data-wow-duration="1.1s">
              <h4>Showing all Related Products:</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {relatedBooks.map((book) => (
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s" key={book.id}>
              <SingleProduct
                Image={book.title.image}
                Title={book.title.text}
                Publisher={book.publisher}
                Price={book.price}
                Url={`/books/${book.permalink}`}
              />
            </div>
          ))}
        </div>
      </div>
      <CTA 
      btnText={"Book Appointment"} />
    </main>
  );
}

export default AIDrivenAlzheimerIGIDetailsMain;
