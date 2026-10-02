"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollVideo() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const maskGroupRef = useRef<SVGGElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const finalContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!videoRef.current || !containerRef.current || !maskGroupRef.current) return;

    const isMobile = window.innerWidth < 768;
    // Reduced scroll distance by 40%+ (Desktop: 3500 -> 2000, Mobile: 1800 -> 1000)
    const scrollDistance = isMobile ? "+=1000" : "+=2000";

    // Pin the container for the duration of the scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: scrollDistance,
        scrub: 0.6, // 40% faster scrubbing response
        pin: true,
      },
    });

    // 1. Scrub the Video Time safely across mobile and desktop
    const setupVideoScrub = () => {
      if (!videoRef.current) return;
      const duration = videoRef.current.duration || 10;
      tl.fromTo(
        videoRef.current,
        { currentTime: 0 },
        { currentTime: duration, ease: "none" },
        0
      );
    };

    if (videoRef.current.readyState >= 1) {
      setupVideoScrub();
    } else {
      videoRef.current.onloadedmetadata = setupVideoScrub;
    }

    // 2. Animate the SVG Text Mask Scale (Zoom Through)
    tl.to(
      maskGroupRef.current,
      {
        scale: isMobile ? 80 : 150,
        transformOrigin: "center center",
        ease: "power2.inOut",
      },
      0
    );

    // 3. Fade out the SVG mask overlay so the video/poster shines through cleanly
    if (svgRef.current) {
      tl.to(
        svgRef.current,
        {
          opacity: 0,
          ease: "power1.out",
          duration: 0.15,
        },
        ">"
      );
    }

    // 4. Fade in the final content over the full-screen video
    if (finalContentRef.current) {
      tl.fromTo(
        finalContentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power3.out" },
        "-=0.15"
      );
    }

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "100vh",
        background: "var(--color-navy-deep)",
        overflow: "hidden",
      }}
    >
      {/* Fallback Poster Background so screen is never dark/blank while loading */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero-craft.jpg"
          alt="Artisanal uniform fabric craftsmanship"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", filter: "brightness(0.55) saturate(1.1)" }}
        />
      </div>

      {/* Subtle vignette over video/poster for readable typography */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(6,11,18,0.3) 0%, rgba(6,11,18,0.7) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Background Video that gets revealed */}
      <video
        ref={videoRef}
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        poster="/images/hero-craft.jpg"
        playsInline
        muted
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      
      {/* SVG Overlay that masks the video */}
      <svg
        ref={svgRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="text-mask">
            {/* The white rect makes everything visible by default in the mask */}
            <rect width="100%" height="100%" fill="white" />
            
            {/* The black text punches a hole in the mask where the video will show */}
            <g ref={maskGroupRef} style={{ transformOrigin: "center center" }}>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fill="black"
                fontSize="clamp(2.75rem, 14vw, 15rem)"
                fontWeight="900"
                fontFamily="var(--font-sans)"
                letterSpacing="-0.02em"
              >
                AVEEHRA
              </text>
            </g>
          </mask>
        </defs>
        
        {/* The solid overlay layer that uses the mask */}
        <rect
          width="100%"
          height="100%"
          fill="var(--color-navy-surface)"
          mask="url(#text-mask)"
        />
      </svg>

      {/* Final Cinematic Text that appears once you've zoomed through the mask */}
      <div
        ref={finalContentRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          zIndex: 20,
          width: "100%",
          padding: "0 clamp(1rem, 4vw, 2rem)",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <h2 style={{ fontSize: "var(--text-5xl)", marginBottom: "1rem", fontFamily: "var(--font-serif)", textWrap: "balance" }}>
          Beyond the Fabric
        </h2>
        <p style={{ fontSize: "var(--text-xl)", fontWeight: 300, color: "var(--color-gold-bright)", textWrap: "balance" }}>
          A deeper look into our circular philosophy.
        </p>
      </div>
    </section>
  );
}
