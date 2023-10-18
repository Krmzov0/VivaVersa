// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { fullName, email, goal, details } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'krmzovgorgi0@gmail.com',
                pass: 'hlsi yxbd eqoi mlie', // Use the application-specific password
            },
        });

        const mailData = {
            from: 'krmzovgorgi0@gmail.com',
            to: 'krmzovgorgi0@gmail.com',
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

