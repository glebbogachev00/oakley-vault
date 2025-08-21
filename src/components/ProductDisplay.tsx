'use client'

import { useState } from 'react'
import { Product } from '@/types'

interface ProductDisplayProps {
  product: Product
}

export function ProductDisplay({ product }: ProductDisplayProps) {
  const [currentView, setCurrentView] = useState('profile')
  const [currentLens, setCurrentLens] = useState(product.lenses[0] || 'clear')

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr', 
      gap: '120px', 
      alignItems: 'start', 
      margin: '120px 0' 
    }}>
      
      {/* Product Image Area */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '40px' 
      }}>
        <div style={{
          background: 'var(--vault-black)',
          border: '1px solid var(--vault-gray-dark)',
          padding: '60px',
          textAlign: 'center',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Product Image Placeholder */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '300px',
              height: '200px',
              background: 'var(--vault-gray-dark)',
              border: '1px solid var(--vault-gray-medium)',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--vault-gray-light)',
              fontSize: '14px',
              fontFamily: 'var(--font-tech)'
            }}>
              {product.name.toUpperCase()}<br />
              {currentView.toUpperCase()} VIEW<br />
              {currentLens.toUpperCase()} LENS
            </div>
            <p className="tech-spec" style={{ margin: 0 }}>
              /products/{product.id}/{currentView}-{currentLens}.jpg
            </p>
          </div>
        </div>
        
        {/* View Controls */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          flexWrap: 'wrap', 
          alignItems: 'center' 
        }}>
          <span style={{
            fontFamily: 'var(--font-tech)',
            fontWeight: 400,
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'var(--vault-gray-medium)',
            textTransform: 'uppercase',
            marginRight: '16px'
          }}>
            VIEWS:
          </span>
          {product.views.map(view => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              style={{
                background: 'transparent',
                color: currentView === view ? 'var(--vault-white)' : 'var(--vault-gray-light)',
                border: `1px solid ${currentView === view ? 'var(--vault-silver)' : 'var(--vault-gray-medium)'}`,
                padding: '12px 20px',
                fontFamily: 'var(--font-tech)',
                fontWeight: 400,
                fontSize: '12px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: currentView === view ? 'rgba(192, 192, 192, 0.1)' : 'transparent'
              }}
            >
              {view.toUpperCase()}
            </button>
          ))}
        </div>
        
        {/* Lens Controls */}
        {product.hasLensOptions && product.lenses.length > 0 && (
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            flexWrap: 'wrap', 
            alignItems: 'center' 
          }}>
            <span style={{
              fontFamily: 'var(--font-tech)',
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '0.1em',
              color: 'var(--vault-gray-medium)',
              textTransform: 'uppercase',
              marginRight: '16px'
            }}>
              LENS OPTIONS:
            </span>
            {product.lenses.map(lens => (
              <button
                key={lens}
                onClick={() => setCurrentLens(lens)}
                style={{
                  background: 'transparent',
                  color: currentLens === lens ? 'var(--vault-white)' : 'var(--vault-gray-light)',
                  border: `1px solid ${currentLens === lens ? 'var(--vault-silver)' : 'var(--vault-gray-medium)'}`,
                  padding: '12px 20px',
                  fontFamily: 'var(--font-tech)',
                  fontWeight: 400,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: currentLens === lens ? 'rgba(192, 192, 192, 0.1)' : 'transparent'
                }}
              >
                {lens.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Product Information */}
      <div style={{ padding: '60px 0' }}>
        
        <h2 className="section-header">{product.name}</h2>
        
        <div style={{ 
          margin: '48px 0', 
          padding: '32px 0', 
          borderBottom: '1px solid var(--vault-gray-dark)' 
        }}>
          <h3 style={{
            fontFamily: 'var(--font-tech)',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--vault-white)',
            margin: '0 0 24px 0'
          }}>
            DESCRIPTION
          </h3>
          <p className="body-text">{product.description}</p>
        </div>
        
        <div style={{ 
          margin: '48px 0', 
          padding: '32px 0', 
          borderBottom: '1px solid var(--vault-gray-dark)' 
        }}>
          <h3 style={{
            fontFamily: 'var(--font-tech)',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--vault-white)',
            margin: '0 0 24px 0'
          }}>
            SPECIFICATIONS
          </h3>
          <p className="tech-spec">{product.specifications}</p>
        </div>
        
        <div style={{ 
          margin: '48px 0', 
          padding: '32px 0', 
          borderBottom: '1px solid var(--vault-gray-dark)' 
        }}>
          <h3 style={{
            fontFamily: 'var(--font-tech)',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--vault-white)',
            margin: '0 0 24px 0'
          }}>
            MATERIALS
          </h3>
          <p className="tech-spec">{product.materials}</p>
        </div>
        
        <div style={{ 
          margin: '48px 0', 
          padding: '32px 0', 
          borderBottom: '1px solid var(--vault-gray-dark)' 
        }}>
          <h3 style={{
            fontFamily: 'var(--font-tech)',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--vault-white)',
            margin: '0 0 24px 0'
          }}>
            YEAR INTRODUCED
          </h3>
          <p className="tech-spec">{product.year}</p>
        </div>
        
        <div style={{ 
          margin: '48px 0', 
          padding: '32px 0' 
        }}>
          <h3 style={{
            fontFamily: 'var(--font-tech)',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--vault-white)',
            margin: '0 0 24px 0'
          }}>
            CULTURAL CONTEXT
          </h3>
          <p className="body-text">{product.culturalContext}</p>
        </div>
        
      </div>
      
    </div>
  )
}