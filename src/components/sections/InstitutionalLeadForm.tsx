"use client";

import { useState } from "react";
import { Send, CheckCircle, Package, Calendar, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { FAQ_ITEMS } from "@/content/data";

export default function InstitutionalLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    designation: "Principal / Trustee",
    email: "",
    phone: "",
    city: "Mysuru",
    studentStrength: "500 - 1,500 students",
    requestType: "both",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="partner"
      className="section-spacing"
      style={{
        position: "relative",
        background: "var(--color-navy-surface)",
        borderTop: "1px solid var(--glass-border-dark)",
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="brand-badge">INSTITUTIONAL ONBOARDING</span>
          <h2
            style={{
              fontSize: "var(--text-4xl)",
              color: "#FFFFFF",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Bring the Circular Movement to Your Academy
          </h2>
          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "var(--text-lg)",
              color: "var(--text-light-secondary)",
            }}
          >
            Request a complimentary Institutional Fabric & Sample Kit, or schedule an executive consultation with
            Aveehra’s founding team in Mysuru.
          </p>
        </div>

        {/* Form + FAQ Grid */}
        <div className="editorial-grid" style={{ alignItems: "start" }}>
          {/* Left Column: Interactive Form */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(1.25rem, 3.5vw, 3rem)",
              background: "rgba(10, 18, 29, 0.85)",
              border: "1px solid var(--color-gold-border)",
              boxShadow: "var(--shadow-gold)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "clamp(2rem, 4vw, 3rem) 1rem" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(197, 155, 39, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  <CheckCircle size={36} style={{ color: "var(--color-gold-bright)" }} />
                </div>
                <h3 style={{ fontSize: "var(--text-2xl)", color: "#FFFFFF", marginBottom: "0.75rem", textWrap: "balance" }}>
                  Thank You, {formData.contactPerson || "Partner"}
                </h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--text-light-secondary)", marginBottom: "2rem", textWrap: "pretty" }}>
                  Your request for <strong>{formData.schoolName || "your institution"}</strong> has been received. Our
                  Mysuru founding liaison will reach out to schedule your sample kit delivery and consultation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ padding: "0.75rem 1.5rem" }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <Package size={20} style={{ color: "var(--color-gold-bright)", flexShrink: 0 }} />
                  <h3 style={{ fontSize: "var(--text-xl)", color: "#FFFFFF", textWrap: "balance" }}>
                    Institutional Consultation & Sample Kit
                  </h3>
                </div>

                {/* Grid Inputs 1 */}
                <div className="responsive-2col">
                  <div>
                    <label style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--text-light-muted)", marginBottom: "0.35rem" }}>
                      Institution / School Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mysuru Public Academy"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid var(--glass-border-dark)",
                        color: "#FFFFFF",
                        minHeight: "44px",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--text-light-muted)", marginBottom: "0.35rem" }}>
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Raghavendra Rao"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid var(--glass-border-dark)",
                        color: "#FFFFFF",
                        minHeight: "44px",
                      }}
                    />
                  </div>
                </div>

                {/* Grid Inputs 2 */}
                <div className="responsive-2col">
                  <div>
                    <label style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--text-light-muted)", marginBottom: "0.35rem" }}>
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="principal@academy.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid var(--glass-border-dark)",
                        color: "#FFFFFF",
                        minHeight: "44px",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--text-light-muted)", marginBottom: "0.35rem" }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid var(--glass-border-dark)",
                        color: "#FFFFFF",
                        minHeight: "44px",
                      }}
                    />
                  </div>
                </div>

                {/* Grid Inputs 3 */}
                <div className="responsive-2col">
                  <div>
                    <label style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--text-light-muted)", marginBottom: "0.35rem" }}>
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="Mysuru / Bengaluru / Other"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid var(--glass-border-dark)",
                        color: "#FFFFFF",
                        minHeight: "44px",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--text-light-muted)", marginBottom: "0.35rem" }}>
                      Approximate Student Strength
                    </label>
                    <select
                      value={formData.studentStrength}
                      onChange={(e) => setFormData({ ...formData, studentStrength: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "var(--color-navy-surface)",
                        border: "1px solid var(--glass-border-dark)",
                        color: "#FFFFFF",
                        minHeight: "44px",
                      }}
                    >
                      <option value="Under 500 students">Under 500 students</option>
                      <option value="500 - 1,500 students">500 - 1,500 students</option>
                      <option value="1,500 - 3,000 students">1,500 - 3,000 students</option>
                      <option value="3,000+ students">3,000+ students</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--text-light-muted)", marginBottom: "0.35rem" }}>
                    Specific Interests / Additional Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your current uniform cycle, board affiliation (CBSE/ICSE/IB), or questions about our circular takeback model..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--glass-border-dark)",
                      color: "#FFFFFF",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    marginTop: "0.5rem",
                    width: "100%",
                    padding: "0.95rem 1.5rem",
                    whiteSpace: "normal",
                    minHeight: "48px",
                  }}
                >
                  <span>Request Institutional Kit & Consultation</span>
                  <Send size={16} style={{ flexShrink: 0 }} />
                </button>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    justifyContent: "center",
                    marginTop: "0.5rem",
                    textAlign: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <ShieldCheck size={16} style={{ color: "var(--color-gold-bright)", flexShrink: 0 }} />
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-light-muted)", lineHeight: 1.4 }}>
                    Direct liaison with Aveehra founding office • No obligation
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: FAQ Accordion */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="brand-badge">FREQUENTLY ASKED QUESTIONS</span>
              <h3 style={{ fontSize: "var(--text-2xl)", color: "#FFFFFF", marginTop: "0.75rem", textWrap: "balance" }}>
                Understanding the Circular Partnership
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      borderRadius: "var(--radius-md)",
                      background: isOpen ? "rgba(16, 27, 43, 0.85)" : "rgba(16, 27, 43, 0.4)",
                      border: isOpen ? "1px solid var(--color-gold-border)" : "1px solid var(--glass-border-dark)",
                      overflow: "hidden",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      style={{
                        width: "100%",
                        padding: "clamp(0.85rem, 2.5vw, 1.25rem)",
                        minHeight: "48px",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: isOpen ? "var(--color-gold-bright)" : "#FFFFFF",
                        fontSize: "clamp(0.9rem, 2vw, 1rem)",
                        fontWeight: 600,
                        gap: "0.75rem",
                      }}
                      aria-expanded={isOpen}
                    >
                      <span style={{ textWrap: "pretty" }}>{item.question}</span>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          flexShrink: 0,
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: "4px",
                        }}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 clamp(0.85rem, 2.5vw, 1.25rem) clamp(0.85rem, 2.5vw, 1.25rem) clamp(0.85rem, 2.5vw, 1.25rem)",
                          fontSize: "var(--text-sm)",
                          color: "var(--text-light-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
