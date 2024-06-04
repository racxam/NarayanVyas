// emailService.js
import { SendMailClient } from "zeptomail";

const url = "https://api.zeptomail.com/";
const token = "Zoho-enczapikey wSsVR60nq0X1WP16z2WvJuc7mw9XBVLxFBkv3lSl7Xb/T63FoMdvlEXGDFeuSfcfEmVsFWQW8rl8yxcH2jENiYkqywwGWyiF9mqRe1U4J3x17qnvhDzIXmVYlRKBL4kBxQ9tkmJhGski+g==";

const client = new SendMailClient({ url, token });

const sendEmail = async (formData) => {
    const { book, chapter, suggestedTitle, chapterSubtitles, keywords, proposal, authors } = formData;

    const htmlbody = `
        <div>
            <h3>Book Proposal Submission</h3>
            <p><strong>Book:</strong> ${book}</p>
            <p><strong>Chapter:</strong> ${chapter}</p>
            <p><strong>Suggested Chapter Title:</strong> ${suggestedTitle}</p>
            <p><strong>Chapter Subtitles:</strong> ${chapterSubtitles}</p>
            <p><strong>Keywords:</strong> ${keywords}</p>
            <p><strong>Proposal:</strong> ${proposal}</p>
            <h4>Authors:</h4>
            ${authors.map((author, index) => `
                <div>
                    <h5>Author ${index + 1}</h5>
                    <p><strong>Name:</strong> ${author.name}</p>
                    <p><strong>Email:</strong> ${author.email}</p>
                    <p><strong>Department:</strong> ${author.department}</p>
                    <p><strong>Institution:</strong> ${author.institution}</p>
                    <p><strong>Corresponding Author:</strong> ${author.isCorresponding ? "Yes" : "No"}</p>
                </div>
            `).join('')}
        </div>
    `;

    try {
        const resp = await client.sendMail({
            from: {
                address: "contact@narayanvyas.com",
                name: "contact"
            },
            to: [
                {
                    email_address: {
                        address: "admin@narayanvyas.com",
                        name: "Narayan"
                    }
                }
            ],
            subject: "Book Proposal Submission",
            htmlbody: htmlbody,
        });

        console.log("Email sent successfully:", resp);
    } catch (error) {
        console.error("Error sending email:", error.message, error.code, error.response ? error.response.data : 'No response data');
    }
};

export default sendEmail;
