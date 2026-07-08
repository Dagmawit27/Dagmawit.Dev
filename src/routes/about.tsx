import { createFileRoute, Link } from "@tanstack/react-router";

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
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="eyebrow">§ About</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            A quiet obsession with clean code and considered detail.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:px-10">
        <div className="order-2 md:order-1">
          <div className="eyebrow">Biography</div>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-foreground md:text-lg">
            <p>
              Hi, I'm <span className="font-serif italic">Dagmawit Mesfin</span> — a
              Computer Science student at the University of Gondar with a
              persistent interest in web development and modern technologies.
            </p>
            <p>
              I specialise in frontend development with HTML, CSS, JavaScript,
              and React, and hold strong ground in Java, C++, data structures,
              and algorithms.
            </p>
            <p>
              A self-taught learner shaped by FreeCodeCamp, Udacity, and endless
              nights on YouTube — I build responsive, SEO-friendly websites
              that turn ideas into impactful, well-crafted digital experiences.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-85"
            >
              See my work →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-foreground px-6 py-3 text-sm text-foreground transition hover:bg-foreground hover:text-background"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative bg-soft">
            <img
              src="https://dagmawit27.github.io/Dagmawit.Developer/assets/picture-black2-KdI19e1c.png"
              alt="Portrait of Dagmawit Mesfin"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="flex items-end justify-between">
            <div>
              <div className="eyebrow">§ Services</div>
              <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
                What I do.
              </h2>
            </div>
          </div>
          <ol className="mt-16 divide-y divide-border border-t border-b border-border">
            {SERVICES.map((s, i) => (
              <li
                key={s}
                className="group flex items-baseline justify-between px-2 py-6 transition hover:bg-soft/60"
              >
                <span className="eyebrow w-16">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 font-serif text-2xl text-foreground md:text-3xl">
                  {s}
                </span>
                <span className="hidden text-sm text-muted-foreground group-hover:text-foreground md:inline">
                  →
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
