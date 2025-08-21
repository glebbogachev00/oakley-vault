'use client'

import { Section } from '@/types'

interface NavigationProps {
  currentSection: Section
  onSectionChange: (section: Section) => void
}

export function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const sections: { id: Section; label: string; code: string }[] = [
    { id: 'laboratory', label: 'Equipment Lab', code: 'EQL' },
    { id: 'materials', label: 'Material Sciences', code: 'MSC' }, 
    { id: 'archive', label: 'Intelligence Archive', code: 'INT' },
    { id: 'heritage', label: 'Mission History', code: 'MHS' }
  ]

  return (
    <>
      {/* Classification Banner */}
      <div className="classification-banner"></div>
      
      <nav className="vault-nav">
        <div className="vault-container">
          <div className="nav-content">
            
            {/* Command Interface Title */}
            <div className="nav-brand">
              <span className="nav-title">
                [CLASSIFIED] THE VAULT
              </span>
              <div style={{
                fontFamily: 'var(--font-terminal)',
                fontSize: '10px',
                color: 'var(--vault-gray-medium)',
                letterSpacing: '0.1em',
                marginTop: '4px'
              }}>
                ELITE FORCES ACCESS • CLEARANCE LEVEL 5
              </div>
            </div>
            
            {/* Terminal Command Links */}
            <ul className="nav-links">
              {sections.map(section => (
                <li key={section.id}>
                  <button
                    className={`nav-link ${currentSection === section.id ? 'active' : ''}`}
                    onClick={() => onSectionChange(section.id)}
                  >
                    <span style={{ 
                      fontSize: '10px', 
                      color: 'var(--vault-gray-medium)',
                      marginRight: '8px' 
                    }}>
                      {section.code}
                    </span>
                    {section.label}
                  </button>
                </li>
              ))}
              
              {/* System Status Indicator */}
              <li style={{
                fontFamily: 'var(--font-terminal)',
                fontSize: '10px',
                color: 'var(--status-green)',
                letterSpacing: '0.1em',
                padding: '8px 16px',
                border: '1px solid var(--status-green)',
                borderRadius: '0',
                background: 'rgba(0, 255, 0, 0.05)'
              }}>
                SYS_ONLINE
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}