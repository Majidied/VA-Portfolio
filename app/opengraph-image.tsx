import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mohammed Majidi - Systems-First Virtual Assistant'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1b2a 50%, #00d4ff 100%)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Logo/Icon Circle */}
        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00d4ff, #00a8cc)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            boxShadow: '0 20px 60px rgba(0, 212, 255, 0.5)',
          }}
        >
          <div
            style={{
              fontSize: '60px',
              color: '#0a0e1a',
              fontWeight: 'bold',
            }}
          >
            MM
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Mohammed Majidi
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '36px',
            color: '#00d4ff',
            marginBottom: '20px',
            textAlign: 'center',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Systems-First Virtual Assistant
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: '#a0a0a0',
            maxWidth: '800px',
            textAlign: 'center',
            lineHeight: '1.5',
          }}
        >
          High-Level Executive Support Powered by Custom Systems
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
