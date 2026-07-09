import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
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
  }),
  component: About,
});

const SERVICES = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "UI/UX Design",
  "Responsive Design",
  "Figma",
  "Website Optimization",
  "Website Maintenance",
  "E-Commerce Development",
  "Portfolio Websites",
  "Landing Page Design",
];

function About() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10 md:pt-28">
        <div className="eyebrow">About</div>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight text-foreground md:text-7xl">
          A quiet obsession with clean code and{" "}
          <span className="accent-text">considered detail.</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-10">
        <div className="order-2 md:order-1">
          <div className="eyebrow">Biography</div>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground md:text-lg">
            <p>
              Hi, I'm <span className="font-semibold">Dagmawit Mesfin</span> — a
              Computer Science student at the University of Gondar with a persistent
              interest in web development and modern technologies.
            </p>
            <p>
              I specialise in frontend development with HTML, CSS, JavaScript, and
              React, and hold strong ground in Java, C++, data structures, and
              algorithms.
            </p>
            <p>
              A self-taught learner shaped by FreeCodeCamp, Udacity, and endless
              nights on YouTube — I build responsive, SEO-friendly websites that
              turn ideas into impactful, well-crafted digital experiences.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-85"
            >
              See my work <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="card-soft overflow-hidden p-2">
            <img
              src="https://dagmawit27.github.io/Dagmawit.Developer/assets/picture-black2-KdI19e1c.png"
              alt="Portrait of Dagmawit Mesfin"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="eyebrow">Services</div>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            What I do.
          </h2>
          <ul className="mt-14 flex flex-wrap gap-2.5">
            {SERVICES.map((s, i) => (
              <li key={s} className="pill bg-background text-sm">
                <span className="text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
