import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Code2, Layers, PenTool, Smartphone, Rocket } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Dagmawit Mesfin" },
      {
        name: "description",
        content:
          "A journey through the disciplines I practise — from ideation to launch — visualised as a winding path of craft.",
      },
      { property: "og:title", content: "Skills — Dagmawit Mesfin" },
      {
        property: "og:description",
        content:
          "A journey through the disciplines I practise — from ideation to launch — visualised as a winding path of craft.",
      },
    ],
  }),
  component: Skills,
});

const stages = [
  {
    Icon: Lightbulb,
    title: "Ideation",
    desc: "Forming, refining, and shaping initial concepts into a clear direction for the project.",
  },
  {
    Icon: PenTool,
    title: "UI / UX Design",
    desc: "Translating intent into interfaces — hierarchy, typography, and rhythm that respect the reader.",
  },
  {
    Icon: Code2,
    title: "Frontend Development",
    desc: "Interactive, responsive, accessible interfaces built with HTML, CSS, JavaScript, and React.",
  },
  {
    Icon: Layers,
    title: "Backend & Full-Stack",
    desc: "Server-side logic, APIs, and databases — assembling the pieces that power the whole product.",
  },
  {
    Icon: Smartphone,
    title: "Testing & Responsive",
    desc: "Ensuring the application is reliable, fast, and behaves gracefully from 320px up to 4K.",
  },
  {
    Icon: Rocket,
    title: "Deployment & Launch",
    desc: "Shipping to a live environment and ensuring a considered, smooth launch for real users.",
  },
];

function Skills() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="eyebrow">§ The Journey</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            Every project walks the same path — from spark to launch.
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
            A traced route through the disciplines I practise. Follow the line.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        {/* SVG winding path */}
        <svg
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-full w-[560px] -translate-x-1/2"
          viewBox="0 0 400 1800"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M 200 40 C 60 200, 60 320, 200 460 C 340 600, 340 720, 200 860 C 60 1000, 60 1120, 200 1260 C 340 1400, 340 1520, 200 1760"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="path-draw text-foreground/40"
          />
        </svg>

        <ol className="relative z-10 space-y-24">
          {stages.map((s, i) => {
            const left = i % 2 === 0;
            const Icon = s.Icon;
            return (
              <li
                key={s.title}
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${
                  left ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Card */}
                <div
                  className={`bg-background/90 border border-border p-8 backdrop-blur-sm ${
                    left ? "md:mr-16 md:text-right" : "md:ml-16"
                  }`}
                >
                  <div
                    className={`flex items-baseline gap-4 ${
                      left ? "md:justify-end" : ""
                    }`}
                  >
                    <span className="inline-flex h-9 min-w-9 items-center justify-center bg-foreground px-2 font-serif text-lg text-background">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-3xl text-foreground md:text-4xl">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.desc}
                  </p>
                </div>

                {/* Node */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div
                      className="absolute inset-0 -m-2 rounded-full opacity-20 blur-md"
                      style={{ background: "var(--accent)" }}
                    />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-foreground bg-background">
                      <Icon className="h-9 w-9 text-foreground" strokeWidth={1.25} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
