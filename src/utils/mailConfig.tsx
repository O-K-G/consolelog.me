'use server';

import nodemailer from 'nodemailer';
import mailHTMLTemplate from '@utils/mailHTMLTemplate';
import mailHTMLText from '@i18nEn/mailHTMLText.json';
import { MailHTMLTemplateProps } from '@constants/interfaces';

export default async function mailConfig({
  dir,
  email,
  subject,
  content,
}: MailHTMLTemplateProps) {
  const { env } = process;
  const { HOST, HOST_PORT, SECURE, USER, PASS, TO } = env;
  const { subject: subjectText, website } = mailHTMLText;

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
    subject: `${subjectText}: ${website}`,
    text: `${content}`,
    html: await mailHTMLTemplate({ dir, email, subject, content }),
  };

  return { transporter, messageSendDetailsObject };
}
