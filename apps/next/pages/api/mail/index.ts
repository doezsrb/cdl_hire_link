import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  /*  let testAccount = await nodemailer.createTestAccount();
      var transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      var transporter = nodemailer.createTransport({
        host: MAIL_HOST,
        port: 465,
        secure: true,
        auth: {
          user: ORDER_EMAIL_USER,
          pass: ORDER_EMAIL_PASS,
        },
      }); */
  res.status(200).json({ msg: 'Success', result: 'Sent' })
}
