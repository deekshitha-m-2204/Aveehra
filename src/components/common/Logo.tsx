import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "light", size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  const textSize = size === "sm" ? "1.1rem" : size === "lg" ? "1.8rem" : "1.35rem";
  const subtextSize = size === "sm" ? "0.55rem" : size === "lg" ? "0.75rem" : "0.625rem";

  return (
    <Link
      href="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "clamp(0.5rem, 2vw, 0.85rem)",
        textDecoration: "none",
        minWidth: 0,
      }}
      aria-label="AVEEHRA Homepage"
    >
      {/* Veera Shield + Heera Diamond Crest Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, width: "clamp(28px, 6vw, 36px)", height: "clamp(28px, 6vw, 36px)" }}
      >
        <defs>
          <linearGradient id="aveehraGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="50%" stopColor="#C59B27" />
            <stop offset="100%" stopColor="#8C6710" />
          </linearGradient>
          <linearGradient id="shieldFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1C2E46" />
            <stop offset="100%" stopColor="#0B1420" />
          </linearGradient>
        </defs>

        {/* Outer Shield (Veera) */}
        <path
          d="M24 4L40 10V22C40 33 24 44 24 44C24 44 8 33 8 22V10L24 4Z"
          fill="url(#shieldFill)"
          stroke="url(#aveehraGold)"
          strokeWidth="1.75"
        />

        {/* Diamond Facet (Heera) */}
        <path
          d="M24 13L32 22L24 33L16 22L24 13Z"
          fill="none"
          stroke="url(#aveehraGold)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line x1="16" y1="22" x2="32" y2="22" stroke="url(#aveehraGold)" strokeWidth="1" opacity="0.8" />
        <line x1="24" y1="13" x2="24" y2="33" stroke="url(#aveehraGold)" strokeWidth="1" opacity="0.8" />

        {/* Central Core Point */}
        <circle cx="24" cy="22" r="2" fill="#FFE999" />
      </svg>

      {/* Brand Typographic Wordmark */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, minWidth: 0 }}>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.05rem, 3.5vw, 1.35rem)",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: variant === "dark" ? "var(--text-dark-primary)" : "var(--text-light-primary)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          AVEEHRA
        </span>
        <span
          style={{
            fontSize: "clamp(0.48rem, 1.6vw, 0.625rem)",
            fontWeight: 600,
            letterSpacing: "clamp(0.12em, 1.2vw, 0.28em)",
            color: "var(--color-gold-bright)",
            textTransform: "uppercase",
            marginTop: "3px",
            whiteSpace: "nowrap",
          }}
        >
          MYSURU • CIRCULAR UNIFORMS
        </span>
      </div>
    </Link>
  );
}
