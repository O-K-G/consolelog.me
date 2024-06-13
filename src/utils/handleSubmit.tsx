'use server';

import formValidation from '@utils/formValidation';

export async function handleSubmit(formData: FormData) {
  // Test. TODO: Proceed from here with server validation and delete this fetch request.
  await fetch('http://testteefdfsgsgfvwerfsttest.com').catch((err) => {
    console.log(err);
  });

  const isValidated = formValidation(formData);
  console.log('server', isValidated);
}
