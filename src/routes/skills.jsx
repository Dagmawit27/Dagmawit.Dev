import { createFileRoute } from "@tanstack/react-router";
import { useRef, useEffect, useState } from "react";
import { Layout, Code2, Server, Globe, Cpu, Database } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: function () {
    return {
      meta: [
        { title: "Skills — Dagmawit Mesfin" },
        { name: "description", content: "My technical skills and technologies." },
        { property: "og:title", content: "Skills — Dagmawit Mesfin" },
      ],
    };
  },
  component: Skills,
});

var stages = [
  { Icon: Layout,   title: "HTML & CSS",            desc: "Building the foundation of the web with semantic markup and responsive styling." },
  { Icon: Code2,    title: "JavaScript",             desc: "Dynamic interactivity and client-side logic for modern web applications." },
  { Icon: Server,   title: "Node.js & Express.js",   desc: "Server-side JavaScript runtime and framework for building scalable APIs." },
  { Icon: Globe,    title: "React & Next.js",         desc: "Modern frontend frameworks for building interactive, performant user interfaces." },
  { Icon: Cpu,      title: "Nest.js & Python/Django", desc: "Structured backend frameworks for enterprise-grade applications." },
  { Icon: Database, title: "Databases",               desc: "MySQL, PostgreSQL, and MongoDB for data persistence and management." },
];

// Build an SVG path that snakes left→right→left through the given y-positions,
// all at x = containerWidth / 2 (the center column).
function buildSnakePath(nodeYs, cx, amplitude) {
  if (nodeYs.length < 2) return "";

  var parts = [];

  for (var i = 0; i < nodeYs.length - 1; i++) {
    var y1 = nodeYs[i];
    var y2 = nodeYs[i + 1];
    var midY = (y1 + y2) / 2;

    // Alternate curve direction each segment
    var dir = i % 2 === 0 ? 1 : -1;
    var cpX = cx + dir * amplitude;

    if (i === 0) {
      parts.push("M " + cx + " " + y1);
    }
    // Cubic bezier: control points pull sideways, path passes through node centers
    parts.push(
      "C " + cpX + " " + (y1 + (midY - y1) * 0.5) +
      ", " + cpX + " " + (midY + (y2 - midY) * 0.5) +
      ", " + cx + " " + y2
    );
  }

  return parts.join(" ");
}

