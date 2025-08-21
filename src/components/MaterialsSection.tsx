'use client'

const materials = [
  {
    id: 'x-metal',
    name: 'X-Metal',
    description: '3D-sculptured titanium alloy with liquid metal appearance achieved through precision 5-axis CNC machining.',
    composition: '90% Titanium + proprietary alloys',
    properties: 'Corrosion resistant, hypoallergenic, 40% lighter than steel',
    applications: 'Romeo, Juliet, Penny frames',
    year: '1995'
  },
  {
    id: 'unobtainium',
    name: 'Unobtainium',
    description: 'Hydrophilic rubber compounds that increase grip when wet, defying conventional material behavior.',
    composition: 'Synthetic rubber compound with hydrophilic additives',
    properties: '25% grip increase when wet, temperature resistant -40°C to 85°C',
    applications: 'Nose pads, temple grips, earstems',
    year: '1994'
  },
  {
    id: 'o-matter',
    name: 'O-Matter',
    description: 'Lightweight, durable frame material engineered for stress resistance and shape memory properties.',
    composition: 'Proprietary polymer blend with memory characteristics',
    properties: '25% lighter than acetate, 2x stronger, returns to original shape',
    applications: 'Frame construction across multiple product lines',
    year: '1991'
  },
  {
    id: 'plutonite',
    name: 'Plutonite',
    description: 'Ultra-pure polycarbonate lens material providing superior optics and impact resistance.',
    composition: 'Ultra-pure polycarbonate with optical-grade clarity',
    properties: '100% UV protection, ANSI Z87.1 impact rating, 15% lighter than glass',
    applications: 'All Oakley lens applications',
    year: '1988'
  }
]

export function MaterialsSection() {
  return (
    <section className="vault-section">
      <div className="vault-container">
        
        <h1 className="section-header">MATERIAL SCIENCE</h1>
        
        <p className="body-text" style={{ 
          maxWidth: '800px', 
          margin: '0 auto 80px auto', 
          textAlign: 'center' 
        }}>
          Revolutionary materials that redefined performance standards through molecular 
          engineering and precision manufacturing processes.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '80px',
          margin: '80px 0'
        }}>
          {materials.map(material => (
            <div key={material.id} style={{
              border: '1px solid var(--vault-gray-dark)',
              background: 'var(--vault-black)',
              padding: '60px'
            }}>
              
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '24px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--vault-white)',
                margin: '0 0 24px 0'
              }}>
                {material.name}
              </h2>
              
              <p className="body-text" style={{ marginBottom: '48px' }}>
                {material.description}
              </p>
              
              <div style={{ 
                display: 'grid',
                gap: '32px'
              }}>
                
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--vault-white)',
                    margin: '0 0 12px 0'
                  }}>
                    COMPOSITION
                  </h3>
                  <p className="tech-spec">{material.composition}</p>
                </div>
                
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--vault-white)',
                    margin: '0 0 12px 0'
                  }}>
                    PROPERTIES
                  </h3>
                  <p className="tech-spec">{material.properties}</p>
                </div>
                
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--vault-white)',
                    margin: '0 0 12px 0'
                  }}>
                    APPLICATIONS
                  </h3>
                  <p className="tech-spec">{material.applications}</p>
                </div>
                
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--vault-white)',
                    margin: '0 0 12px 0'
                  }}>
                    YEAR INTRODUCED
                  </h3>
                  <p className="tech-spec">{material.year}</p>
                </div>
                
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}