import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { fullName, email, goal, details } = req.body;

        // Create a transporter with SMTP configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vivaversagency@gmail.com',
                pass: process.env.APP_PASS,
            },
        });
        

        // Define the email content
        const mailData = {
            from: 'vivaversagency@gmail.com',
            to: 'vivaversagency@gmail.com', // Set to your own email address
            subject: 'VivaVersa - Web Form Submission',
            html: `
                <p>Name: ${fullName}</p>
                <p>Email: ${email}</p>
                <p>Goal: ${goal}</p>
                <p>Project Details: ${details}</p>
            `,
        };

        try {
            // Send the email
            await transporter.sendMail(mailData);

            // Respond with a success message
            res.status(200).send('Email sent successfully');
        } catch (error) {
            // Log and respond with an error message
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        }
    } else {
        // Respond with a method not allowed status
        res.status(405).end();
    }
};
