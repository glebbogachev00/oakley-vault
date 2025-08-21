'use client'

import { useState } from 'react'
import { Section } from '@/types'
import { Navigation } from '@/components/Navigation'
import { VaultLanding } from '@/components/VaultLanding'
import { LaboratorySection } from '@/components/LaboratorySection'
import { MaterialsSection } from '@/components/MaterialsSection'
import { ArchiveSection } from '@/components/ArchiveSection'
import { HeritageSection } from '@/components/HeritageSection'

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section | null>(null)

  const renderSection = () => {
    switch (currentSection) {
      case 'laboratory':
        return <LaboratorySection />
      case 'materials':
        return <MaterialsSection />
      case 'archive':
        return <ArchiveSection />
      case 'heritage':
        return <HeritageSection />
      default:
        return <VaultLanding onSectionChange={setCurrentSection} />
    }
  }

  return (
    <div style={{ 
      paddingTop: currentSection ? '100px' : '0',
      minHeight: '100vh',
      background: 'var(--vault-black)' 
    }}>
      {currentSection && (
        <Navigation 
          currentSection={currentSection} 
          onSectionChange={setCurrentSection} 
        />
      )}
      
      {renderSection()}
    </div>
  )
}