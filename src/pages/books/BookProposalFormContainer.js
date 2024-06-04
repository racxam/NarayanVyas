import React, { useState } from 'react';
import axios from 'axios';
import BookProposalForm from './BookProposalForm';
import { getEmailBodyTemplate } from '../../data/emails/proposalSubmissionTemplate'; // Assuming emailBodyTemplate.js is in the same directory

const books = [
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
    { id: 3, name: 'Book 3' },
];

const chapters = [
    { id: 1, name: 'Chapter 1' },
    { id: 2, name: 'Chapter 2' },
    { id: 3, name: 'Chapter 3' },
];

// Import the email body template function

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

        // Generate email body using the template function with custom data
        const emailBody = getEmailBodyTemplate(formData);

        const emailData = {
            from: { address: 'contact@narayanvyas.com' },
            to: [{ email_address: { address: 'narayanvyas87@gmail.com', name: 'Narayan' } }],
            subject: 'New Book Proposal Submission',
            htmlbody: emailBody,
        };

        try {
            await axios.post('https://cors-anywhere.herokuapp.com/https://api.zeptomail.com/v1.1/email', emailData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Zoho-enczapikey wSsVR60nq0X1WP16z2WvJuc7mw9XBVLxFBkv3lSl7Xb/T63FoMdvlEXGDFeuSfcfEmVsFWQW8rl8yxcH2jENiYkqywwGWyiF9mqRe1U4J3x17qnvhDzIXmVYlRKBL4kBxQ9tkmJhGski+g==`,
                },
            });
            setAuthors([{ name: '', email: '', department: '', institution: '', isCorresponding: true }]); // Reset authors
        } catch (error) {
            console.error("Error submitting proposal:", error.response ? error.response.data : error.message);
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
};

export default BookProposalFormContainer;
