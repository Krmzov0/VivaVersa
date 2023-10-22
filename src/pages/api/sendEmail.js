// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { fullName, email, goal, details } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'vivaversagency@gmail.com',
                pass: 'a r l u f p k g u q b j j d u h', // Use the application-specific password
            },
        });

        const mailData = {
            from: 'vivaversagency@gmail.com',
            to: 'vivaversagency@gmail.com',
            subject: 'VivaVersa - Web Form Submission',
            html: `<p>Name: ${fullName}</p><p>Email: ${email}</p><p>Goal: ${goal}</p><p>Project Details: ${details}</p>`,
        };

        try {
            await transporter.sendMail(mailData);
            res.status(200).send('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        }
    } else {
        res.status(405).end();
    }
};


//hlsi yxbd eqoi mlie

