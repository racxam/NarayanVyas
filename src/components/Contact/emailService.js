import axios from 'axios';

const sendEmail = async (formData) => {
    const apiKey = ''; // Use your Brevo API key
    const url = 'https://api.brevo.com/v3/smtp/email';

    const emailData = {
        sender: {
            name: 'Sender Alex', // Replace with your sender name
            email: 'contact@narayanvyas.com' // Replace with your sender email
        },
        to: [{
            email: 'contact@narayanvyas.com', // Replace with your recipient email
            name: 'John Doe' // Replace with your recipient name
        }],
        subject: 'Hello world', // Replace with your subject
        htmlContent: `<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>` // Replace with your HTML content
    };

    try {
        const response = await axios.post(url, emailData, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
        });
        console.log('Email sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendEmail;
