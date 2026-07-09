import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:px-10 md:pt-28">
        <div className="eyebrow">Selected work</div>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight text-foreground md:text-7xl">
          Case studies in code,{" "}
          <span className="accent-text">clarity, and craft.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="card-soft group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5"
            >
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col p-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-medium tracking-[0.16em] text-muted-foreground">
                    NO. {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {p.year} · {p.stack.join(" / ")}
                  </span>
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  {p.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  Read case study <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
