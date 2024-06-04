import React, { useState } from 'react';
import BookProposalForm from './BookProposalForm';
import { sendEmail, getEmailData } from '../../components/Contact/emailService';

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

const generateSubmissionId = (bookTitle) => {
    const bookCode = bookTitle.replace(/[\s-]/g, '').substring(0, 4).toUpperCase();
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    return `${bookCode}${randomNumber}`;
};

const BookProposalFormContainer = (props) => {
    const { itemClass } = props;
    const [authors, setAuthors] = useState([{ name: '', email: '', department: '', institution: '', isCorresponding: true }]);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

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

    const handleFileDrop = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileRemove = () => {
        setFile(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const bookTitle = e.target.book.value;
        const submissionId = generateSubmissionId(bookTitle);

        const formData = {
            submissionId,
            book: bookTitle,
            chapter: e.target.chapter.value,
            suggestedTitle: e.target.suggestedTitle.value,
            chapterSubtitles: e.target.chapterSubtitles.value,
            keywords: e.target.keywords.value,
            proposal: e.target.proposal.value,
            authors,
        };

        const mail_template_key = "2d6f.2a251775f7a95ff2.k1.00662cd0-2257-11ef-9632-5254008f5018.18fe2a2881d";
        const from = { address: 'contact@narayanvyas.com', name: 'Author Relations' };
        const to = authors.map(author => ({ email_address: { address: author.email, name: author.name } }));
        const cc = [{ email_address: { address: 'narayanvyas87@gmail.com', name: 'Narayan Vyas' } }];
        const bcc = []; // Add BCC addresses here if needed

        const emailData = await getEmailData(formData, file, mail_template_key, from, to, cc, bcc, 'New Chapter Proposal Received');
        await sendEmail(emailData);

        setAuthors([{ name: '', email: '', department: '', institution: '', isCorresponding: true }]);
        setFile(null);
        setLoading(false);
        setSuccessMessage('Your proposal has been submitted successfully!');

        setTimeout(() => {
            setSuccessMessage('');
        }, 7000);
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
            handleFileDrop={handleFileDrop}
            handleFileRemove={handleFileRemove}
            file={file}
            loading={loading}
            successMessage={successMessage}
        />
    );
};

export default BookProposalFormContainer;
