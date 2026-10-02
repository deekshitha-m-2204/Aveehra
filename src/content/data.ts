import { ImpactMetric, LifecyclePhase, Pillar, SchoolPartner } from "@/types";

export const BRAND_CONFIG = {
  name: "AVEEHRA",
  tagline: "Pioneering India's Circular Uniform Ecosystem",
  manifesto: "Every Uniform Has a Story. Every Story Deserves a Second Chapter.",
  positioning: "Pioneering India's Circular Uniform Ecosystem",
  origin: "Born in Mysuru, Karnataka — Expanding Across India",
  philosophy: "Respect → Extend → Reuse → Recycle",
  pillars: [
    { name: "Respect", description: "Honoring the garment, the student, and the parent's sacrifices through every phase." },
    { name: "Sustainability", description: "Engineered longevity, zero landfill waste, and certified closed-loop circularity." },
    { name: "Social Impact", description: "50% dignified pricing for families and student welfare funds for partner schools." },
  ],
  etymology: {
    veera: { word: "Veera (वीर / ವೀರ)", meaning: "Warrior — discipline, resilience, and inner strength of character" },
    heera: { word: "Heera (हीरा / ಹೀರಾ)", meaning: "Diamond — enduring value, clarity, and unyielding preciousness" },
    synthesis: "Aveehra represents the belief that every individual behind a uniform, and the uniform itself, deserves to be valued.",
  },
};

export const LIFECYCLE_PHASES: LifecyclePhase[] = [
  {
    step: "01",
    title: "Respect & Craft",
    subtitle: "Engineered for Multi-Year Longevity",
    mantra: "Circularity Begins at the Loom",
    description: "Before a uniform can have a second journey, it must be built to survive its first. We engineer fabrics with high-tensile yarn, reinforced seams, and non-toxic skin-safe dyes designed for Indian climates.",
    imageSrc: "/images/phase1_respect_1789544142836.jpg",
    imageAlt: "Macro shot of premium dark navy uniform fabric being woven on a traditional loom with golden threads.",
    details: [
      "Custom high-density cotton & combed fiber blends",
      "Reinforced stress points, bar-tacked pockets, and double-stitched collars",
      "Oeko-Tex compliant dyes that resist fading across 100+ academic washes",
      "Breathable, hypoallergenic weave tested for active student comfort",
    ],
    metric: "3x",
    badge: "Durability Benchmark",
  },
  {
    step: "02",
    title: "Extend & Witness",
    subtitle: "The Student Journey & Daily Life",
    mantra: "Witness to Childhood & Character",
    description: "A uniform is never merely cloth. It witnesses morning assemblies, sports day victories, science labs, friendships, and childhood dreams. It carries the quiet devotion and financial effort of parents.",
    imageSrc: "/images/phase2_extend_1789544254235.jpg",
    imageAlt: "Student wearing a crisp navy uniform standing proudly in a heritage school courtyard in Mysuru.",
    details: [
      "Institutional pride & equality across the classroom",
      "Zero wardrobe anxiety, fostering academic focus and camaraderie",
      "In-school care guides provided to maximize garment lifespan",
      "A living emblem of the school's heritage and values",
    ],
    metric: "720+",
    badge: "Days of Shared Memories",
  },
  {
    step: "03",
    title: "Reuse with Dignity",
    subtitle: "The Certified Second Chapter (~50% Pricing)",
    mantra: "Respect Always Precedes Recycling",
    description: "When a student outgrows their uniform, its journey must not end in a landfill. Through white-glove institutional collection drives, garments undergo multi-point inspection, hospital-grade sanitization, and mending. Reusable uniforms are made available at approximately half price.",
    imageSrc: "/images/inspection-lab.jpg",
    imageAlt: "Garment regeneration, sanitization and white-glove inspection in a pristine lab.",
    details: [
      "Turnkey, seasonal collection kiosks directly on school campuses",
      "Clinical-grade sanitization and precision seam restoration",
      "Available at ~50% cost, ensuring economically weaker families access premium uniforms with complete dignity",
      "A portion of recaptured value funds institutional student welfare programs (scholarships, books, nutrition)",
    ],
    metric: "50%",
    badge: "Dignified Affordability",
  },
  {
    step: "04",
    title: "Responsible Recycling",
    subtitle: "Closed-Loop Textile Regeneration",
    mantra: "Zero Landfill, Full Account",
    description: "Recycling is never our first resort—we extend and reuse first. But when a uniform is physically worn beyond safe, dignified reuse, it enters certified responsible recycling pathways, transforming into acoustic panels or regenerated yarn.",
    imageSrc: "/images/phase4_recycle_1789544284338.jpg",
    imageAlt: "Abstract visualization of recycled textile fibers regenerating into architectural acoustic panels.",
    details: [
      "Strict grading criteria ensuring only unwearable garments enter recycling",
      "Partnerships with certified textile regeneration facilities in Karnataka",
      "Zero waste to municipal dumping grounds or incineration",
      "Traceable end-of-life audit reports provided to partner schools",
    ],
    metric: "0%",
    badge: "Landfill Waste",
  },
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "water",
    label: "Water Conserved",
    value: 2850,
    suffix: "K+",
    unit: "Liters",
    description: "Conserved through garment life extension and circular reuse vs virgin manufacturing.",
    icon: "Droplets",
  },
  {
    id: "waste",
    label: "Textile Waste Diverted",
    value: 14500,
    suffix: "+",
    unit: "Kilograms",
    description: "Uniforms kept out of Indian municipal landfills through extended wear and closed-loop recycling.",
    icon: "Recycle",
  },
  {
    id: "families",
    label: "Families Supported",
    value: 1200,
    suffix: "+",
    unit: "Households",
    description: "Provided with certified high-quality uniforms at 50% dignified pricing.",
    icon: "HeartHandshake",
  },
  {
    id: "institutions",
    label: "Partner Institutions",
    value: 28,
    suffix: "+",
    unit: "Academies",
    description: "Schools and educational trusts participating in the Mysuru circular uniform movement.",
    icon: "Building2",
  },
];

