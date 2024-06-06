import About from '@components/About';
import Contact from '@components/Contact';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import AppContextComponent from '@components/AppContext';
import Planet from '@components/Planet';
import Loader from '@components/Loader';

export default function Home() {
  return (
    <main className='min-h-[100svh] lg:min-h-[100dvh] overflow-hidden'>
      <Loader />
      <AppContextComponent>
        <About />
        <Contact />
        <Projects />
        <Skills />
        <Experience />
        <Planet />
      </AppContextComponent>
    </main>
  );
}
