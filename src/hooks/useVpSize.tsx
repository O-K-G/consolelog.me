'use client';

export default function useVpSize() {
  let vwSize = 0;

  if (typeof window === 'object' && !vwSize) {
    vwSize = window.innerWidth;
  }

  return {
    viewportSize: vwSize || null,
    isTailwindMobile: !vwSize ? null : vwSize < 1024,
  };
}
