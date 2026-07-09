import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Sparkles, Zap, Code2, ShieldCheck } from "lucide-react";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/")({
  component: Index,
});

var CERTS = [
  "certificate-D7R7F8vV.jpeg",
  "certificate1-LzdNxzpF.jpeg",
  "certificate5-CJ4duV5f.jpeg",
  "certificate3-B2eNIsBn.jpeg",
  "certificate4-FhbM3D0t.jpeg",
  "certificate2-PZglChN6.jpeg",
].map(function (f) {
  return "https://dagmawit27.github.io/Dagmawit.Developer/assets/" + f;
});

var PILLARS = [
  {
    label: "Clarity",
    title: "Design-first scope",
    desc: "User flow, goals, and success measure agreed before a line of code.",
    Icon: Sparkles,
  },
  {
    label: "Speed",
    title: "Milestone delivery",
    desc: "Weekly demos, honest PRs, clear next steps — no black boxes.",
    Icon: Zap,
  },
  {
    label: "Execution",
    title: "Senior craft",
    desc: "Modern React, TypeScript, and clean architecture inside your stack.",
    Icon: Code2,
  },
  {
    label: "Ownership",
    title: "Handoff-ready",
    desc: "Docs, tests, and code your team can actually maintain.",
    Icon: ShieldCheck,
  },
];

var SERVICES = [
  "Landing Page Sprint",
  "Web Application Build",
  "Full-Stack Engineering",
  "Portfolio Projects",
  "Ongoing Maintenance",
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div style={{ display: "grid", gap: "48px" }}>
            <div>
              <h1 className="heading">
                Web development and product engineering{" "}
                <span className="accent-text">for teams that ship.</span>
              </h1>
              <p className="section-description">
                I'm Dagmawit Mesfin — a computer-science student and independent
                web developer building fast, responsive, production-ready
                websites and interfaces with clean code and considered design.
              </p>

              <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link to="/contact" className="header-cta">
                  Request estimate <ArrowUpRight size={14} />
                </Link>
                <Link to="/projects" className="btn btn-secondary">
                  View work
                </Link>
              </div>

              <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <span className="badge badge-purple"><Star size={12} style={{ display: "inline", marginRight: "4px" }} />Self-taught · CS @ Univ. of Gondar</span>
                <span className="badge badge-purple">🟢 Available for new work</span>
                <span className="badge badge-purple">React · JavaScript · Node</span>
              </div>
            </div>

            {/* Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="card" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px" }}>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 600 }}>
                    Built for teams shipping to production
                  </div>
                  <p style={{ marginTop: "4px", fontSize: "14px", color: "var(--muted-foreground)" }}>
                    Best fit for founders and studios with a real problem to solve.
                  </p>
                </div>
                <span className="badge" style={{ background: "#f0fdf4", color: "#15803d", whiteSpace: "nowrap" }}>
                  🟢 Reply in 24h
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {PILLARS.map(function (p) {
                  return (
                    <div key={p.title} className="card">
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <p.Icon size={16} style={{ color: "var(--purple)" }} />
                        <div style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--muted-foreground)" }}>
                          {p.label}
                        </div>
                      </div>
                      <div style={{ marginTop: "8px", fontSize: "15px", fontWeight: 600 }}>
                        {p.title}
                      </div>
                      <p style={{ marginTop: "6px", fontSize: "13px", lineHeight: 1.6, color: "var(--muted-foreground)" }}>
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {SERVICES.map(function (s) {
                  return (
                    <span key={s} className="badge badge-purple">{s}</span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "rgba(245,245,245,0.6)" }}>
        <div className="container" style={{ padding: "40px 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0", justifyContent: "space-between" }}>
            {[
              { n: "1+",  l: "Projects shipped" },
              { n: "96%", l: "Client satisfaction" },
              { n: "2+",  l: "Years building web" },
              { n: "24h", l: "Reply guarantee" },
            ].map(function (s, i, arr) {
              return (
                <div
                  key={s.l}
                  style={{
                    flex: "1 1 0",
                    textAlign: "center",
                    padding: "0 16px",
                    borderRight: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--foreground)" }}>
                    {s.n}
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--muted-foreground)" }}>
                    {s.l}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">How I work with teams</div>
          <h2 className="heading" style={{ marginTop: "20px" }}>
            Practical development for{" "}
            <span className="accent-text">real product work.</span>
          </h2>

          <div style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {[
              { step: "01", title: "Design & scope", desc: "Map the flow, agree the success measure, sketch the interface." },
              { step: "02", title: "Build in the open", desc: "Weekly milestones with live URLs — no black-box handovers." },
              { step: "03", title: "Ship & support", desc: "Launch, monitor, hand off — with docs your team can run." },
            ].map(function (s) {
              return (
                <div key={s.title} className="card">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--purple-soft)", color: "var(--purple)" }}>
                      <Sparkles size={18} />
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", color: "var(--muted-foreground)" }}>
                      {s.step}
                    </span>
                  </div>
                  <div style={{ marginTop: "24px", fontSize: "18px", fontWeight: 600 }}>{s.title}</div>
                  <p style={{ marginTop: "8px", fontSize: "14px", lineHeight: 1.6, color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "rgba(245,245,245,0.5)" }}>
        <div className="container section">
          <div className="eyebrow">Selected work</div>
          <h2 className="heading" style={{ marginTop: "20px" }}>
            Recent case studies.
          </h2>

          <div style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {projects.slice(0, 2).map(function (p, i) {
              return (
                <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="card" style={{ display: "flex", flexDirection: "column", overflow: "hidden", padding: "12px" }}>
                  <div style={{ overflow: "hidden", borderRadius: "12px", background: "var(--muted)" }}>
                    <img
                      src={p.cover}
                      alt={p.title}
                      style={{ height: "240px", width: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "16px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.16em", color: "var(--muted-foreground)" }}>
                        NO. 0{i + 1}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                        {p.year} · {p.stack.join(" / ")}
                      </span>
                    </div>
                    <h3 style={{ marginTop: "8px", fontSize: "24px", fontWeight: 600, letterSpacing: "-0.02em" }}>
                      {p.title}
                    </h3>
                    <p style={{ marginTop: "8px", fontSize: "14px", color: "var(--muted-foreground)" }}>{p.tagline}</p>
                    <span style={{ marginTop: "24px", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
                      Read case <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Continuous learning</div>
          <h2 className="heading" style={{ marginTop: "20px" }}>
            A steady record of{" "}
            <span className="accent-text">certifications.</span>
          </h2>
          <div style={{ marginTop: "48px", display: "flex", gap: "20px", overflowX: "auto", paddingBottom: "16px" }}>
            {CERTS.map(function (src, i) {
              return (
                <div key={i} className="card" style={{ flexShrink: 0, padding: "8px" }}>
                  <img
                    src={src}
                    alt={"Certificate " + (i + 1)}
                    style={{ height: "208px", width: "auto", borderRadius: "8px", objectFit: "contain" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section" style={{ borderRadius: "16px" }}>
            <div className="cta-glow"></div>
            <div className="cta-content">
              <div className="cta-eyebrow">Ready when you are</div>
              <h2 className="cta-heading">
                Let's build something{" "}
                <span className="cta-accent">impactful.</span>
              </h2>
              <p className="cta-description">
                New idea, redesign, or ongoing collaboration — I reply within 24 hours.
              </p>
              <Link to="/contact" className="cta-button">
                Get in touch <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
