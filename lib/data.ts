import { LayoutDashboard, Database, Sparkles, type LucideIcon } from "lucide-react";

export const site = {
  name: "Gio Mahumot",
  fullName: "Gio Ernest Mahumot",
  email: "gioernestmahumot@gmail.com",
  phone: "+63 920 131 6211",
  phoneHref: "tel:+639201316211",
  linkedin: "https://www.linkedin.com/in/gio-ernest-mahumot-93b33a235/"
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" }
];

export const proof = [
  { value: "3", label: "Live products" },
  { value: "Offline-first", label: "PWA & sync" },
  { value: "Laravel · Next.js", label: "Core stack" }
];

export interface Service {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Web applications",
    description: "Fast, maintainable products your users enjoy.",
    items: ["Next.js & Laravel builds", "Admin dashboards", "Mobile-ready PWAs"],
    icon: LayoutDashboard
  },
  {
    title: "Business systems",
    description: "Software shaped around how your team really works.",
    items: ["Offline-first sync", "Roles & permissions", "Exportable reports"],
    icon: Database
  },
  {
    title: "AI-assisted delivery",
    description: "Speed from AI, quality from solid engineering.",
    items: ["Claude Code workflows", "AI features in your app", "Faster iteration"],
    icon: Sparkles
  }
];

export interface Project {
  slug: "paddy" | "malfit" | "paanyaya" | "nativecamp";
  title: string;
  description: string;
  tags: string[];
  url: string;
  logo: string;
}

export const projects: Project[] = [
  {
    slug: "paddy",
    title: "Paddy",
    description:
      "Paddy is a local-first sales and inventory app for rice stores. Sales, purchases, stock changes, and deliveries work offline and sync to Supabase when connected. It also tracks customer credit, supplier balances, cash counts, and profit, with role-based accounts and exportable reports.",
    tags: ["Next.js 16", "React 19", "Supabase", "PostgreSQL", "IndexedDB", "PWA / Service Worker"],
    url: "https://paddyapp.vercel.app/",
    logo: "/projects/paddyverse.svg"
  },
  {
    slug: "malfit",
    title: "MalFit",
    description:
      "MalFit is a fitness coaching website for Coach Emman in Lapu-Lapu City. Visitors can book sessions, browse pricing and read testimonials, while the coach manages bookings and testimonials from a secure admin area with email alerts.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Resend"],
    url: "https://malfit-one.vercel.app/",
    logo: "/projects/malfit.svg"
  },
  {
    slug: "paanyaya",
    title: "Paanyaya",
    description:
      "Paanyaya is an RSVP invitation platform for weddings, baptisms, work events and birthdays. Guests open one link, tap through a single-screen invitation card and reply, while hosts watch replies arrive live and export them to CSV.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Upstash"],
    url: "https://paanyaya.vercel.app/",
    logo: "/projects/paanyaya.svg"
  },
  {
    slug: "nativecamp",
    title: "Nativecamp",
    description:
      "Native Camp is one of the best ESL online tutoring schools in Japan. Lessons are provided via a unique language platform developed by our company.",
    tags: ["Laravel", "MySQL", "Redis", "JavaScript"],
    url: "https://nativecamp.net",
    logo: "/projects/nativecamp.png"
  }
];

export const caseStudy = {
  problem:
    "Rice stores run on cash, credit and unreliable connections. Paddy records sales, purchases, stock and deliveries on the device first, then syncs to Supabase the moment you're back online — so the counter never stops.",
  features: [
    "Offline sales & auto-sync",
    "Customer credit & supplier balances",
    "Cash counts & profit tracking",
    "Role-based accounts & reports"
  ]
};

export const steps = [
  { title: "Understand", text: "We map your goals, users and constraints before any code is written." },
  { title: "Design the system", text: "Data model, workflows and screens sketched and agreed up front." },
  { title: "Build & iterate", text: "Short cycles with working builds you can click through each week." },
  { title: "Launch & support", text: "Deployed, documented and supported after go-live." }
];

export const about = {
  paragraphs: [
    "I'm a Full-Stack Developer focused on building business applications that are useful, maintainable, and easy to operate. My work spans backend development, databases, frontend interactions, and AI-assisted development.",
    "I like taking a messy business requirement and turning it into a clear workflow, solid data model, and polished product."
  ]
};

export const stackGroups = [
  { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "jQuery"] },
  { label: "Backend", items: ["Laravel", "PHP", "Redis"] },
  { label: "Data", items: ["MySQL", "MongoDB"] },
  { label: "Tools", items: ["GitHub", "Claude Code"] }
];
