import type { MetadataRoute } from 'next';
import { CACHE_VERSION } from '@root/tailwind.config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TBD',
    short_name: 'TBD',
    description: 'TBD',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: `/images/android-chrome-192x192.png?cacheVersion=${CACHE_VERSION}`,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: `/images/android-chrome-512x512.png?cacheVersion=${CACHE_VERSION}`,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
