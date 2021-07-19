const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {

    const { email, username, subject, templateName } = req.body;
    const sender = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth:{
            user: process.env.MAIL,
            pass: process.env.MAIL_PSW 
        }
    });

    var readHTMLFile = function(path, callback) {
        fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
            if (err) {
                console.log(err)
            }
            else {
                callback(null, html);
            }
        });
    };

    readHTMLFile(path.join(__dirname, '../templates/emails/' + templateName), (err, html) => {
        const template = handlebars.compile(html);
        const replacements = {
             username: username
        };
        const htmlToSend = template(replacements);
        const mailOptions = {
            from: 'brenocota4@gmail.com',
            to: email,
            subject: subject,
            html: htmlToSend
        };

        sender.sendMail(mailOptions, (err) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(200).json({ message: 'Mail send successfull' });
            }
        });
    });
}