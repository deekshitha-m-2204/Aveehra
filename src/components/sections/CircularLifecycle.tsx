"use client";

import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { LIFECYCLE_PHASES } from "@/content/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CircularLifecycle() {
  const container = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Header Reveal
    gsap.fromTo(
      headerRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      }
    );

    // 2. Responsive Animation using GSAP matchMedia
    const mm = gsap.matchMedia();

    // Desktop Viewport: Horizontal Scroll Pinning & Image Parallax
    mm.add("(min-width: 961px)", () => {
      if (!trackRef.current) return;
      const sections = gsap.utils.toArray(trackRef.current.children);
      const images = gsap.utils.toArray(".parallax-image");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "center center",
          end: "+=3000",
        },
      });

      // Slide entire track horizontally
      tl.to(
        sections,
        {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
        },
        0
      );

      // Counter-panning parallax effect
      tl.fromTo(
        images,
        { xPercent: -15 },
        { xPercent: 15, ease: "none" },
        0
      );
    });

    // Mobile & Tablet Viewport: Natural Vertical Staggered Reveal
    mm.add("(max-width: 960px)", () => {
      const cards = gsap.utils.toArray(".lifecycle-card-inner");
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section
      ref={container}
      id="ecosystem"
      style={{
        position: "relative",
        background: "var(--color-navy-deep)",
        overflow: "hidden",
        paddingTop: "clamp(3.5rem, 8vh, 6rem)",
        paddingBottom: "clamp(3.5rem, 8vh, 6rem)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background radial glow */}
      <div
        className="glow-backdrop"
        style={{
          top: "10%",
          right: "-10%",
          background: "radial-gradient(circle, var(--color-gold-glow) 0%, transparent 70%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "clamp(2rem, 5vw, 3rem)", opacity: 0 }}>
          <span className="brand-badge">THE CIRCULAR ECOSYSTEM</span>
          <h2
            style={{
              fontSize: "var(--text-4xl)",
              color: "#FFFFFF",
              marginTop: "1rem",
              marginBottom: "1rem",
              textWrap: "balance",
            }}
          >
            Respect → Extend → Reuse → Recycle
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
            Follow the journey. If a uniform can continue serving another student with pride and
            dignity, we extend its life.
          </p>
        </div>
      </div>

      {/* Lifecycle Track: Horizontal slide on desktop, stacked on mobile */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          ref={trackRef}
          className="lifecycle-track"
        >
          {LIFECYCLE_PHASES.map((phase) => (
            <div
              key={phase.step}
              className="lifecycle-phase-wrapper"
            >
              {/* Phase Card */}
              <div
                className="glass-card lifecycle-card-inner"
                style={{
                  width: "100%",
                  maxWidth: "1100px",
                  padding: "clamp(1.5rem, 3.5vw, 3.5rem)",
                  background: "linear-gradient(135deg, rgba(21, 34, 54, 0.9) 0%, rgba(10, 18, 29, 0.95) 100%)",
                  border: "1px solid var(--color-gold-border)",
                }}
              >
                <div className="editorial-grid">
                  {/* Details Column */}
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--color-gold-bright)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <Sparkles size={14} />
                      <span>PHASE {phase.step}</span>
                      <span>•</span>
                      <span>{phase.mantra}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: "var(--text-3xl)",
                        color: "#FFFFFF",
                        marginBottom: "0.5rem",
                        textWrap: "balance",
                      }}
                    >
                      {phase.title}
                    </h3>
                    <div
                      style={{
                        fontSize: "var(--text-lg)",
                        color: "var(--color-gold-bright)",
                        fontFamily: "var(--font-serif)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {phase.subtitle}
                    </div>

                    <p style={{ fontSize: "var(--text-base)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                      {phase.description}
                    </p>

                    {/* Bullet Details */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.75rem" }}>
                      {phase.details.map((detail, dIdx) => (
                        <div key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                          <CheckCircle2
                            size={18}
                            style={{ color: "var(--color-gold-bright)", flexShrink: 0, marginTop: "2px" }}
                          />
                          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-light-secondary)", lineHeight: 1.5 }}>
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Phase Stat */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "clamp(0.75rem, 2vw, 1.25rem)",
                        padding: "clamp(0.75rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.5rem)",
                        background: "rgba(197, 155, 39, 0.08)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-gold-border)",
                        maxWidth: "100%",
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "var(--color-gold-bright)", fontWeight: 700 }}>
                        {phase.metric}
                      </div>
                      <div style={{ fontSize: "var(--text-xs)", color: "var(--text-light-primary)", fontWeight: 500, lineHeight: 1.4 }}>
                        {phase.badge} Standard for Partner Institutions
                      </div>
                    </div>
                  </div>

                  {/* Visual Column with Parallax Wrapper */}
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "relative",
                        height: "clamp(240px, 40vw, 480px)",
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden",
                        border: "1px solid var(--glass-border-dark)",
                      }}
                    >
                      <div
                        className="parallax-image"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "-15%",
                          width: "130%",
                          height: "100%",
                        }}
                      >
                        <Image
                          src={phase.imageSrc}
                          alt={phase.imageAlt}
                          fill
                          sizes="(max-width: 960px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(6,11,18,0.7) 0%, transparent 50%)",
                        }}
                      />
                      
                      {/* Special conditional UI for Phase 3 (Sanitization) */}
                      {phase.step === "03" && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: "clamp(0.85rem, 2vw, 1.5rem)",
                            left: "clamp(0.85rem, 2vw, 1.5rem)",
                            right: "clamp(0.85rem, 2vw, 1.5rem)",
                            background: "rgba(10, 18, 29, 0.88)",
                            backdropFilter: "blur(12px)",
                            padding: "clamp(0.85rem, 2vw, 1.25rem)",
                            borderRadius: "var(--radius-md)",
                            border: "1px solid var(--glass-border-dark)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                            <ShieldCheck size={18} style={{ color: "var(--color-gold-bright)", flexShrink: 0 }} />
                            <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.08em" }}>
                              AVEEHRA CERTIFIED RESTORATION PROTOCOL
                            </span>
                          </div>
                          <p style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", margin: 0, lineHeight: 1.4 }}>
                            Hospital-grade steam sanitization • Structural seam reinforcement • Oeko-Tex safety seal
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
