'use client'

import { useState } from 'react'
import { products } from '@/lib/data'
import { ProductDisplay } from './ProductDisplay'

export function LaboratorySection() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <section className="vault-section terminal-grid">
      <div className="vault-container">
        
        {/* Classification Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          padding: '20px',
          border: '1px solid var(--vault-gray-dark)',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div>
            <h1 className="section-header" style={{ margin: 0 }}>
              EQUIPMENT LABORATORY
            </h1>
            <div style={{
              fontFamily: 'var(--font-terminal)',
              fontSize: '10px',
              color: 'var(--vault-gray-medium)',
              letterSpacing: '0.1em',
              marginTop: '8px'
            }}>
              EQL-7 • TACTICAL EYEWEAR ANALYSIS DIVISION
            </div>
          </div>
          <div style={{
            fontFamily: 'var(--font-terminal)',
            fontSize: '12px',
            color: 'var(--status-green)',
            letterSpacing: '0.1em',
            padding: '8px 16px',
            border: '1px solid var(--status-green)',
            background: 'rgba(0, 255, 0, 0.1)'
          }}>
            SYSTEMS ONLINE
          </div>
        </div>
        
        <p className="body-text" style={{ 
          maxWidth: '800px', 
          margin: '0 auto 80px auto', 
          textAlign: 'center' 
        }}>
          Classified technical specifications for Elite Forces tactical eyewear. 
          All equipment data remains <span className="redacted">RESTRICTED</span> 
          under Military Protocol 7-Alpha.
        </p>
        
        {/* Equipment Selection HUD */}
        <div style={{
          padding: '24px',
          border: '1px solid var(--vault-gray-dark)',
          background: 'rgba(255, 255, 255, 0.02)',
          marginBottom: '60px'
        }}>
          <div style={{
            fontFamily: 'var(--font-terminal)',
            fontSize: '12px',
            color: 'var(--vault-gray-medium)',
            letterSpacing: '0.1em',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            [ TACTICAL EQUIPMENT DATABASE ]
          </div>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            justifyContent: 'center'
          }}>
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                style={{
                  background: selectedProduct.id === product.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  color: selectedProduct.id === product.id ? 'var(--vault-white)' : 'var(--vault-gray-light)',
                  border: `1px solid ${selectedProduct.id === product.id ? 'var(--vault-white)' : 'var(--vault-gray-medium)'}`,
                  padding: '12px 16px',
                  fontFamily: 'var(--font-terminal)',
                  fontWeight: 400,
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  textAlign: 'left'
                }}
              >
                <div style={{ 
                  fontSize: '9px', 
                  color: 'var(--vault-gray-medium)',
                  marginBottom: '4px' 
                }}>
                  EQ-{String(index + 1).padStart(2, '0')}
                </div>
                {product.name.replace('X-Metal ', '').replace(' Backpack', '')}
                {selectedProduct.id === product.id && (
                  <div style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--status-green)',
                    fontSize: '10px'
                  }}>
                    ●
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Selected Product Display */}
        <ProductDisplay product={selectedProduct} />
        
      </div>
    </section>
  )
}