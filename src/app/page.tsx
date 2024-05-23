// import Image from 'next/image';

import Test from '@components/Test';

// TODO: Remove comments.

export default function Home() {
  if (process.env.NODE_ENV !== 'development') {
    return <div>TBD</div>;
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Test />
    </main>
  );
}
