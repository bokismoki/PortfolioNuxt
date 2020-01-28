const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('dotenv').config()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host)
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}
start()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'borisbosnjak084@gmail.com',
        pass: process.env.PASSWORD
    }
})

app.post('/email', (req, res) => {
    const { name, email, message } = req.body
    if (name.trim() && email.trim() && message.trim() && email.includes('@') && email.includes('.')) {
        const msg = {
            from: email,
            to: ['borisbosnjak084@gmail.com'],
            subject: `${name} - Portfolio Nuxt Message`,
            html: `<h1>${email}</h1><p>${message}</p>`
        }

        transporter.sendMail(msg, (err, result) => {
            if (err) {
                res.send({ success: false, msg: 'Error while sending the email!' })
            } else {
                if (result.rejected.length === 0 && result.response.includes('OK')) {
                    res.send({ success: true, msg: 'Email successfully sent!' })
                }
            }
        })
    } else {
        res.send({ success: false, msg: 'Please enter a valid name, email and message!' })
    }
})