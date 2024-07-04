import About from '@components/byPage/About';
import Contact from '@components/byPage/Contact';
import Projects from '@components/byPage/Projects';
import Skills from '@components/byPage/Skills';
import Experience from '@components/byPage/Experience';
import AppContextComponent from '@components/shared/AppContext';
import Planet from '@components/shared/Planet';
import Loader from '@components/shared/Loader';
import ScrollIconComponent from '@components/shared/ScrollIconComponent';
import Dialog from '@components/shared/dialog/Dialog';

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
        <Dialog />
      </AppContextComponent>
      <ScrollIconComponent />
    </main>
  );
}
