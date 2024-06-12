import Section from '@components/shared/Section';
import Title from '@components/title/Title';

interface InputComponentProps {
  component?: 'input' | 'textarea';
  id: string;
  placeholder: string;
  maxLength: number;
  rows?: number;
}

function InputComponent({
  component: Component = 'input',
  id,
  placeholder,
  maxLength,
  rows,
}: InputComponentProps) {
  return (
    <div className='center-elements w-full text-white gap-6'>
      <div className='flex items-center justify-end w-4/12'>
        <label htmlFor='email' className='uppercase font-bebas-neue text-3xl'>
          {id}:
        </label>
      </div>
      <Component
        type='text'
        maxLength={maxLength}
        id={id}
        name={id}
        className={`w-full placeholder:uppercase text-xl placeholder:text-white/30 font-montserrat placeholder:font-bebas-neue outline-none bg-title-purple/30 ${
          Component !== 'textarea' ? 'h-[3.188rem] px-4' : 'p-4'
        }`}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
}

export default function Contact() {
  return (
    <Section backgroundClassName='bg-center' currentSection='contact'>
      <Title label='contact' labelGlowText='contact' />
      <form className='size-full center-elements'>
        <div className='w-5/12 flex flex-col justify-center items-start gap-10'>
          <InputComponent
            id='email'
            placeholder='EMAILADDRESS@YOUR-EMAIL-DOMAIN.COM'
            maxLength={50}
          />
          <InputComponent id='subject' placeholder='SUBJECT' maxLength={100} />
          <InputComponent
            id='subject'
            placeholder='YOUR MESSAGE'
            maxLength={1000}
            rows={10}
            component='textarea'
          />
        </div>
      </form>
    </Section>
  );
}
