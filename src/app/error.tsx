'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div>TODO: Global error</div>
      <button type='button' onClick={reset}>
        Retry
      </button>
    </>
  );
}
