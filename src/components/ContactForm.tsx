'use client';

import InputComponent from '@components/InputComponent';
import { useState } from 'react';
import { handleSubmit } from '@utils/handleSubmit';
import formValidation from '@utils/formValidation';
import {
  CONTACT_FORM_EMAIL_MAX_LENGTH,
  CONTACT_FORM_SUBJECT_MAX_LENGTH,
  CONTACT_FORM_CONTENT_MAX_LENGTH,
} from '@constants/interfaces';

export default function ContactForm() {
  const [dir, setDir] = useState('ltr');
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  return (
    <form
      dir={dir}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      action={async (formData) => {
        const isValidated = formValidation({
          email: emailValue,
          subject: subjectValue,
          content: contentValue,
        });
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
          maxLength={CONTACT_FORM_EMAIL_MAX_LENGTH}
          value={emailValue}
          onChange={setEmailValue}
        />
        <InputComponent
          id='subject'
          placeholder='SUBJECT'
          maxLength={CONTACT_FORM_SUBJECT_MAX_LENGTH}
          value={subjectValue}
          onChange={setSubjectValue}
        />
        <InputComponent
          id='content'
          placeholder='YOUR MESSAGE'
          maxLength={CONTACT_FORM_CONTENT_MAX_LENGTH}
          rows={5}
          component='textarea'
          isSubmit
          value={contentValue}
          onChange={setContentValue}
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
