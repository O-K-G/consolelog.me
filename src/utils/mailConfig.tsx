'use server';

import nodemailer from 'nodemailer';
import mailHTMLTemplate from '@utils/mailHTMLTemplate';

export default async function mailConfig({
  dir,
  email,
  subject,
  content,
}: {
  dir: string;
  email: string;
  subject: string;
  content: string;
}) {
  const { env } = process;
  const { HOST, HOST_PORT, SECURE, USER, PASS, TO } = env;

  const transporter = nodemailer.createTransport({
    host: HOST,
    port: Number(HOST_PORT),
    secure: SECURE === 'true',
    auth: {
      user: USER,
      pass: PASS,
    },
  });

  const messageSendDetailsObject = {
    from: `"${email}" <${email}>`,
    to: TO,
    subject: `A message through consolelogme.com: ${subject}`,
    text: `${content}`,
    html: mailHTMLTemplate({ dir, email, subject, content }),
  };

  return { transporter, messageSendDetailsObject };
}
