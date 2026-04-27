import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
        throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
    }

    const transporter = nodemailer.createTransport({
        host: process.env.NUXT_MAIL_HOST,
        port: Number(process.env.NUXT_MAIL_PORT) || 587,
        secure: process.env.NUXT_MAIL_SECURE === 'true',
        auth: {
            user: process.env.NUXT_MAIL_USER,
            pass: process.env.NUXT_MAIL_PASS,
        },
    })

    await transporter.sendMail({
        from: `"${name}" <${process.env.NUXT_MAIL_USER}>`,
        to: process.env.NUXT_MAIL_TO || 'quentin@yunikon.re',
        replyTo: email,
        subject: subject || `[Portfolio] Message de ${name}`,
        text: `${message}\n\n— ${name}\n${email}`,
        html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <p style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">Message depuis yunikon.re</p>
        <h2 style="margin:0 0 8px">${subject || `Message de ${name}`}</h2>
        <p style="color:#555;margin:0 0 24px">De : <strong>${name}</strong> &lt;${email}&gt;</p>
        <div style="background:#f7f7f5;border-left:3px solid #6b6355;padding:16px 20px;border-radius:4px">
          <p style="margin:0;white-space:pre-wrap;line-height:1.6">${message}</p>
        </div>
      </div>
    `,
    })

    return { ok: true }
})