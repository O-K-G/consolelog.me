import About from '@components/About';
import Contact from '@components/Contact';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='min-h-screen overflow-hidden'>
      <div className='fixed top-0 left-0 text-xs text-white z-10'>
        TODO: Move this attribution elsewhere. Design based on Jayendra
        Awasthi&apos;s &apos;Space themed portfolio&apos; free community Figma
        template at&nbsp;
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.figma.com/community/file/1192903581929005722'
        >
          https://www.figma.com/community/file/1192903581929005722
        </a>
        and used under the&nbsp;
        <a
          target='_blank'
          rel='noreferrer'
          href='https://creativecommons.org/licenses/by/4.0/'
        >
          CC BY 4.0
        </a>
        &nbsp; license. Changes where made to the material from the original
        version.
      </div>
      <About />
      <Contact />
      <Projects />
      <Skills />
      <Experience />

      <div className='fixed -bottom-[50svh] left-0 right-0 mx-auto size-3/4'>
        <Image src='/planet.svg' fill alt='Picture of the author' />
      </div>

      {/* TODO: Change Loader behavior. */}
      {/* <Loader /> */}
    </main>
  );
}
