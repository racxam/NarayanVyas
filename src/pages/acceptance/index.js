import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { sendEmail, getAcceptanceEmailData } from '../../components/Contact/emailService';
import getAcceptanceEmailTemplate from '../../components/Contact/acceptanceEmailTemplate';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FileUpload from '../../components/FileUpload';
import './AcceptanceEmailPage.css';

const AcceptanceEmailPage = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const handleFileDrop = ({ target: { files } }) => {
        setFile(files[0]);
    };

    const handleFileRemove = () => {
        setFile(null);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === '123') {
            setAuthenticated(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid password');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setErrorMessage('Please upload an Excel file.');
            return;
        }
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const data = await readExcelFile(file);
            await processEmailData(data);
            setSuccessMessage('Emails have been sent successfully!');
        } catch (error) {
            console.error("Error processing email data:", error);
            setErrorMessage('There was an error sending the emails. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const readExcelFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const binaryStr = event.target.result;
                const workbook = XLSX.read(binaryStr, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(sheet);
                resolve(data);
            };
            reader.onerror = reject;
            reader.readAsBinaryString(file);
        });
    };

    const processEmailData = async (data) => {
        const from = 'contact@narayanvyas.com';
        for (const row of data) {
            const {
                BookName,
                ChapterName,
                EmailMessage,
                SubmissionID,
                Publisher,
                Editor,
                CC,
                Author1Name, Author1Email,
                Author2Name, Author2Email,
                Author3Name, Author3Email,
                Author4Name, Author4Email,
                Author5Name, Author5Email,
                Author6Name, Author6Email
            } = row;

            const authors = [
                { name: Author1Name, email: Author1Email },
                { name: Author2Name, email: Author2Email },
                { name: Author3Name, email: Author3Email },
                { name: Author4Name, email: Author4Email },
                { name: Author5Name, email: Author5Email },
                { name: Author6Name, email: Author6Email }
            ].filter(author => author.email); // Filter out authors without email

            const to = authors.map(author => author.email);
            const cc = CC ? CC.split(',').map(email => email.trim()) : [];

            const formData = {
                submissionId: SubmissionID || '',
                book: BookName,
                chapter: ChapterName,
                message: EmailMessage,
                publisher: Publisher,
                editor: Editor,
                authors
            };

            const emailData = await getAcceptanceEmailData(formData, [], from, to, cc, [], false, '', false, getAcceptanceEmailTemplate);
            await sendEmail(emailData);
        }
    };

    return (
        <>
            <Header
                parentMenu="page"
                headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
            />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb pageTitle="Send Acceptance Emails" />
                    <div className="upload-email-page container mt-30">
                        {authenticated ? (
                            <>
                                <h3>Send Acceptance Emails for Book Chapters</h3>
                                <form onSubmit={handleSubmit} className="email-form">
                                    <FileUpload
                                        file={file}
                                        handleFileDrop={handleFileDrop}
                                        handleFileRemove={handleFileRemove}
                                        label="Drag and drop an Excel file here, or click to select a file"
                                        acceptedFileTypes={['.xlsx', '.xls']}
                                        inputId="fileUpload"
                                    />
                                    <div className="col-sm-12 text-center">
                                        <button type="submit" className="main-btn-sm tp-btn-hover alt-color">
                                            {loading ? <span className="loading-spinner"></span> : <span>Send Emails</span>}
                                        </button>
                                    </div>
                                </form>
                                <div className="sample-file-link mt-20 text-center">
                                    <a href="https://drive.google.com/uc?export=download&id=1OnYt-7L3bk8Pj1aKDsI203Zm1LZ0r-kq">Download Sample Excel File</a>
                                </div>
                                {successMessage && <p className="success-message text-center">{successMessage}</p>}
                                {errorMessage && <p className="error-message text-center">{errorMessage}</p>}
                            </>
                        ) : (
                            <form onSubmit={handlePasswordSubmit} className="password-form">
                                <div className="col-sm-12 text-center">
                                    <input
                                        type="password"
                                        className="password-input"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                    />
                                </div>
                                <div className="col-sm-12 text-center">
                                    <button type="submit" className="main-btn-sm tp-btn-hover alt-color">
                                        Submit
                                    </button>
                                </div>
                                {errorMessage && <p className="error-message text-center">{errorMessage}</p>}
                            </form>
                        )}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default AcceptanceEmailPage;
