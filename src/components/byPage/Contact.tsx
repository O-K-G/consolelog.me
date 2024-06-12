import Section from '@components/shared/Section';
import Title from '@components/title/Title';

interface InputComponentProps {
  component?: 'input' | 'textarea';
  id: string;
  placeholder: string;
  maxLength: number;
  rows?: number;
  isSubmit?: boolean;
}

function InputComponent({
  component: Component = 'input',
  id,
  placeholder,
  maxLength,
  rows,
  isSubmit,
}: InputComponentProps) {
  const isTextarea = Component === 'textarea';

  return (
    <div className='w-full text-white sm:gap-6 flex flex-col items-start sm:flex-row justify-center'>
      <div className='flex items-center justify-start sm:justify-end sm:mt-1.5 sm:w-2/12 md:w-3/12 md:max-w-24'>
        <label
          htmlFor='email'
          className='uppercase font-bebas-neue text-xl sm:text-3xl'
        >
          {id}:
        </label>
      </div>
      <div className='center-elements flex-col w-full'>
        <div className='w-full flex flex-col items-end justify-center'>
          <Component
            type='text'
            maxLength={maxLength}
            id={id}
            name={id}
            className={`w-full placeholder:uppercase text-xl placeholder:text-white/30 font-montserrat placeholder:font-bebas-neue outline-none bg-title-purple/30 focus:bg-black/70 ${
              !isTextarea ? 'h-[3.188rem] px-4' : 'p-4 resize-none'
            }`}
            placeholder={placeholder}
            rows={rows}
          />
          <div className='font-bebas-neue text-base'>1/{maxLength}</div>
        </div>
        {isSubmit && (
          <button
            type='submit'
            className='font-bebas-neue p-2 mt-2 text-xl sm:text-3xl uppercase hover:text-title-purple active:text-[#75629f] focus:text-title-purple outline-none'
          >
            SEND
          </button>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Section
      className='gap-2 sm:gap-0'
      backgroundClassName='bg-center'
      currentSection='contact'
    >
      <Title label='contact' labelGlowText='contact' />
      <form className='size-full center-elements flex-col z-10'>
        <div className='w-full md:w-8/12 flex flex-col justify-center items-start gap-2 sm:gap-10'>
          <InputComponent
            id='email'
            placeholder='EMAILADDRESS@YOUR-EMAIL-DOMAIN.COM'
            maxLength={50}
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
    </Section>
  );
}
