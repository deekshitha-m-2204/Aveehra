"use client";

import { useRef } from "react";
import { Shield, Sparkles, Droplets, Sun, Layers } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function QualityCraft() {
  const container = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const calloutRef = useRef<HTMLDivElement>(null);

  const craftFeatures = [
    {
      icon: Layers,
      title: "High-Density Tensile Weave",
      description: "Custom spun yarn engineered with optimal twist density to prevent fabric fraying, thread pull, and surface pilling across years of active playground play.",
    },
    {
      icon: Droplets,
      title: "Color-Lock & Detergent Shield",
      description: "Deep molecular dye penetration resistant to harsh Indian mineral water and alkaline laundry detergents, maintaining vibrant institutional shades.",
    },
    {
      icon: Sun,
      title: "Climate-Adaptive Breathability",
      description: "Specially formulated cotton-rich micro-pores allow rapid moisture evaporation during humid monsoon and peak summer terms, ensuring student focus.",
    },
    {
      icon: Shield,
      title: "Hypoallergenic & Oeko-Tex Safe",
      description: "Strictly zero harsh formaldehyde finishes, heavy metals, or toxic chemical binders. Safe for everyday contact with delicate young skin.",
    },
  ];

  useGSAP(() => {
    // Header Reveal
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
          start: "top 85%",
        },
      }
    );

    // Grid Stagger
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Callout Fade Up
    gsap.fromTo(
      calloutRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: calloutRef.current,
          start: "top 90%",
        },
      }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      id="craft"
      className="section-spacing"
      style={{
        position: "relative",
        background: "var(--color-navy-surface)",
        borderTop: "1px solid var(--glass-border-dark)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "4rem", opacity: 0 }}>
          <span className="brand-badge">MATERIAL SCIENCE & INTEGRITY</span>
          <h2
            style={{
              fontSize: "var(--text-4xl)",
              color: "#FFFFFF",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Durability is the Prerequisite to Circularity
          </h2>
          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "var(--text-lg)",
              color: "var(--text-light-secondary)",
            }}
          >
            A garment cannot have a second chapter if it deteriorates in its first. Aveehra uniforms are engineered
            from the fiber up for multi-year endurance.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {craftFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "2rem",
                background: "rgba(16, 27, 43, 0.7)",
                opacity: 0,
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-gold-subtle)",
                  border: "1px solid var(--color-gold-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <feature.icon size={24} style={{ color: "var(--color-gold-bright)" }} />
              </div>
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-secondary)", margin: 0 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Callout Box */}
        <div
          ref={calloutRef}
          style={{
            borderRadius: "var(--radius-lg)",
            background: "linear-gradient(135deg, rgba(27, 56, 43, 0.35) 0%, rgba(10, 18, 29, 0.8) 100%)",
            border: "1px solid rgba(42, 82, 64, 0.6)",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            opacity: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Sparkles size={20} style={{ color: "var(--color-gold-bright)" }} />
            <h4 style={{ fontSize: "var(--text-xl)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              The Aveehra Quality Benchmark: 100+ Institutional Washes
            </h4>
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-secondary)", margin: 0, lineHeight: 1.6 }}>
            Conventional uniform suppliers optimize for cheap initial acquisition cost, resulting in faded, sagging
            attire within two terms. Aveehra uniforms preserve their structural integrity, crisp seams, and dignity
            long enough to be handed down through our certified circular network, cutting lifecycle clothing expenses
            for families by half.
          </p>
        </div>
      </div>
    </section>
  );
}
