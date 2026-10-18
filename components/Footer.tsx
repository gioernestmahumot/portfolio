import { site } from "../lib/data";

export default function Footer() {
  const link = "inline-flex min-h-11 items-center rounded-btn px-1 transition-colors hover:text-ink";
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-5 py-4 text-sm text-muted sm:flex-row sm:px-8">
        <span>© 2026 {site.fullName}</span>
        <nav aria-label="Footer" className="flex items-center gap-4">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
          <a href={`mailto:${site.email}`} className={link}>Email</a>
        </nav>
      </div>
    </footer>
  );
}
