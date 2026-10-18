import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { site } from "../lib/data";
import Reveal from "./Reveal";

export default function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-3 pb-16 sm:px-5">
      <Reveal>
        <div className="relative overflow-hidden rounded-band bg-accent px-6 py-14 text-white sm:px-12 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="absolute rounded-full border border-white/15"
                style={{ width: 160 + i * 120, height: 160 + i * 120, top: -(80 + i * 60) + 192, right: -(80 + i * 60) + 192 }}
              />
            ))}
          </div>
          <div className="relative max-w-[640px]">
            <h2 className="text-[clamp(1.875rem,4.5vw,3rem)] leading-[1.08] font-extrabold tracking-[-0.04em]">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Let&apos;s talk about what you&apos;re building and how I can help.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[560px]:flex-row min-[560px]:flex-wrap">
              <a href={`mailto:${site.email}`} className="btn max-w-full bg-white text-accent hover:bg-canvas">
                <Mail size={18} className="shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-all">{site.email}</span>
                <ArrowUpRight size={16} className="nudge shrink-0" aria-hidden="true" />
              </a>
              <a href={site.phoneHref} className="btn border border-white/50 text-white hover:bg-white/10">
                <Phone size={18} className="shrink-0" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
