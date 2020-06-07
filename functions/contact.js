require("dorenv").config()

exports.handler = (event, _, callback) => {
  const mailgun = require("mailgun-js")
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  })

  const data = JSON.parse(event.body)

  const email = {
    from: "JAMStack Test <test@getnada.com>",
    to: `${data.name} <${data.email}>`,
    subject: data.subject,
    text: data.body,
  }

  mg.messages().send(email, (error, response) => {
    callback(error, {
      statusCode: 200,
      body: JSON.stringify(response),
    })
  })
}
