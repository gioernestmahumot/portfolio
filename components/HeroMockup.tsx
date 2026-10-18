"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const sidebar = ["Dashboard", "Sales", "Inventory", "Deliveries", "Customers", "Reports"];
const kpis = [
  { label: "Sales today", value: "₱18,420" },
  { label: "Sacks in stock", value: "342" },
  { label: "Credit due", value: "₱6,150" }
];
const bars = [38, 56, 46, 72, 58, 68, 92];
const rows = [
  { name: "Jasmine rice · 25 kg", meta: "Cash", amount: "₱1,450" },
  { name: "Dinorado · 10 kg", meta: "On credit", amount: "₱720" },
  { name: "Brown rice · 5 kg", meta: "Cash", amount: "₱360" }
];
const slots = ["9:00", "10:30", "1:00", "3:30"];
const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroMockup() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden="true" className="relative pb-6 min-[700px]:pr-6 min-[700px]:pb-10">
      {/* Browser window */}
      <div className="overflow-hidden rounded-card border border-line bg-white shadow-lift">
        <div className="flex items-center gap-3 border-b border-soft-line bg-canvas px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="min-w-0 flex-1 truncate rounded-full border border-line bg-white px-3 py-1 text-center font-mono text-[10px] text-muted">
            paddyapp.vercel.app
          </div>
        </div>

        <div className="flex">
          <div className="hidden w-[116px] shrink-0 bg-paddy p-3 min-[700px]:block">
            <div className="mb-3 flex items-center gap-1.5 text-[11px] font-extrabold text-white">
              <span className="size-4 rounded-md bg-paddy-gold" /> Paddy
            </div>
            <ul className="space-y-1">
              {sidebar.map((item, i) => (
                <li
                  key={item}
                  className={`rounded-md px-2 py-1.5 text-[10px] font-semibold ${
                    i === 0 ? "bg-white/15 text-white" : "text-paddy-sage"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 flex-1 bg-canvas p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2">
              {kpis.map((k) => (
                <div key={k.label} className="rounded-xl border border-line bg-white p-2 sm:p-2.5">
                  <div className="truncate text-[8px] text-muted sm:text-[9px]">{k.label}</div>
                  <div className="mt-1 text-[11px] font-extrabold tracking-[-0.02em] sm:text-[13px]">{k.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-2.5 rounded-xl border border-line bg-white p-3">
              <div className="mb-2 text-[9px] font-semibold text-muted">Last 7 days</div>
              <div className="flex h-20 items-end gap-2 sm:h-24">
                {bars.map((h, i) => {
                  const cls = `flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-paddy" : "bg-paddy-sage"}`;
                  return reduce ? (
                    <div key={i} className={cls} style={{ height: `${h}%` }} />
                  ) : (
                    <motion.div
                      key={i}
                      className={`${cls} origin-bottom`}
                      style={{ height: `${h}%` }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.7, delay: 0.5 + i * 0.05, ease }}
                    />
                  );
                })}
              </div>
            </div>

            <ul className="mt-2.5 divide-y divide-soft-line rounded-xl border border-line bg-white">
              {rows.map((r) => (
                <li key={r.name} className="flex items-center justify-between gap-2 px-3 py-2">
                  <div className="min-w-0">
                    <div className="truncate text-[10px] font-semibold">{r.name}</div>
                    <div className="text-[9px] text-muted">{r.meta}</div>
                  </div>
                  <div className="text-[10px] font-extrabold">{r.amount}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Phone */}
      <motion.div
        className="absolute right-0 bottom-0 hidden w-[158px] min-[700px]:block"
        animate={reduce ? undefined : { y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-[26px] border-[5px] border-ink bg-white shadow-lift">
          <div className="overflow-hidden rounded-[20px]">
            <div className="bg-malfit px-3 pt-5 pb-3 text-[11px] leading-tight font-extrabold text-white">
              Book your next session
            </div>
            <div className="grid grid-cols-2 gap-1.5 p-3">
              {slots.map((s, i) => (
                <span
                  key={s}
                  className={`rounded-lg border py-1.5 text-center text-[10px] font-bold ${
                    i === 1 ? "border-malfit bg-malfit text-white" : "border-line text-muted"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="px-3 pb-3">
              <div className="rounded-lg bg-malfit-gold py-2 text-center text-[10px] font-extrabold text-malfit">
                Confirm booking
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Toast */}
      <motion.div
        className="absolute bottom-0 left-4 hidden items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 text-[11px] font-semibold shadow-lift min-[700px]:flex"
        initial={reduce ? false : { opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1, ease }}
      >
        <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-white">
          <Check size={12} strokeWidth={3} />
        </span>
        Offline sales synced to Supabase
      </motion.div>
    </div>
  );
}
