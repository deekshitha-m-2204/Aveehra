import Logo from "./Logo";
import { Heart, MapPin, Sparkles, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-navy-deep)",
        borderTop: "1px solid var(--glass-border-dark)",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand & Philosophy Column */}
          <div style={{ maxWidth: "340px" }}>
            <Logo size="md" />
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--text-light-secondary)",
                marginTop: "1.25rem",
                lineHeight: 1.65,
              }}
            >
              Aveehra is an institutional uniform brand and circular ecosystem built around three fundamental ideas:{" "}
              <strong>Respect</strong>, <strong>Sustainability</strong>, and <strong>Social Impact</strong>.
            </p>
            <div
              style={{
                marginTop: "1.25rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-gold-bright)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "0.1em",
              }}
            >
              <MapPin size={14} />
              <span>BORN IN MYSURU, KARNATAKA</span>
            </div>
          </div>

          {/* Quick Links: Movement */}
          <div>
            <h4
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                color: "#FFFFFF",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              The Movement
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <a href="#manifesto" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  Philosophy of Respect
                </a>
              </li>
              <li>
                <a href="#ecosystem" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  The Circular Lifecycle
                </a>
              </li>
              <li>
                <a href="#craft" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  Material Science & Durability
                </a>
              </li>
              <li>
                <a href="#impact" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  Water & Textile Diversion
                </a>
              </li>
              <li>
                <a href="#origin" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  Mysuru Origin Story
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Links */}
          <div>
            <h4
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                color: "#FFFFFF",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              For Institutions
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <a href="#for-schools" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  School Partnership Blueprint
                </a>
              </li>
              <li>
                <a href="#partner" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  Request Fabric Sample Kit
                </a>
              </li>
              <li>
                <a href="#impact" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  Student Welfare Fund Model
                </a>
              </li>
              <li>
                <a href="#ecosystem" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  Campus Collection Drives
                </a>
              </li>
              <li>
                <a href="#for-schools" style={{ fontSize: "var(--text-sm)", color: "var(--text-light-muted)" }}>
                  Green School ESG Accreditation
                </a>
              </li>
            </ul>
          </div>

          {/* Integrity & Compliance */}
          <div>
            <h4
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                color: "#FFFFFF",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Governance & Integrity
            </h4>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
              Aveehra is pioneering India’s circular uniform ecosystem. All environmental metrics and waste diversion
              figures are measured using verified textile lifecycle methodologies.
            </p>
            <div
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-sm)",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--glass-border-dark)",
                fontSize: "var(--text-xs)",
                color: "var(--color-gold-bright)",
              }}
            >
              Respect → Extend → Reuse → Recycle
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--glass-border-dark)",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)" }}>
            © {new Date().getFullYear()} AVEEHRA Circular Ecosystem. All Rights Reserved. Mysuru, Karnataka, India.
          </div>
          <div style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)" }}>
            A uniform deserves respect throughout its entire life.
          </div>
        </div>
      </div>
    </footer>
  );
}
