'use client';

import InputComponent from '@components/InputComponent';
import { useState } from 'react';
import { handleSubmit } from '@utils/handleSubmit';
import formValidation from '@utils/formValidation';
import {
  CONTACT_FORM_EMAIL_MAX_LENGTH,
  CONTACT_FORM_SUBJECT_MIN_LENGTH,
  CONTACT_FORM_SUBJECT_MAX_LENGTH,
  CONTACT_FORM_CONTENT_MIN_LENGTH,
  CONTACT_FORM_CONTENT_MAX_LENGTH,
  type FormErrorNames,
} from '@constants/interfaces';

export default function ContactForm() {
  const [dir, setDir] = useState('ltr');
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [errors, setErrors] = useState<[] | FormErrorNames>([]);

  return (
    <form
      dir={dir}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      action={async (formData) => {
        formData.append('dir', dir);

        const { isValidated, error } = formValidation({
          email: formData.get('email') as string,
          subject: formData.get('subject') as string,
          content: formData.get('content') as string,
        });

        if (isValidated) {
          return await handleSubmit(formData);
        } else if (error) {
          setErrors(Object.keys(error) as FormErrorNames);
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
          onChange={(val) => {
            if ((errors as Array<'email'>).includes('email')) {
              setErrors(errors.filter((str) => str !== 'email'));
            }
            setEmailValue(val);
          }}
          isError={(errors as Array<'email'>).includes('email')}
        />
        <InputComponent
          id='subject'
          placeholder='SUBJECT'
          minLength={CONTACT_FORM_SUBJECT_MIN_LENGTH}
          maxLength={CONTACT_FORM_SUBJECT_MAX_LENGTH}
          value={subjectValue}
          onChange={(val) => {
            if ((errors as Array<'subject'>).includes('subject')) {
              setErrors(errors.filter((str) => str !== 'subject'));
            }
            setSubjectValue(val);
          }}
          isError={(errors as Array<'subject'>).includes('subject')}
        />
        <InputComponent
          id='content'
          placeholder='YOUR MESSAGE'
          minLength={CONTACT_FORM_CONTENT_MIN_LENGTH}
          maxLength={CONTACT_FORM_CONTENT_MAX_LENGTH}
          rows={5}
          component='textarea'
          isSubmit
          isSubmitDisabled={!!errors.length}
          value={contentValue}
          onChange={(val) => {
            if ((errors as Array<'content'>).includes('content')) {
              setErrors(errors.filter((str) => str !== 'content'));
            }
            setContentValue(val);
          }}
          onClick={(val) => {
            if (dir === 'ltr' && val === 'rtl') {
              setDir('rtl');
            }
            if (dir === 'rtl' && val === 'ltr') {
              setDir('ltr');
            }
          }}
          isError={(errors as Array<'content'>).includes('content')}
        />
      </div>
    </form>
  );
}
