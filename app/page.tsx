import {
  ArrowUpRight,
  Code2,
  Layers3,
  Mail,
  Phone,
  Sparkles,
  Zap
} from "lucide-react";
import Image from "next/image";
import Reveal from "../components/Reveal";
import HeroMotion from "../components/HeroMotion";

const stack = [
  { name: "Laravel", category: "Backend", icon: "L" },
  { name: "PHP", category: "Backend", icon: "PHP" },
  { name: "Next.js", category: "Frontend", icon: "N" },
  { name: "TypeScript", category: "Frontend", icon: "TS" },
  { name: "Tailwind CSS", category: "Frontend", icon: "TW" },
  { name: "JavaScript", category: "Frontend", icon: "JS" },
  { name: "MongoDB", category: "Database", icon: "MDB" },
  { name: "MySQL", category: "Database", icon: "SQL" },
  { name: "jQuery", category: "Frontend", icon: "$" },
  { name: "Redis", category: "Backend", icon: "R" },
  { name: "GitHub", category: "Tools", icon: "GH" },
  { name: "Claude Code", category: "AI / Tools", icon: "AI" }
];

const projects = [
  {
    title: "Paddyverse",
    description:
      "Paddyverse is a local-first sales and inventory app for rice stores. Sales, purchases, stock changes, and deliveries work offline and sync to Supabase when connected. It also tracks customer credit, supplier balances, cash counts, and profit, with role-based accounts and exportable reports.",
    tags: ["Next.js 16", "React 19", "Supabase", "PostgreSQL", "IndexedDB", "PWA / Service Worker"],
    number: "01",
    url: "https://paddyverse.vercel.app/",
    image: "/projects/paddyverse.svg",
    isLogo: true,
    imageBackground: "bg-[#153C2B]",
    status: "Live Site"
  },
  {
    title: "Kailangan Ko",
    description:
      "Kailangan Ko is a Laravel-based web application and REST API designed to help users in the Philippines understand government-service requirements, procedures, fees, offices, and official sources in one centralized platform.",
    tags: ["Laravel 13", "PHP", "MySQL", "Redis", "Docker", "Nginx", "REST API", "Blade", "Vite", "PHPUnit"],
    number: "02",
    url: "",
    image: "/projects/icon-192.png",
    status: "In development"
  },
  {
    title: "Nativecamp",
    description:
      "Native Camp is one of the best ESL online tutoring schools in Japan. Lessons are provided via a unique language platform developed by our company.",
    tags: ["Laravel", "MySQL", "Redis", "JavaScript"],
    number: "03",
    url: "https://nativecamp.net",
    image: "/projects/nativecamp.png",
    isLogo: true,
    status: "Live site"
  }
];

const section = "relative mx-auto my-4 w-[calc(100%-1.5rem)] max-w-[1400px] overflow-hidden rounded-[28px] border border-white/10 bg-panel/80 px-5 py-20 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:my-6 sm:w-[calc(100%-3rem)] sm:px-[6vw] lg:w-[calc(100%-4rem)] lg:px-[6vw] lg:py-[110px]";
const label = "text-[11px] font-bold tracking-[0.18em] text-accent";
const heading = "mt-3 text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] font-bold tracking-[-0.06em]";

