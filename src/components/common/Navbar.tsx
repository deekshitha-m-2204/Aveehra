"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Philosophy", href: "#manifesto" },
    { label: "The Ecosystem", href: "#ecosystem" },
    { label: "Craft & Longevity", href: "#craft" },
    { label: "For Schools", href: "#for-schools" },
    { label: "Impact", href: "#impact" },
    { label: "Mysuru Origin", href: "#origin" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        paddingTop: isScrolled ? "0.75rem" : "1.25rem",
        paddingBottom: isScrolled ? "0.75rem" : "1.25rem",
        background: isScrolled ? "var(--glass-bg-dark)" : "transparent",
        backdropFilter: isScrolled ? "var(--glass-blur)" : "none",
        borderBottom: isScrolled ? "1px solid var(--glass-border-dark)" : "1px solid transparent",
        transition: "all var(--transition-smooth)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "2.25rem",
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

        {/* Header Right Action */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "1rem",
          }}
          className="desktop-nav"
        >
          <a href="#partner" className="btn btn-primary" style={{ padding: "0.7rem 1.4rem", fontSize: "0.85rem" }}>
            <span>Institutional Kit</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-gold-bright)",
            padding: "0.5rem",
            background: "rgba(255, 255, 255, 0.06)",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--glass-border-dark)",
          }}
          aria-label="Toggle Navigation Menu"
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "var(--color-navy-deep)",
            borderBottom: "1px solid var(--glass-border-dark)",
            padding: "1.5rem 1.5rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "var(--text-lg)",
                fontFamily: "var(--font-serif)",
                color: "var(--text-light-primary)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                paddingBottom: "0.75rem",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partner"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            <span>Request Institutional Kit</span>
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
