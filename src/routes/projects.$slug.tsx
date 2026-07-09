import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getProject, projects } from "../lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Dagmawit Mesfin" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Case Study` },
        { name: "description", content: project.tagline },
        { property: "og:title", content: `${project.title} — Case Study` },
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
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-10 md:px-10 md:pt-20">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          ← All work
        </Link>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="eyebrow">
              Case Study Nº {String(idx + 1).padStart(2, "0")}
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.03] tracking-tight text-foreground md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              {project.tagline}
            </p>
          </div>
          <dl className="card-soft grid grid-cols-2 gap-y-5 self-end p-6 text-sm">
            <dt className="eyebrow">Year</dt>
            <dd className="text-foreground">{project.year}</dd>
            <dt className="eyebrow">Role</dt>
            <dd className="text-foreground">{project.role}</dd>
            <dt className="eyebrow">Stack</dt>
            <dd className="text-foreground">{project.stack.join(", ")}</dd>
            <dt className="eyebrow">Links</dt>
            <dd className="flex flex-col gap-1.5">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium text-foreground hover:accent-text"
              >
                Live site <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium text-foreground hover:accent-text"
              >
                Source <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </dd>
          </dl>
        </div>
      </section>

      {/* Cover */}
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="card-soft overflow-hidden p-2">
          <img
            src={project.cover}
            alt={project.title}
            className="h-auto max-h-[640px] w-full rounded-xl object-contain"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <div className="eyebrow">Overview</div>
        <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
          {project.overview}
        </p>
      </section>

      {/* Problem / Approach */}
      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-10">
          <div>
            <div className="eyebrow">The problem</div>
            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              {project.problem}
            </p>
          </div>
          <div>
            <div className="eyebrow">The approach</div>
            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="eyebrow">Highlights</div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {project.highlights.map((h: string, i: number) => (
            <div key={h} className="card-soft p-6">
              <span className="text-xs font-semibold tracking-[0.18em] accent-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                {h}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Next */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="card-soft group flex items-center justify-between gap-6 p-6 transition hover:-translate-y-0.5"
        >
          <div>
            <div className="eyebrow">Next case study</div>
            <div className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {next.title}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={next.cover}
              alt={next.title}
              className="hidden h-24 w-36 rounded-lg object-cover md:block"
            />
            <ArrowUpRight className="h-6 w-6 text-foreground" />
          </div>
        </Link>
      </section>
    </div>
  );
}

function ProjectError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);
  return (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <div className="eyebrow">Something broke</div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
        This case study didn't load.
      </h1>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-85"
      >
        Try again
      </button>
    </div>
  );
}

function ProjectNotFound() {
  const { slug } = Route.useParams();
  return (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <div className="eyebrow">Nothing filed under that name</div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
        No case study named "{slug}".
      </h1>
      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted"
      >
        ← Back to all work
      </Link>
    </div>
  );
}
