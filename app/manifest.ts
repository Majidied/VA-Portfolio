import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mohammed Majidi - Virtual Assistant',
    short_name: 'M. Majidi',
    description:
      'High-Level Executive Support powered by custom systems and automation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0e1a',
    theme_color: '#00d4ff',
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  }
}
