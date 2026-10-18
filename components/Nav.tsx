import { navLinks, site } from "../lib/data";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 px-5 sm:px-8"
      >
        <a href="#top" className="flex min-h-14 items-center gap-2.5 rounded-btn font-extrabold tracking-[-0.03em]">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-[10px] bg-ink text-sm text-white"
          >
            G
          </span>
          {site.name}
        </a>
        <ul className="order-3 flex w-full items-center justify-between gap-2 pb-1 text-sm font-semibold text-muted md:order-none md:w-auto md:gap-8 md:pb-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-btn px-1 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn hidden bg-ink text-white hover:bg-[#1c2740] md:inline-flex"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
