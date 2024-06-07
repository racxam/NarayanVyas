import React from 'react'
import SingleProduct from '../../components/Product';
import SectionTitle from '../../components/SectionTitle/index'
import booksData from '../../data/booksData';
import Slider2 from '../../components/Slider/Slider2'
import Globals from '../../Globals';
const sortedBooks = booksData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

const index = () => {
    return (
        <div className="product__area product__plr grey-bg pt-100 pb-100">
            <div className="container-fluid">
                <div className="row align-items-end book-custom-section pb-60">
                    <div className="col-lg-6 col-md-9">
                        <SectionTitle
                            sectionClass="service__section-box pb-35 section-title-fixed-width"
                            subTitle={Globals.booksSectionHeading}
                            Title={Globals.booksSectionSubheading}
                        />

                    </div>

                    <div className="col-lg-6 col-md-3">
                        <div className="project__section-arrow d-flex align-items-center justify-content-end">
                            <div className="swiper-button swiper-button-prev2">
                                <button><i className="far fa-arrow-left"></i></button>
                            </div>
                            <div className="swiper-button swiper-button-next2">
                                <button><i className="far fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>





                {/* <div className="row">
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
                </div> */}

                <Slider2 />


            </div>
        </div>
    )
}

export default index
