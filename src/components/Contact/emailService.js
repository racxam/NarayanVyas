import axios from 'axios';

const sendEmail = async (emailData) => {
    try {
        const response = await axios.post('https://web-email-proxy-823d619a0ab4.herokuapp.com/send-email', emailData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Zoho-enczapikey wSsVR60nq0X1WP16z2WvJuc7mw9XBVLxFBkv3lSl7Xb/T63FoMdvlEXGDFeuSfcfEmVsFWQW8rl8yxcH2jENiYkqywwGWyiF9mqRe1U4J3x17qnvhDzIXmVYlRKBL4kBxQ9tkmJhGski+g==`,
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

const getEmailData = (formData, file, mail_template_key, from, to = [], cc = [], bcc = [], subject = 'New Chapter Proposal Received') => {
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

    const emailData = {
        mail_template_key,
        from,
        to,
        cc,
        bcc,
        merge_info: mergeInfo,
        subject,
    };

    if (file) {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onloadend = () => {
                const base64File = reader.result.split(',')[1];
                emailData.attachments = [
                    {
                        content: base64File,
                        mime_type: file.type,
                        name: file.name,
                    },
                ];
                resolve(emailData);
            };
            reader.readAsDataURL(file);
        });
    } else {
        return Promise.resolve(emailData);
    }
};

export { sendEmail, getEmailData };
