import React, { useState } from 'react';
import FinalChapterSubmissionForm from '../FinalChapterSubmissionForm';
import { sendEmail, getEmailData } from '../Contact/emailService';

const generateSubmissionId = (bookTitle) => {
    const bookCode = bookTitle.replace(/[\s-]/g, '').substring(0, 4).toUpperCase();
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    return `${bookCode}${randomNumber}`;
};

const FinalChapterSubmissionFormContainer = ({
    itemClass, chapters, bookTitle, isConsentFormRequired, consentFormLink,
    consentFormName, isAbstractSubmissionClosed, isFullChapterSubmissionClosed,
    submissionEmails = [], publisher
}) => {
    const [authors, setAuthors] = useState([{ name: '', email: '', department: '', institution: '', phone: '', country: '', isCorresponding: true }]);
    const [file, setFile] = useState(null);
    const [consentFile, setConsentFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [dragOverFile, setDragOverFile] = useState(false);
    const [dragOverConsentFile, setDragOverConsentFile] = useState(false);
    console.log(publisher);
    const handleAddAuthor = () => {
        if (authors.length < 6) {
            setAuthors([...authors, { name: '', email: '', department: '', institution: '', phone: '', country: '', isCorresponding: false }]);
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
        const file = e.target.files[0];
        if (file && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
            setFile(file);
            setErrorMessage(''); // Clear previous error message
        } else {
            setErrorMessage('Only PDF or Word files are allowed.');
        }
    };

    const handleFileRemove = () => {
        setFile(null);
    };

    const handleConsentFileDrop = (e) => {
        const file = e.target.files[0];
        if (file && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'].includes(file.type)) {
            setConsentFile(file);
            setErrorMessage(''); // Clear previous error message
        } else {
            setErrorMessage('Only PDF or Word files are allowed for the consent form.');
        }
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
        clearMessages(); // Clear previous messages

        if (!file || (isConsentFormRequired && !consentFile)) {
            setErrorMessage(`Both the final chapter and the ${consentFormName} must be uploaded.`);
            setLoading(false);
            return;
        }

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

        const from = 'contact@narayanvyas.com';
        const to = authors.map(author => author.email);
        const cc = submissionEmails; // Add CC addresses from submissionEmails
        const bcc = []; // Add BCC addresses here if needed

        try {
            const files = [file];
            if (isConsentFormRequired && consentFile) {
                files.push(consentFile);
            }
            const emailData = await getEmailData(formData, files, from, to, cc, bcc, true, publisher); // Pass true for final chapter and publisher name
            console.log('Email Data:', emailData); // Log email data for debugging
            await sendEmail(emailData);

            setAuthors([{ name: '', email: '', department: '', institution: '', phone: '', country: '', isCorresponding: true }]);
            setFile(null);
            setConsentFile(null);
            setSuccessMessage('Your final chapter has been submitted successfully!');
        } catch (error) {
            console.error('Error submitting final chapter:', error); // Log error for debugging
            setErrorMessage('There was an error submitting your final chapter. Please try again later.');
        } finally {
            setLoading(false);
            setTimeout(clearMessages, 10000); // Display messages for 10 seconds
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
            dragOverFile={dragOverFile}
            setDragOverFile={setDragOverFile}
            dragOverConsentFile={dragOverConsentFile}
            setDragOverConsentFile={setDragOverConsentFile}
        />
    );
};

export default FinalChapterSubmissionFormContainer;
