import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Work — Dagmawit Mesfin" },
      {
        name: "description",
        content:
          "A collection of case studies — responsive websites and interfaces built with care.",
      },
      { property: "og:title", content: "Selected Work — Dagmawit Mesfin" },
      {
        property: "og:description",
        content:
          "A collection of case studies — responsive websites and interfaces built with care.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="eyebrow">§ Selected Work</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            Case studies in code, clarity, and craft.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="overflow-hidden bg-soft">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <span className="eyebrow">Nº {String(i + 1).padStart(2, "0")}</span>
                <span className="text-xs text-muted-foreground">{p.year} · {p.stack.join(" / ")}</span>
              </div>
              <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
                {p.title}
              </h2>
              <p className="mt-2 max-w-lg text-sm text-muted-foreground md:text-base">
                {p.tagline}
              </p>
              <span className="mt-5 inline-flex text-sm text-foreground">
                <span className="border-b border-foreground pb-0.5">
                  Read the case study →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
