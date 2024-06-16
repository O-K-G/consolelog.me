'use client';

import InputComponent from '@components/InputComponent';
import { useEffect, useState } from 'react';
import { handleSubmit } from '@utils/handleSubmit';
import formValidation from '@utils/formValidation';
import DialogBackdrop from '@components/shared/DialogBackdrop';
import {
  CONTACT_FORM_EMAIL_MAX_LENGTH,
  CONTACT_FORM_SUBJECT_MIN_LENGTH,
  CONTACT_FORM_SUBJECT_MAX_LENGTH,
  CONTACT_FORM_CONTENT_MIN_LENGTH,
  CONTACT_FORM_CONTENT_MAX_LENGTH,
  BASE_STATUS_CODES,
  type FormErrorNames,
} from '@constants/interfaces';
import { useFormState } from 'react-dom';

export default function ContactForm() {
  const [dir, setDir] = useState('ltr');
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [errorDialogDetails, setErrorDialogDetails] = useState('');
  const [errors, setErrors] = useState<[] | FormErrorNames>([]);

  const handleValidation = async (prevState: null, formData: FormData) => {
    formData.append('dir', dir);

    const { isValidated, error } = formValidation({
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      content: formData.get('content') as string,
    });

    if (isValidated) {
      try {
        return await handleSubmit(formData);
      } catch (clientError) {
        setErrorDialogDetails((clientError as string)?.toString());
      }
    } else if (error) {
      setErrors(Object.keys(error) as FormErrorNames);
    }
  };

  const [state, formAction] = useFormState(handleValidation, null);
  const { status } = state ?? { status: '' };

  useEffect(() => {
    if (status) {
      const ok =
        BASE_STATUS_CODES[status as unknown as keyof typeof BASE_STATUS_CODES];

      if (ok && status === '201') {
        // TODO: Proceed from here.
        return console.log('TODO: confirmation/success screen');
      }

      if (!ok) {
        // TODO: Add details.
        return setErrorDialogDetails(status);
      }
    }
  }, [status]);

  return (
    <form
      action={formAction}
      dir={dir}
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
      <DialogBackdrop
        open={!!errorDialogDetails}
        onClose={() => setErrorDialogDetails('')}
        errorDetails={errorDialogDetails}
      />
    </form>
  );
}
