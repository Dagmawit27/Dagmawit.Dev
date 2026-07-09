import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Video, Mail, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dagmawit Mesfin" },
      {
        name: "description",
        content:
          "Get in touch by phone, Telegram, WhatsApp, or SMS. Available for freelance and collaboration worldwide.",
      },
      { property: "og:title", content: "Contact — Dagmawit Mesfin" },
      {
        property: "og:description",
        content:
          "Get in touch by phone, Telegram, WhatsApp, or SMS. Available for freelance and collaboration worldwide.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    Icon: Phone,
    label: "Phone",
    value: "0912345678",
    action: "Call now",
    href: "tel:0912345678",
  },
  {
    Icon: MessageCircle,
    label: "Telegram",
    value: "@Dagi_Eskedar",
    action: "Chat now",
    href: "https://t.me/Dagi_Eskedar",
  },
  {
    Icon: Video,
    label: "WhatsApp Video",
    value: "0912345678",
    action: "Video call",
    href: "https://wa.me/0912345678",
  },
  {
    Icon: Mail,
    label: "SMS Message",
    value: "0912345678",
    action: "Message now",
    href: "sms:0912345678",
  },
];

function Contact() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:px-10 md:pt-28">
        <div className="eyebrow">Contact</div>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight text-foreground md:text-7xl">
          Easy to reach —{" "}
          <span className="accent-text">always glad to hear from you.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
          I'm always ready to help by providing considered, honest service.
          Reply within 24 hours.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {channels.map((c, i) => {
            const Icon = c.Icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-soft group flex items-center justify-between gap-6 p-6 transition hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--purple-soft)] text-[var(--purple)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} · {c.label}
                    </div>
                    <div className="mt-1 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {c.value}
                    </div>
                  </div>
                </div>
                <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition group-hover:bg-foreground group-hover:text-background md:inline-flex">
                  {c.action} <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="card-soft relative overflow-hidden bg-foreground p-10 text-background md:p-16">
          <div className="pointer-events-none absolute right-[-20%] top-[-40%] h-[400px] w-[400px] rounded-full bg-[var(--purple)] opacity-30 blur-3xl" />
          <div className="relative text-center">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-background/60">
              Ready when you are
            </div>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Let's create something{" "}
              <span className="text-[var(--purple)]">impactful,</span> together.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
