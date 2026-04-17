import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mason Brown — A marketer who ships.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #1A1A1A 0%, #2A1F1A 45%, #D94F1E 120%)',
          color: '#FAFAF8',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#D94F1E',
            display: 'flex',
          }}
        >
          Mason Brown
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              maxWidth: '960px',
            }}
          >
            A marketer who ships.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              color: 'rgba(250, 250, 248, 0.75)',
              maxWidth: '840px',
              display: 'flex',
            }}
          >
            Senior marketing leader. Builder of AI tools. Chicago, remote-first.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '14px',
            fontSize: 18,
            fontWeight: 500,
            color: 'rgba(250, 250, 248, 0.6)',
          }}
        >
          <div style={{ display: 'flex' }}>Work</div>
          <div style={{ display: 'flex' }}>·</div>
          <div style={{ display: 'flex' }}>Build</div>
          <div style={{ display: 'flex' }}>·</div>
          <div style={{ display: 'flex' }}>About</div>
          <div style={{ display: 'flex', marginLeft: 'auto' }}>masonbrown.co</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
