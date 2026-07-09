import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getProject, projects } from "../lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: function ({ params }) {
    var project = getProject(params.slug);
    if (!project) throw notFound();
    return { project: project };
  },
  head: function ({ loaderData }) {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Dagmawit Mesfin" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    var project = loaderData.project;
    return {
      meta: [
        { title: project.title + " — Case Study" },
        { name: "description", content: project.tagline },
        { property: "og:title", content: project.title + " — Case Study" },
        { property: "og:description", content: project.tagline },
        { property: "og:image", content: project.cover },
        { name: "twitter:image", content: project.cover },
      ],
    };
  },
  component: ProjectDetail,
  errorComponent: ProjectError,
  notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
  var loaderData = Route.useLoaderData();
  var project = loaderData.project;
  var idx = projects.findIndex(function (p) { return p.slug === project.slug; });
  var next = projects[(idx + 1) % projects.length];

  return (
    <div>
      {/* Header */}
      <section className="section-header">
        <div className="container">
          <Link
            to="/projects"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 500, color: "var(--muted-foreground)" }}
          >
            ← All work
          </Link>
          <div className="slug-header-grid">
            <div>
              <div className="eyebrow">Case Study Nº {String(idx + 1).padStart(2, "0")}</div>
              <h1 className="heading" style={{ marginTop: "20px" }}>{project.title}</h1>
              <p className="section-description">{project.tagline}</p>
            </div>
            <div className="card slug-meta-card">
              <div><div className="eyebrow">Year</div><div style={{ marginTop: "4px" }}>{project.year}</div></div>
              <div><div className="eyebrow">Role</div><div style={{ marginTop: "4px" }}>{project.role}</div></div>
              <div><div className="eyebrow">Stack</div><div style={{ marginTop: "4px" }}>{project.stack.join(", ")}</div></div>
              <div>
                <div className="eyebrow">Links</div>
                <div style={{ marginTop: "4px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>Live site <ArrowUpRight size={13} /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>Source <ArrowUpRight size={13} /></a>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover + thumbnail strip */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ overflow: "hidden", padding: "16px" }}>
            {/* main cover */}
            <img
              src={project.cover}
              alt={project.title}
              style={{ width: "100%", maxHeight: "640px", borderRadius: "12px", objectFit: "contain", display: "block" }}
            />
            {/* thumbnail row — only when gallery images exist */}
            {project.gallery && project.gallery.length > 0 && (
              <div style={{
                display: "flex",
                gap: "10px",
                marginTop: "12px",
                justifyContent: "flex-end",
                flexWrap: "wrap",
              }}>
                {project.gallery.map(function (src, i) {
                  return (
                    <img
                      key={i}
                      src={src}
                      alt={project.title + " view " + (i + 1)}
                      style={{
                        height: "80px",
                        width: "120px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        border: "1px solid var(--border)",
                        background: "var(--muted)",
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: "768px" }}>
          <div className="eyebrow">Overview</div>
          <p style={{ marginTop: "24px", fontSize: "24px", fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.02em" }}>
            {project.overview}
          </p>
        </div>
      </section>

      {/* Problem / Approach */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "rgba(245,245,245,0.5)" }}>
        <div className="container section">
          <div className="slug-problem-grid">
            <div>
              <div className="eyebrow">The problem</div>
              <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: 1.7 }}>{project.problem}</p>
            </div>
            <div>
              <div className="eyebrow">The approach</div>
              <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: 1.7 }}>{project.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Highlights</div>
          <div className="slug-highlights-grid">
            {project.highlights.map(function (h, i) {
              return (
                <div key={h} className="card">
                  <span className="eyebrow accent-text">{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ marginTop: "12px", fontSize: "15px", fontWeight: 600, letterSpacing: "-0.02em" }}>{h}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery — only shown when project has gallery images */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: "32px" }}>Gallery</div>
            <div className="slug-gallery-grid">
              {project.gallery.map(function (src, i) {
                return (
                  <div key={i} style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--muted)" }}>
                    <img src={src} alt={project.title + " screenshot " + (i + 1)} style={{ width: "100%", display: "block", objectFit: "contain" }} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Next */}
      <section className="section">
        <div className="container">
          <Link to="/projects/$slug" params={{ slug: next.slug }} className="card slug-next-card">
            <div>
              <div className="eyebrow">Next case study</div>
              <div style={{ marginTop: "10px", fontSize: "1.6rem", fontWeight: 600, letterSpacing: "-0.03em" }}>{next.title}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src={next.cover} alt={next.title} className="slug-next-thumb" />
              <ArrowUpRight size={24} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProjectError({ error, reset }) {
  var router = useRouter();
  console.error(error);
  return (
    <div className="container section" style={{ textAlign: "center" }}>
      <div className="eyebrow">Something broke</div>
      <h1 className="heading" style={{ marginTop: "16px" }}>
        This case study didn't load.
      </h1>
      <button
        onClick={function () { router.invalidate(); reset(); }}
        className="btn btn-primary"
        style={{ marginTop: "32px" }}
      >
        Try again
      </button>
    </div>
  );
}

function ProjectNotFound() {
  var params = Route.useParams();
  return (
    <div className="container section" style={{ textAlign: "center" }}>
      <div className="eyebrow">Nothing filed under that name</div>
      <h1 className="heading" style={{ marginTop: "16px" }}>
        No case study named "{params.slug}".
      </h1>
      <Link
        to="/projects"
        className="btn btn-secondary"
        style={{ marginTop: "32px", display: "inline-flex" }}
      >
        ← Back to all work
      </Link>
    </div>
  );
}

