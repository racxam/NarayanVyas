const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const app = express();
const port = process.env.PORT || 5001; // Ensure this matches the port in setupProxy.js

app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { book, chapter, suggestedTitle, chapterSubtitles, keywords, proposal, authors } = req.body;

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
        const response = await axios.post('https://api.zeptomail.com/v1.1/email', {
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
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Zoho-enczapikey wSsVR60nq0X1WP16z2WvJuc7mw9XBVLxFBkv3lSl7Xb/T63FoMdvlEXGDFeuSfcfEmVsFWQW8rl8yxcH2jENiYkqywwGWyiF9mqRe1U4J3x17qnvhDzIXmVYlRKBL4kBxQ9tkmJhGski+g==`
            }
        });

        res.status(200).send(response.data);
    } catch (error) {
        console.error("Error sending email:", error.message);
        res.status(500).send({ error: 'Error sending email' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
