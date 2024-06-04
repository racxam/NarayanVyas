import axios from 'axios';

const sendEmail = async (formData) => {
    const zeptoMailAPIKey = 'wSsVR60nq0X1WP16z2WvJuc7mw9XBVLxFBkv3lSl7Xb/T63FoMdvlEXGDFeuSfcfEmVsFWQW8rl8yxcH2jENiYkqywwGWyiF9mqRe1U4J3x17qnvhDzIXmVYlRKBL4kBxQ9tkmJhGski+g==';

    const emailData = {
        from: { address: 'contact@narayanvyas.com' },
        to: [{ email_address: { address: 'narayanvyas87@gmail.com', name: 'Narayan' } }],
        subject: 'New Book Proposal Submission',
        htmlbody: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #007BFF; margin-bottom: 20px;">New Book Proposal Submission</h2>
                <h3 style="color: #007BFF; margin-bottom: 10px;">Proposal Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 16px;">
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f2f2f2;"><strong>Book</strong></td>
                            <td style="border: 1px solid #ddd; padding: 12px;">${formData.book}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f2f2f2;"><strong>Chapter</strong></td>
                            <td style="border: 1px solid #ddd; padding: 12px;">${formData.chapter}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f2f2f2;"><strong>Suggested Title</strong></td>
                            <td style="border: 1px solid #ddd; padding: 12px;">${formData.suggestedTitle}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f2f2f2;"><strong>Chapter Subtitles</strong></td>
                            <td style="border: 1px solid #ddd; padding: 12px;">${formData.chapterSubtitles}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f2f2f2;"><strong>Keywords</strong></td>
                            <td style="border: 1px solid #ddd; padding: 12px;">${formData.keywords}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 12px; background-color: #f2f2f2;"><strong>Proposal</strong></td>
                            <td style="border: 1px solid #ddd; padding: 12px; white-space: pre-wrap;">${formData.proposal}</td>
                        </tr>
                    </tbody>
                </table>

                <h3 style="color: #007BFF; margin-top: 30px; margin-bottom: 10px;">Authors</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 16px;">
                    <thead>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 12px; background-color: #007BFF; color: #fff;">Name</th>
                            <th style="border: 1px solid #ddd; padding: 12px; background-color: #007BFF; color: #fff;">Email</th>
                            <th style="border: 1px solid #ddd; padding: 12px; background-color: #007BFF; color: #fff;">Department</th>
                            <th style="border: 1px solid #ddd; padding: 12px; background-color: #007BFF; color: #fff;">Institution</th>
                            <th style="border: 1px solid #ddd; padding: 12px; background-color: #007BFF; color: #fff;">Corresponding</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${formData.authors.map(author => `
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px;">${author.name}</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">${author.email}</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">${author.department}</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">${author.institution}</td>
                                <td style="border: 1px solid #ddd; padding: 12px; color: ${author.isCorresponding ? '#007BFF' : '#333'};">
                                    ${author.isCorresponding ? '<strong>Yes</strong>' : 'No'}
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
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
