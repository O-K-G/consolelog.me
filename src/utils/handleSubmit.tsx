'use server';

import formValidation from '@utils/formValidation';

export async function handleSubmit(formData: FormData) {
  const dir = formData.get('dir') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const content = formData.get('content') as string;

  const { isValidated } = formValidation({ email, subject, content });

  console.log('server', isValidated, dir);
  // await fetch('http://testteefdfsgsgfvwerfsttest.com').catch((err) => {
  //   console.log(err);
  // });
}
