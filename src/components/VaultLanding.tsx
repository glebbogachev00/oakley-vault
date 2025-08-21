'use client'

import { Section } from '@/types'

interface VaultLandingProps {
  onSectionChange: (section: Section) => void
}

export function VaultLanding({ onSectionChange }: VaultLandingProps) {
  return (
    <main className="vault-main terminal-grid">
      
      {/* Elite Forces Hero Section */}
      <section className="hero-section hud-overlay">
        <div className="vault-container">
          
          {/* Classification Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            padding: '20px',
            border: '2px solid var(--lens-red)',
            background: 'rgba(255, 0, 0, 0.1)' 
          }}>
            <div className="classified-text" style={{ 
              fontSize: '14px', 
              marginBottom: '8px',
              color: 'var(--lens-red)' 
            }}>
              ■ CLASSIFIED ■ CLASSIFIED ■ CLASSIFIED ■
            </div>
            <div style={{
              fontFamily: 'var(--font-terminal)',
              fontSize: '12px',
              color: 'var(--vault-gray-light)',
              letterSpacing: '0.1em'
            }}>
              ELITE FORCES EQUIPMENT ARCHIVE • CLEARANCE LEVEL 5 REQUIRED
            </div>
          </div>
          
          {/* Command Title */}
          <h1 className="vault-title">THE VAULT</h1>
          
          {/* Mission Brief */}
          <div style={{ margin: '60px 0 80px 0', textAlign: 'center' }}>
            <p className="tech-spec status-operational">
              [ ELITE FORCES MAD SCIENTIST ARCHIVE - ACTIVE ]
            </p>
          </div>
          
          {/* Mission Description */}
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p className="body-text" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Classified repository of revolutionary tactical eyewear developed under 
              <span className="redacted">PROJECT MADSCIENTIST</span> protocol. 
              Access restricted to Elite Forces personnel with Level 5 clearance. 
              All equipment specifications remain property of <span className="redacted">CLASSIFIED</span>.
            </p>
          </div>
          
        </div>
      </section>
      
      {/* Command Center Access Modules */}
      <section className="content-section">
        <div className="vault-container">
          
          {/* Security Clearance Warning */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px',
            padding: '24px',
            border: '1px solid var(--warning-amber)',
            background: 'rgba(255, 102, 0, 0.05)'
          }}>
            <div style={{
              fontFamily: 'var(--font-terminal)',
              fontSize: '12px',
              color: 'var(--warning-amber)',
              letterSpacing: '0.1em',
              marginBottom: '8px'
            }}>
              ⚠ SECURITY PROTOCOL ACTIVE ⚠
            </div>
            <div className="body-text" style={{ 
              margin: '0',
              fontSize: '14px',
              color: 'var(--vault-gray-light)' 
            }}>
              All access logged. Unauthorized personnel will be detained.
            </div>
          </div>
          
          <div className="three-col-grid">
            
            {/* R&D Laboratory */}
            <div className="tactical-card">
              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  fontFamily: 'var(--font-terminal)',
                  fontSize: '10px',
                  color: 'var(--status-green)',
                  letterSpacing: '0.1em',
                  padding: '4px 8px',
                  border: '1px solid var(--status-green)',
                  background: 'rgba(0, 255, 0, 0.1)'
                }}>
                  MSC • ACTIVE
                </span>
              </div>
              <h2 className="section-header" style={{ fontSize: '18px' }}>
                MATERIAL SCIENCES LAB
              </h2>
              <p className="body-text">
                Classified molecular engineering protocols. X-Metal synthesis, 
                Unobtainium compounds, and <span className="redacted">REDACTED</span> 
                materials under development.
              </p>
              <button 
                className="section-link"
                onClick={() => onSectionChange('materials')}
              >
                ACCESS LAB
              </button>
            </div>
            
            {/* Equipment Archive */}
            <div className="tactical-card">
              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  fontFamily: 'var(--font-terminal)',
                  fontSize: '10px',
                  color: 'var(--status-green)',
                  letterSpacing: '0.1em',
                  padding: '4px 8px',
                  border: '1px solid var(--status-green)',
                  background: 'rgba(0, 255, 0, 0.1)'
                }}>
                  EQL • ACTIVE
                </span>
              </div>
              <h2 className="section-header" style={{ fontSize: '18px' }}>
                EQUIPMENT LABORATORY
              </h2>
              <p className="body-text">
                Tactical eyewear specifications. Field-tested equipment from 
                Romeo series to M-Frame tactical variants. Performance data 
                classified.
              </p>
              <button 
                className="section-link"
                onClick={() => onSectionChange('laboratory')}
              >
                VIEW EQUIPMENT
              </button>
            </div>
            
            {/* Mission Archives */}
            <div className="tactical-card">
              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  fontFamily: 'var(--font-terminal)',
                  fontSize: '10px',
                  color: 'var(--status-green)',
                  letterSpacing: '0.1em',
                  padding: '4px 8px',
                  border: '1px solid var(--status-green)',
                  background: 'rgba(0, 255, 0, 0.1)'
                }}>
                  MHS • ACTIVE
                </span>
              </div>
              <h2 className="section-header" style={{ fontSize: '18px' }}>
                MISSION HISTORY
              </h2>
              <p className="body-text">
                Operational records from Hollywood infiltrations, Olympic 
                deployments, and <span className="redacted">CLASSIFIED</span> 
                special operations.
              </p>
              <button 
                className="section-link"
                onClick={() => onSectionChange('heritage')}
              >
                ACCESS RECORDS
              </button>
            </div>
            
          </div>
          
        </div>
      </section>
      
    </main>
  )
}