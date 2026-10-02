"use client";

import { useRef } from "react";
import Image from "next/image";
import { Compass, MapPin, Sparkles, Building, Landmark } from "lucide-react";
import { MYSURU_ORIGIN_STORY } from "@/content/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MysuruOrigin() {
  const container = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageOverlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Text Stagger Reveal
    if (leftColumnRef.current) {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      gsap.fromTo(
        leftColumnRef.current.children,
        { opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 30 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // 2. Cinematic Curtain Reveal for Image
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 75%",
      },
    });

    // Animate curtain sliding away to the right
    tl.to(curtainRef.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 1.2,
      ease: "power3.inOut",
    })
    // Simultaneously zoom out the image slowly
    .fromTo(
      imageRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 1.5, ease: "power2.out" },
      "-=1.2"
    )
    // Fade in the text overlay box
    .fromTo(
      imageOverlayRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

  }, { scope: container });

  return (
    <section
      ref={container}
      id="origin"
      className="section-spacing"
      style={{
        position: "relative",
        background: "var(--color-navy-deep)",
        borderTop: "1px solid var(--glass-border-dark)",
      }}
    >
      <div className="container">
        {/* Section Tag */}
        <div style={{ textAlign: "center", marginBottom: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
          <span className="brand-badge">THE BIRTHPLACE OF A MOVEMENT</span>
          <h2
            style={{
              fontSize: "var(--text-4xl)",
              color: "#FFFFFF",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Born in Mysuru, Karnataka
          </h2>
          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "var(--text-lg)",
              color: "var(--text-light-secondary)",
            }}
          >
            Rooted in a city celebrated for royal patronage of education, classical arts, and timeless values, Aveehra
            begins its journey where learning has always been sacred.
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="editorial-grid">
          {/* Left Column: Narrative */}
          <div ref={leftColumnRef}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", opacity: 0 }}>
              <MapPin size={20} style={{ color: "var(--color-gold-bright)" }} />
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "var(--color-gold-bright)",
                  textTransform: "uppercase",
                }}
              >
                THE HERITAGE CRADLE OF LEARNING
              </span>
            </div>

            <h3
              style={{
                fontSize: "var(--text-3xl)",
                color: "#FFFFFF",
                marginBottom: "1.25rem",
                lineHeight: 1.25,
                opacity: 0
              }}
            >
              Why the Movement Begins at the Foothills of Chamundi Hill
            </h3>

            <p style={{ fontSize: "var(--text-base)", lineHeight: 1.7, marginBottom: "1.25rem", opacity: 0 }}>
              Mysuru is not an arbitrary choice—it is the birthplace of our founder and the spiritual heartland of
              Karnataka’s historic commitment to public education. For centuries under the Wadiyars, education was
              viewed not as a commercial trade, but as a sacred civic trust.
            </p>

            <p style={{ fontSize: "var(--text-base)", lineHeight: 1.7, marginBottom: "2rem", opacity: 0 }}>
              By launching our circular uniform model with Mysuru’s storied academies, we prove that an ethical,
              respect-driven ecosystem can flourish at regional scale before setting the new national benchmark across
              Bengaluru, Karnataka, and the entire Indian subcontinent.
            </p>

            {/* 3 Pillars of Origin */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem", opacity: 0 }}>
              {MYSURU_ORIGIN_STORY.highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1rem 1.25rem",
                    background: "rgba(16, 27, 43, 0.6)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--glass-border-dark)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <Landmark
                    size={20}
                    style={{ color: "var(--color-gold-bright)", flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <div style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "#FFFFFF" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)" }}>
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Panoramic Mysuru Photograph */}
          <div style={{ position: "relative" }}>
            <div
              ref={imageContainerRef}
              style={{
                position: "relative",
                height: "clamp(260px, 48vw, 560px)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--glass-border-dark)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              {/* The image itself */}
              <Image
                ref={imageRef}
                src="/images/mysuru-origin.jpg"
                alt="Heritage architectural pillars and morning sunlight in historic Mysuru, Karnataka"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              
              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(6,11,18,0.85) 0%, transparent 50%)",
                }}
              />
              
              {/* The Curtain (Masks the image initially) */}
              <div
                ref={curtainRef}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "var(--color-navy-deep)",
                  zIndex: 10,
                }}
              />

              {/* Text Box Overlay */}
              <div
                ref={imageOverlayRef}
                style={{
                  position: "absolute",
                  bottom: "clamp(1rem, 2.5vw, 2rem)",
                  left: "clamp(0.85rem, 2.5vw, 2rem)",
                  right: "clamp(0.85rem, 2.5vw, 2rem)",
                  background: "rgba(10, 18, 29, 0.88)",
                  backdropFilter: "blur(14px)",
                  padding: "clamp(1rem, 2.5vw, 1.5rem)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-gold-border)",
                  zIndex: 20,
                  opacity: 0, // Hidden initially
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
                    color: "var(--color-gold-bright)",
                    fontStyle: "italic",
                    lineHeight: 1.45,
                    marginBottom: "0.5rem",
                    textWrap: "pretty",
                  }}
                >
                  &ldquo;Every uniform carries the hopes of a family and the identity of an institution. In Mysuru, we
                  learned that true progress honors its heritage.&rdquo;
                </p>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", letterSpacing: "0.1em" }}>
                  FOUNDER’S VISION • MYSURU, KARNATAKA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
