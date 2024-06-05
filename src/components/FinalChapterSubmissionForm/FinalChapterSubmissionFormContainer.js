// components/FinalChapterSubmissionFormContainer.js
import React, { useState } from 'react';
import FinalChapterSubmissionForm from '../FinalChapterSubmissionForm';
import { sendEmail, getEmailData } from '../Contact/emailService';

const generateSubmissionId = (bookTitle) => {
    const bookCode = bookTitle.replace(/[\s-]/g, '').substring(0, 4).toUpperCase();
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    return `${bookCode}${randomNumber}`;
};

const FinalChapterSubmissionFormContainer = ({ itemClass, chapters, bookTitle, isConsentFormRequired, consentFormLink, consentFormName, isAbstractSubmissionClosed, isFullChapterSubmissionClosed }) => {
    const [authors, setAuthors] = useState([{ name: '', email: '', department: '', institution: '', isCorresponding: true }]);
    const [file, setFile] = useState(null);
    const [consentFile, setConsentFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleConsentFileDrop = (e) => {
        setConsentFile(e.target.files[0]);
    };

    const handleConsentFileRemove = () => {
        setConsentFile(null);
    };

    const clearMessages = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const submissionId = generateSubmissionId(bookTitle);

        const formData = {
            submissionId,
            book: bookTitle,
            chapter: e.target.chapter.value,
            finalTitle: e.target.finalTitle.value,
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

        try {
            const emailData = await getEmailData(formData, file, mail_template_key, from, to, cc, bcc, 'New Chapter Proposal Received');
            await sendEmail(emailData);

            if (isConsentFormRequired) {
                if (!consentFile) {
                    throw new Error("Consent form is required.");
                }
                const consentEmailData = await getEmailData(formData, consentFile, mail_template_key, from, to, cc, bcc, 'New Consent Form Received');
                await sendEmail(consentEmailData);
            }

            setAuthors([{ name: '', email: '', department: '', institution: '', isCorresponding: true }]);
            setFile(null);
            setConsentFile(null);
            setSuccessMessage('Your final chapter has been submitted successfully!');
        } catch (error) {
            setErrorMessage('There was an error submitting your final chapter. Please try again later.');
        } finally {
            setLoading(false);
            setTimeout(clearMessages, 10000);
        }
    };

    return (
        <FinalChapterSubmissionForm
            itemClass={itemClass}
            chapters={chapters}
            authors={authors}
            handleSubmit={handleSubmit}
            handleAuthorChange={handleAuthorChange}
            handleCorrespondingChange={handleCorrespondingChange}
            handleAddAuthor={handleAddAuthor}
            handleRemoveAuthor={handleRemoveAuthor}
            handleFileDrop={handleFileDrop}
            handleFileRemove={handleFileRemove}
            handleConsentFileDrop={handleConsentFileDrop}
            handleConsentFileRemove={handleConsentFileRemove}
            file={file}
            consentFile={consentFile}
            loading={loading}
            successMessage={successMessage}
            errorMessage={errorMessage}
            bookTitle={bookTitle}
            isConsentFormRequired={isConsentFormRequired}
            consentFormLink={consentFormLink}
            consentFormName={consentFormName}
            clearMessages={clearMessages}
            isAbstractSubmissionClosed={isAbstractSubmissionClosed}
            isFullChapterSubmissionClosed={isFullChapterSubmissionClosed}
        />
    );
};

export default FinalChapterSubmissionFormContainer;
