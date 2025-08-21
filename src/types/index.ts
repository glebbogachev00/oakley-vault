export interface Product {
  id: string
  name: string
  description: string
  specifications: string
  materials: string
  year: string
  culturalContext: string
  hasLensOptions: boolean
  views: string[]
  lenses: string[]
}

export interface TechnicalAd {
  id: string
  title: string
  year: string
  description: string
  imageUrl: string
}

export type Section = 'laboratory' | 'materials' | 'archive' | 'heritage'