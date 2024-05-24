import About from '@components/About';
import Contact from '@components/Contact';
import Projects from '@components/Projects';
import Skills from '@components/Skills';

export default function MainPage() {
  return (
    <div className='snap-y snap-mandatory border-4 border-green-500 max-h-svh overflow-y-auto'>
      <About />
      <Contact />
      <Projects />
      <Skills />
    </div>
  );
}
