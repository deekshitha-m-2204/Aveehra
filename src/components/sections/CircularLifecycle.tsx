"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { CheckCircle2, RotateCw, Play, Pause, Sparkles, X, ArrowUpRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

interface PhaseData {
  id: number;
  step: string;
  badgeLabel: string;
  nodeTitle: string;
  mantra: string;
  title: string;
  subtitle: string;
  shortSummary: string;
  content: string;
  keyPoints: string[];
  metricValue: string;
  metricLabel: string;
  imageSrc: string;
  imageAlt: string;
  position: "top" | "right" | "bottom" | "left";
  angleDeg: number;
}

const PHASES: PhaseData[] = [
  {
    id: 1,
    step: "01",
    badgeLabel: "PHASE 01 • RESPECT & CRAFT",
    nodeTitle: "RESPECT & CRAFT",
    mantra: "Circularity Begins at the Loom",
    title: "Respect & Craft",
    subtitle: "Engineered for Multi-Year Longevity",
    shortSummary:
      "Fabrics engineered at the loom with high-tensile yarn and non-toxic dyes to endure multi-year academic wear.",
    content:
      "Before a uniform can have a second journey, it must be built to survive its first. We engineer fabrics with high-tensile yarn, reinforced seams, and non-toxic skin-safe dyes designed for Indian climates.",
    keyPoints: [
      "Custom high-density cotton & combed fiber blends",
      "Reinforced stress points, bar-tacked pockets, and double-stitched collars",
      "Oeko-Tex compliant dyes that resist fading across 100+ academic washes",
      "Breathable, hypoallergenic weave tested for active student comfort",
    ],
    metricValue: "3X",
    metricLabel: "Durability Benchmark for Partner Institutions",
    imageSrc: "/images/phase1_respect_1789544142836.jpg",
    imageAlt: "Artisanal uniform fabric weaving with golden thread precision",
    position: "top",
    angleDeg: 270,
  },
  {
    id: 2,
    step: "02",
    badgeLabel: "PHASE 02 • WITNESS TO CHILDHOOD & CHARACTER",
    nodeTitle: "EXTEND & WITNESS",
    mantra: "Witness to Childhood & Character",
    title: "Extend & Witness",
    subtitle: "The Student Journey & Daily Life",
    shortSummary:
      "A witness to formative childhood memories and character, fostering classroom pride and socio-economic equality.",
    content:
      "A uniform is never merely cloth. It witnesses morning assemblies, sports day victories, science labs, friendships, and childhood dreams. It carries the quiet devotion and financial effort of parents.",
    keyPoints: [
      "Institutional pride & equality across the classroom",
      "Zero wardrobe anxiety, fostering academic focus and camaraderie",
      "In-school care guides provided to maximize garment lifespan",
      "A living emblem of the school's heritage and values",
    ],
    metricValue: "720+",
    metricLabel: "Days of Shared Memories Standard for Partner Institutions",
    imageSrc: "/images/phase2_extend_1789544254235.jpg",
    imageAlt: "Students wearing dignified school uniforms in heritage courtyard",
    position: "right",
    angleDeg: 0,
  },
  {
    id: 3,
    step: "03",
    badgeLabel: "PHASE 03 • RESPECT ALWAYS PRECEDES RECYCLING",
    nodeTitle: "REUSE WITH DIGNITY",
    mantra: "Respect Always Precedes Recycling",
    title: "Reuse with Dignity",
    subtitle: "The Certified Second Chapter (~50% Pricing)",
    shortSummary:
      "Garments undergo hospital-grade sanitization and mending, returning to students at ~50% cost with complete dignity.",
    content:
      "When a student outgrows their uniform, its journey must not end in a landfill. Through white-glove institutional collection drives, garments undergo multi-point inspection, hospital-grade sanitization, and mending. Reusable uniforms are made available at approximately half price.",
    keyPoints: [
      "Turnkey, seasonal collection kiosks directly on school campuses",
      "Clinical-grade sanitization and precision seam restoration",
      "Available at ~50% cost, ensuring economically weaker families access premium uniforms with complete dignity",
      "A portion of recaptured value funds institutional student welfare programs (scholarships, books, nutrition)",
    ],
    metricValue: "50%",
    metricLabel: "Dignified Affordability Standard for Partner Institutions",
    imageSrc: "/images/inspection-lab.jpg",
    imageAlt: "Clinical inspection and hospital-grade sanitization laboratory",
    position: "bottom",
    angleDeg: 90,
  },
  {
    id: 4,
    step: "04",
    badgeLabel: "PHASE 04 • ZERO LANDFILL, FULL ACCOUNT",
    nodeTitle: "RESPONSIBLE RECYCLING",
    mantra: "Zero Landfill, Full Account",
    title: "Responsible Recycling",
    subtitle: "Closed-Loop Textile Regeneration",
    shortSummary:
      "Garments worn beyond reuse enter certified Karnataka regeneration pathways, transforming into acoustic panels and yarn.",
    content:
      "Recycling is never our first resort—we extend and reuse first. But when a uniform is physically worn beyond safe, dignified reuse, it enters certified responsible recycling pathways, transforming into acoustic panels or regenerated yarn.",
    keyPoints: [
      "Strict grading criteria ensuring only unwearable garments enter recycling",
      "Partnerships with certified textile regeneration facilities in Karnataka",
      "Zero waste to municipal dumping grounds or incineration",
      "Traceable end-of-life audit reports provided to partner schools",
    ],
    metricValue: "0%",
    metricLabel: "Landfill Waste Standard for Partner Institutions",
    imageSrc: "/images/phase4_recycle_1789544284338.jpg",
    imageAlt: "Regenerated closed-loop textile yarn spun from post-consumer uniforms",
    position: "left",
    angleDeg: 180,
  },
];

