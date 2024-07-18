import ScrollIconComponent from '@components/shared/ScrollIconComponent';
import Attribution from '@components/Attribution';
import Shenanigans from '@components/Shenanigans';
import ScrollToTopComponent from '@components/shared/ScrollToTopComponent';

export default function Footer() {
  return (
    <footer className='mt-auto z-10 center-elements flex-col gap-2'>
      <ScrollIconComponent />
      <ScrollToTopComponent />
      <Attribution />
      <Shenanigans />
    </footer>
  );
}
