const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

require('dotenv').config()

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendEmail = (name, email, message, cb) => {
    const mailOptions = {
        from: email,
        to: 'borisbosnjak084@gmail.com',
        subject: `PORTFOLIO - ${name}`,
        text: message
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    })
}

module.exports = sendEmail