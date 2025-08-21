import { Product, TechnicalAd } from '@/types'

export const products: Product[] = [
  {
    id: 'x-metal-romeo',
    name: 'X-Metal Romeo',
    description: 'The liquid metal masterpiece that redefined luxury eyewear through revolutionary titanium alloy construction and precision 5-axis CNC machining.',
    specifications: 'Frame: X-Metal titanium alloy | Lens: Plutonite with Iridium coating options | Weight: 31g | Bridge: 14mm | Temple: 125mm',
    materials: 'X-Metal (90% titanium + proprietary alloys), Plutonite lens material, Unobtainium temple grips',
    year: '1997',
    culturalContext: 'Featured prominently in Mission: Impossible film series, establishing Oakley as a luxury performance brand beyond sports applications.',
    hasLensOptions: true,
    views: ['profile', 'front', 'side', 'detail'],
    lenses: ['clear', 'fire-iridium', 'black-iridium']
  },
  {
    id: 'eye-jacket',
    name: 'Eye Jacket',
    description: 'First CAD/CAM designed eyewear featuring progressive accelerating curves that challenged conventional design paradigms.',
    specifications: 'Frame: O-Matter stress-resistant material | Lens: Plutonite with multiple options | Weight: 25g | Bridge: 12mm | Temple: 130mm',
    materials: 'O-Matter frame construction, Plutonite lens technology, Unobtainium nose pads and temple sleeves',
    year: '1994',
    culturalContext: 'Endorsed by Michael Jordan as Oakley board member, representing the intersection of athletic performance and cutting-edge design.',
    hasLensOptions: true,
    views: ['profile', 'front', 'side', 'detail'],
    lenses: ['clear', 'gray', 'bronze']
  },
  {
    id: 'm-frame',
    name: 'M-Frame',
    description: 'Modular sports icon featuring interchangeable lens system designed for maximum versatility in extreme conditions.',
    specifications: 'Frame: O-Matter with modular lens system | Multiple lens shapes available | Weight: 23g | Bridge: Adjustable | Temple: 120mm',
    materials: 'O-Matter frame material, Plutonite interchangeable lenses, Unobtainium contact points throughout',
    year: '1989',
    culturalContext: 'Adopted by military forces worldwide and worn by Lance Armstrong during Tour de France victories, establishing performance credibility.',
    hasLensOptions: true,
    views: ['profile', 'front', 'side', 'detail'],
    lenses: ['clear', 'yellow', 'persimmon']
  },
  {
    id: 'frogskins',
    name: 'Frogskins',
    description: 'Cultural phenomenon that brought surf and skate aesthetics to mainstream eyewear through bold colorways and accessible design.',
    specifications: 'Frame: O-Matter with classic wayfarer-inspired shape | Lens: Plutonite with various options | Weight: 27g | Bridge: 16mm | Temple: 140mm',
    materials: 'O-Matter frame construction, Plutonite lenses, integrated temple design without additional grip materials',
    year: '1985',
    culturalContext: 'Became synonymous with 1980s California surf and skate culture, later achieving collector status and multiple reissues.',
    hasLensOptions: true,
    views: ['profile', 'front', 'side', 'detail'],
    lenses: ['clear', 'gray', 'violet-iridium']
  },
  {
    id: 'over-the-top',
    name: 'Over The Top',
    description: 'Boundary-pushing Olympics design featuring unconventional over-head wearing configuration for maximum aerodynamic performance.',
    specifications: 'Frame: O-Matter with unique over-head geometry | Lens: Plutonite shield design | Weight: 29g | Specialized ergonomic fit',
    materials: 'O-Matter frame with aerodynamic profiling, Plutonite shield lens, Unobtainium contact points for secure fit',
    year: '1996',
    culturalContext: 'Worn by Ato Boldon at 1996 Olympics, generating significant media attention and establishing Oakley\'s reputation for innovation.',
    hasLensOptions: false,
    views: ['profile', 'front', 'side', 'detail'],
    lenses: ['gray']
  },
  {
    id: 'kitchen-sink',
    name: 'Kitchen Sink Backpack',
    description: 'Software ecosystem representative featuring functional maximalism and comprehensive organization system for technical professionals.',
    specifications: 'Capacity: 34L | Dimensions: 50cm x 33cm x 23cm | Weight: 2.1kg | Material: Ballistic nylon construction | Hardware: YKK zippers',
    materials: 'Ballistic nylon exterior, aircraft aluminum hardware, YKK zipper systems, internal cable management',
    year: '1998',
    culturalContext: 'Represented Oakley\'s expansion into lifestyle products, targeting Y2K technology professionals and collectors.',
    hasLensOptions: false,
    views: ['profile', 'front', 'side', 'detail'],
    lenses: []
  }
]

export const technicalAds: TechnicalAd[] = [
  {
    id: "romeo-specs",
    title: "X-Metal Romeo Technical Specifications",
    year: "1997",
    description: "Clean product silhouette with detailed technical specifications showcasing precision engineering and material science innovation.",
    imageUrl: "/archive/romeo-technical-specs.jpg"
  },
  {
    id: "plutonite-science", 
    title: "Plutonite Lens Technology",
    year: "1996",
    description: "Scientific documentation of revolutionary lens material providing 100% UV protection and superior impact resistance.",
    imageUrl: "/archive/plutonite-lens-science.jpg"
  },
  {
    id: "mframe-military",
    title: "M-Frame Military Specifications", 
    year: "1991",
    description: "Military adoption documentation highlighting performance standards and field testing results.",
    imageUrl: "/archive/mframe-military-specs.jpg"
  },
  {
    id: "unobtainium-material",
    title: "Unobtainium Hydrophilic Properties",
    year: "1994",
    description: "Technical analysis of grip-enhancing material that increases adhesion when exposed to moisture.",
    imageUrl: "/archive/unobtainium-material-science.jpg"
  },
  {
    id: "xmetal-engineering",
    title: "X-Metal Alloy Composition",
    year: "1995",
    description: "Engineering documentation of titanium alloy development and 5-axis CNC manufacturing process.",
    imageUrl: "/archive/xmetal-engineering-specs.jpg"
  },
  {
    id: "three-point-fit",
    title: "Three Point Fit System",
    year: "1992",
    description: "Biomechanical analysis of pressure distribution and comfort optimization in eyewear design.",
    imageUrl: "/archive/three-point-fit-analysis.jpg"
  }
]