import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { proof } from "../lib/data";
import HeroItem from "./HeroItem";
import HeroMockup from "./HeroMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 min-[1040px]:grid-cols-[1fr_1.05fr] min-[1040px]:gap-12">
        <div className="min-w-0">
          <HeroItem delay={0}>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pr-4 pl-1.5 text-[13px] font-semibold text-muted shadow-soft">
              <Image
                src="/projects/profile.png"
                alt=""
                width={28}
                height={28}
                className="size-7 rounded-full object-cover object-top"
              />
              <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
              Available for select projects
            </p>
          </HeroItem>
          <HeroItem delay={0.08}>
            <h1 className="mt-6 text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.02] font-extrabold tracking-[-0.045em]">
              I build business software that teams <em className="text-accent not-italic">actually use.</em>
            </h1>
          </HeroItem>
          <HeroItem delay={0.16}>
            <p className="mt-6 max-w-[540px] text-base leading-relaxed text-muted sm:text-lg">
              Full-stack developer crafting web apps, point-of-sale and booking systems — built fast with AI,
              built to last with solid engineering.
            </p>
          </HeroItem>
          <HeroItem delay={0.24} className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <a href="#work" className="btn bg-accent text-white hover:bg-[#4338ca]">
              See my work <ArrowRight size={16} className="nudge" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn border border-line bg-white text-ink hover:border-ink/30">
              Book a call
            </a>
          </HeroItem>
          <HeroItem delay={0.36}>
            <dl className="mt-10 grid grid-cols-1 gap-5 border-t border-line pt-6 min-[520px]:grid-cols-3">
              {proof.map((item) => (
                <div key={item.value}>
                  <dt className="text-lg font-extrabold tracking-[-0.03em]">{item.value}</dt>
                  <dd className="mt-0.5 text-[13px] text-muted">{item.label}</dd>
                </div>
              ))}
            </dl>
          </HeroItem>
        </div>
        <HeroItem delay={0.24} className="min-w-0">
          <HeroMockup />
        </HeroItem>
      </div>
    </section>
  );
}
