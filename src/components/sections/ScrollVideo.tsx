"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollVideo() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const maskGroupRef = useRef<SVGGElement>(null);
  const finalContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!videoRef.current || !containerRef.current || !maskGroupRef.current) return;

    const isMobile = window.innerWidth < 768;
    const scrollDistance = isMobile ? "+=1800" : "+=3500";

    // Pin the container for the duration of the scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: scrollDistance,
        scrub: 1, // Smooth scrubbing
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

    // 3. Fade out the SVG mask entirely at the end
    tl.to(
      maskGroupRef.current,
      {
        opacity: 0,
        ease: "none",
        duration: 0.1,
      },
      ">"
    );

    // 4. Fade in the final content over the full-screen video
    if (finalContentRef.current) {
      tl.fromTo(
        finalContentRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
        "-=0.2"
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
      {/* Background Video that gets revealed */}
      <video
        ref={videoRef}
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        playsInline
        muted
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      
      {/* SVG Overlay that masks the video */}
      <svg
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
