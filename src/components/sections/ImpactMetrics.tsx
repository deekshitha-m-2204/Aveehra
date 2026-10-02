"use client";

import { useRef } from "react";
import { Droplets, Recycle, HeartHandshake, Building2, Trees, GraduationCap } from "lucide-react";
import { IMPACT_METRICS } from "@/content/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ImpactMetrics() {
  const container = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const cardsRef = useRef<HTMLDivElement>(null);
  const splitCardsRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, React.ElementType> = {
    Droplets,
    Recycle,
    HeartHandshake,
    Building2,
  };

  useGSAP(() => {
    if (!cardsRef.current || !splitCardsRef.current) return;

    // 1. Metric Cards Fan-Out & Counter Animation
    const cards = gsap.utils.toArray(cardsRef.current.children);
    
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
        onStart: () => {
          // Animate the numbers when the cards start appearing
          countersRef.current.forEach((counterEl, index) => {
            if (!counterEl) return;
            const targetValue = IMPACT_METRICS[index].value;
            const proxy = { val: 0 };
            
            gsap.to(proxy, {
              val: targetValue,
              duration: 2,
              ease: "power2.out",
              delay: index * 0.15, // Sync with stagger
              onUpdate: () => {
                counterEl.innerText = Math.floor(proxy.val).toLocaleString();
              }
            });
          });
        }
      }
    );

    // 2. The Two Pillars slide in
    const leftPillar = splitCardsRef.current.children[0];
    const rightPillar = splitCardsRef.current.children[1];
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitCardsRef.current,
        start: "top 80%",
      }
    });

    tl.fromTo(leftPillar, { x: isMobile ? 0 : -40, y: isMobile ? 30 : 0, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0)
      .fromTo(rightPillar, { x: isMobile ? 0 : 40, y: isMobile ? 30 : 0, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0);

  }, { scope: container });

  return (
    <section
      ref={container}
      id="impact"
      className="section-spacing"
      style={{
        position: "relative",
        background: "var(--color-navy-surface)",
        borderTop: "1px solid var(--glass-border-dark)",
        overflow: "hidden"
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 5vw, 4rem)" }}>
          <span className="brand-badge">MEASURABLE IMPACT</span>
          <h2
            style={{
              fontSize: "var(--text-4xl)",
              color: "#FFFFFF",
              marginTop: "1rem",
              marginBottom: "1rem",
              textWrap: "balance",
            }}
          >
            The Dual Power of Environmental & Social Metrics
          </h2>
          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "var(--text-lg)",
              color: "var(--text-light-secondary)",
              textWrap: "pretty",
            }}
          >
            True circularity produces compound positive change—slashing textile waste while funding student
            scholarships and providing families with dignified access to quality uniforms.
          </p>
        </div>

        {/* 4 Counter Metrics */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "clamp(1rem, 2vw, 1.5rem)",
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          {IMPACT_METRICS.map((metric, idx) => {
            const Icon = iconMap[metric.icon] || Droplets;
            return (
              <div
                key={metric.id}
                className="glass-card"
                style={{
                  textAlign: "center",
                  padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.5rem)",
                  background: "rgba(10, 18, 29, 0.7)",
                  border: "1px solid var(--color-gold-border)",
                  opacity: 0 // hidden initially for GSAP
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(197, 155, 39, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem auto",
                  }}
                >
                  <Icon size={22} style={{ color: "var(--color-gold-bright)" }} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-4xl)",
                    fontWeight: 700,
                    color: "var(--color-gold-bright)",
                    marginBottom: "0.25rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline"
                  }}
                >
                  <span ref={(el) => { countersRef.current[idx] = el; }}>0</span>
                  <span style={{ fontSize: "var(--text-2xl)", color: "#FFFFFF", marginLeft: "4px" }}>{metric.suffix}</span>
                </div>
                <div
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "0.5rem",
                  }}
                >
                  {metric.label}
                </div>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", margin: 0, lineHeight: 1.5 }}>
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Two Pillars: Environmental + Social Detailed Split */}
        <div className="editorial-grid" ref={splitCardsRef}>
          {/* Environmental Pillar */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(1.25rem, 3vw, 2.5rem)",
              background: "rgba(16, 27, 43, 0.8)",
              border: "1px solid var(--glass-border-dark)",
              opacity: 0
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Trees size={26} style={{ color: "var(--color-gold-bright)" }} />
              <h3 style={{ fontSize: "var(--text-2xl)", color: "#FFFFFF" }}>Environmental Stewardship</h3>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-secondary)", marginBottom: "1.5rem" }}>
              Every kilogram of virgin uniform fabric requires up to 10,000 liters of water and emits substantial carbon
              during agricultural and chemical processing.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", padding: 0 }}>
              <li style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>•</span>
                <span><strong>Garment Life Extension:</strong> Extending a uniform’s active wear by just 9 months reduces its combined carbon and water footprint by ~30%.</span>
              </li>
              <li style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>•</span>
                <span><strong>Zero Landfill Mandate:</strong> Garments beyond wear life are mechanically sorted and converted into acoustic panels and thermal building insulation.</span>
              </li>
            </ul>
          </div>

          {/* Social Impact Pillar */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(1.25rem, 3vw, 2.5rem)",
              background: "rgba(16, 27, 43, 0.8)",
              border: "1px solid var(--glass-border-dark)",
              opacity: 0
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <GraduationCap size={26} style={{ color: "var(--color-gold-bright)" }} />
              <h3 style={{ fontSize: "var(--text-2xl)", color: "#FFFFFF" }}>Social Dignity & Welfare</h3>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-secondary)", marginBottom: "1.5rem" }}>
              Education is the greatest social lever in India. Aveehra ensures that no parent bears crushing uniform
              costs and no student experiences social stigma.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", padding: 0 }}>
              <li style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>•</span>
                <span><strong>50% Certified Affordability:</strong> Reused garments are sanitised, pressed, certified, and offered at half price—preserving pride and equality.</span>
              </li>
              <li style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>•</span>
                <span><strong>Student Welfare Fund:</strong> Surplus circular proceeds fund school fee concessions, notebooks, and mid-day nourishment through partner academies.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
