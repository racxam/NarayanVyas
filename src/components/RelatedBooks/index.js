// src/components/RelatedBooks.js

import React from 'react';
import SingleProduct from '../Product';

const index = ({ relatedBooks }) => {
    return (


    
        <div className="container" style={{marginTop:"0px"}} >
            <div className="row" mb-0>
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
                            Url={`/books/${book.id}`}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default index;
