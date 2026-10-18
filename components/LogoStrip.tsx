import Image from "next/image";
import { projects } from "../lib/data";
import Reveal from "./Reveal";

export default function LogoStrip() {
  return (
    <section aria-label="Shipped products" className="border-y border-line bg-white">
      <Reveal className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-5 py-8 sm:px-8 md:flex-row md:justify-between">
        <p className="font-mono text-xs tracking-[0.1em] text-muted uppercase">Shipped &amp; running</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {projects.map((p) => (
            <li key={p.slug} className="flex items-center gap-2.5 text-lg font-extrabold tracking-[-0.03em]">
              <Image src={p.logo} alt="" width={32} height={32} className="size-8 rounded-lg object-contain" />
              {p.title}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