export default function Home() {
  return (
    <main>
      <nav aria-label="Main navigation" className="sticky top-0 z-50 px-3 py-3 sm:px-6">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-4 rounded-[24px] border border-white/10 bg-canvas/80 px-4 py-2 shadow-[0_14px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl md:min-h-[64px] md:flex-nowrap md:px-6">
          <a className="text-2xl font-extrabold tracking-[-0.08em]" href="#top" aria-label="GEM home">GEM<span className="text-accent">.</span></a>
          <div className="order-3 mt-2 flex w-full items-center justify-between gap-3 text-sm text-[#aaa] md:order-none md:mt-0 md:w-auto md:gap-7">
            {["Work", "Stack", "About", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="inline-flex min-h-11 items-center transition-colors hover:text-white">{link}</a>
            ))}
          </div>
          <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-accent bg-accent px-4 py-2.5 text-[13px] font-bold text-canvas transition-colors hover:bg-accent/85" href="#contact">Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </nav>

      <section id="top" className={`${section} flex min-h-[620px] flex-col justify-center bg-[radial-gradient(circle_at_85%_15%,rgba(215,255,69,0.12),transparent_28%),linear-gradient(135deg,#151518_0%,#0e0e10_100%)] sm:min-h-[680px] lg:min-h-[740px]`}>
        <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full border border-accent/15 sm:size-96" aria-hidden="true" />
        <div className="pointer-events-none absolute top-16 -right-16 size-40 rounded-full border border-white/5 sm:size-64" aria-hidden="true" />
        <Reveal className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.15em] text-[#aaa] sm:text-[11px] sm:tracking-[0.18em]">
          <span className="size-[7px] shrink-0 rounded-full bg-accent shadow-[0_0_18px_var(--color-accent)] motion-safe:animate-pulse" />
          AVAILABLE FOR SELECT PROJECTS
        </Reveal>
        <HeroMotion />
        <Reveal delay={0.25} className="mt-12 flex flex-wrap gap-x-6 gap-y-4 text-xs text-[#888] lg:mt-[75px]">
          <span className="flex items-center gap-2"><Code2 size={16} aria-hidden="true" /> Full-Stack</span>
          <span className="flex items-center gap-2"><Sparkles size={16} aria-hidden="true" /> AI-Assisted</span>
          <span className="flex items-center gap-2"><Zap size={16} aria-hidden="true" /> Business Solutions</span>
        </Reveal>
      </section>

      <section id="work" className={`${section} bg-[#121214]`}>
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-5 lg:mb-10">
          <div><span className={label}>SELECTED WORK</span><h2 className={heading}>Things I&apos;ve built.</h2></div>
          <span className="text-[11px] tracking-[0.15em] text-[#888]">03 PROJECTS</span>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.08} className="h-full min-w-0">
              <a
                className={`group flex h-full flex-col rounded-[22px] border border-white/10 bg-canvas/70 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-[transform,border-color,background-color] duration-300 sm:p-5 ${project.url ? "hover:border-accent/35 hover:bg-[#101012] motion-safe:hover:-translate-y-1" : "cursor-default"}`}
                href={project.url || undefined}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                aria-disabled={!project.url}
              >
                <div className="flex items-center justify-between text-xs text-[#888]">
                  <span>{project.number}</span>
                  {project.url ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
                      {project.status}<ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-muted">
                      {project.status}
                    </span>
                  )}
                </div>
                <div className={`relative my-5 mb-7 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 ${project.imageBackground ?? (project.isLogo ? "bg-white" : "bg-[#0f0f10]")}`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={project.isLogo
                        ? "object-contain p-6 transition-transform duration-500 motion-safe:group-hover:scale-[1.03] sm:p-8"
                        : "object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                      }
                      sizes="(min-width: 1400px) 340px, (min-width: 1280px) 28vw, (min-width: 768px) 44vw, 90vw"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3.5 bg-[radial-gradient(circle_at_center,#1b1b1e,#0f0f10)] text-[#666]">
                      <Layers3 size={42} strokeWidth={1.2} aria-hidden="true" />
                      <span className="text-[9px] tracking-[0.18em]">PROJECT PREVIEW</span>
                    </div>
                  )}
                </div>
                <h3 className="mb-2.5 text-2xl font-bold tracking-[-0.04em]">{project.title}</h3>
                <p className="text-sm leading-[1.65] text-muted">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-[7px] pt-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-[9px] py-1.5 text-[10px] text-muted">{tag}</span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="stack" className={`${section} bg-[linear-gradient(145deg,#141417_0%,#101012_100%)]`}>
        <Reveal className="mb-8 lg:mb-10">
          <span className={label}>TECH STACK</span><h2 className={heading}>Tools I use to ship.</h2>
        </Reveal>
        <Reveal>
          <p className="mb-9 max-w-[600px] text-sm leading-[1.65] text-muted">
            A focused stack for building maintainable applications, responsive interfaces,
            data-driven systems, and AI-assisted workflows.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-2 lg:grid-cols-4">
          {stack.map((item, index) => (
            <Reveal key={item.name} delay={(index % 4) * 0.06} className="h-full min-w-0">
              <div className="flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-canvas/65 p-3 transition-[border-color,transform,background-color] hover:border-accent/40 hover:bg-[#121215] motion-safe:hover:-translate-y-0.5 sm:p-[18px]">
                <div className="grid size-[42px] shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/5 text-xs font-extrabold text-accent">{item.icon}</div>
                <div className="min-w-0"><strong className="block text-sm">{item.name}</strong><small className="mt-1 block text-[10px] text-[#888]">{item.category}</small></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className={`${section} grid grid-cols-1 items-center gap-10 bg-[#121214] lg:grid-cols-2 lg:gap-[6vw]`}>
        <Reveal className="mx-auto w-full max-w-[440px] lg:mx-0">
          <div className="relative min-h-[300px] overflow-hidden rounded-[22px] border border-white/10 bg-panel shadow-[0_24px_60px_rgba(0,0,0,0.25)] sm:min-h-[380px] lg:min-h-[460px]">
            <Image
              src="/projects/profile-dark.png"
              alt="Gio Ernest Mahumot"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 42vw, 92vw"
            />
            <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-canvas/75 px-3 py-2 text-[10px] tracking-[0.15em] text-white backdrop-blur-md">
              01 / ABOUT
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className={label}>ABOUT ME</span>
          <h2 className={heading}>I care about software that works in the real world.</h2>
          <p className="mt-6 max-w-[600px] leading-7 text-muted">
            I&apos;m a Full-Stack Developer focused on building business applications
            that are useful, maintainable, and easy to operate. My work spans backend
            development, databases, frontend interactions, and AI-assisted development.
          </p>
          <p className="mt-4 max-w-[600px] leading-7 text-muted">
            I like taking a messy business requirement and turning it into a clear
            workflow, solid data model, and polished product.
          </p>
        </Reveal>
      </section>

      <section id="contact" className={`${section} bg-[radial-gradient(circle_at_top,rgba(215,255,69,0.12),transparent_38%),linear-gradient(145deg,#151518,#0e0e10)] text-center lg:py-[140px]`}>
        <Reveal>
          <span className={label}>GET IN TOUCH</span>
          <h2 className={heading}>Have a project in mind?</h2>
          <p className="mx-auto mt-5 mb-8 max-w-xl leading-relaxed text-muted">Let&apos;s talk about what you&apos;re building and how I can help.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full border border-accent bg-accent px-4 py-3 text-xs font-bold text-canvas transition-colors hover:bg-accent/85 sm:text-[13px]" href="mailto:gioernestmahumot@gmail.com">
              <Mail size={18} className="shrink-0" aria-hidden="true" /><span className="min-w-0 break-all">gioernestmahumot@gmail.com</span><ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
            </a>
            <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold text-ink transition-colors hover:border-accent hover:text-accent sm:text-[13px]" href="tel:+639201316211">
              <Phone size={18} className="shrink-0" aria-hidden="true" /><span>+63 920 131 6211</span>
            </a>
          </div>
          <div className="mt-7 flex items-center justify-center gap-4 text-xs text-[#888]">
            <a href="https://www.linkedin.com/in/gio-ernest-mahumot-93b33a235/" className="inline-flex min-h-11 items-center transition-colors hover:text-white">LinkedIn</a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line px-5 py-6 text-[11px] text-[#888] sm:px-[6vw] lg:px-[8vw]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"><span>© 2026 Gio Ernest Mahumot</span><span>Built with Next.js</span></div>
      </footer>
    </main>
  );
}
