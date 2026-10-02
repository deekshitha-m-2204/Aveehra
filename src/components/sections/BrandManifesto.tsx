"use client";

import { useRef } from "react";
import Image from "next/image";
import { Quote, Heart, Award, Users, BookOpen } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BrandManifesto() {
  const container = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const representations = [
    { icon: Award, title: "Institutional Identity", desc: "The values, crest, and heritage of the academy." },
    { icon: Users, title: "Discipline & Equality", desc: "Erasing socio-economic barriers inside the classroom." },
    { icon: BookOpen, title: "Formative Memories", desc: "Friendships, morning assemblies, and childhood triumphs." },
    { icon: Heart, title: "Parental Sacrifices", desc: "The quiet devotion and financial effort behind every child." },
  ];

  useGSAP(() => {
    // Header Reveal
    gsap.fromTo(
      headerRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      }
    );

    // Image & Badge Reveal
    const imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 80%",
      },
    });

    imgTl.fromTo(
      imageContainerRef.current,
      { opacity: 0, scale: 0.95, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }
    ).fromTo(
      badgeRef.current,
      { opacity: 0, x: -20, rotate: -5 },
      { opacity: 1, x: 0, rotate: 0, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.6"
    );

    // Right Column Stagger
    if (rightColumnRef.current) {
      gsap.fromTo(
        rightColumnRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, { scope: container });

  return (
    <section
      ref={container}
      id="manifesto"
      className="section-spacing"
      style={{
        position: "relative",
        background: "var(--color-navy-surface)",
        borderTop: "1px solid var(--glass-border-dark)",
        borderBottom: "1px solid var(--glass-border-dark)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Heading Tag */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "3rem", opacity: 0 }}>
          <span className="brand-badge">THE PHILOSOPHY OF RESPECT</span>
          <h2
            style={{
              fontSize: "var(--text-4xl)",
              color: "#FFFFFF",
              marginTop: "1rem",
              maxWidth: "850px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            &ldquo;Every Uniform Has a Story. <br />
            <span className="text-gold-gradient">Every Story Deserves a Second Chapter.&rdquo;</span>
          </h2>
        </div>

        {/* Editorial Split Grid */}
        <div className="editorial-grid">
          {/* Left Column: Atmospheric Editorial Campus Image */}
          <div style={{ position: "relative" }}>
            <div
              ref={imageContainerRef}
              style={{
                position: "relative",
                height: "560px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--glass-border-dark)",
                boxShadow: "var(--shadow-lg)",
                opacity: 0,
              }}
            >
              <Image
                src="/images/students-campus.jpg"
                alt="Students walking with dignity on heritage academy campus in South India"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(6,11,18,0.85) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "2rem",
                  right: "2rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-xl)",
                    color: "#FFFFFF",
                    fontStyle: "italic",
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  &ldquo;A uniform deserves respect throughout its entire life, not only while it is being worn.&rdquo;
                </p>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    letterSpacing: "0.15em",
                    color: "var(--color-gold-bright)",
                    textTransform: "uppercase",
                  }}
                >
                  Core Belief of Aveehra
                </span>
              </div>
            </div>

            {/* Overlapping Etymology Badge */}
            <div
              ref={badgeRef}
              className="glass-card desktop-only-badge"
              style={{
                position: "absolute",
                top: "-1.5rem",
                right: "-1.5rem",
                maxWidth: "280px",
                padding: "1.25rem",
                background: "var(--color-navy-card)",
                border: "1px solid var(--color-gold-border)",
                boxShadow: "var(--shadow-gold)",
                opacity: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>VEERA</span>
                <span style={{ color: "var(--text-light-muted)" }}>+</span>
                <span style={{ color: "var(--color-gold-bright)", fontWeight: 700 }}>HEERA</span>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--text-light-secondary)", margin: 0 }}>
                Warrior’s valor & diamond’s enduring worth.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & What a Uniform Represents */}
          <div ref={rightColumnRef}>
            <h3
              style={{
                fontSize: "var(--text-2xl)",
                color: "var(--text-light-primary)",
                marginBottom: "1.25rem",
                lineHeight: 1.3,
              }}
            >
              What Does a Uniform Truly Represent?
            </h3>
            <p style={{ marginBottom: "1.75rem", fontSize: "var(--text-base)" }}>
              In every school across India, a uniform is the great equalizer. It strips away economic division, establishes common purpose, and silently witnesses the growth of a human life. 
            </p>
            <p style={{ marginBottom: "2rem", fontSize: "var(--text-base)" }}>
              When a child outgrows their blazer or shirt, why should that garment be relegated to an unceremonious scrap pile? It deserves reverence, scientific care, and an honorable second journey.
            </p>

            {/* 4 Pillars of Representation */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {representations.map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "1.15rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--glass-border-dark)",
                  }}
                >
                  <item.icon size={22} style={{ color: "var(--color-gold-bright)", marginBottom: "0.5rem" }} />
                  <h4 style={{ fontSize: "var(--text-sm)", color: "#FFFFFF", marginBottom: "0.25rem" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* The Etymology Explanation Box */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "var(--radius-md)",
                background: "linear-gradient(135deg, rgba(197, 155, 39, 0.1) 0%, rgba(10, 18, 29, 0.5) 100%)",
                border: "1px solid var(--color-gold-border)",
              }}
            >
              <h4
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-gold-bright)",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.05em",
                }}
              >
                THE ETYMOLOGY OF AVEEHRA
              </h4>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-light-secondary)", margin: 0 }}>
                Inspired by <strong>Veera</strong> (the warrior of discipline and moral courage) and{" "}
                <strong>Heera</strong> (the diamond of enduring, unbreakable value). Aveehra represents the belief that
                every individual behind a uniform, and the uniform itself, deserves to be valued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
