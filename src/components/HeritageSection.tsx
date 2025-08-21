'use client'

const classifiedMissions = [
  {
    id: 'operation-impossible',
    title: 'Operation: Hollywood Infiltration',
    year: '1996',
    category: 'Covert Ops',
    classification: 'TOP SECRET',
    description: 'Agent TOM CRUISE deployed Romeo tactical eyewear during Mission: Impossible operation. Successful mainstream market penetration achieved through cinematic cover.',
    impact: 'Civilian population conditioning and luxury market infiltration',
    status: 'MISSION COMPLETE'
  },
  {
    id: 'asset-jordan',
    title: 'Asset Recruitment: Basketball Legend',
    year: '1995',
    category: 'Personnel',
    classification: 'CONFIDENTIAL',
    description: 'High-value target MICHAEL JORDAN successfully recruited as board member asset. Athletic credibility network established.',
    impact: 'Professional sports infiltration and authority positioning',
    status: 'ASSET ACTIVE'
  },
  {
    id: 'operation-endurance',
    title: 'Operation: European Endurance',
    year: '1999-2005',
    category: 'Field Test',
    classification: 'SECRET',
    description: 'Extended field testing through cycling operative. M-Frame equipment performance validated under extreme conditions.',
    impact: 'European market penetration and endurance capability proof',
    status: 'DATA ARCHIVED'
  },
  {
    id: 'mil-spec-approval',
    title: 'Military Specification Certification',
    year: '1991',
    category: 'Military',
    classification: 'OFFICIAL USE',
    description: 'M-Frame tactical eyewear approved for military field deployment. Standards compliance achieved for special operations use.',
    impact: 'Global military and law enforcement adoption',
    status: 'APPROVED'
  },
  {
    id: 'operation-olympic',
    title: 'Operation: Olympic Showcase',
    year: '1996',
    category: 'Public Ops',
    classification: 'RESTRICTED',
    description: 'Athlete operative ATO BOLDON deployed Over The Top equipment during Atlanta Olympics. Public attention objectives achieved.',
    impact: 'Innovation perception and boundary-pushing reputation',
    status: 'OBJECTIVE MET'
  },
  {
    id: 'cultural-integration',
    title: 'Cultural Integration Protocol',
    year: '1985',
    category: 'Social Ops',
    classification: 'UNCLASSIFIED',
    description: 'Frogskins deployment into California youth culture networks. Alternative sports communities successfully infiltrated.',
    impact: 'Youth demographic authority and lifestyle positioning',
    status: 'ONGOING'
  }
]

export function HeritageSection() {
  return (
    <section className="vault-section terminal-grid">
      <div className="vault-container">
        
        {/* Mission Classification Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          padding: '20px',
          border: '2px solid var(--lens-red)',
          background: 'rgba(255, 0, 0, 0.05)'
        }}>
          <div>
            <h1 className="section-header" style={{ margin: 0, color: 'var(--lens-red)' }}>
              MISSION HISTORY
            </h1>
            <div style={{
              fontFamily: 'var(--font-terminal)',
              fontSize: '10px',
              color: 'var(--vault-gray-medium)',
              letterSpacing: '0.1em',
              marginTop: '8px'
            }}>
              MHS-9 • CLASSIFIED OPERATIONS ARCHIVE
            </div>
          </div>
          <div style={{
            fontFamily: 'var(--font-terminal)',
            fontSize: '10px',
            color: 'var(--lens-red)',
            letterSpacing: '0.1em',
            padding: '8px 16px',
            border: '1px solid var(--lens-red)',
            background: 'rgba(255, 0, 0, 0.1)'
          }}>
            ■ TOP SECRET ■
          </div>
        </div>
        
        <p className="body-text" style={{ 
          maxWidth: '800px', 
          margin: '0 auto 80px auto', 
          textAlign: 'center' 
        }}>
          Declassified operational records documenting Elite Forces infiltrations 
          and tactical deployments. Mission data includes <span className="redacted">CLASSIFIED</span> 
          personnel assignments and strategic objectives.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '40px',
          margin: '80px 0'
        }}>
          {classifiedMissions.map((mission, index) => (
            <div key={mission.id} className="tactical-card" style={{
              border: '1px solid var(--vault-gray-dark)',
              background: 'rgba(255, 255, 255, 0.01)',
              padding: '32px',
              position: 'relative'
            }}>
              
              {/* Classification Header */}
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--vault-gray-dark)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-terminal)',
                  fontSize: '10px',
                  color: 'var(--vault-gray-medium)',
                  letterSpacing: '0.1em'
                }}>
                  FILE #{String(index + 1).padStart(3, '0')} • {mission.category.toUpperCase()} • {mission.year}
                </div>
                
                <div style={{
                  fontFamily: 'var(--font-terminal)',
                  fontSize: '9px',
                  color: mission.classification === 'TOP SECRET' ? 'var(--lens-red)' : 
                        mission.classification === 'SECRET' ? 'var(--warning-amber)' : 'var(--status-green)',
                  letterSpacing: '0.1em',
                  padding: '4px 8px',
                  border: `1px solid ${mission.classification === 'TOP SECRET' ? 'var(--lens-red)' : 
                          mission.classification === 'SECRET' ? 'var(--warning-amber)' : 'var(--status-green)'}`,
                  background: mission.classification === 'TOP SECRET' ? 'rgba(255, 0, 0, 0.1)' : 
                             mission.classification === 'SECRET' ? 'rgba(255, 102, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)'
                }}>
                  {mission.classification}
                </div>
              </div>
              
              {/* Mission Title */}
              <h2 style={{
                fontFamily: 'var(--font-classified)',
                fontWeight: 700,
                fontSize: '18px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--vault-white)',
                margin: '0 0 24px 0',
                lineHeight: '1.2'
              }}>
                {mission.title}
              </h2>
              
              {/* Mission Brief */}
              <p className="body-text" style={{ 
                marginBottom: '32px',
                fontSize: '14px',
                lineHeight: '1.6'
              }} dangerouslySetInnerHTML={{ __html: mission.description }}>
              </p>
              
              {/* Mission Analysis */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                paddingTop: '24px',
                borderTop: '1px solid var(--vault-gray-dark)'
              }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-terminal)',
                    fontWeight: 700,
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--vault-white)',
                    margin: '0 0 8px 0'
                  }}>
                    STRATEGIC IMPACT
                  </h3>
                  <p className="tech-spec" style={{ margin: 0, fontSize: '12px' }}>
                    {mission.impact}
                  </p>
                </div>
                
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-terminal)',
                    fontWeight: 700,
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--vault-white)',
                    margin: '0 0 8px 0'
                  }}>
                    MISSION STATUS
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-terminal)',
                    fontSize: '11px',
                    color: 'var(--status-green)',
                    letterSpacing: '0.05em',
                    margin: 0,
                    textTransform: 'uppercase'
                  }}>
                    {mission.status}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}