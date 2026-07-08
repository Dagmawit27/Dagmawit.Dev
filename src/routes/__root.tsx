import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-6">Error 404</div>
        <h1 className="font-serif text-6xl text-foreground">Page not found.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center border-b border-foreground pb-1 text-sm font-medium text-foreground transition hover:opacity-60"
          >
            ← Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-6">Something broke</div>
        <h1 className="font-serif text-4xl text-foreground">This page didn't load.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Try again, or head back to the homepage.
        </p>
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border-b border-foreground pb-1 text-foreground transition hover:opacity-60"
          >
            Try again
          </button>
          <a
            href="/"
            className="border-b border-foreground pb-1 text-foreground transition hover:opacity-60"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dagmawit Mesfin — Web Developer & Designer" },
      {
        name: "description",
        content:
          "Portfolio of Dagmawit Mesfin — a computer science student and web developer crafting clean, formal, editorial digital experiences.",
      },
      { name: "author", content: "Dagmawit Mesfin" },
      { property: "og:title", content: "Dagmawit Mesfin — Web Developer & Designer" },
      {
        property: "og:description",
        content:
          "Portfolio of Dagmawit Mesfin — a computer science student and web developer crafting clean, formal, editorial digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Work" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight text-foreground">
            Dagmawit
          </span>
          <span className="eyebrow hidden md:inline">Mesfin · Developer</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-sm tracking-wide transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden text-sm text-foreground md:inline-flex md:items-center"
        >
          <span className="border-b border-foreground pb-0.5">Work with me →</span>
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="eyebrow">The Studio</div>
          <p className="mt-4 font-serif text-2xl leading-tight text-foreground">
            Turning ideas into clean code — one considered detail at a time.
          </p>
        </div>
        <div>
          <div className="eyebrow">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/skills" className="hover:text-foreground">Skills</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Selected Work</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow">Elsewhere</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="https://github.com/Dagmawit27" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub ↗</a></li>
            <li><a href="https://t.me/Dagi_Eskedar" target="_blank" rel="noreferrer" className="hover:text-foreground">Telegram ↗</a></li>
            <li><a href="tel:0912345678" className="hover:text-foreground">Phone</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} Dagmawit Mesfin. All rights reserved.</span>
          <span>Gondar, Ethiopia — Available worldwide.</span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
