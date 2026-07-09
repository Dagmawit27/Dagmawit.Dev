import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: function () {
    return {
      meta: [
        { title: "About — Dagmawit Mesfin" },
        {
          name: "description",
          content:
            "Computer science student at the University of Gondar. Frontend-focused, self-taught, obsessed with clean, considered digital work.",
        },
        { property: "og:title", content: "About — Dagmawit Mesfin" },
        {
          property: "og:description",
          content:
            "Computer science student at the University of Gondar. Frontend-focused, self-taught, obsessed with clean, considered digital work.",
        },
      ],
    };
  },
  component: About,
});

var SERVICES = [
  { title: "Frontend Development" },
  { title: "Backend Development" },
  { title: "Full-Stack Development" },
  { title: "UI/UX Design" },
  { title: "Responsive Design" },
  { title: "Figma" },
  { title: "Website Optimization" },
  { title: "Website Maintenance" },
  { title: "E-Commerce Development" },
  { title: "Portfolio Websites" },
  { title: "Landing Page Design" },
];

function About() {
  return (
    <div>
      <section className="section-header">
        <div className="container">
          <div className="eyebrow">About</div>
          <h1 className="heading">
            A quiet obsession with clean code and{" "}
            <span className="accent-text">considered detail.</span>
          </h1>
        </div>
      </section>

      {/* BIOGRAPHY + IMAGE side by side */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
            alignItems: "center",
          }}>
            {/* LEFT — bio text */}
            <div>
              <div className="eyebrow">Biography</div>
              <div style={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--foreground)",
              }}>
                <p>
                  Hi, I'm <strong>Dagmawit Mesfin</strong> — a Computer Science
                  student at the University of Gondar with a persistent interest in
                  web development and modern technologies.
                </p>
                <p>
                  I specialise in frontend development with HTML, CSS, JavaScript,
                  and React, and hold strong ground in Java, C++, data structures,
                  and algorithms.
                </p>
                <p>
                  A self-taught learner shaped by FreeCodeCamp, Udacity, and endless
                  nights on YouTube — I build responsive, SEO-friendly websites that
                  turn ideas into impactful, well-crafted digital experiences.
                </p>
              </div>
              <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link to="/projects" className="header-cta">
                  See my work <ArrowUpRight size={14} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in touch
                </Link>
              </div>
            </div>

            {/* RIGHT — portrait */}
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 40px rgba(15,23,42,0.10)",
              background: "var(--muted)",
              maxWidth: "340px",
              justifySelf: "center",
            }}>
              <img
                src="/assets/myPicture.png"
                alt="Portrait of Dagmawit Mesfin"
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "contain",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={function (e) { e.currentTarget.style.transform = "scale(1.01)"; }}
                onMouseLeave={function (e) { e.currentTarget.style.transform = "scale(1)"; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — badge pills */}
      <section style={{ borderTop: "1px solid var(--border)", background: "rgba(245,245,245,0.5)" }}>
        <div className="container section">
          <div className="eyebrow">Services</div>
          <h2 className="heading" style={{ marginTop: "20px" }}>
            What I do.
          </h2>
          <ul style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "10px", listStyle: "none", padding: 0 }}>
            {SERVICES.map(function (s, i) {
              return (
                <li key={s.title} className="badge badge-purple" style={{ fontSize: "13px", padding: "8px 16px" }}>
                  <span style={{ color: "var(--muted-foreground)", marginRight: "8px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontWeight: 500 }}>{s.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
