import Image from "next/image";
import { about, stackGroups } from "../lib/data";
import Reveal from "./Reveal";

export default function AboutStack() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-5 min-[1040px]:grid-cols-2">
        <Reveal className="flex">
          <article className="card-lift w-full rounded-card border border-line bg-card p-6 shadow-soft sm:p-8">
            <div className="relative size-24 overflow-hidden rounded-2xl border border-line bg-canvas">
              <Image
                src="/projects/profile.png"
                alt="Gio Ernest Mahumot"
                fill
                className="object-cover object-top"
                sizes="96px"
              />
            </div>
            <p className="section-label mt-6">About</p>
            <h2 className="section-title !text-3xl">Hi, I&apos;m Gio.</h2>
            {about.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-[15px] leading-7 text-muted">{p}</p>
            ))}
          </article>
        </Reveal>
        <Reveal delay={0.08} className="flex">
          <article className="card-lift w-full rounded-card border border-line bg-card p-6 shadow-soft sm:p-8">
            <p className="section-label">Stack</p>
            <h2 className="section-title !text-3xl">Tools I use to ship.</h2>
            <dl className="mt-6 divide-y divide-soft-line">
              {stackGroups.map((g) => (
                <div key={g.label} className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[96px_1fr] sm:items-center">
                  <dt className="font-mono text-xs tracking-[0.1em] text-muted uppercase">{g.label}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-canvas px-3 py-1.5 text-[13px] font-semibold transition-colors hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
