// src/pages/BookDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import editorsBiographies from '../../data/editorsBiographies';
import booksData from '../../data/booksData';
import BookDetailsPage from '../../components/BookDetailsPage';
import RelatedBooks from '../../components/RelatedBooks';
import getRelatedBooks from '../../utils/getRelatedBooks';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Error from '../error'

const BookDetails = () => {
    const { bookId } = useParams();
    const bookDetails = booksData.find(book => book.id === bookId);
    if (!bookDetails) {
        return <Error />;
    }

    const relatedBooks = getRelatedBooks(bookId);

    return (
        <main>
            <Header
                headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt" />
            <Breadcrumb pageTitle="Book Details" />
            <BookDetailsPage {...bookDetails} editorsBiographies={editorsBiographies} />
            <RelatedBooks relatedBooks={relatedBooks} isCfcPage={false} />
            <CTA btnText={"Book Appointment"} />
            <Footer />
        </main>
    );
}

export default BookDetails;
