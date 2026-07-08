import { createFileRoute, Link } from "@tanstack/react-router";
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

const VIDEO = "https://dagmawit27.github.io/Dagmawit.Developer/assets/bg3-CrZAOuFo.mp4";

function Index() {
  return (
    <div>
      {/* HERO — background video preserved */}
      <section className="relative isolate overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster=""
          src={VIDEO}
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24 md:px-10">
          <div className="eyebrow text-white/70">Portfolio · Est. 2024</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-white md:text-7xl lg:text-[5.5rem]">
            I'm Dagmawit Mesfin —<br />
            <span className="italic text-white/85">
              programmer, web developer, problem solver.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Elevate your brand with custom web solutions. Showcasing your story
            through clean code and considered digital experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white px-6 py-3 text-sm font-medium tracking-wide text-deep-ink transition hover:bg-white/85"
              style={{ color: "#0d0d0d" }}
            >
              Work with me →
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center border border-white/50 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-white/10"
            >
              View my work
            </Link>
          </div>
          <div className="pointer-events-none absolute bottom-8 left-6 right-6 flex items-end justify-between text-xs text-white/60 md:left-10 md:right-10">
            <span className="font-serif italic">"Turning ideas into clean code."</span>
            <span className="hidden md:inline">Scroll ↓</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { n: "5+", l: "Design projects completed" },
            { n: "96%", l: "Client satisfaction rate" },
            { n: "3+", l: "Years of experience" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-14 md:px-10">
              <div className="font-serif text-6xl text-foreground md:text-7xl">{s.n}</div>
              <div className="eyebrow mt-4">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="eyebrow">§ 01 — Selected Work</div>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Recent case studies.
            </h2>
          </div>
          <Link to="/projects" className="hidden text-sm text-foreground md:inline-flex">
            <span className="border-b border-foreground pb-0.5">See all work →</span>
          </Link>
        </div>
        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {projects.slice(0, 2).map((p, i) => (
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
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <span className="eyebrow">Nº 0{i + 1}</span>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
              <h3 className="mt-2 font-serif text-3xl text-foreground">{p.title}</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">{p.tagline}</p>
              <span className="mt-4 inline-flex text-sm text-foreground">
                <span className="border-b border-foreground pb-0.5">Read case →</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="border-t border-border bg-soft/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="eyebrow">§ 02 — Certificates</div>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            A steady record of learning.
          </h2>
        </div>
        <div className="relative overflow-hidden pb-20">
          <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:px-10">
            {CERTS.map((src, i) => (
              <div key={i} className="flex-shrink-0">
                <img
                  src={src}
                  alt={`Certificate ${i + 1}`}
                  className="h-56 w-auto border border-border bg-background object-contain p-2 shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10">
        <div className="border-t border-b border-foreground py-16 text-center">
          <div className="eyebrow">§ 03 — Let's build</div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground md:text-base">
            Whether it's a new idea, collaboration, or freelance work — I'd love
            to hear from you.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background transition hover:opacity-85"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