export const INSTITUTIONAL_PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Turnkey Institutional Management",
    subtitle: "Zero Inventory or Distribution Headache",
    description: "School administrators should focus on education, not garment logistics. Aveehra manages end-to-end sizing, seasonal fulfillment, and campus collection drives with zero administrative burden on school staff.",
    highlights: ["Campus fitting sessions", "Online direct-to-parent portal option", "Guaranteed buffer inventory"],
  },
  {
    number: "02",
    title: "ESG & Green School Accreditation",
    subtitle: "Verifiable Sustainability for Institutional Audits",
    description: "Provide CBSE, ICSE, and international inspection boards with concrete, audited data on your school's circular waste diversion, carbon abatement, and community impact.",
    highlights: ["Annual sustainability impact certificate", "Measurable CSR/ESG credentials", "Eco-curriculum integration materials"],
  },
  {
    number: "03",
    title: "Student Welfare Fund Integration",
    subtitle: "Recapturing Value for Student Welfare",
    description: "A defined percentage of revenue generated through the 50% second-chapter uniform distribution is directed into your institution's student scholarship and welfare fund.",
    highlights: ["Direct financial support for needy students", "Transparent quarterly reconciliation", "Dignity-first institutional support"],
  },
  {
    number: "04",
    title: "Uncompromising Fabric Science",
    subtitle: "Engineered for 100+ Institutional Washes",
    description: "Premium combed cotton blends with anti-pilling and color-lock technology engineered to endure vigorous sports, playground mud, and tropical heat without losing shape or dignity.",
    highlights: ["Skin-safe non-toxic certified dyes", "Breathable weave for South Indian climates", "Reinforced stress joints"],
  },
];

export const MYSURU_ORIGIN_STORY = {
  city: "Mysuru",
  state: "Karnataka",
  epithet: "The Heritage Cradle of Learning",
  narrative: `Aveehra was born in Mysuru, Karnataka—a city steeped in royal patronage of education, classical arts, and timeless architecture. For centuries, Mysuru has symbolized a reverence for learning, scholarship, and civil dignity.

Our founder's birthplace is Mysuru, and it is here that the movement begins. Before expanding across India, Aveehra is building deep institutional roots with Mysuru’s premier academies, demonstrating that an ethical, circular economy can begin from our heritage heartland and set a new national standard for all of India.`,
  quote: "Every uniform carries the hopes of a family and the identity of an institution. In Mysuru, we learned that true progress honors its heritage.",
  highlights: [
    { label: "Cultural Cradle", detail: "Centuries of royal patronage of education and ethical trade" },
    { label: "Pilot Hub", detail: "Initial institutional cohort launched across Mysuru academies" },
    { label: "Expansion Route", detail: "Bengaluru, Mangaluru, Hubballi, and Pan-India roadmap" },
  ],
};

export const FAQ_ITEMS = [
  {
    question: "How are reused uniforms certified for hygiene and quality?",
    answer: "Every garment collected during institutional year-end drives passes through a rigorous 6-point inspection protocol. Garments are graded for structural integrity, buttons and seams are professionally reinforced, and each uniform undergoes clinical-grade, high-temperature steam sanitization before receiving an Aveehra Certified Circular seal."
  },
  {
    question: "Why are renewed uniforms offered at approximately 50% price?",
    answer: "Our mission is to combine sustainability with social impact and dignity. By offering certified renewed uniforms at ~50% of original cost, economically weaker families can access the exact same premium school attire without financial distress or social stigma."
  },
  {
    question: "How does the Student Welfare Fund work?",
    answer: "A portion of the value recaptured through our circular redistribution system is channeled back into the partner school's official Student Welfare Fund. This capital is earmarked for scholarships, educational textbooks, and nutrition for students who need it most."
  },
  {
    question: "What happens to uniforms that are too worn for reuse?",
    answer: "Recycling is our final safeguard. If a uniform is structurally worn out or stained beyond dignity, it is never sent to a municipal landfill. It enters certified mechanical textile recycling in Karnataka to become acoustic insulation, industrial textiles, or regenerated yarn."
  },
  {
    question: "How can our school or institution partner with Aveehra?",
    answer: "Educational institutions can request a complimentary Institutional Sample & Fabric Kit or schedule a direct consultation through our website. Our team coordinates customized design, sizing sessions, and turnkey seasonal logistics."
  }
];
