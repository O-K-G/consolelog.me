'use client';

import InputComponent from '@components/InputComponent';

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        // TODO: Proceed from here to validation.
        e.preventDefault();
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
        />
      </div>
    </form>
  );
}
