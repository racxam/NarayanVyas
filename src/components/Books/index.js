import React from 'react'
import SingleProduct from '../../components/Product';
import SectionTitle from '../../components/SectionTitle/index'
import booksData from '../../data/booksData';

const sortedBooks = booksData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

const index = () => {
    return (
        <div className="product__area product__plr mt-100 mb-70">
            <div className="container-fluid">
                <div className="col-xl-12 col-lg-8 wow animate__fadeIn mt-100" data-wow-duration="1.1s">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <SectionTitle
                                sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
                                subTitle="Published Books"
                                Title="Showing All Published Books"
                            />
                        </div>
                    </div>


                </div>
                <div className="row">
                    {sortedBooks.map((book) => (
                        <div
                            key={book.id}
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp"
                            data-wow-duration="1.1s"
                        >
                            <SingleProduct
                                Image={book.title.image}
                                Title={book.title.text}
                                Publisher={book.publisher}
                                Price={book.price}
                                Url={`books/${book.id}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default index
