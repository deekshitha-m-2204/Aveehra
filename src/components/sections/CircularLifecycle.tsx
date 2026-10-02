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

    // 2. Horizontal Scroll Pinning & Image Parallax
    if (trackRef.current) {
      const sections = gsap.utils.toArray(trackRef.current.children);
      const images = gsap.utils.toArray(".parallax-image");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "center center",
          end: "+=3000", // User scrolls 3000px to traverse the phases
        },
      });

      // Slide the entire track to the left
      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
      }, 0);

      // Create a counter-panning parallax effect for the images inside the cards
      tl.fromTo(
        images,
        {
          xPercent: -15,
        },
        {
          xPercent: 15,
          ease: "none",
        },
        0
      );
    }
  }, { scope: container });

  return (
    <section
      ref={container}
      id="ecosystem"
      style={{
        position: "relative",
        background: "var(--color-navy-deep)",
        overflow: "hidden",
        paddingTop: "6rem",
        paddingBottom: "6rem",
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
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "3rem", opacity: 0 }}>
          <span className="brand-badge">THE CIRCULAR ECOSYSTEM</span>
          <h2
            style={{
              fontSize: "var(--text-4xl)",
              color: "#FFFFFF",
              marginTop: "1rem",
              marginBottom: "1rem",
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
            }}
          >
            Scroll to follow the journey. If a uniform can continue serving another student with pride and
            dignity, we extend its life.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Track Wrapper */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            width: `${LIFECYCLE_PHASES.length * 100}vw`,
          }}
        >
          {LIFECYCLE_PHASES.map((phase) => (
            <div
              key={phase.step}
              style={{
                width: "100vw",
                padding: "0 5vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Phase Card */}
              <div
                className="glass-card"
                style={{
                  width: "100%",
                  maxWidth: "1100px",
                  padding: "clamp(2rem, 4vw, 3.5rem)",
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
                      }}
                    >
                      {phase.title}
                    </h3>
                    <div
                      style={{
                        fontSize: "var(--text-lg)",
                        color: "var(--color-gold-bright)",
                        fontFamily: "var(--font-serif)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {phase.subtitle}
                    </div>

                    <p style={{ fontSize: "var(--text-base)", lineHeight: 1.7, marginBottom: "2rem" }}>
                      {phase.description}
                    </p>

                    {/* Bullet Details */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                      {phase.details.map((detail, dIdx) => (
                        <div key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                          <CheckCircle2
                            size={18}
                            style={{ color: "var(--color-gold-bright)", flexShrink: 0, marginTop: "3px" }}
                          />
                          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-light-secondary)" }}>
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
                        gap: "1.25rem",
                        padding: "1rem 1.5rem",
                        background: "rgba(197, 155, 39, 0.08)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-gold-border)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--color-gold-bright)", fontWeight: 700 }}>
                        {phase.metric}
                      </div>
                      <div style={{ fontSize: "var(--text-xs)", color: "var(--text-light-primary)", fontWeight: 500 }}>
                        {phase.badge} Standard for Partner Institutions
                      </div>
                    </div>
                  </div>

                  {/* Visual Column with Parallax Wrapper */}
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "relative",
                        height: "480px",
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden", // Crucial for parallax masking
                        border: "1px solid var(--glass-border-dark)",
                      }}
                    >
                      {/* The image is rendered larger than its container (scale: 1.3) so it has room to translate for the parallax effect */}
                      <div
                        className="parallax-image"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "-15%", // Provide negative offset room
                          width: "130%", // Wider than container
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
                      
                      {/* Special conditional UI for Phase 3 (Sanitization) to keep the original style */}
                      {phase.step === "03" && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: "1.5rem",
                            left: "1.5rem",
                            right: "1.5rem",
                            background: "rgba(10, 18, 29, 0.85)",
                            backdropFilter: "blur(12px)",
                            padding: "1.25rem",
                            borderRadius: "var(--radius-md)",
                            border: "1px solid var(--glass-border-dark)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                            <ShieldCheck size={18} style={{ color: "var(--color-gold-bright)" }} />
                            <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.08em" }}>
                              AVEEHRA CERTIFIED RESTORATION PROTOCOL
                            </span>
                          </div>
                          <p style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", margin: 0 }}>
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
