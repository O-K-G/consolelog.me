'use server';

import formValidation from '@utils/formValidation';
// import nodemailer from 'nodemailer';

export async function handleSubmit(formData: FormData) {
  // const dir = formData.get('dir') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const content = formData.get('content') as string;

  const { isValidated } = formValidation({ email, subject, content });

  if (isValidated) {
    const { env } = process;
    const { HOST, PORT, SECURE, USER, PASS } = env;

    console.log(HOST, PORT, SECURE === 'true', USER, PASS);
    // const transporter = nodemailer.createTransport({
    //   host: HOST,
    //   port: Number(PORT),
    //   secure: SECURE === 'true', // Use `true` for port 465, `false` for all other ports
    //   auth: {
    //     user: USER,
    //     pass: PASS,
    //   },
    // });
  } else {
    return { status: '403' };
  }
  // const info = await transporter.sendMail({
  //   from: '"xxx xxx" <xxx@xxx.xxx>', // sender address
  //   to: 'xxx@xxx.xxx', // list of receivers
  //   subject: 'xxx', // Subject line
  //   text: 'xxx', // plain text body
  //   html: '<b>xxx</b>', // html body
  // });

  // console.log(info);
  // await fetch('http://testteefdfsgsgfvwerfsttest.com').catch((err) => {
  //   console.log(err);
  // });
}
