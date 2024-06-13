'use server';

import formValidation from '@utils/formValidation';

export async function handleSubmit(formData: FormData) {
  // Test. TODO: Proceed from here with server validation and delete this fetch request.

  const email = formData.get('email');
  const subject = formData.get('subject');
  const content = formData.get('content');

  await fetch('http://testteefdfsgsgfvwerfsttest.com').catch((err) => {
    console.log(err);
  });

  const isValidated = formValidation({ email, subject, content });

  console.log('xxx', isValidated);
}
