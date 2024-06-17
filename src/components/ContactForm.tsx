'use client';

import InputComponent from '@components/InputComponent';
import { useState } from 'react';
import { handleSubmit } from '@utils/handleSubmit';
import formValidation from '@utils/formValidation';
import DialogBackdrop from '@components/shared/DialogBackdrop';
import ProgressIndicators from '@components/ProgressIndicators';
import BottomInputComponentButtons from '@components/BottomInputComponentButtons';
import {
  type FormErrorNames,
  type Fields,
  CONTACT_FORM_EMAIL_MAX_LENGTH,
  CONTACT_FORM_SUBJECT_MIN_LENGTH,
  CONTACT_FORM_SUBJECT_MAX_LENGTH,
  CONTACT_FORM_CONTENT_MIN_LENGTH,
  CONTACT_FORM_CONTENT_MAX_LENGTH,
  BASE_STATUS_CODES,
} from '@constants/interfaces';

export default function ContactForm() {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');
  const [errorDialogDetails, setErrorDialogDetails] = useState('');
  const [errors, setErrors] = useState<[] | FormErrorNames>([]);
  const [isMessageSent, setMessageSent] = useState(false);

  const handleValidation = async (formData: FormData) => {
    formData.append('dir', dir);

    const { isValidated, error } = formValidation({
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      content: formData.get('content') as string,
    });

    if (error) {
      setErrors(Object.keys(error) as FormErrorNames);
    } else if (isValidated) {
      try {
        const reqData = await handleSubmit(formData);
        const { status } = reqData ?? { status: '' };
        if (status) {
          const ok =
            BASE_STATUS_CODES[
              status as unknown as keyof typeof BASE_STATUS_CODES
            ];

          if (ok && status === '201') {
            setMessageSent(true);
          }

          if (!ok) {
            if (isMessageSent) {
              setMessageSent(false);
            }
            setErrorDialogDetails(status);
          }
        }
      } catch (clientError) {
        setErrorDialogDetails((clientError as string)?.toString());
      }
    }
  };

  const fieldError = (val: Fields) =>
    (errors as Array<typeof val>).includes(val);

  const handleOnChange = (val: Fields) => {
    if (fieldError(val)) {
      setErrors(errors.filter((str) => str !== val));
    }
  };

  const handleOnClick = () => {
    if (isMessageSent) {
      setMessageSent(false);
    }
  };

  return (
    <form
      dir={dir}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      action={handleValidation}
      className='size-full center-elements flex-col z-10 sm:pr-24'
    >
      <div className='w-full md:w-8/12 flex flex-col justify-center items-start gap-2 sm:gap-10'>
        {[
          {
            id: 'email',
            placeholder: 'EMAILADDRESS@YOUR-EMAIL-DOMAIN.COM',
            maxLength: CONTACT_FORM_EMAIL_MAX_LENGTH,
            onChange: () => handleOnChange('email'),
            onClick: handleOnClick,
            isError: fieldError('email'),
          },
          {
            id: 'subject',
            placeholder: 'SUBJECT',
            minLength: CONTACT_FORM_SUBJECT_MIN_LENGTH,
            maxLength: CONTACT_FORM_SUBJECT_MAX_LENGTH,
            onChange: () => handleOnChange('subject'),
            onClick: handleOnClick,
            isError: fieldError('subject'),
          },
          {
            id: 'content',
            placeholder: 'YOUR MESSAGE',
            minLength: CONTACT_FORM_CONTENT_MIN_LENGTH,
            maxLength: CONTACT_FORM_CONTENT_MAX_LENGTH,
            rows: 5,
            component: 'textarea' as const,
            bottomSlot: (
              <BottomInputComponentButtons
                dir={dir}
                isSubmitDisabled={!!errors.length}
                onSubmit={() => setMessageSent(false)}
                onClick={(val) => {
                  if (dir === 'ltr' && val === 'rtl') {
                    setDir('rtl');
                  }
                  if (dir === 'rtl' && val === 'ltr') {
                    setDir('ltr');
                  }
                }}
                leftSlot={<ProgressIndicators isMessageSent={isMessageSent} />}
              />
            ),
            onChange: () => handleOnChange('content'),
            onClick: handleOnClick,
            isError: fieldError('content'),
          },
        ].map(
          ({
            id,
            placeholder,
            minLength,
            maxLength,
            rows,
            component,
            bottomSlot,
            onChange,
            onClick,
            isError,
          }) => (
            <InputComponent
              key={`input-component-${id}`}
              id={id}
              isReset={isMessageSent}
              placeholder={placeholder}
              minLength={minLength}
              maxLength={maxLength}
              rows={rows}
              component={component}
              bottomSlot={bottomSlot}
              onChange={onChange}
              onClick={onClick}
              isError={isError}
            />
          )
        )}
      </div>
      <DialogBackdrop
        open={!!errorDialogDetails}
        onClose={() => setErrorDialogDetails('')}
        errorDetails={errorDialogDetails}
      />
    </form>
  );
}
