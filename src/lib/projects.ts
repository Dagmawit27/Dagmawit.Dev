export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  cover: string;
  gallery: string[];
  github: string;
  live: string;
  overview: string;
  problem: string;
  approach: string;
  highlights: string[];
  upcoming?: boolean;
};

export const projects: Project[] = [
  {
    slug: "blood-bank-donor-portal",
    title: "Blood Bank — Donor Portal",
    tagline: "A donor-facing web platform that makes blood donation accessible, informed, and engaging.",
    year: "2025",
    role: "Full-Stack Development",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "SMS Integration"],
    cover: "/assets/donor.png",
    gallery: [
      "/assets/donor.png",
      "/assets/donor2.png",
      "/assets/donor3.png",
      "/assets/donor4.png",
    ],
    github: "",
    live: "",
    overview:
      "A comprehensive donor-facing web application designed to reduce blood shortages by empowering donors with self-service tools — from appointment scheduling to educational resources on the donation lifecycle.",
    problem:
      "Blood banks in Ethiopia face persistent donor drop-off due to a lack of digital engagement channels. Donors had no way to schedule appointments online, access reliable information about the donation process, or receive timely follow-up communication — resulting in low retention and unpredictable blood supply.",
    approach:
      "Built a React-based donor portal backed by a Node.js/Express REST API and MongoDB. The system enables online appointment booking, a structured donor registration flow, and a resource hub covering blood types, donation eligibility, and post-donation care. SMS notifications keep donors informed and motivated at every step of their journey.",
    highlights: [
      "Online appointment scheduling with real-time slot availability",
      "Donor registration with eligibility screening and profile management",
      "Educational content hub — blood types, donation process, FAQs",
      "SMS confirmation on registration and appointment booking",
      "Post-donation appreciation messages sent automatically via SMS",
      "Birthday SMS reminders encouraging annual donation cycles",
      "Responsive design accessible on any device",
    ],
  },
  {
    slug: "blood-bank-management-system",
    title: "Blood Bank — Management System",
    tagline: "An internal office platform for managing donors, hospitals, blood inventory, and compliance.",
    year: "2025",
    role: "Full-Stack Development",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "SMS Integration"],
    cover: "/assets/image.png",
    gallery: ["/assets/image.png", "/assets/image1.png"],
    github: "",
    live: "",
    overview:
      "A full-featured blood bank management system built for internal staff — providing end-to-end control over donor records, hospital coordination, blood inventory tracking, and automated compliance workflows.",
    problem:
      "Internal blood bank operations were managed manually through spreadsheets and phone calls, leading to inventory mismanagement, expired blood units going unnoticed, and slow coordination with hospitals during critical shortages.",
    approach:
      "Developed a role-based admin dashboard with React and a Node.js/Express/MongoDB backend. The system centralises donor management, hospital request handling, and live inventory tracking. Automated alerts notify staff of units approaching expiry, while integrated SMS workflows keep donors engaged year-round — from registration confirmations to birthday donation nudges.",
    highlights: [
      "Role-based access control for staff, managers, and administrators",
      "Donor lifecycle management — registration, donation history, eligibility status",
      "Hospital management — requests, fulfillment tracking, and communication log",
      "Blood inventory dashboard with real-time stock levels by blood type",
      "Automated expiry date notifications to prevent waste",
      "Integrated SMS engine — registration, post-donation thanks, and birthday reminders",
      "Audit trail for all inventory transactions and donor interactions",
      "Reporting and analytics for donation trends and inventory forecasting",
    ],
    upcoming: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
