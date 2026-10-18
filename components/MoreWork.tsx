import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "../lib/data";
import Reveal from "./Reveal";

const others = projects.filter((p) => p.slug !== "paddy");
const tutors = [
  { name: "Emily", topic: "Business English" },
  { name: "Mark", topic: "Daily conversation" },
  { name: "Ana", topic: "Travel English" }
];

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-xl border border-line bg-canvas">
      <div className="flex gap-1.5 border-b border-soft-line bg-white px-3 py-2.5">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="h-44">{children}</div>
    </div>
  );
}

function MalfitPreview() {
  return (
    <div className="flex h-full flex-col justify-center bg-malfit px-6 text-white">
      <div className="text-[11px] font-semibold tracking-[0.1em] text-malfit-gold uppercase">Lapu-Lapu City</div>
      <div className="mt-1 text-2xl leading-tight font-extrabold tracking-[-0.03em]">Train with Coach Emman</div>
      <div className="mt-4 w-fit rounded-lg bg-malfit-gold px-4 py-2 text-xs font-extrabold text-malfit">
        Book a session
      </div>
    </div>
  );
}

function NativecampPreview({ logo }: { logo: string }) {
  return (
    <div className="flex h-full flex-col gap-3 bg-white p-4">
      <Image src={logo} alt="" width={96} height={24} className="h-6 w-auto self-start object-contain" />
      <div className="grid flex-1 grid-cols-3 gap-2">
        {tutors.map((t) => (
          <div key={t.name} className="rounded-lg border border-line bg-canvas p-2">
            <div className="grid size-8 place-items-center rounded-full bg-accent-soft text-xs font-extrabold text-accent">
              {t.name[0]}
            </div>
            <div className="mt-2 text-[11px] font-bold">{t.name}</div>
            <div className="text-[9px] leading-tight text-muted">{t.topic}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MoreWork() {
  return (
    <section aria-labelledby="more-work" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <h2 id="more-work" className="section-title !mt-0">Other recent projects</h2>
      </Reveal>
      <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {others.map((p, i) => (
          <li key={p.slug} className="flex">
            <Reveal delay={i * 0.08} className="flex w-full">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.title} — open live site`}
                className="group card-lift flex w-full flex-col rounded-card border border-line bg-card p-4 shadow-soft sm:p-5"
              >
                <BrowserFrame>
                  {p.slug === "malfit" ? <MalfitPreview /> : <NativecampPreview logo={p.logo} />}
                </BrowserFrame>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold tracking-[-0.03em]">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-btn border border-line bg-white text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white motion-safe:group-hover:rotate-45"
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
