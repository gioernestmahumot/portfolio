import { steps } from "../lib/data";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="border-y border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-[640px]">
          <p className="section-label">How we work</p>
          <h2 className="section-title">A clear process, no surprises.</h2>
        </Reveal>
        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <div className="card-lift w-full rounded-card border border-line bg-canvas p-6">
                  <span className="grid size-9 place-items-center rounded-full bg-accent-soft text-sm font-extrabold text-accent">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold tracking-[-0.03em]">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[3.25rem] -right-5 hidden h-px w-5 bg-line lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
