// emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'mailersend', // Utilize o serviço que preferir, como Gmail, SendGrid, etc.
    host: 'smtp.mailersend.net',
    port: 587,
    auth: {
        user: 'MS_ebTRsM@trial-z86org8ownz4ew13.mlsender.net', // Substitua pelo seu email
        pass: 'm5UHOEr6r44FYJlQ' // Substitua pela sua senha
    }
});

const sendWelcomeEmail = async (email, name) => {
    const mailOptions = {
        from: 'MS_ebTRsM@trial-z86org8ownz4ew13.mlsender.net', // Substitua pelo seu email
        to: email,
        subject: 'Bem-vindo ao nosso serviço!',
        text: `Olá ${name},\n\nObrigado por se registrar no nosso serviço. Estamos felizes em tê-lo conosco!\n\nAtenciosamente,\nEquipe de Suporte`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendWelcomeEmail;
