import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'POST') {
    const API_KEY_SENDGRID =
      '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'
    sgMail.setApiKey(API_KEY_SENDGRID)
    var data = JSON.parse(req.body)
    try {
      const msg = {
        to: 'office@cdlhirelink.com',
        from: 'office@cdlhirelink.com', // Use the email address or domain you verified above
        subject: 'TestSub',

        html: `<html>
        <body>
          <style>
            table,
            th,
            td {
              border: 1px solid black;
            }
          </style>
          <div style="width: 300px; height: 100%">
            <table style="border: 1px solid black">
              <tr style="text-align: center; border: 1px solid black">
                <th>FIRSTNAME:</th>
                <th>${data.firstname.value}</th>
                <th>LASTNAME:</th>
                <th>${data.lastname.value}</th>
              </tr>
      
              <tr style="text-align: center">
                <th>EMAIL:</th>
                <th>${data.email.value}</th>
                <th>SUBJECT:</th>
                <th>${data.subject.value}</th>
              </tr>
      
              <tr>
                <th colspan="4" style="text-align: left">
                  <b>MESSAGE:</b><br />
                  ${data.message.value}
                </th>
              </tr>
            </table>
          </div>
        </body>
      </html>`,
      }
      await sgMail.send(msg)
      /*  var transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
        port: 587,
        secure: false,
        auth: {
          user: 'office@cdlhirelink.com',
          pass: 'cdlhirelink123',
        },
      })
      const info = await transporter.sendMail({
        from: 'office@cdlhirelink.com',
        to: 'office@cdlhirelink.com',
        subject: data.subject.value,
        html: `<html>
    <body>
      <style>
        table,
        th,
        td {
          border: 1px solid black;
        }
      </style>
      <div style="width: 300px; height: 100%">
        <table style="border: 1px solid black">
          <tr style="text-align: center; border: 1px solid black">
            <th>FIRSTNAME:</th>
            <th>${data.firstname.value}</th>
            <th>LASTNAME:</th>
            <th>${data.lastname.value}</th>
          </tr>
  
          <tr style="text-align: center">
            <th>EMAIL:</th>
            <th>${data.email.value}</th>
            <th>SUBJECT:</th>
            <th>${data.subject.value}</th>
          </tr>
  
          <tr>
            <th colspan="4" style="text-align: left">
              <b>MESSAGE:</b><br />
              ${data.message.value}
            </th>
          </tr>
        </table>
      </div>
    </body>
  </html>`,
      }) */
      res.status(200).json({ msg: 'Success', result: 'Sent' })
    } catch (e) {
      console.log('ERROR')
      console.log(e)
      res.status(200).json({ msg: 'Error', result: e })
    }
  } else {
    res.status(200).json({ msg: 'Error', result: 'Error' })
  }
}
