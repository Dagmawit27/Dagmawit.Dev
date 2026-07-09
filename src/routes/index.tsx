import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Sparkles,
  Layers,
  Code2,
  Rocket,
  PenTool,
  Star,
  Circle,
} from "lucide-react";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/")({
  component: Index,
});

const CERTS = [
  "certificate-D7R7F8vV.jpeg",
  "certificate1-LzdNxzpF.jpeg",
  "certificate5-CJ4duV5f.jpeg",
  "certificate3-B2eNIsBn.jpeg",
  "certificate4-FhbM3D0t.jpeg",
  "certificate2-PZglChN6.jpeg",
].map((f) => `https://dagmawit27.github.io/Dagmawit.Developer/assets/${f}`);

const PILLARS = [
  {
    label: "Clarity",
    title: "Design-first scope",
    desc: "User flow, goals, and success measure agreed before a line of code.",
    Icon: Sparkles,
    dot: "bg-emerald-500",
  },
  {
    label: "Speed",
    title: "Milestone delivery",
    desc: "Weekly demos, honest PRs, clear next steps — no black boxes.",
    Icon: Zap,
    dot: "bg-amber-500",
  },
  {
    label: "Execution",
    title: "Senior craft",
    desc: "Modern React, TypeScript, and clean architecture inside your stack.",
    Icon: Code2,
    dot: "bg-sky-500",
  },
  {
    label: "Ownership",
    title: "Handoff-ready",
    desc: "Docs, tests, and code your team can actually maintain.",
    Icon: ShieldCheck,
    dot: "bg-[var(--purple)]",
  },
];

const SERVICES = [
  "Landing Page Sprint",
  "Web Application Build",
  "Frontend Engineering",
  "Portfolio Projects",
  "Ongoing Maintenance",
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[var(--purple-soft)] blur-3xl opacity-70" />
          <div className="absolute left-[-10%] bottom-[-30%] h-[420px] w-[420px] rounded-full bg-[var(--purple-soft)] blur-3xl opacity-60" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 md:grid-cols-[1.15fr_1fr] md:gap-16 md:px-10 md:pt-24 md:pb-32">
          <div>
            <h1 className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground md:text-[4.6rem] lg:text-[5.4rem]">
              Web development
              <br />
              and product engineering{" "}
              <span className="accent-text">for teams that ship.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I'm Dagmawit Mesfin — a computer-science student and independent
              web developer building fast, responsive, production-ready
              websites and interfaces with clean code and considered design.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-85"
              >
                Request estimate <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                View work
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="pill">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                Self-taught · CS @ Univ. of Gondar
              </span>
              <span className="pill">
                <Circle className="h-2 w-2 fill-emerald-500 text-emerald-500" />
                Available for new work
              </span>
              <span className="pill">React · TypeScript · Node</span>
            </div>
          </div>

          {/* Right column — quote card + bento pillars */}
          <div className="flex flex-col gap-4">
            <div className="card-soft flex items-start justify-between gap-6 p-6">
              <div>
                <div className="text-[15px] font-semibold text-foreground">
                  Built for teams shipping to production
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Best fit for founders and studios with a real problem to solve.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Reply in 24h
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {PILLARS.map((p) => (
                <div key={p.title} className="card-soft p-5">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {p.label}
                    </span>
                  </div>
                  <div className="mt-3 text-[15px] font-semibold text-foreground">
                    {p.title}
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <span key={s} className="pill text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PARTNERS / STATS strip */}
      <section className="border-y border-border bg-muted/60">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { n: "5+", l: "Projects shipped" },
              { n: "96%", l: "Client satisfaction" },
              { n: "3+", l: "Years building web" },
              { n: "24h", l: "Reply guarantee" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {s.n}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">How I work with teams</div>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Practical development for{" "}
              <span className="accent-text">real product work.</span>
            </h2>
          </div>
          <Link
            to="/skills"
            className="hidden shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted md:inline-flex"
          >
            See process →
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              Icon: PenTool,
              step: "01",
              title: "Design & scope",
              desc: "Map the flow, agree the success measure, sketch the interface.",
            },
            {
              Icon: Layers,
              step: "02",
              title: "Build in the open",
              desc: "Weekly milestones with live URLs — no black-box handovers.",
            },
            {
              Icon: Rocket,
              step: "03",
              title: "Ship & support",
              desc: "Launch, monitor, hand off — with docs your team can run.",
            },
          ].map((s) => {
            const Icon = s.Icon;
            return (
              <div key={s.title} className="card-soft group p-6 transition hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--purple-soft)] text-[var(--purple)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
                    {s.step}
                  </span>
                </div>
                <div className="mt-6 text-lg font-semibold text-foreground">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="flex items-end justify-between">
            <div>
              <div className="eyebrow">Selected work</div>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Recent case studies.
              </h2>
            </div>
            <Link to="/projects" className="hidden text-sm text-foreground md:inline-flex">
              <span className="rounded-full border border-border bg-background px-4 py-2 font-medium transition hover:bg-background/70">
                See all work →
              </span>
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((p, i) => (
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
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-medium tracking-[0.16em] text-muted-foreground">
                      NO. 0{i + 1}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {p.year} · {p.stack.join(" / ")}
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Read case <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="eyebrow">Continuous learning</div>
        <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          A steady record of{" "}
          <span className="accent-text">certifications.</span>
        </h2>
        <div className="mt-12 flex gap-5 overflow-x-auto pb-4">
          {CERTS.map((src, i) => (
            <div key={i} className="card-soft flex-shrink-0 p-2">
              <img
                src={src}
                alt={`Certificate ${i + 1}`}
                className="h-52 w-auto rounded-lg object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="card-soft relative overflow-hidden bg-foreground p-10 text-background md:p-16">
          <div className="pointer-events-none absolute right-[-20%] top-[-40%] h-[400px] w-[400px] rounded-full bg-[var(--purple)] opacity-30 blur-3xl" />
          <div className="relative">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-background/60">
              Ready when you are
            </div>
            <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Let's build something{" "}
              <span className="text-[var(--purple)]">impactful.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm text-background/70 md:text-base">
              New idea, redesign, or ongoing collaboration — I reply within 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:opacity-85"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
