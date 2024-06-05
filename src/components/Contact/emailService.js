import axios from 'axios';

const sendEmail = async (emailData) => {
    try {
        const response = await axios.post('https://web-email-proxy-823d619a0ab4.herokuapp.com/send-email', emailData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (response.status !== 200) {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error("Error submitting proposal:", error.response ? error.response.data : error.message);
        throw error; // Re-throw the error to be caught in the handleSubmit function
    }
};

export { sendEmail };

const getEmailData = (formData, file, from, to = [], cc = [], bcc = [], subject = 'New Chapter Proposal Received') => {
    const mergeInfo = {
        submissionId: formData.submissionId,
        proposal: formData.proposal,
        chapter: formData.chapter,
        keywords: formData.keywords,
        book: formData.book,
        chapterSubtitles: formData.chapterSubtitles,
        suggestedTitle: formData.suggestedTitle,
        authors: formData.authors.map(author => ({
            ...author,
            isCorresponding: author.isCorresponding ? 'Yes' : 'No',
        })),
    };

    const htmlContent = `
        <h1>New Chapter Proposal Received</h1>
        <p><strong>Submission ID:</strong> ${mergeInfo.submissionId}</p>
        <p><strong>Proposal:</strong> ${mergeInfo.proposal}</p>
        <p><strong>Chapter:</strong> ${mergeInfo.chapter}</p>
        <p><strong>Keywords:</strong> ${mergeInfo.keywords}</p>
        <p><strong>Book:</strong> ${mergeInfo.book}</p>
        <p><strong>Chapter Subtitles:</strong> ${mergeInfo.chapterSubtitles}</p>
        <p><strong>Suggested Title:</strong> ${mergeInfo.suggestedTitle}</p>
        <p><strong>Authors:</strong> ${mergeInfo.authors.map(author => `
            <p>${author.name} - ${author.isCorresponding}</p>
        `).join('')}</p>
    `;

    const emailData = {
        from,
        to,
        cc,
        bcc,
        subject,
        html: htmlContent,
    };

    if (file) {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onloadend = () => {
                const base64File = reader.result.split(',')[1];
                emailData.attachments = [
                    {
                        filename: file.name,
                        content: base64File,
                    },
                ];
                resolve(emailData);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    } else {
        return Promise.resolve(emailData);
    }
};

export { getEmailData };
