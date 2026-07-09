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
          <div style={{ marginTop: "40px", display: "grid", gap: "40px" }}>
            <div>
              <div className="eyebrow">
                Case Study Nº {String(idx + 1).padStart(2, "0")}
              </div>
              <h1 className="heading" style={{ marginTop: "24px" }}>
                {project.title}
              </h1>
              <p className="section-description">
                {project.tagline}
              </p>
            </div>
            <div className="card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignSelf: "end", padding: "24px", fontSize: "14px" }}>
              <div>
                <div className="eyebrow">Year</div>
                <div style={{ marginTop: "4px" }}>{project.year}</div>
              </div>
              <div>
                <div className="eyebrow">Role</div>
                <div style={{ marginTop: "4px" }}>{project.role}</div>
              </div>
              <div>
                <div className="eyebrow">Stack</div>
                <div style={{ marginTop: "4px" }}>{project.stack.join(", ")}</div>
              </div>
              <div>
                <div className="eyebrow">Links</div>
                <div style={{ marginTop: "4px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    Live site <ArrowUpRight size={13} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    Source <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ overflow: "hidden", padding: "8px" }}>
            <img
              src={project.cover}
              alt={project.title}
              style={{ width: "100%", maxHeight: "640px", borderRadius: "12px", objectFit: "contain" }}
            />
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
          <div className="grid grid-2 gap-6">
            <div>
              <div className="eyebrow">The problem</div>
              <p style={{ marginTop: "24px", fontSize: "16px", lineHeight: 1.7 }}>
                {project.problem}
              </p>
            </div>
            <div>
              <div className="eyebrow">The approach</div>
              <p style={{ marginTop: "24px", fontSize: "16px", lineHeight: 1.7 }}>
                {project.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Highlights</div>
          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {project.highlights.map(function (h, i) {
              return (
                <div key={h} className="card">
                  <span className="eyebrow accent-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ marginTop: "16px", fontSize: "16px", fontWeight: 600, letterSpacing: "-0.02em" }}>
                    {h}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery — only shown when project has multiple images */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: "32px" }}>Gallery</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
              {project.gallery.map(function (src, i) {
                return (
                  <div key={i} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--muted)" }}>
                    <img
                      src={src}
                      alt={project.title + " screenshot " + (i + 1)}
                      style={{ width: "100%", display: "block", objectFit: "contain" }}
                    />
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
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="card"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}
          >
            <div>
              <div className="eyebrow">Next case study</div>
              <div style={{ marginTop: "12px", fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.03em" }}>
                {next.title}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img
                src={next.cover}
                alt={next.title}
                style={{ height: "96px", width: "144px", borderRadius: "8px", objectFit: "cover" }}
              />
              <span style={{ fontSize: "24px" }}><ArrowUpRight size={24} /></span>
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

