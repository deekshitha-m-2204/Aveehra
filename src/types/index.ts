export interface SchoolPartner {
  id: string;
  name: string;
  location: string;
  type: string;
  studentCount: number;
  highlight: string;
  testimonial?: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  unit: string;
  description: string;
  icon: string;
}

export interface LifecyclePhase {
  step: string;
  title: string;
  subtitle: string;
  mantra: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  details: string[];
  metric: string;
  badge: string;
}

export interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface InstitutionalEnquiry {
  schoolName: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  city: string;
  studentStrength: string;
  requestType: "sample_kit" | "consultation" | "both";
  notes?: string;
}
