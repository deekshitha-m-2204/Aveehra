import { BRAND_CONFIG, FAQ_ITEMS } from "@/content/data";

export function generateStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_CONFIG.name,
    description: "Pioneering India's circular uniform ecosystem built around Respect, Sustainability, and Social Impact.",
    url: "https://deekshitha-m-2204.github.io/Aveehra/",
    logo: "https://deekshitha-m-2204.github.io/Aveehra/images/aveehra-brand-logo.png",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mysuru",
        addressRegion: "Karnataka",
        addressCountry: "India",
      },
    },
    slogan: BRAND_CONFIG.tagline,
    knowsAbout: [
      "Sustainable school uniforms",
      "Circular textile ecosystem",
      "Textile waste reduction in educational institutions",
      "School uniform recycling and dignified reuse",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Circular School Uniform Ecosystem & Takeback Program",
    provider: {
      "@type": "Organization",
      name: BRAND_CONFIG.name,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Institutional Uniform Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Primary High-Durability Institutional Uniforms",
            description: "Engineered for 100+ academic washes with non-toxic Oeko-Tex certified dyes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Certified Renewed Uniforms at 50% Dignity Pricing",
            description: "Inspected, sanitized, and certified uniforms for economically weaker families.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Closed-Loop Textile Recycling & Landfill Diversion",
            description: "Responsible recycling for garments at end of wear life.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return { organizationSchema, serviceSchema, faqSchema };
}
