'use client'

import { technicalAds } from '@/lib/data'

export function ArchiveSection() {
  return (
    <section className="vault-section">
      <div className="vault-container">
        
        <h1 className="section-header">ADVERTISING ARCHIVE</h1>
        
        <p className="body-text" style={{ 
          maxWidth: '800px', 
          margin: '0 auto 80px auto', 
          textAlign: 'center' 
        }}>
          A collection of technical advertisements showcasing Oakley's engineering-first 
          approach through clean, specification-focused visual communication.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '80px',
          margin: '80px 0'
        }}>
          {technicalAds.map(ad => (
            <div key={ad.id} style={{
              border: '1px solid var(--vault-gray-dark)',
              background: 'var(--vault-black)'
            }}>
              
              {/* Ad Image */}
              <div style={{
                background: 'var(--vault-gray-dark)',
                border: '1px solid var(--vault-gray-medium)',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--vault-gray-light)',
                fontSize: '14px',
                fontFamily: 'var(--font-tech)',
                textAlign: 'center',
                margin: '40px',
                marginBottom: '0'
              }}>
                <div>
                  <div style={{ marginBottom: '20px', fontSize: '48px' }}>📄</div>
                  <div>TECHNICAL ADVERTISEMENT</div>
                  <div style={{ marginTop: '10px', fontSize: '12px', opacity: 0.7 }}>
                    {ad.imageUrl}
                  </div>
                </div>
              </div>
              
              {/* Ad Info */}
              <div style={{ padding: '40px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-tech)',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--vault-white)',
                  margin: '0 0 16px 0'
                }}>
                  {ad.title}
                </h3>
                
                <p className="tech-spec" style={{ marginBottom: '24px' }}>
                  Year: {ad.year}
                </p>
                
                <p className="body-text" style={{ margin: 0 }}>
                  {ad.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}