"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect on the background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Initial Reveal Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      badgeRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    )
      .fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.7"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.9"
      )
      .fromTo(
        buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        "-=0.5"
      );
  }, { scope: container });

  return (
    <section
      ref={container}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "clamp(4.75rem, 8vh, 7.25rem)",
        paddingBottom: "clamp(2.75rem, 5vh, 4.5rem)",
        overflow: "hidden",
      }}
    >
      {/* Background Cinematic Image with Gradients */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: "-15%",
          left: 0,
          right: 0,
          bottom: "-15%",
          zIndex: 0,
        }}
      >
        <Image
          src="/images/hero-craft.jpg"
          alt="Artisanal uniform tailoring and gold thread inspection"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 35%",
            filter: "brightness(0.32) saturate(1.15)",
          }}
        />
        {/* Layered cinematic vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(6,11,18,0.7) 0%, rgba(10,18,29,0.5) 40%, rgba(6,11,18,0.95) 100%)",
          }}
        />
        {/* Radial Gold Flare */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(800px, 90vw)",
            height: "min(400px, 50vh)",
            background: "radial-gradient(ellipse, rgba(197, 155, 39, 0.18) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        {/* Origin & Positioning Badge */}
        <div ref={badgeRef} style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem", opacity: 0 }}>
          <div className="brand-badge">
            <Sparkles size={14} style={{ color: "var(--color-gold-bright)" }} />
            <span>PIONEERING INDIA&apos;S CIRCULAR UNIFORM ECOSYSTEM • BORN IN MYSURU</span>
          </div>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          style={{
            fontSize: "var(--text-display)",
            fontWeight: 500,
            color: "#FFFFFF",
            maxWidth: "1080px",
            margin: "0 auto 1.5rem auto",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            opacity: 0,
            textWrap: "balance",
          }}
        >
          A Uniform is Never <br className="desktop-break" />
          <span className="text-gold-gradient" style={{ fontStyle: "italic", fontWeight: 400 }}>
            Merely a Piece of Cloth.
          </span>
        </h1>

        {/* Subtitle / Core Hook */}
        <p
          ref={subtitleRef}
          style={{
            fontSize: "var(--text-xl)",
            color: "var(--text-light-secondary)",
            maxWidth: "780px",
            margin: "0 auto clamp(1.75rem, 4vw, 2.5rem) auto",
            fontWeight: 300,
            lineHeight: 1.6,
            opacity: 0,
            textWrap: "pretty",
          }}
        >
          It witnesses childhood memories, discipline, and the quiet sacrifices of parents.{" "}
          <strong style={{ color: "var(--color-gold-bright)", fontWeight: 500 }}>
            Aveehra
          </strong>{" "}
          gives every uniform a longer, dignified journey through respectful reuse and circular renewal.
        </p>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="hero-actions"
          style={{
            marginBottom: "clamp(2rem, 5vw, 4rem)",
            opacity: 0,
          }}
        >
          <a
            href="#partner"
            className="btn btn-primary"
            style={{
              padding: "clamp(0.85rem, 2vw, 1rem) clamp(1.35rem, 3vw, 2.25rem)",
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
            }}
          >
            <span>Partner as an Institution</span>
            <ArrowRight size={18} />
          </a>
          <a
            href="#ecosystem"
            className="btn btn-secondary"
            style={{
              padding: "clamp(0.85rem, 2vw, 1rem) clamp(1.35rem, 3vw, 2.25rem)",
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
            }}
          >
            <RefreshCw size={17} />
            <span>Explore the Circular Journey</span>
          </a>
        </div>

        {/* The 3 Core Pillars Horizontal Ticker / Cards */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(0.85rem, 2vw, 1.25rem)",
            maxWidth: "1100px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: "clamp(1.15rem, 2.5vw, 1.5rem)",
              textAlign: "left",
              background: "rgba(16, 27, 43, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              opacity: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--color-gold-bright)", fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}>
                01
              </span>
              <h3 style={{ fontSize: "var(--text-lg)", color: "#FFFFFF" }}>RESPECT</h3>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)", margin: 0 }}>
              Honoring the institution, the student, and the parent’s effort throughout the garment&apos;s full life.
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: "clamp(1.15rem, 2.5vw, 1.5rem)",
              textAlign: "left",
              background: "rgba(16, 27, 43, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              opacity: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--color-gold-bright)", fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}>
                02
              </span>
              <h3 style={{ fontSize: "var(--text-lg)", color: "#FFFFFF" }}>SUSTAINABILITY</h3>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)", margin: 0 }}>
              Engineered durability, zero municipal landfill dumping, and certified textile regeneration.
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: "clamp(1.15rem, 2.5vw, 1.5rem)",
              textAlign: "left",
              background: "rgba(16, 27, 43, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              opacity: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--color-gold-bright)", fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}>
                03
              </span>
              <h3 style={{ fontSize: "var(--text-lg)", color: "#FFFFFF" }}>SOCIAL IMPACT</h3>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)", margin: 0 }}>
              High-quality certified uniforms at ~50% cost with complete dignity, funding student scholarships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
