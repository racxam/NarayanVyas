// emailService.js
import axios from 'axios';

const sendEmail = async (formData) => {
    const zeptoMailAPIKey = 'wSsVR60nq0X1WP16z2WvJuc7mw9XBVLxFBkv3lSl7Xb/T63FoMdvlEXGDFeuSfcfEmVsFWQW8rl8yxcH2jENiYkqywwGWyiF9mqRe1U4J3x17qnvhDzIXmVYlRKBL4kBxQ9tkmJhGski+g==';

    const emailData = {
        from: { address: 'noreply@narayanvyas.com' },
        to: [{ email_address: { address: 'admin@narayanvyas.com', name: 'Narayan' } }],
        subject: 'New Book Proposal Submission',
        htmlbody: `
            <div>
                <p><b>Book:</b> ${formData.book}</p>
                <p><b>Chapter:</b> ${formData.chapter}</p>
                <p><b>Suggested Title:</b> ${formData.suggestedTitle}</p>
                <p><b>Chapter Subtitles:</b> ${formData.chapterSubtitles}</p>
                <p><b>Keywords:</b> ${formData.keywords}</p>
                <p><b>Proposal:</b> ${formData.proposal}</p>
                <p><b>Authors:</b></p>
                ${formData.authors.map(author => `
                    <div>
                        <p>Name: ${author.name}</p>
                        <p>Email: ${author.email}</p>
                        <p>Department: ${author.department}</p>
                        <p>Institution: ${author.institution}</p>
                        <p>Corresponding: ${author.isCorresponding ? 'Yes' : 'No'}</p>
                    </div>
                `).join('')}
            </div>
        `
    };

    try {
        const response = await axios.post('https://api.zeptomail.com/v1.1/email', emailData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Zoho-enczapikey ${zeptoMailAPIKey}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export default sendEmail;
