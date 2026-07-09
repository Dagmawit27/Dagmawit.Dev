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

const BASE = "https://dagmawit27.github.io/Dagmawit.Developer/assets";

export const projects: Project[] = [
  {
    slug: "simple-calculator",
    title: "Simple Calculator",
    tagline: "A responsive calculator exploring DOM fundamentals.",
    year: "2024",
    role: "Design & Development",
    stack: ["HTML", "CSS", "JavaScript"],
    cover: `${BASE}/calculator-W3Q2cR5A.webp`,
    gallery: [`${BASE}/calculator-W3Q2cR5A.webp`],
    github: "https://github.com/Dagmawit27/simpleCalculator.git",
    live: "https://dagmawit27.github.io/simpleCalculator/",
    overview:
      "A minimal, responsive calculator built to sharpen fundamentals in DOM manipulation, event handling and layout math with vanilla JavaScript.",
    problem:
      "Most beginner calculators either break on edge cases or rely on eval. I wanted a small, safe, keyboard-friendly build that would still feel clean on any screen size.",
    approach:
      "Wrote a tiny expression evaluator, kept state in a single object, and used CSS grid for a precise button layout. Focus rings and keyboard shortcuts were added so the tool feels usable, not just visible.",
    highlights: [
      "Pure vanilla JS — no dependencies",
      "Keyboard-driven with visible focus states",
      "Fully responsive grid layout",
    ],
  },
  {
    slug: "gym-house",
    title: "GYM House",
    tagline: "A brand-forward landing page for a local fitness studio.",
    year: "2024",
    role: "Design & Development",
    stack: ["HTML", "CSS", "JavaScript"],
    cover: `${BASE}/portfolio-D9szlFAE.png`,
    gallery: [`${BASE}/portfolio-D9szlFAE.png`],
    github: "https://github.com/Dagmawit27/olanaGYM.git",
    live: "https://dagmawit27.github.io/olanaGYM/",
    overview:
      "A responsive gym website presenting facilities, trainers, classes and membership tiers with a confident editorial feel.",
    problem:
      "The studio needed a site that felt as intentional as the space itself — clear tiers, honest photography, and a signup path that did not get lost in decoration.",
    approach:
      "Established a strict type scale, laid the page on a 12-column grid, and used restrained motion so the imagery leads. Membership tiers were reduced to three clear cards.",
    highlights: [
      "Type-led hero with a single primary CTA",
      "Membership tiers reduced from six to three",
      "Fully responsive from 320px to 1440px",
    ],
  },
  {
    slug: "burger-house",
    title: "Burger House",
    tagline: "A menu-first restaurant site with a warm, tactile feel.",
    year: "2024",
    role: "Design & Development",
    stack: ["HTML", "CSS", "JavaScript"],
    cover: `${BASE}/portfolio-1-DdRJO4gW.jpg`,
    gallery: [`${BASE}/portfolio-1-DdRJO4gW.jpg`],
    github: "https://github.com/Dagmawit27/portfolio1-burgerHouse.git",
    live: "https://dagmawit27.github.io/portfolio1-burgerHouse/",
    overview:
      "A responsive burger restaurant site that puts the menu — not the marketing — at the center of the experience.",
    problem:
      "Most restaurant sites bury the menu three clicks deep. Guests want to see what's on offer, at what price, without hunting.",
    approach:
      "Menu became the homepage anchor. Deals sit above the fold as a rotating strip. Everything else supports the order decision.",
    highlights: [
      "Menu-as-homepage information architecture",
      "Deal strip with keyboard-navigable slides",
      "Optimized imagery under 100kb per item",
    ],
  },
  {
    slug: "ml-image-classifier",
    title: "ML Image Classifier",
    tagline: "Deep learning model for image classification using CNN.",
    year: "2025",
    role: "Design & Development",
    stack: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],
    cover: `${BASE}/portfolio-1-DdRJO4gW.jpg`,
    gallery: [`${BASE}/portfolio-1-DdRJO4gW.jpg`],
    github: "",
    live: "",
    overview:
      "A machine learning project focused on building and training convolutional neural networks (CNN) for image classification tasks. Currently in development.",
    problem:
      "Exploring the capabilities of deep learning in computer vision and understanding how CNN architectures can be applied to real-world image recognition problems.",
    approach:
      "Building the model from scratch using TensorFlow and Keras, experimenting with different CNN architectures, and training on custom datasets to achieve high accuracy.",
    highlights: [
      "Custom CNN architecture design",
      "Transfer learning with pre-trained models",
      "Real-time image prediction",
    ],
    upcoming: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
