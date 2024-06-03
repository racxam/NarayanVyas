// src/pages/BookDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import editorsBiographies from '../../data/editorsBiographies';
import booksData from '../../data/booksData';
import BookDetailsPage from '../../components/BookDetailsPage';
import RelatedBooks from '../../components/RelatedBooks';
import getRelatedBooks from '../../utils/getRelatedBooks';

const BookDetails = () => {
    const { bookId } = useParams(); // Get the bookId from the URL parameters
    const bookDetails = booksData.find(book => book.id === bookId);
    if (!bookDetails) {
        return <div>Book details not found.</div>;
    }

    const relatedBooks = getRelatedBooks(bookId);

    return (
        <main>
            <Breadcrumb pageTitle="Book Details" />
            <BookDetailsPage {...bookDetails} editorsBiographies={editorsBiographies} />
            <RelatedBooks relatedBooks={relatedBooks} />
            <CTA btnText={"Book Appointment"} />
        </main>
    );
}

export default BookDetails;
