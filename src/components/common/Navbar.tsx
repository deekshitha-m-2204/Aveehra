"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Philosophy", href: "#manifesto" },
    { label: "The Ecosystem", href: "#ecosystem" },
    { label: "Craft & Longevity", href: "#craft" },
    { label: "For Schools", href: "#for-schools" },
    { label: "Impact", href: "#impact" },
    { label: "Mysuru Origin", href: "#origin" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          paddingTop: isScrolled ? "0.65rem" : "1.1rem",
          paddingBottom: isScrolled ? "0.65rem" : "1.1rem",
          background: isScrolled ? "var(--glass-bg-dark)" : "rgba(6, 11, 18, 0.4)",
          backdropFilter: isScrolled ? "var(--glass-blur)" : "blur(8px)",
          borderBottom: isScrolled ? "1px solid var(--glass-border-dark)" : "1px solid rgba(255, 255, 255, 0.04)",
          transition: "all var(--transition-smooth)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          {/* Brand Logo */}
          <div style={{ flexShrink: 0, minWidth: 0 }}>
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                  color: "var(--text-light-secondary)",
                  letterSpacing: "0.02em",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-bright)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Header Right Action */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "1rem",
            }}
            className="desktop-nav"
          >
            <a href="#partner" className="btn btn-primary" style={{ padding: "0.65rem 1.35rem", fontSize: "0.85rem" }}>
              <span>Institutional Kit</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Mobile Right Controls: Accessible CTA + Hamburger Toggle */}
          <div
            className="mobile-toggle"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexShrink: 0,
            }}
          >
            {/* Quick Header CTA on tablet/mobile screens (compact) */}
            <a
              href="#partner"
              className="btn btn-primary nav-header-cta"
              style={{
                padding: "0.45rem 0.85rem",
                fontSize: "0.775rem",
                minHeight: "36px",
                gap: "0.35rem",
              }}
            >
              <span>Get Kit</span>
              <ArrowRight size={13} />
            </a>

            {/* Mobile Hamburger Toggle Button with generous 44x44px touch area */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-gold-bright)",
                width: "42px",
                height: "42px",
                minWidth: "42px",
                minHeight: "42px",
                background: mobileMenuOpen ? "rgba(197, 155, 39, 0.15)" : "rgba(255, 255, 255, 0.06)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-gold-border)",
                transition: "all var(--transition-fast)",
              }}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(6, 11, 18, 0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          {/* Top Bar inside Drawer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem var(--container-pad)",
              borderBottom: "1px solid var(--glass-border-dark)",
            }}
          >
            <Logo size="md" />

            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-gold-bright)",
                width: "42px",
                height: "42px",
                background: "rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-gold-border)",
              }}
              aria-label="Close navigation menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Items List */}
          <div
            style={{
              padding: "2rem var(--container-pad) 1.5rem var(--container-pad)",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "var(--color-gold-bright)",
                textTransform: "uppercase",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Sparkles size={12} />
              <span>EXPLORE THE MOVEMENT</span>
            </div>

            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.875rem 0",
                  fontSize: "clamp(1.2rem, 5vw, 1.45rem)",
                  fontFamily: "var(--font-serif)",
                  color: "var(--text-light-primary)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                  minHeight: "48px",
                  transition: "color var(--transition-fast), padding-left var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-gold-bright)";
                  e.currentTarget.style.paddingLeft = "0.5rem";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-light-primary)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <span>{link.label}</span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-gold-bright)",
                    opacity: 0.7,
                  }}
                >
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Action Area inside Drawer */}
          <div
            style={{
              padding: "1.5rem var(--container-pad) 2.5rem var(--container-pad)",
              borderTop: "1px solid var(--glass-border-dark)",
              background: "rgba(10, 18, 29, 0.5)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <a
              href="#partner"
              onClick={handleLinkClick}
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "0.95rem 1.5rem",
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
              }}
            >
              <span>Request Institutional Kit</span>
              <ArrowRight size={17} />
            </a>

            <div
              style={{
                textAlign: "center",
                fontSize: "0.7rem",
                color: "var(--color-gold-bright)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Pioneering India&apos;s Circular Uniform Ecosystem
            </div>
          </div>
        </div>
      )}
    </>
  );
}
