import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Video, Mail, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: function () {
    return {
      meta: [
        { title: "Contact — Dagmawit Mesfin" },
        {
          name: "description",
          content:
            "Get in touch by phone, Telegram, WhatsApp, SMS, or contact form. Available for freelance and collaboration worldwide.",
        },
        { property: "og:title", content: "Contact — Dagmawit Mesfin" },
        {
          property: "og:description",
          content:
            "Get in touch by phone, Telegram, WhatsApp, SMS, or contact form. Available for freelance and collaboration worldwide.",
        },
      ],
    };
  },
  component: Contact,
});

var channels = [
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
  var [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  var [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(function () {
      alert("Thank you for your message! I'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  }

  function handleChange(e) {
    setFormData(Object.assign({}, formData, { [e.target.name]: e.target.value }));
  }

  return (
    <div>
      <section className="section-header">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1 className="heading">
            Easy to reach —{" "}
            <span className="accent-text">always glad to hear from you.</span>
          </h1>
          <p className="section-description">
            I'm always ready to help by providing considered, honest service.
            Reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-channels">
            {channels.map(function (c, i) {
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card contact-channel"
                >
                  <div className="contact-channel-info">
                    <span className="contact-channel-icon">
                      <c.Icon size={20} />
                    </span>
                    <div>
                      <div className="contact-channel-label">
                        {String(i + 1).padStart(2, "0")} · {c.label}
                      </div>
                      <div className="contact-channel-value">{c.value}</div>
                    </div>
                  </div>
                  <span className="btn btn-secondary" style={{ whiteSpace: "nowrap" }}>
                    {c.action} <ArrowUpRight size={14} />
                  </span>
                </a>
              );
            })}
          </div>

          <div className="card contact-form">
            <h2 style={{ fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.02em" }}>
              Send me a message
            </h2>
            <p style={{ marginTop: "16px", fontSize: "14px", color: "var(--muted-foreground)" }}>
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ marginTop: "32px" }}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={14} />
              </button>
            </form>
          </div>

          <div className="cta-section" style={{ borderRadius: "16px" }}>
            <div className="cta-glow"></div>
            <div className="cta-content">
              <div className="cta-eyebrow">Ready when you are</div>
              <h2 className="cta-heading">
                Let's create something{" "}
                <span className="cta-accent">impactful,</span> together.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

