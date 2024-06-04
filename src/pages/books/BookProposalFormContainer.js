// BookProposalFormContainer.js
import React, { useState } from 'react';
import sendEmail from '../../components/Contact/emailService'; // Adjust the path as needed
import BookProposalForm from './BookProposalForm';

const books = [
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
    { id: 3, name: 'Book 3' }
];

const chapters = [
    { id: 1, name: 'Chapter 1' },
    { id: 2, name: 'Chapter 2' },
    { id: 3, name: 'Chapter 3' }
];

const BookProposalFormContainer = (props) => {
    const { itemClass } = props;
    const [authors, setAuthors] = useState([{ name: '', email: '', department: '', institution: '', isCorresponding: true }]);

    const handleAddAuthor = () => {
        if (authors.length < 6) {
            setAuthors([...authors, { name: '', email: '', department: '', institution: '', isCorresponding: false }]);
        }
    };

    const handleRemoveAuthor = (index) => {
        const newAuthors = authors.filter((_, i) => i !== index);
        if (newAuthors.length === 1) {
            newAuthors[0].isCorresponding = true;
        }
        setAuthors(newAuthors);
    };

    const handleAuthorChange = (index, field, value) => {
        const newAuthors = authors.map((author, i) =>
            i === index ? { ...author, [field]: value } : author
        );
        setAuthors(newAuthors);
    };

    const handleCorrespondingChange = (index) => {
        const newAuthors = authors.map((author, i) =>
            i === index ? { ...author, isCorresponding: true } : { ...author, isCorresponding: false }
        );
        setAuthors(newAuthors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            book: e.target.book.value,
            chapter: e.target.chapter.value,
            suggestedTitle: e.target.suggestedTitle.value,
            chapterSubtitles: e.target.chapterSubtitles.value,
            keywords: e.target.keywords.value,
            proposal: e.target.proposal.value,
            authors,
        };

        try {
            await sendEmail(formData);
            e.target.reset();
            setAuthors([{ name: '', email: '', department: '', institution: '', isCorresponding: true }]); // Reset authors
        } catch (error) {
            console.error("Error submitting proposal:", error);
        }
    };

    return (
        <BookProposalForm
            itemClass={itemClass}
            books={books}
            chapters={chapters}
            authors={authors}
            handleSubmit={handleSubmit}
            handleAuthorChange={handleAuthorChange}
            handleCorrespondingChange={handleCorrespondingChange}
            handleAddAuthor={handleAddAuthor}
            handleRemoveAuthor={handleRemoveAuthor}
        />
    );
}

export default BookProposalFormContainer;
