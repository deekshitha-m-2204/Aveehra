"use client";

import { useRef } from "react";
import { INSTITUTIONAL_PILLARS } from "@/content/data";
import { Building2, Award, CheckCircle2, ArrowRight, PackageCheck, FileSpreadsheet } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SchoolPartnership() {
  const container = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Header fade up
    gsap.fromTo(
      headerRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      }
    );

    // 2. Stacking Cards
    if (gridRef.current) {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const cards = gsap.utils.toArray(gridRef.current.children) as HTMLElement[];
      
      cards.forEach((card, index) => {
        // On desktop alternate directions, on mobile slide up smoothly without horizontal overflow
        const xOffset = isMobile ? 0 : (index % 2 === 0 ? -80 : 80);
        const rotateYOffset = isMobile ? 0 : (index % 2 === 0 ? -10 : 10);

        gsap.fromTo(
          card,
          { 
            x: xOffset, 
            y: 40, 
            opacity: 0, 
            rotationY: rotateYOffset,
            scale: 0.95 
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }

    // 3. CTA Card Float up
    gsap.fromTo(
      ctaRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
        },
      }
    );

  }, { scope: container });

  return (
    <section
      ref={container}
      id="for-schools"
      className="section-spacing"
      style={{
        position: "relative",
        background: "var(--color-navy-deep)",
        borderTop: "1px solid var(--glass-border-dark)",
        perspective: "1000px" // Enable 3D perspective for child animations
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "4rem", opacity: 0 }}>
          <span className="brand-badge">FOR EDUCATIONAL INSTITUTIONS</span>
          <h2
            style={{
              fontSize: "var(--text-4xl)",
              color: "#FFFFFF",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            A Long-Term Institutional Partner, Not Just a Vendor
          </h2>
          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "var(--text-lg)",
              color: "var(--text-light-secondary)",
            }}
          >
            Aveehra elevates your academy&apos;s prestige, eliminates administrative uniform logistics, and creates
            tangible student welfare funds through certified circularity.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1rem, 2.5vw, 1.75rem)",
            marginBottom: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          {INSTITUTIONAL_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "clamp(1.25rem, 3vw, 2rem)",
                background: "rgba(16, 27, 43, 0.75)",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "var(--color-gold-bright)",
                    }}
                  >
                    {pillar.number}
                  </span>
                  <div
                    style={{
                      padding: "0.25rem 0.65rem",
                      borderRadius: "var(--radius-pill)",
                      background: "rgba(255, 255, 255, 0.05)",
                      fontSize: "var(--text-xs)",
                      color: "var(--text-light-muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    ACADEMIC PARTNER BENEFIT
                  </div>
                </div>

                <h3 style={{ fontSize: "var(--text-xl)", color: "#FFFFFF", marginBottom: "0.5rem", textWrap: "balance" }}>
                  {pillar.title}
                </h3>
                <div
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-gold-bright)",
                    fontFamily: "var(--font-serif)",
                    marginBottom: "1rem",
                  }}
                >
                  {pillar.subtitle}
                </div>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-secondary)", marginBottom: "1.5rem" }}>
                  {pillar.description}
                </p>
              </div>

              {/* Highlights */}
              <div
                style={{
                  borderTop: "1px solid var(--glass-border-dark)",
                  paddingTop: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {pillar.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={15} style={{ color: "var(--color-gold-bright)", flexShrink: 0 }} />
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)" }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Onboarding CTA Card */}
        <div
          ref={ctaRef}
          className="glass-card"
          style={{
            padding: "clamp(1.5rem, 3.5vw, 3rem)",
            background: "linear-gradient(135deg, rgba(28, 44, 68, 0.85) 0%, rgba(10, 18, 29, 0.95) 100%)",
            border: "1px solid var(--color-gold-border)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            opacity: 0,
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "var(--color-gold-bright)",
                textTransform: "uppercase",
              }}
            >
              COMPLIMENTARY FOR SCHOOL TRUSTEES & PRINCIPALS
            </span>
            <h3
              style={{
                fontSize: "var(--text-2xl)",
                color: "#FFFFFF",
                marginTop: "0.5rem",
                marginBottom: "0.75rem",
                textWrap: "balance",
              }}
            >
              Experience the Aveehra Fabric & Institutional Partnership Blueprint
            </h3>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-secondary)", margin: 0 }}>
              Receive our official Institutional Sample Kit containing tailored blazer swatches, high-density shirt
              fabrics, tensile laboratory test reports, and our turnkey circular collection manual.
            </p>
          </div>

          <div className="banner-cta-btn-wrap">
            <a href="#partner" className="btn btn-primary" style={{ padding: "0.85rem 1.75rem" }}>
              <span>Request Institutional Kit</span>
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
