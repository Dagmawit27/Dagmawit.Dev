import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
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
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm text-muted-foreground transition hover:text-foreground"
          >
            ← All work
          </Link>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="eyebrow">Case Study Nº {String(idx + 1).padStart(2, "0")}</div>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                {project.tagline}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-y-6 self-end border-t border-border pt-8 text-sm">
              <dt className="eyebrow">Year</dt>
              <dd className="text-foreground">{project.year}</dd>
              <dt className="eyebrow">Role</dt>
              <dd className="text-foreground">{project.role}</dd>
              <dt className="eyebrow">Stack</dt>
              <dd className="text-foreground">{project.stack.join(", ")}</dd>
              <dt className="eyebrow">Links</dt>
              <dd className="flex flex-col gap-1">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  Live site ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  Source ↗
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="mx-auto max-w-7xl px-6 pt-16 md:px-10">
        <div className="bg-soft">
          <img
            src={project.cover}
            alt={project.title}
            className="h-auto max-h-[640px] w-full object-contain"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <div className="eyebrow">§ Overview</div>
        <p className="mt-6 font-serif text-3xl leading-snug text-foreground md:text-4xl">
          {project.overview}
        </p>
      </section>

      {/* Problem / Approach */}
      <section className="mx-auto max-w-7xl border-t border-b border-border px-6 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <div className="eyebrow">§ The Problem</div>
            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              {project.problem}
            </p>
          </div>
          <div>
            <div className="eyebrow">§ The Approach</div>
            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="eyebrow">§ Highlights</div>
        <ol className="mt-8 divide-y divide-border border-t border-b border-border">
          {project.highlights.map((h, i) => (
            <li key={h} className="flex items-baseline gap-6 py-6">
              <span className="eyebrow w-16">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-2xl text-foreground md:text-3xl">{h}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Next */}
      <section className="border-t border-border">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-16 md:px-10">
            <div>
              <div className="eyebrow">Next case study</div>
              <div className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
                {next.title} →
              </div>
            </div>
            <img
              src={next.cover}
              alt={next.title}
              className="hidden h-32 w-48 object-cover md:block"
            />
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
      <h1 className="mt-4 font-serif text-4xl text-foreground">
        This case study didn't load.
      </h1>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-8 border-b border-foreground pb-0.5 text-sm text-foreground"
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
      <h1 className="mt-4 font-serif text-4xl text-foreground">
        No case study named "{slug}".
      </h1>
      <Link
        to="/projects"
        className="mt-8 inline-flex border-b border-foreground pb-0.5 text-sm text-foreground"
      >
        ← Back to all work
      </Link>
    </div>
  );
}
