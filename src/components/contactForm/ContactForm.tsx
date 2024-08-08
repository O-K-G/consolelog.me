'use client';

import InputComponent from '@components/contactForm/InputComponent';
import { useState, useContext } from 'react';
import { handleSubmit } from '@utils/handleSubmit';
import formValidation from '@utils/formValidation';
import ProgressIndicators from '@components/contactForm/ProgressIndicators';
import BottomInputComponentButtons from '@components/contactForm/BottomInputComponentButtons';
import ErrorDialogMeesage from '@components/shared/ErrorDialogMessage';
import { ModalContext as modalContext } from '@components/shared/ModalContext';
import { useParams } from 'next/navigation';
import { DIRECTION_BY_LANGUAGE } from '@constants/LocaleDirection';
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
  const { locale } = useParams() || {};
  const direction =
    DIRECTION_BY_LANGUAGE[locale as keyof typeof DIRECTION_BY_LANGUAGE];
  const [dir, setDir] = useState<'ltr' | 'rtl'>(direction);
  const [errors, setErrors] = useState<[] | FormErrorNames>([]);
  const [isMessageSent, setMessageSent] = useState(false);
  const { onModalContentChange: setModalContent } = useContext(modalContext);

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
            setModalContent(<ErrorDialogMeesage details={status} />);
          }
        }
      } catch (clientError) {
        setModalContent(
          <ErrorDialogMeesage details={(clientError as string)?.toString()} />
        );
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

  const ltrPaddingClassName =
    direction === 'ltr' && (dir === 'ltr' ? 'sm:pr-24' : 'sm:pl-36');

  const rtlPaddingClassName =
    direction === 'rtl' && (dir === 'rtl' ? 'sm:pl-36' : 'sm:pr-24');

  return (
    <form
      dir={dir}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      action={handleValidation}
      className={`w-full center-elements flex-col z-10 mt-2 ${ltrPaddingClassName} ${rtlPaddingClassName}`}
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
            placeholderFontClassName: 'placeholder:font-bebas-neue',
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
            placeholderFontClassName,
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
              placeholderFontClassName={placeholderFontClassName}
            />
          )
        )}
      </div>
    </form>
  );
}
