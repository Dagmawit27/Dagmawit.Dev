import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/projects")({
  head: function () {
    return {
      meta: [
        { title: "Selected Work — Dagmawit Mesfin" },
        {
          name: "description",
          content: "Case studies packaged around real project proof.",
        },
        { property: "og:title", content: "Selected Work — Dagmawit Mesfin" },
      ],
    };
  },
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div>
      <section className="section-header">
        <div className="container">
          <div className="eyebrow">Selected work</div>
          <h1 className="heading">
            Case studies packaged around{" "}
            <span className="accent-text">real project proof.</span>
          </h1>
          <p className="section-description">
            Each project is framed the way a serious evaluator reviews delivery:
            the problem, the constraints, the solution, the outcome, and the
            technologies that made it work.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {projects.map(function (p, i) {
            return (
              <div
                key={p.slug}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  minHeight: "480px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: p.upcoming
                    ? "2px solid rgba(139,92,246,0.3)"
                    : "1px solid var(--border)",
                  marginBottom: "48px",
                  background: "var(--background)",
                  boxShadow: "0 2px 24px rgba(15,23,42,0.07)",
                }}
              >
                {/* LEFT — cover image centered with padding */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "var(--muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "32px",
                  }}
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    style={{
                      width: "100%",
                      maxHeight: "360px",
                      objectFit: "contain",
                      borderRadius: "10px",
                      boxShadow: "0 8px 32px rgba(15,23,42,0.18)",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={function (e) {
                      e.currentTarget.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={function (e) {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  {/* number badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      background: "rgba(0,0,0,0.55)",
                      backdropFilter: "blur(6px)",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      color: "#fff",
                    }}
                  >
                    NO. {String(i + 1).padStart(2, "0")}
                  </div>
                  {p.upcoming && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                      }}
                    >
                      <span className="badge badge-solid">Upcoming</span>
                    </div>
                  )}
                </div>

                {/* RIGHT — content */}
                <div
                  style={{
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {/* year + role */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      <span className="project-year">{p.year}</span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        · {p.role}
                      </span>
                    </div>

                    <h2 className="project-title" style={{ marginTop: 0 }}>
                      {p.title}
                    </h2>
                    <p className="project-tagline">{p.tagline}</p>

                    {/* problem / solution */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                        marginTop: "24px",
                        marginBottom: "24px",
                      }}
                    >
                      <div>
                        <h3 className="project-section-title">Problem</h3>
                        <p className="project-section-text">{p.problem}</p>
                      </div>
                      <div>
                        <h3 className="project-section-title">Solution</h3>
                        <p className="project-section-text">{p.approach}</p>
                      </div>
                    </div>

                    {/* highlights */}
                    <div style={{ marginBottom: "20px" }}>
                      <h3 className="project-section-title">Key Highlights</h3>
                      <ul className="project-highlights space-y-2">
                        {p.highlights.map(function (h, idx) {
                          return (
                            <li key={idx} className="project-highlight">
                              {h}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* stack */}
                    <div
                      className="tech-stack"
                      style={{ marginBottom: "24px" }}
                    >
                      {p.stack.map(function (tech) {
                        return (
                          <span key={tech} className="badge badge-purple">
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* links */}
                  <div className="project-links">
                    {!p.upcoming && (
                      <Link
                        to="/projects/$slug"
                        params={{ slug: p.slug }}
                        className="project-link"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        View case study <ArrowUpRight size={14} />
                      </Link>
                    )}
                    {p.github && !p.upcoming && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link-secondary"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                    {p.live && !p.upcoming && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link-secondary"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {p.upcoming && (
                      <span
                        className="project-link"
                        style={{ color: "var(--purple)" }}
                      >
                        In Progress — Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
