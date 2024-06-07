import React, { useState } from 'react';
import CFCSubmissionForm from '../CFCSubmissionForm';
import { sendEmail, getEmailData } from '../Contact/emailService';

const generateSubmissionId = (bookTitle) => {
    const bookCode = bookTitle.replace(/[\s-]/g, '').substring(0, 4).toUpperCase();
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    return `${bookCode}${randomNumber}`;
};

const CFCSubmissionFormContainer = ({ itemClass, chapters, bookTitle, publisher }) => {
    const [authors, setAuthors] = useState([{ name: '', email: '', department: '', institution: '', isCorresponding: true }]);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    console.log(publisher);

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

    const clearMessages = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        clearMessages(); // Clear previous messages

        const submissionId = generateSubmissionId(bookTitle);

        const formData = {
            submissionId,
            book: bookTitle,
            publisher: publisher,
            chapter: e.target.chapter.value,
            suggestedTitle: e.target.suggestedTitle.value,
            chapterSubtitles: e.target.chapterSubtitles.value,
            keywords: e.target.keywords.value,
            proposal: e.target.proposal.value,
            authors,
        };

        const from = 'contact@narayanvyas.com'; // Update this if needed
        const to = authors.map(author => author.email);
        const cc = ['narayanvyas87@gmail.com']; // Add CC addresses here
        const bcc = []; // Add BCC addresses here if needed

        try {
            const emailData = await getEmailData(formData, null, from, to, cc, bcc, false, publisher);
            await sendEmail(emailData);
            setAuthors([{ name: '', email: '', department: '', institution: '', isCorresponding: true }]);
            setLoading(false);
            setSuccessMessage('Your abstract has been submitted successfully!');
            setTimeout(() => {
                clearMessages();
            }, 10000); // Display success message for 10 seconds
        } catch (error) {
            setLoading(false);
            setErrorMessage('There was an error submitting your abstract. Please try again later.');
            setTimeout(() => {
                clearMessages();
            }, 10000); // Display error message for 10 seconds
        }
    };

    return (
        <CFCSubmissionForm
            itemClass={itemClass}
            chapters={chapters}
            authors={authors}
            handleSubmit={handleSubmit}
            handleAuthorChange={handleAuthorChange}
            handleCorrespondingChange={handleCorrespondingChange}
            handleAddAuthor={handleAddAuthor}
            handleRemoveAuthor={handleRemoveAuthor}
            loading={loading}
            successMessage={successMessage}
            errorMessage={errorMessage}
            bookTitle={bookTitle}
            clearMessages={clearMessages}
        />
    );
};

export default CFCSubmissionFormContainer;
