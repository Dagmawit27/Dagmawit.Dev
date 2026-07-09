import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

function NotFoundComponent() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
      <div style={{ maxWidth: "28rem", textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: "24px" }}>Error 404</div>
        <h1 style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.04em" }}>
          Page not <span className="accent-text">found.</span>
        </h1>
        <p style={{ marginTop: "16px", fontSize: "14px", color: "var(--muted-foreground)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ marginTop: "32px" }}>
          <Link to="/" className="header-cta">
            Return home <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
      <div style={{ maxWidth: "28rem", textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: "24px" }}>Something broke</div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 600, letterSpacing: "-0.04em" }}>
          This page didn't <span className="accent-text">load.</span>
        </h1>
        <p style={{ marginTop: "16px", fontSize: "14px", color: "var(--muted-foreground)" }}>
          Try again, or head back to the homepage.
        </p>
        <div style={{ marginTop: "32px", display: "flex", justifyContent: "center", gap: "12px" }}>
          <button onClick={() => { router.invalidate(); reset(); }} className="header-cta">
            Try again
          </button>
          <a href="/" className="btn btn-secondary">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function LogoMark() {
  return (
    <span className="logo-mark">
      <span>D</span>
      <span className="logo-dot"></span>
    </span>
  );
}

function SiteHeader() {
  const navItems = [
    { to: "/projects", label: "Work" },
    { to: "/skills", label: "Skills" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="container header-content">
        <div className="header-top">
          <Link to="/" className="logo">
            <LogoMark />
            <div className="logo-text">
              <span className="logo-name">DAGMAWIT</span>
              <span className="logo-subtitle">Web Development</span>
            </div>
          </Link>
          <nav className="nav">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "nav-link active" }}
                inactiveProps={{ className: "nav-link" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="header-cta">
            Let's Talk <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <div className="footer-brand">
            <LogoMark />
            <span className="footer-brand-text">DAGMAWIT MESFIN</span>
          </div>
          <p className="footer-description">
            Independent web developer building fast, considered, production-ready
            interfaces for teams that care about the details.
          </p>
        </div>
        <div>
          <div className="footer-section-title">Navigate</div>
          <ul className="footer-links">
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/skills" className="footer-link">Skills</Link></li>
            <li><Link to="/projects" className="footer-link">Selected Work</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-section-title">Elsewhere</div>
          <ul className="footer-links">
            <li><a href="https://github.com/Dagmawit27" target="_blank" rel="noreferrer" className="footer-link">GitHub <ArrowUpRight size={12} style={{ display: "inline" }} /></a></li>
            <li><a href="https://t.me/Dagi_Eskedar" target="_blank" rel="noreferrer" className="footer-link">Telegram <ArrowUpRight size={12} style={{ display: "inline" }} /></a></li>
            <li><a href="tel:0912345678" className="footer-link">Phone <ArrowUpRight size={12} style={{ display: "inline" }} /></a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Dagmawit Mesfin — All rights reserved.</span>
        <span>Gondar, Ethiopia · Available worldwide</span>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <SiteHeader />
        <main className="main">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
