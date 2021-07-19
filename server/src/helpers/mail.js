const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const { resolve } = require('path');

module.exports = async (email, username, subject, templateName) => {
    return new Promise(function(resolve, reject) {
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
                    reject(err)
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

            try {
                sender.sendMail(mailOptions, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve('Mail send successfull');
                    }
                });

            } catch(e) {
                console.log(e);
                reject(e)
            }
        });
    });
}