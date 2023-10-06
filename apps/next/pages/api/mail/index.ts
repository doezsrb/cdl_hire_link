import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'POST') {
    var data = JSON.parse(req.body)
    try {
      var transporter = nodemailer.createTransport({
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
      })
      res.status(200).json({ msg: 'Success', result: 'Sent' })
    } catch {
      res.status(200).json({ msg: 'Error', result: 'Failed' })
    }
  } else {
    res.status(200).json({ msg: 'Error', result: 'Error' })
  }
}