function Skills() {
  var listRef = useRef(null);
  var [svgData, setSvgData] = useState({ w: 0, h: 0, path: "" });

  useEffect(function () {
    function measure() {
      if (!listRef.current) return;
      var listRect = listRef.current.getBoundingClientRect();
      var items = listRef.current.querySelectorAll("[data-skill-node]");
      var nodeYs = [];

      items.forEach(function (el) {
        var r = el.getBoundingClientRect();
        nodeYs.push(r.top - listRect.top + r.height / 2);
      });

      var w = listRect.width;
      var h = listRect.height;
      var cx = w / 2;
      var amplitude = cx * 0.38;

      setSvgData({ w: w, h: h, path: buildSnakePath(nodeYs, cx, amplitude) });
    }

    // immediate + delayed to catch font/image layout shifts
    measure();
    var t1 = setTimeout(measure, 100);
    var t2 = setTimeout(measure, 400);
    window.addEventListener("resize", measure);
    return function () {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div>
      <section className="section-header">
        <div className="container">
          <div className="eyebrow">My Skills</div>
          <h1 className="heading">
            Technologies I work with{" "}
            <span className="accent-text">every day.</span>
          </h1>
          <p className="section-description">
            A comprehensive list of the tools and technologies I use to build modern web applications.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Wrapper — SVG is absolute behind the list */}
          <div style={{ position: "relative" }}>

            {/* Curved SVG path */}
            {svgData.w > 0 && (
              <svg
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: svgData.w,
                  height: svgData.h,
                  pointerEvents: "none",
                  zIndex: 0,
                  overflow: "visible",
                }}
              >
                {/* shadow / glow */}
                <path
                  d={svgData.path}
                  fill="none"
                  stroke="var(--purple)"
                  strokeWidth="6"
                  strokeOpacity="0.08"
                  strokeLinecap="round"
                />
                {/* main dashed curve */}
                <path
                  d={svgData.path}
                  fill="none"
                  stroke="var(--purple)"
                  strokeWidth="2"
                  strokeOpacity="0.45"
                  strokeDasharray="7 9"
                  strokeLinecap="round"
                />
              </svg>
            )}

            {/* Items list */}
            <ol
              ref={listRef}
              style={{ position: "relative", zIndex: 1, listStyle: "none", padding: 0, margin: 0 }}
            >
              {stages.map(function (s, i) {
                var isLeft = i % 2 === 0;
                return (
                  <li
                    key={s.title}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 80px 1fr",
                      alignItems: "center",
                      gap: "24px",
                      marginBottom: i < stages.length - 1 ? "64px" : "0",
                    }}
                  >
                    {/* Left card or spacer */}
                    {isLeft ? (
                      <div className="card" style={{ padding: "24px", textAlign: "right" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px", marginBottom: "12px" }}>
                          <h3 style={{ fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>{s.title}</h3>
                          <span className="skill-number">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted-foreground)", margin: 0 }}>{s.desc}</p>
                      </div>
                    ) : (
                      <div />
                    )}

                    {/* Center icon node — measured by the SVG path builder */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div
                        data-skill-node
                        style={{
                          position: "relative",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          width: "72px", height: "72px",
                          borderRadius: "16px",
                          border: "2px solid var(--border)",
                          background: "var(--background)",
                          boxShadow: "0 2px 16px rgba(139,92,246,0.14)",
                        }}>
                        <div style={{
                          position: "absolute", inset: "-8px", borderRadius: "50%",
                          background: "var(--purple)", opacity: 0.12, filter: "blur(10px)",
                        }} />
                        <s.Icon size={28} style={{ color: "var(--purple)", position: "relative" }} />
                      </div>
                    </div>

                    {/* Right card or spacer */}
                    {!isLeft ? (
                      <div className="card" style={{ padding: "24px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                          <span className="skill-number">{String(i + 1).padStart(2, "0")}</span>
                          <h3 style={{ fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>{s.title}</h3>
                        </div>
                        <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted-foreground)", margin: 0 }}>{s.desc}</p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* NOW LEARNING — continues the path, white card centered */}
      <section style={{ paddingBottom: "0" }}>
        <div className="container">
          <div style={{ position: "relative" }}>

            {/* connector line from last node down to first card */}
            <div style={{
              width: "2px", height: "64px",
              background: "linear-gradient(to bottom, var(--purple), transparent)",
              opacity: 0.3, margin: "0 auto",
            }} />

            {/* ML / Deep Learning card */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(0, 420px) 1fr", gap: "24px", alignItems: "center" }}>
              <div />
              <div
                className="card"
                style={{
                  padding: "36px 32px", textAlign: "center",
                  border: "2px dashed var(--border)", background: "var(--background)",
                  animation: "nowLearnPulse 3s ease-in-out infinite",
                }}
              >
                <div className="eyebrow" style={{ marginBottom: "12px" }}>Now learning</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", margin: "0 0 12px", color: "var(--foreground)" }}>
                  Machine Learning / Deep Learning
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted-foreground)", margin: 0 }}>
                  CNN · RNN · Neural Networks · Computer Vision · NLP
                </p>
              </div>
              <div />
            </div>

            {/* connector between the two cards */}
            <div style={{
              width: "2px", height: "64px",
              background: "linear-gradient(to bottom, var(--purple), var(--purple))",
              opacity: 0.2, margin: "0 auto",
            }} />

            {/* DevOps card */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(0, 420px) 1fr", gap: "24px", alignItems: "center" }}>
              <div />
              <div
                className="card"
                style={{
                  padding: "36px 32px", textAlign: "center",
                  border: "2px dashed var(--border)", background: "var(--background)",
                  animation: "nowLearnPulse 3s ease-in-out infinite",
                  animationDelay: "1.5s",
                }}
              >
                <div className="eyebrow" style={{ marginBottom: "12px" }}>Now learning</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", margin: "0 0 12px", color: "var(--foreground)" }}>
                  DevOps
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted-foreground)", margin: 0 }}>
                  Docker · CI/CD · GitHub Actions · Deployment Pipelines
                </p>
              </div>
              <div />
            </div>

          </div>
        </div>

        <style>{`
          @keyframes nowLearnPulse {
            0%, 100% { transform: scale(1);    box-shadow: 0 2px 16px rgba(139,92,246,0.10); }
            50%       { transform: scale(1.03); box-shadow: 0 6px 32px rgba(139,92,246,0.22); }
          }
        `}</style>
      </section>

      <div style={{ height: "80px" }} />
    </div>
  );
}
