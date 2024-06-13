'use client';

import InputComponent from '@components/InputComponent';
import { useState } from 'react';
import { handleSubmit } from '@utils/handleSubmit';
import formValidation from '@utils/formValidation';

export default function ContactForm() {
  const [dir, setDir] = useState('ltr');

  return (
    <form
      dir={dir}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      action={async (formData) => {
        const isValidated = formValidation(formData);
        if (isValidated) {
          console.log('client', isValidated);
          return await handleSubmit(formData);
        }
        return console.log('TODO: Error');
      }}
      className='size-full center-elements flex-col z-10'
    >
      <div className='w-full md:w-8/12 flex flex-col justify-center items-start gap-2 sm:gap-10'>
        <InputComponent
          id='email'
          placeholder='EMAILADDRESS@YOUR-EMAIL-DOMAIN.COM'
          maxLength={100}
        />
        <InputComponent id='subject' placeholder='SUBJECT' maxLength={100} />
        <InputComponent
          id='content'
          placeholder='YOUR MESSAGE'
          maxLength={1000}
          rows={5}
          component='textarea'
          isSubmit
          onClick={(val) => {
            if (dir === 'ltr' && val === 'rtl') {
              setDir('rtl');
            }
            if (dir === 'rtl' && val === 'ltr') {
              setDir('ltr');
            }
          }}
        />
      </div>
    </form>
  );
}
