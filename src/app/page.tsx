import About from '@components/byPage/About';
import Contact from '@components/byPage/Contact';
import Projects from '@components/byPage/Projects';
import Skills from '@components/byPage/Skills';
import Experience from '@components/byPage/Experience';
import AppContextComponent from '@components/shared/AppContext';
import Planet from '@components/shared/Planet';
import Loader from '@components/shared/Loader';
import ScrollIcon from '@components/icons/ScrollIcon';

export default function Home() {
  return (
    <main className='min-h-svh lg:min-h-dvh overflow-hidden'>
      <Loader />
      <AppContextComponent>
        <About />
        <Skills />
        <Contact />
        <Projects />
        <Experience />
        <Planet />
      </AppContextComponent>
      <div className='fixed center-elements flex-col h-16 overflow-hidden md:h-[4.5rem] lg:h-24 bottom-0 right-0 mr-4 mb-4'>
        <div className='uppercase text-title-purple text-base md:text-xl lg:text-2xl text-center w-full font-bebas-neue'>
          SCROLL
        </div>
        <ScrollIcon className='h-full stroke-title-purple fill-title-purple' />
      </div>
    </main>
  );
}
