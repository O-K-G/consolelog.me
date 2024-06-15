'use server';

import formValidation from '@utils/formValidation';
import nodemailer from 'nodemailer';

export async function handleSubmit(formData: FormData) {
  const dir = formData.get('dir') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const content = formData.get('content') as string;

  const { isValidated } = formValidation({ email, subject, content });

  if (isValidated) {
    const { env } = process;
    const { HOST, HOST_PORT, SECURE, USER, PASS, HOST_SUCCESS_RESPONSE, TO } =
      env;

    const transporter = nodemailer.createTransport({
      host: HOST,
      port: Number(HOST_PORT),
      secure: SECURE === 'true',
      auth: {
        user: USER,
        pass: PASS,
      },
    });

    try {
      const { response } =
        (await transporter.sendMail({
          from: `"${email}" <${email}>`,
          to: TO,
          subject: `A message through consolelogme.com: ${subject}`,
          text: `${content}`,
          html: `<b>${dir} - ${content}</b>`,
        })) || {};
      if (response.includes(HOST_SUCCESS_RESPONSE as unknown as string)) {
        return { status: '201' };
      }
    } catch (nodeMailerRequestError) {
      console.error(nodeMailerRequestError);
      return { status: '403' };
    }
  } else {
    return { status: '403' };
  }
}
