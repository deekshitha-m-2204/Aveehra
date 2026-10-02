import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function Logo({ variant = "light", size = "md", showTagline = true }: LogoProps) {
  const iconHeight = size === "sm" ? 26 : size === "lg" ? 42 : 34;

  return (
    <Link
      href="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "clamp(0.5rem, 1.8vw, 0.85rem)",
        textDecoration: "none",
        minWidth: 0,
        flexShrink: 1,
      }}
      aria-label="AVEEHRA - Pioneering India's Circular Uniform Ecosystem"
    >
      {/* Official Aveehra Monogram Crest Icon */}
      <div
        style={{
          position: "relative",
          flexShrink: 0,
          height: `clamp(26px, 5.5vw, ${iconHeight}px)`,
          width: `calc(clamp(26px, 5.5vw, ${iconHeight}px) * 1.69)`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/aveehra-icon.png"
          alt="Aveehra Crest"
          width={400}
          height={236}
          priority
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Brand Typographic Wordmark & Tagline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1,
          minWidth: 0,
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.05rem, 3.2vw, 1.35rem)",
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: variant === "dark" ? "var(--text-dark-primary)" : "#FFFFFF",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            lineHeight: 1.1,
          }}
        >
          AVEEHRA
        </span>

        {showTagline && (
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(0.42rem, 1.3vw, 0.58rem)",
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "var(--color-gold-bright)",
              marginTop: "2px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: 1.2,
            }}
          >
            Pioneering India&apos;s Circular Uniform Ecosystem
          </span>
        )}
      </div>
    </Link>
  );
}
