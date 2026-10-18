import { ArrowUpRight, Check } from "lucide-react";
import { caseStudy, projects } from "../lib/data";
import Reveal from "./Reveal";

const paddy = projects[0];
const products = [
  { name: "Jasmine", price: "₱58" },
  { name: "Dinorado", price: "₱62" },
  { name: "Sinandomeng", price: "₱52" },
  { name: "Malagkit", price: "₱70" },
  { name: "Brown rice", price: "₱66" },
  { name: "Well-milled", price: "₱48" }
];
const cart = [
  { name: "Jasmine × 10 kg", price: "₱580" },
  { name: "Dinorado × 5 kg", price: "₱310" }
];

function PosMockup() {
  return (
    <div
      aria-hidden="true"
      className="rotate-0 rounded-card bg-white p-4 text-ink shadow-lift transition-transform duration-500 motion-safe:min-[1040px]:rotate-[1.5deg] motion-safe:min-[1040px]:group-hover:rotate-0 sm:p-5"
    >
      <div className="grid gap-4 min-[480px]:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-2 text-[10px] font-bold tracking-[0.1em] text-muted uppercase">Products</div>
          <div className="grid grid-cols-2 gap-2 min-[360px]:grid-cols-3 min-[480px]:grid-cols-2">
            {products.map((p, i) => (
              <div
                key={p.name}
                className={`rounded-xl border p-2.5 ${i === 0 ? "border-paddy bg-paddy-sage/40" : "border-line bg-canvas"}`}
              >
                <div className="size-6 rounded-md bg-paddy-sage" />
                <div className="mt-2 truncate text-[11px] font-bold">{p.name}</div>
                <div className="text-[10px] text-muted">{p.price}/kg</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-xl border border-line bg-canvas p-3">
          <div className="mb-2 text-[10px] font-bold tracking-[0.1em] text-muted uppercase">Cart</div>
          <ul className="space-y-2 text-[11px]">
            {cart.map((c) => (
              <li key={c.name} className="flex justify-between gap-2">
                <span className="truncate">{c.name}</span>
                <span className="font-bold">{c.price}</span>
              </li>
            ))}
            <li className="flex justify-between gap-2 rounded-md bg-paddy-gold/25 px-2 py-1 font-semibold">
              <span>On credit</span>
              <span>₱400</span>
            </li>
          </ul>
          <div className="mt-3 flex justify-between border-t border-line pt-3 text-sm font-extrabold">
            <span>Total</span>
            <span>₱890</span>
          </div>
          <div className="mt-3 rounded-lg bg-paddy py-2.5 text-center text-[11px] font-extrabold text-white">
            Complete sale
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudy() {
  return (
    <section id="work" className="mx-auto max-w-[1280px] px-3 sm:px-5">
      <Reveal>
        <div className="group grid items-center gap-10 rounded-band bg-paddy px-6 py-12 text-white sm:px-10 sm:py-14 min-[1040px]:grid-cols-[1fr_1.05fr] min-[1040px]:gap-14 min-[1040px]:px-14 min-[1040px]:py-16">
          <div className="min-w-0">
            <p className="section-label !text-paddy-gold">Featured case study</p>
            <h2 className="section-title">Paddy — a point-of-sale that keeps working offline.</h2>
            <p className="mt-5 text-base leading-relaxed text-paddy-sage">{caseStudy.problem}</p>
            <ul className="mt-6 grid gap-3 min-[520px]:grid-cols-2">
              {caseStudy.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm font-semibold">
                  <Check size={16} className="mt-0.5 shrink-0 text-paddy-gold" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {paddy.tags.map((t) => (
                <li key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-paddy-sage">
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={paddy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-8 bg-paddy-gold text-paddy hover:bg-[#f0c45f]"
            >
              Visit live app <ArrowUpRight size={16} className="nudge" aria-hidden="true" />
            </a>
          </div>
          <div className="min-w-0">
            <PosMockup />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
