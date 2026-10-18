import { Check } from "lucide-react";
import { services } from "../lib/data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="max-w-[640px]">
        <p className="section-label">What I do</p>
        <h2 className="section-title">From messy requirements to software your team relies on.</h2>
      </Reveal>
      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.title} className="flex">
            <Reveal delay={i * 0.08} className="flex w-full">
              <article className="card-lift flex w-full flex-col rounded-card border border-line bg-card p-6 shadow-soft">
                <span className="grid size-12 place-items-center rounded-[14px] bg-accent-soft text-accent">
                  <s.icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-5 space-y-2.5 border-t border-soft-line pt-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-semibold">
                      <Check size={16} className="shrink-0 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
