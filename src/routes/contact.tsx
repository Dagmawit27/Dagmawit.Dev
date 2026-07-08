import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Video, Mail } from "lucide-react";

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
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="eyebrow">§ Contact</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            Easy to reach — always glad to hear from you.
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
            I'm always ready to help by providing considered, honest service.
            A good place to work can make your product better — let's build it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <ol className="divide-y divide-border border-t border-b border-border">
          {channels.map((c, i) => {
            const Icon = c.Icon;
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 px-2 py-8 transition hover:bg-soft/60 md:grid-cols-[auto_auto_1fr_auto] md:gap-10"
                >
                  <span className="eyebrow w-10">{String(i + 1).padStart(2, "0")}</span>
                  <Icon className="h-6 w-6 text-foreground" strokeWidth={1.4} />
                  <div>
                    <div className="eyebrow">{c.label}</div>
                    <div className="mt-1 font-serif text-2xl text-foreground md:text-3xl">
                      {c.value}
                    </div>
                  </div>
                  <span className="hidden text-sm text-foreground md:inline">
                    <span className="border-b border-foreground pb-0.5">
                      {c.action} →
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="border-t border-b border-foreground py-16 text-center">
          <div className="eyebrow">§ Ready when you are</div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Let's create something impactful, together.
          </h2>
        </div>
      </section>
    </div>
  );
}
