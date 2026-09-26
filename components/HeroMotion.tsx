import Reveal from "./Reveal";

export default function HeroMotion() {
  return (
    <>
      <Reveal>
        <h1 className="my-7 max-w-[1050px] text-[clamp(2.75rem,10.5vw,5.125rem)] leading-[0.95] font-extrabold tracking-[-0.075em] sm:my-8 lg:text-[clamp(5rem,8.5vw,7.8125rem)] lg:leading-[0.9]">
          Full-Stack Developer
          <br />
          <em className="bg-gradient-to-r from-accent via-[#efffae] to-[#8ed8ff] bg-clip-text text-transparent not-italic">building with AI.</em>
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="max-w-[620px] text-base leading-[1.7] text-muted sm:text-lg">
          I build practical web applications, business systems, and
          AI-powered solutions that turn real-world problems into
          reliable software.
        </p>
      </Reveal>
      <Reveal delay={0.2} className="mt-8 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
        <a className="inline-flex min-h-11 items-center justify-center rounded-full border border-accent bg-accent px-5 py-3 text-[13px] font-bold text-canvas transition-colors hover:bg-accent/85" href="#work">
          View my work
        </a>
        <a className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[13px] transition-colors hover:border-white/30 hover:bg-white/10" href="#contact">
          Start a conversation
        </a>
      </Reveal>
    </>
  );
}