export default function CircularLifecycle() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [modalPhaseIndex, setModalPhaseIndex] = useState<number | null>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activePhase = PHASES[activePhaseIndex];
  const modalPhase = modalPhaseIndex !== null ? PHASES[modalPhaseIndex] : null;

  // Auto-advance every 4.5 seconds
  const startAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setInterval(() => {
      setActivePhaseIndex((prev) => (prev + 1) % PHASES.length);
    }, 4500);
  }, []);

  const pauseAutoPlayTemporarily = useCallback(() => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

    if (isAutoPlaying && modalPhaseIndex === null) {
      resumeTimerRef.current = setTimeout(() => {
        startAutoPlay();
      }, 8000);
    }
  }, [isAutoPlaying, modalPhaseIndex, startAutoPlay]);

  useEffect(() => {
    if (isAutoPlaying && modalPhaseIndex === null) {
      startAutoPlay();
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [isAutoPlaying, modalPhaseIndex, startAutoPlay]);

  // Lock background page scroll completely and cleanly when modal is open
  useEffect(() => {
    if (modalPhaseIndex !== null) {
      // 1. Tell Lenis to freeze immediately
      window.dispatchEvent(new CustomEvent("lenis:stop"));
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.stop();
      }

      // 2. Lock body scroll without layout shift
      const scrollY = window.scrollY;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      // 3. Handle Keyboard accessibility (ESC, Arrow keys)
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setModalPhaseIndex(null);
        if (e.key === "ArrowRight") setModalPhaseIndex((prev) => ((prev ?? 0) + 1) % PHASES.length);
        if (e.key === "ArrowLeft") setModalPhaseIndex((prev) => (((prev ?? 0) - 1 + PHASES.length) % PHASES.length));
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        // Restore body
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.paddingRight = "";
        window.scrollTo(0, scrollY);

        // Resume Lenis
        window.dispatchEvent(new CustomEvent("lenis:start"));
        if (typeof window !== "undefined" && (window as any).__lenis) {
          (window as any).__lenis.start();
        }
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [modalPhaseIndex]);

  const handleSelectPhase = (index: number) => {
    setActivePhaseIndex(index);
    pauseAutoPlayTemporarily();
  };

  const handleNodeClick = (index: number) => {
    // If clicking the already active node, open full modal details
    if (activePhaseIndex === index) {
      setModalPhaseIndex(index);
    } else {
      setActivePhaseIndex(index);
    }
    pauseAutoPlayTemporarily();
  };

  const handleToggleAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    } else {
      setIsAutoPlaying(true);
      startAutoPlay();
    }
  };

  return (
    <section
      id="ecosystem"
      className="section-spacing"
      style={{
        position: "relative",
        background: "var(--color-navy-deep)",
        overflow: "hidden",
        borderTop: "1px solid var(--glass-border-dark)",
        borderBottom: "1px solid var(--glass-border-dark)",
      }}
    >
      {/* Background subtle radial ambience */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(900px, 90vw)",
          height: "min(600px, 60vh)",
          background: "radial-gradient(circle, rgba(197, 155, 39, 0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
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
              lineHeight: 1.6,
            }}
          >
            Follow the journey. If a uniform can continue serving another student with pride and
            dignity, we extend its life.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET: THE INTERACTIVE CIRCULAR JOURNEY (>= 961px) */}
        {/* ============================================================== */}
        <div className="circular-desktop-stage" style={{ position: "relative", margin: "0 auto" }}>
          {/* SVG Orbit and Circular Path Layer */}
          <svg
            className="orbit-svg"
            viewBox="0 0 860 860"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            <defs>
              <linearGradient id="goldOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="50%" stopColor="#E5BA42" />
                <stop offset="100%" stopColor="#8C6710" />
              </linearGradient>

              <filter id="glowBead" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background subtle dashed orbit ring (R = 290) */}
            <circle
              cx="430"
              cy="430"
              r="290"
              stroke="rgba(197, 155, 39, 0.22)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />

            {/* Faint inner guide line */}
            <circle
              cx="430"
              cy="430"
              r="282"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth="1"
            />

            {/* Subtle Active Quadrant Arc Indicator */}
            <g
              style={{
                transform: `rotate(${activePhaseIndex * 90}deg)`,
                transformOrigin: "430px 430px",
                transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Highlight arc around the active phase (from 225 deg to 315 deg) */}
              <path
                d="M 225,225 A 290,290 0 0,1 635,225"
                fill="none"
                stroke="url(#goldOrbitGrad)"
                strokeWidth="2.5"
                opacity="0.9"
                filter="url(#glowBead)"
              />
            </g>

            {/* Directional Flow Arrows along the orbit */}
            {/* Top-Right Quadrant (between 12 and 3 o'clock) */}
            <g transform="translate(635, 225) rotate(45)">
              <path d="M -6,-3 L 0,3 L 6,-3" stroke="var(--color-gold-bright)" strokeWidth="1.5" fill="none" opacity="0.8" />
            </g>
            {/* Bottom-Right Quadrant (between 3 and 6 o'clock) */}
            <g transform="translate(635, 635) rotate(135)">
              <path d="M -6,-3 L 0,3 L 6,-3" stroke="var(--color-gold-bright)" strokeWidth="1.5" fill="none" opacity="0.8" />
            </g>
            {/* Bottom-Left Quadrant (between 6 and 9 o'clock) */}
            <g transform="translate(225, 635) rotate(225)">
              <path d="M -6,-3 L 0,3 L 6,-3" stroke="var(--color-gold-bright)" strokeWidth="1.5" fill="none" opacity="0.8" />
            </g>
            {/* Top-Left Quadrant (between 9 and 12 o'clock) */}
            <g transform="translate(225, 225) rotate(315)">
              <path d="M -6,-3 L 0,3 L 6,-3" stroke="var(--color-gold-bright)" strokeWidth="1.5" fill="none" opacity="0.8" />
            </g>

            {/* Travelling gold pulse indicator along orbit (Clockwise: Phase 1 -> 2 -> 3 -> 4 -> 1) */}
            <circle r="4" fill="#FFE58F" filter="url(#glowBead)">
              <animateMotion
                dur="16s"
                repeatCount="indefinite"
                path="M 430,140 A 290,290 0 1,1 429.9,140 Z"
              />
            </circle>
            <circle r="8" fill="rgba(197, 155, 39, 0.22)">
              <animateMotion
                dur="16s"
                repeatCount="indefinite"
                path="M 430,140 A 290,290 0 1,1 429.9,140 Z"
              />
            </circle>
          </svg>

          {/* ========================================================= */}
          {/* THE FOUR PHASE NODES (12, 3, 6, 9 O'CLOCK)              */}
          {/* Highlighting & Glowing like Interactive CTA Buttons      */}
          {/* ========================================================= */}

          {/* PHASE 01 — TOP (12 o'clock) */}
          <div
            className={`phase-node-wrapper pos-top ${activePhaseIndex === 0 ? "is-active" : ""}`}
            onClick={() => handleNodeClick(0)}
            onMouseEnter={() => handleSelectPhase(0)}
            role="button"
            tabIndex={0}
            aria-label="Phase 01: Respect & Craft - Click to open specifications"
          >
            <div className="phase-node-label text-top">
              <span className="node-step-tag">PHASE 01</span>
              <span className="node-title-tag">RESPECT & CRAFT</span>
            </div>
            <div className="phase-node-orb glow-cta-orb">
              <Image
                src={PHASES[0].imageSrc}
                alt={PHASES[0].imageAlt}
                fill
                sizes="84px"
                style={{ objectFit: "cover", filter: "brightness(0.95) contrast(1.05)" }}
              />
              <div className="orb-glass-overlay">
                <span className="orb-badge-pill">01</span>
              </div>
            </div>
          </div>

          {/* PHASE 02 — RIGHT (3 o'clock) */}
          <div
            className={`phase-node-wrapper pos-right ${activePhaseIndex === 1 ? "is-active" : ""}`}
            onClick={() => handleNodeClick(1)}
            onMouseEnter={() => handleSelectPhase(1)}
            role="button"
            tabIndex={0}
            aria-label="Phase 02: Extend & Witness - Click to open specifications"
          >
            <div className="phase-node-orb glow-cta-orb">
              <Image
                src={PHASES[1].imageSrc}
                alt={PHASES[1].imageAlt}
                fill
                sizes="84px"
                style={{ objectFit: "cover", filter: "brightness(0.95) contrast(1.05)" }}
              />
              <div className="orb-glass-overlay">
                <span className="orb-badge-pill">02</span>
              </div>
            </div>
            <div className="phase-node-label text-right">
              <span className="node-step-tag">PHASE 02</span>
              <span className="node-title-tag">EXTEND & WITNESS</span>
            </div>
          </div>

          {/* PHASE 03 — BOTTOM (6 o'clock) */}
          <div
            className={`phase-node-wrapper pos-bottom ${activePhaseIndex === 2 ? "is-active" : ""}`}
            onClick={() => handleNodeClick(2)}
            onMouseEnter={() => handleSelectPhase(2)}
            role="button"
            tabIndex={0}
            aria-label="Phase 03: Reuse with Dignity - Click to open specifications"
          >
            <div className="phase-node-orb glow-cta-orb">
              <Image
                src={PHASES[2].imageSrc}
                alt={PHASES[2].imageAlt}
                fill
                sizes="84px"
                style={{ objectFit: "cover", filter: "brightness(0.95) contrast(1.05)" }}
              />
              <div className="orb-glass-overlay">
                <span className="orb-badge-pill">03</span>
              </div>
            </div>
            <div className="phase-node-label text-bottom">
              <span className="node-step-tag">PHASE 03</span>
              <span className="node-title-tag">REUSE WITH DIGNITY</span>
            </div>
          </div>

          {/* PHASE 04 — LEFT (9 o'clock) */}
          <div
            className={`phase-node-wrapper pos-left ${activePhaseIndex === 3 ? "is-active" : ""}`}
            onClick={() => handleNodeClick(3)}
            onMouseEnter={() => handleSelectPhase(3)}
            role="button"
            tabIndex={0}
            aria-label="Phase 04: Responsible Recycling - Click to open specifications"
          >
            <div className="phase-node-label text-left">
              <span className="node-step-tag">PHASE 04</span>
              <span className="node-title-tag">RESPONSIBLE RECYCLING</span>
            </div>
            <div className="phase-node-orb glow-cta-orb">
              <Image
                src={PHASES[3].imageSrc}
                alt={PHASES[3].imageAlt}
                fill
                sizes="84px"
                style={{ objectFit: "cover", filter: "brightness(0.95) contrast(1.05)" }}
              />
              <div className="orb-glass-overlay">
                <span className="orb-badge-pill">04</span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CENTERPIECE STAGE: MINIMAL, ELEGANT, COMPRESSED          */}
          {/* Clean Breathing Room with Glowing Heading & CTA Button    */}
          {/* ========================================================= */}
          <div className="centerpiece-disc">
            {/* Subtle Circular Image Vignette Backdrop */}
            <div className="centerpiece-bg-image">
              <Image
                key={activePhase.step}
                src={activePhase.imageSrc}
                alt={activePhase.imageAlt}
                fill
                sizes="480px"
                style={{
                  objectFit: "cover",
                  filter: "brightness(0.18) saturate(1.15)",
                  transition: "opacity 0.6s ease",
                }}
              />
              <div className="centerpiece-bg-radial" />
            </div>

            {/* Inner Content Container: Spacious, Minimal, Highly Readable */}
            <div className="centerpiece-content-wrap">
              <div key={activePhase.id} className="center-phase-box">
                {/* Phase Badge & Step Tag */}
                <div className="center-mantra-badge">
                  <Sparkles size={12} style={{ color: "var(--color-gold-bright)" }} />
                  <span>{activePhase.badgeLabel}</span>
                </div>

                {/* Glowing, Highlighted Heading */}
                <h3 className="center-phase-title glowing-heading">{activePhase.title}</h3>
                <div className="center-phase-subtitle">{activePhase.subtitle}</div>

                {/* Compressed 1-Sentence Summary (Spacious & Clean) */}
                <p className="center-phase-summary">{activePhase.shortSummary}</p>

                {/* Highlighted Metric Pill */}
                <div className="center-metric-pill">
                  <span className="metric-val">{activePhase.metricValue}</span>
                  <span className="metric-sep">|</span>
                  <span className="metric-txt">{activePhase.metricLabel}</span>
                </div>

                {/* Glowing Interactive CTA Button */}
                <button
                  onClick={() => setModalPhaseIndex(activePhaseIndex)}
                  className="center-cta-btn"
                  aria-label={`Open full specifications for ${activePhase.title}`}
                >
                  <span>Explore Full Protocols & Points</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Orbit Bottom Controls: Phase Navigation Tabs + Play/Pause */}
        <div className="orbit-controls-bar">
          <div className="orbit-step-pills">
            {PHASES.map((p, idx) => (
              <button
                key={p.step}
                onClick={() => handleSelectPhase(idx)}
                className={`step-pill-btn ${activePhaseIndex === idx ? "is-active" : ""}`}
                aria-label={`Select Phase ${p.step}: ${p.title}`}
              >
                <span className="pill-dot" />
                <span className="pill-num">0{idx + 1}</span>
                <span className="pill-title">{p.title}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleToggleAutoPlay}
            className="autoplay-toggle-btn"
            aria-label={isAutoPlaying ? "Pause continuous cycle tour" : "Start continuous cycle tour"}
            title={isAutoPlaying ? "Pause auto-advance" : "Resume auto-advance"}
          >
            {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isAutoPlaying ? "Auto Cycle Active" : "Cycle Paused"}</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* MOBILE & TABLET: THE VERTICAL CONNECTED JOURNEY (< 961px)       */}
        {/* ============================================================== */}
        <div className="vertical-mobile-journey">
          {/* Vertical Centerpiece Intro Header */}
          <div className="mobile-ecosystem-header glass-card">
            <div style={{ position: "relative", width: "42px", height: "26px", margin: "0 auto 0.5rem" }}>
              <Image
                src="/images/aveehra-icon.png"
                alt="Aveehra Crest"
                width={400}
                height={236}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
                letterSpacing: "0.2em",
                color: "#FFFFFF",
                margin: "0 0 0.25rem 0",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              AVEEHRA
            </h3>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "0.85rem",
                color: "var(--color-gold-bright)",
                textAlign: "center",
                marginBottom: "0.75rem",
              }}
            >
              Circular Uniform Ecosystem
            </div>
            <p
              style={{
                fontSize: "0.825rem",
                color: "var(--text-light-secondary)",
                lineHeight: 1.55,
                textAlign: "center",
                margin: 0,
              }}
            >
              Four continuous stages where uniforms are never discarded, ensuring complete dignity
              for students and families.
            </p>
          </div>

          {/* Vertical Track of 4 Connected Phase Items */}
          <div className="mobile-timeline-track">
            {/* The vertical connecting line */}
            <div className="timeline-spine-line" />

            {PHASES.map((phase, pIndex) => (
              <div
                key={phase.step}
                className={`mobile-phase-card ${activePhaseIndex === pIndex ? "card-expanded" : ""}`}
                onClick={() => {
                  setActivePhaseIndex(pIndex);
                  setModalPhaseIndex(pIndex);
                }}
              >
                {/* Step Connector Node */}
                <div className="mobile-node-badge">
                  <span>{phase.step}</span>
                </div>

                {/* Card Content */}
                <div className="mobile-phase-body">
                  <div className="mobile-phase-top">
                    <span className="mobile-badge-tag">{phase.badgeLabel}</span>
                    <h3 className="mobile-card-title">{phase.title}</h3>
                    <div className="mobile-card-subtitle">{phase.subtitle}</div>
                  </div>

                  {/* Integrated Visual */}
                  <div className="mobile-card-image-wrap">
                    <Image
                      src={phase.imageSrc}
                      alt={phase.imageAlt}
                      fill
                      sizes="(max-width: 768px) 90vw, 400px"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="mobile-card-image-gradient" />
                  </div>

                  {/* Compressed Summary */}
                  <p className="mobile-card-desc">{phase.shortSummary}</p>

                  {/* Tap to View CTA Button */}
                  <div className="mobile-card-cta-bar">
                    <div className="mobile-metric-val">{phase.metricValue}</div>
                    <span className="mobile-cta-link">Tap for Full Specifications ↗</span>
                  </div>
                </div>

                {/* Downward connecting arrow for stages 1 to 3 */}
                {pIndex < 3 && (
                  <div className="mobile-flow-indicator">
                    <div className="mobile-arrow-circle">↓</div>
                  </div>
                )}
              </div>
            ))}

            {/* Loop-back connector indicating continuity */}
            <div className="mobile-loop-connector">
              <RotateCw size={18} style={{ color: "var(--color-gold-bright)" }} />
              <div>
                <strong>Loops Continuously Back to Phase 01 (Respect)</strong>
                <p>The journey never ends after one student.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* LUXURY EXPANDED MODAL FOR DETAILED SPECIFICATIONS & PROTOCOLS  */}
      {/* ============================================================== */}
      {modalPhase && (
        <div
          className="phase-modal-backdrop"
          onClick={() => setModalPhaseIndex(null)}
          data-lenis-prevent="true"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalPhase.title} Specifications`}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Modal Container */}
          <div
            className="phase-modal-card"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            {/* Header / Close button - Fixed at top of modal */}
            <div className="modal-header-sticky">
              <div className="modal-header-badge-group">
                <span className="modal-step-tag">{modalPhase.badgeLabel}</span>
                <span className="modal-header-crumb">• {modalPhase.title}</span>
              </div>
              <button
                onClick={() => setModalPhaseIndex(null)}
                className="modal-close-btn"
                aria-label="Close specifications modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Independent Scrollable Content Area */}
            <div
              className="modal-scrollable-content"
              data-lenis-prevent="true"
              tabIndex={0}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {/* Titles */}
              <h2 className="modal-main-title">{modalPhase.title}</h2>
              <div className="modal-main-subtitle">{modalPhase.subtitle}</div>

              {/* Modal Photographic Feature Image */}
              <div className="modal-hero-image-wrap">
                <Image
                  src={modalPhase.imageSrc}
                  alt={modalPhase.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  style={{ objectFit: "cover" }}
                />
                <div className="modal-hero-image-gradient" />
                <div className="modal-hero-badge">
                  <Sparkles size={14} style={{ color: "var(--color-gold-bright)" }} />
                  <span>{modalPhase.mantra}</span>
                </div>
              </div>

              {/* Full Narrative Content */}
              <div className="modal-narrative-section">
                <h4 className="modal-section-heading">Operational Philosophy & Context</h4>
                <p className="modal-narrative-text">{modalPhase.content}</p>
              </div>

              {/* Detailed Key Specifications */}
              <div className="modal-keypoints-section">
                <h4 className="modal-section-heading">Core Technical Specifications</h4>
                <div className="modal-keypoints-grid">
                  {modalPhase.keyPoints.map((point, kIdx) => (
                    <div key={kIdx} className="modal-point-item">
                      <CheckCircle2 size={16} className="modal-point-icon" />
                      <span className="modal-point-text">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Benchmark Banner */}
              <div className="modal-metric-banner">
                <div className="modal-metric-number">{modalPhase.metricValue}</div>
                <div className="modal-metric-text-group">
                  <div className="modal-metric-title">{modalPhase.metricLabel}</div>
                  <div className="modal-metric-sub">Certified lifecycle metric audited for institutional partners</div>
                </div>
              </div>

              {/* Modal Footer Navigation */}
              <div className="modal-footer-nav">
                <button
                  onClick={() => setModalPhaseIndex((prev) => (((prev ?? 0) - 1 + PHASES.length) % PHASES.length))}
                  className="modal-nav-btn"
                >
                  <ChevronLeft size={16} />
                  <span>Previous Phase</span>
                </button>

                <div className="modal-pagination-dots">
                  {PHASES.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      onClick={() => setModalPhaseIndex(dotIdx)}
                      className={`modal-dot ${modalPhaseIndex === dotIdx ? "is-active" : ""}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setModalPhaseIndex((prev) => ((prev ?? 0) + 1) % PHASES.length)}
                  className="modal-nav-btn"
                >
                  <span>Next Phase</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scoped CSS Styles */}
      <style jsx>{`
        /* ======================================================== */
        /* DESKTOP CIRCULAR ORBIT STYLES                            */
        /* ======================================================== */
        .circular-desktop-stage {
          display: block;
          width: 860px;
          height: 860px;
          max-width: 100%;
        }

        .vertical-mobile-journey {
          display: none;
        }

        /* 4 Phase Nodes Positioned EXACTLY on Orbit (R = 290 at 430, 430) */
        .phase-node-wrapper {
          position: absolute;
          z-index: 10;
          cursor: pointer;
          user-select: none;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .phase-node-wrapper:focus-visible {
          outline: 2px solid var(--color-gold-bright);
          outline-offset: 4px;
        }

        /* 12 o'clock - Top (x: 430, y: 140) */
        .pos-top {
          top: 140px;
          left: 430px;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pos-top:hover,
        .pos-top.is-active {
          transform: translate(-50%, -50%) scale(1.08);
        }
        .pos-top .phase-node-label {
          position: absolute;
          bottom: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        /* 3 o'clock - Right (x: 720, y: 430) */
        .pos-right {
          top: 430px;
          left: 720px;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
        }
        .pos-right:hover,
        .pos-right.is-active {
          transform: translate(-50%, -50%) scale(1.08);
        }
        .pos-right .phase-node-label {
          position: absolute;
          left: calc(100% + 16px);
          top: 50%;
          transform: translateY(-50%);
          text-align: left;
        }

        /* 6 o'clock - Bottom (x: 430, y: 720) */
        .pos-bottom {
          top: 720px;
          left: 430px;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pos-bottom:hover,
        .pos-bottom.is-active {
          transform: translate(-50%, -50%) scale(1.08);
        }
        .pos-bottom .phase-node-label {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        /* 9 o'clock - Left (x: 140, y: 430) */
        .pos-left {
          top: 430px;
          left: 140px;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
        }
        .pos-left:hover,
        .pos-left.is-active {
          transform: translate(-50%, -50%) scale(1.08);
        }
        .pos-left .phase-node-label {
          position: absolute;
          right: calc(100% + 16px);
          top: 50%;
          transform: translateY(-50%);
          text-align: right;
        }

        /* ======================================================== */
        /* GLOWING CTA ORB & HEADINGS                               */
        /* ======================================================== */
        .phase-node-orb {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          background: #0B1420;
          border: 2px solid rgba(197, 155, 39, 0.45);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.65), 0 0 12px rgba(197, 155, 39, 0.25);
          transition: all 0.35s ease;
          flex-shrink: 0;
        }

        .phase-node-orb:hover {
          border-color: #FFE58F;
          box-shadow: 0 0 30px rgba(229, 186, 66, 0.75), 0 0 10px rgba(255, 242, 178, 0.6);
        }

        .is-active .phase-node-orb {
          border-color: #FFE58F;
          box-shadow: 0 0 35px rgba(229, 186, 66, 0.8), 0 0 12px rgba(255, 242, 178, 0.65);
          animation: goldPulseOrb 3s infinite ease-in-out;
        }

        @keyframes goldPulseOrb {
          0% {
            box-shadow: 0 0 25px rgba(229, 186, 66, 0.7), 0 0 10px rgba(255, 242, 178, 0.5);
          }
          50% {
            box-shadow: 0 0 45px rgba(229, 186, 66, 0.95), 0 0 16px rgba(255, 242, 178, 0.75);
          }
          100% {
            box-shadow: 0 0 25px rgba(229, 186, 66, 0.7), 0 0 10px rgba(255, 242, 178, 0.5);
          }
        }

        .orb-glass-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 5px;
          background: linear-gradient(to top, rgba(6, 11, 18, 0.7) 0%, transparent 55%);
        }

        .orb-badge-pill {
          font-family: var(--font-serif);
          font-size: 0.75rem;
          font-weight: 800;
          color: #060B12;
          background: linear-gradient(135deg, #FFF6D6 0%, #E5BA42 50%, #C59B27 100%);
          border-radius: var(--radius-full);
          padding: 1px 7px;
          letter-spacing: 0.04em;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        /* Attached Labels styled like refined CTA pills */
        .phase-node-label {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
          pointer-events: auto;
          background: rgba(10, 18, 29, 0.9);
          backdrop-filter: blur(10px);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(197, 155, 39, 0.3);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .phase-node-wrapper:hover .phase-node-label,
        .is-active .phase-node-label {
          border-color: #FFE58F;
          background: rgba(16, 28, 46, 0.95);
          box-shadow: 0 0 22px rgba(197, 155, 39, 0.55);
        }

        .node-step-tag {
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--color-gold-bright);
          text-transform: uppercase;
        }

        .node-title-tag {
          font-family: var(--font-serif);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #FFFFFF;
          transition: color 0.3s ease;
        }

        .is-active .node-title-tag {
          color: #FFE58F;
          text-shadow: 0 0 10px rgba(229, 186, 66, 0.6);
        }

        /* ======================================================== */
        /* CENTERPIECE CIRCULAR DISC: MINIMAL & BREATHABLE          */
        /* ======================================================== */
        .centerpiece-disc {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(14, 25, 41, 0.96) 0%, rgba(6, 11, 18, 0.98) 100%);
          border: 1px solid rgba(197, 155, 39, 0.3);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.75), inset 0 0 50px rgba(197, 155, 39, 0.08);
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2.5rem;
        }

        .centerpiece-bg-image {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .centerpiece-bg-radial {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(6, 11, 18, 0.75) 20%, rgba(6, 11, 18, 0.96) 80%);
        }

        .centerpiece-content-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 340px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .center-phase-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: fadeInPhase 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeInPhase {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .center-mantra-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.8rem;
          background: rgba(197, 155, 39, 0.1);
          border: 1px solid rgba(197, 155, 39, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--color-gold-bright);
          text-transform: uppercase;
          margin-bottom: 0.65rem;
        }

        .center-phase-title {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          color: #FFFFFF;
          margin: 0 0 0.15rem 0;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .glowing-heading {
          text-shadow: 0 0 16px rgba(229, 186, 66, 0.45);
        }

        .center-phase-subtitle {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 0.85rem;
          color: var(--color-gold-bright);
          margin-bottom: 0.85rem;
        }

        .center-phase-summary {
          font-size: 0.825rem;
          line-height: 1.55;
          color: #CBD5E1;
          margin: 0 0 1rem 0;
          text-wrap: pretty;
        }

        .center-metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.95rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(197, 155, 39, 0.3);
          border-radius: var(--radius-full);
          margin-bottom: 1.25rem;
          max-width: 100%;
        }

        .metric-val {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-gold-bright);
          line-height: 1;
        }

        .metric-sep {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.75rem;
        }

        .metric-txt {
          font-size: 0.68rem;
          color: var(--text-light-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Glowing Center CTA Button */
        .center-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.15rem;
          background: linear-gradient(135deg, rgba(197, 155, 39, 0.18) 0%, rgba(197, 155, 39, 0.32) 100%);
          border: 1px solid #E5BA42;
          border-radius: var(--radius-full);
          color: #FFE58F;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 18px rgba(197, 155, 39, 0.35);
        }

        .center-cta-btn:hover {
          background: linear-gradient(135deg, rgba(197, 155, 39, 0.32) 0%, rgba(229, 186, 66, 0.45) 100%);
          box-shadow: 0 0 28px rgba(229, 186, 66, 0.65);
          transform: translateY(-2px);
        }

        /* Orbit Bottom Controls */
        .orbit-controls-bar {
          margin-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 0.85rem 1.25rem;
          background: rgba(10, 18, 29, 0.65);
          border: 1px solid var(--glass-border-dark);
          border-radius: var(--radius-full);
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .orbit-step-pills {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .step-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.85rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: var(--radius-full);
          color: var(--text-light-secondary);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .step-pill-btn:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.05);
        }

        .step-pill-btn.is-active {
          color: #FFFFFF;
          background: rgba(197, 155, 39, 0.15);
          border-color: rgba(197, 155, 39, 0.4);
        }

        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: background 0.25s ease;
        }

        .step-pill-btn.is-active .pill-dot {
          background: var(--color-gold-bright);
          box-shadow: 0 0 6px var(--color-gold-bright);
        }

        .pill-num {
          font-family: var(--font-serif);
          font-weight: 700;
          color: var(--color-gold-bright);
        }

        .autoplay-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.9rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border-dark);
          border-radius: var(--radius-full);
          color: var(--color-gold-bright);
          font-size: 0.725rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .autoplay-toggle-btn:hover {
          background: rgba(197, 155, 39, 0.12);
          border-color: var(--color-gold-border);
        }

        /* ======================================================== */
        /* MODAL STYLES: FULL SPECIFICATIONS & PROTOCOLS            */
        /* ======================================================== */
        .phase-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(3, 7, 13, 0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 3vw, 2rem);
          overscroll-behavior: contain;
          animation: modalFadeIn 0.25s ease-out;
        }

        @keyframes modalFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .phase-modal-card {
          width: 100%;
          max-width: 680px;
          height: auto;
          max-height: min(88vh, 760px);
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, rgba(14, 25, 41, 0.98) 0%, rgba(6, 11, 18, 0.99) 100%);
          border: 1px solid rgba(197, 155, 39, 0.4);
          border-radius: var(--radius-xl);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(197, 155, 39, 0.15);
          position: relative;
          color: #FFFFFF;
          overflow: hidden;
          animation: modalCardPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalCardPop {
          0% {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Fixed Header with Close button (ALWAYS VISIBLE AT TOP) */
        .modal-header-sticky {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.15rem 1.75rem;
          background: rgba(10, 18, 29, 0.98);
          border-bottom: 1px solid var(--glass-border-dark);
          flex-shrink: 0;
          z-index: 10;
        }

        .modal-header-badge-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .modal-step-tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--color-gold-bright);
          text-transform: uppercase;
        }

        .modal-header-crumb {
          font-size: 0.85rem;
          font-weight: 600;
          color: #FFFFFF;
          font-family: var(--font-serif);
        }

        .modal-close-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--glass-border-dark);
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-gold-bright);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .modal-close-btn:hover {
          background: rgba(197, 155, 39, 0.2);
          border-color: var(--color-gold-border);
          color: #FFFFFF;
        }

        /* Independent Scrollable Content Area */
        .modal-scrollable-content {
          flex: 1 1 auto;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
          padding: 1.5rem 1.75rem 2rem;
          scrollbar-width: thin;
          scrollbar-color: rgba(197, 155, 39, 0.5) rgba(10, 18, 29, 0.6);
        }

        .modal-scrollable-content:focus {
          outline: none;
        }

        .modal-scrollable-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-scrollable-content::-webkit-scrollbar-track {
          background: rgba(10, 18, 29, 0.6);
          border-radius: 9999px;
        }

        .modal-scrollable-content::-webkit-scrollbar-thumb {
          background: rgba(197, 155, 39, 0.5);
          border-radius: 9999px;
        }

        .modal-scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(229, 186, 66, 0.8);
        }

        .modal-main-title {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          color: #FFFFFF;
          margin: 0 0 0.25rem 0;
          line-height: 1.15;
        }

        .modal-main-subtitle {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--color-gold-bright);
          margin-bottom: 1.25rem;
        }

        .modal-hero-image-wrap {
          position: relative;
          width: 100%;
          height: clamp(180px, 28vw, 240px);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--glass-border-dark);
          margin-bottom: 1.5rem;
        }

        .modal-hero-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6, 11, 18, 0.75) 0%, transparent 50%);
        }

        .modal-hero-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          background: rgba(10, 18, 29, 0.9);
          border: 1px solid var(--glass-border-dark);
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 600;
          color: #FFFFFF;
          letter-spacing: 0.06em;
        }

        .modal-section-heading {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-gold-bright);
          text-transform: uppercase;
          margin: 0 0 0.6rem 0;
        }

        .modal-narrative-section {
          margin-bottom: 1.5rem;
        }

        .modal-narrative-text {
          font-size: 0.88rem;
          line-height: 1.65;
          color: #D1D9E6;
          margin: 0;
        }

        .modal-keypoints-section {
          margin-bottom: 1.5rem;
        }

        .modal-keypoints-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .modal-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .modal-point-icon {
          color: var(--color-gold-bright);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-point-text {
          font-size: 0.825rem;
          line-height: 1.5;
          color: #E2E8F0;
        }

        .modal-metric-banner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem 1.25rem;
          background: rgba(197, 155, 39, 0.09);
          border: 1px solid var(--color-gold-border);
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .modal-metric-number {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-gold-bright);
          line-height: 1;
        }

        .modal-metric-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #FFFFFF;
        }

        .modal-metric-sub {
          font-size: 0.725rem;
          color: var(--text-light-muted);
          margin-top: 2px;
        }

        .modal-footer-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border-dark);
        }

        .modal-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: 1px solid var(--glass-border-dark);
          border-radius: var(--radius-full);
          padding: 0.45rem 0.95rem;
          color: var(--text-light-secondary);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-nav-btn:hover {
          color: #FFFFFF;
          border-color: var(--color-gold-border);
          background: rgba(255, 255, 255, 0.05);
        }

        .modal-pagination-dots {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .modal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-dot.is-active {
          background: var(--color-gold-bright);
          box-shadow: 0 0 8px var(--color-gold-bright);
          width: 18px;
          border-radius: 4px;
        }

        /* ======================================================== */
        /* RESPONSIVE BREAKPOINTS (TABLET & MOBILE)                 */
        /* ======================================================== */
        @media (max-width: 1100px) {
          .circular-desktop-stage {
            width: 760px;
            height: 760px;
          }
          .orbit-svg {
            transform: scale(0.88);
            transform-origin: center center;
          }
          .pos-top {
            top: 155px;
          }
          .pos-right {
            left: 670px;
          }
          .pos-bottom {
            top: 605px;
          }
          .pos-left {
            left: 90px;
          }
          .centerpiece-disc {
            width: 420px;
            height: 420px;
            padding: 2rem;
          }
          .center-phase-title {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 960px) {
          .circular-desktop-stage,
          .orbit-controls-bar {
            display: none !important;
          }

          .vertical-mobile-journey {
            display: block;
            width: 100%;
          }

          .mobile-ecosystem-header {
            padding: 1.5rem var(--container-pad);
            margin-bottom: 2rem;
            background: linear-gradient(135deg, rgba(21, 34, 54, 0.8) 0%, rgba(10, 18, 29, 0.9) 100%);
            border: 1px solid var(--color-gold-border);
            border-radius: var(--radius-lg);
          }

          .mobile-timeline-track {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
            padding-left: 1.75rem;
          }

          .timeline-spine-line {
            position: absolute;
            top: 20px;
            bottom: 60px;
            left: 11px;
            width: 2px;
            background: linear-gradient(to bottom, var(--color-gold-bright) 0%, rgba(197, 155, 39, 0.3) 85%, transparent 100%);
          }

          .mobile-phase-card {
            position: relative;
            background: rgba(14, 25, 41, 0.85);
            border: 1px solid var(--glass-border-dark);
            border-radius: var(--radius-lg);
            padding: 1.25rem;
            cursor: pointer;
            transition: border-color 0.3s ease, background 0.3s ease;
          }

          .mobile-phase-card.card-expanded {
            border-color: rgba(197, 155, 39, 0.55);
            background: rgba(14, 25, 41, 0.95);
            box-shadow: 0 0 25px rgba(197, 155, 39, 0.25);
          }

          .mobile-node-badge {
            position: absolute;
            top: 18px;
            left: -1.75rem;
            transform: translateX(-50%);
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: #0B1420;
            border: 1.5px solid var(--color-gold-bright);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-serif);
            font-size: 0.75rem;
            font-weight: 700;
            color: #FFE58F;
            box-shadow: 0 0 14px rgba(229, 186, 66, 0.6);
            z-index: 3;
          }

          .mobile-badge-tag {
            display: inline-block;
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            color: var(--color-gold-bright);
            text-transform: uppercase;
            margin-bottom: 0.35rem;
          }

          .mobile-card-title {
            font-family: var(--font-serif);
            font-size: 1.45rem;
            color: #FFFFFF;
            margin: 0 0 0.15rem 0;
            line-height: 1.2;
          }

          .mobile-card-subtitle {
            font-family: var(--font-serif);
            font-style: italic;
            font-size: 0.85rem;
            color: var(--color-gold-bright);
            margin-bottom: 0.85rem;
          }

          .mobile-card-image-wrap {
            position: relative;
            width: 100%;
            height: 170px;
            border-radius: var(--radius-md);
            overflow: hidden;
            border: 1px solid var(--glass-border-dark);
            margin-bottom: 0.85rem;
          }

          .mobile-card-image-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(6, 11, 18, 0.6) 0%, transparent 60%);
          }

          .mobile-card-desc {
            font-size: 0.825rem;
            line-height: 1.55;
            color: var(--text-light-secondary);
            margin-bottom: 1rem;
          }

          .mobile-card-cta-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.65rem 0.85rem;
            background: rgba(197, 155, 39, 0.1);
            border: 1px solid var(--color-gold-border);
            border-radius: var(--radius-md);
          }

          .mobile-metric-val {
            font-family: var(--font-serif);
            font-size: 1.35rem;
            font-weight: 700;
            color: var(--color-gold-bright);
            line-height: 1;
          }

          .mobile-cta-link {
            font-size: 0.725rem;
            font-weight: 600;
            color: #FFE58F;
          }

          .mobile-flow-indicator {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            margin-bottom: -0.5rem;
          }

          .mobile-arrow-circle {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: rgba(10, 18, 29, 0.95);
            border: 1px solid var(--color-gold-border);
            color: var(--color-gold-bright);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85rem;
          }

          .mobile-loop-connector {
            display: flex;
            align-items: center;
            gap: 0.85rem;
            padding: 1rem;
            background: rgba(197, 155, 39, 0.07);
            border: 1px dashed rgba(197, 155, 39, 0.35);
            border-radius: var(--radius-md);
            color: #FFFFFF;
            font-size: 0.8rem;
            line-height: 1.4;
          }

          .mobile-loop-connector p {
            margin: 0.15rem 0 0 0;
            color: var(--text-light-muted);
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
