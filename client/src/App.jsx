import React, { useState } from "react";

export default function Portfolio84() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;
    setSent(false);
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 2500);
    }, 1600);
  }

  return (
    <div className="min-h-screen w-full bg-black text-green-300 font-mono overflow-x-hidden">
      {/* CRT overlay & scanlines */}
      <div className="pointer-events-none fixed inset-0 mix-blend-screen opacity-25" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,153,0.06),transparent_60%)]" />
        <div className="absolute inset-0 crt-scanlines" />
      </div>

      {/* Frame */}
      <div className="relative mx-auto max-w-6xl p-4 md:p-8 lg:p-10">
        <div className="neon-frame rounded-2xl p-1">
          <div className="rounded-2xl bg-black/80 p-4 md:p-10">
            <Header />
            <Divider label="SYSTEM: TECHNICAL_SKILLS.LOG" />
            <Skills />
            <Divider label="SYSTEM: PROJECTS.DAT" />
            <Projects />
            <Divider label="SYSTEM: CAREER_XP.LOG" />
            <Experience />
            <Divider label="SYSTEM: CONTACT.TX" />
            <Contact sending={sending} sent={sent} onSubmit={handleSubmit} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-10">
      <div className="flex items-center gap-3 text-xs text-emerald-300/80 tracking-widest">
        <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">Version 1.0</span>
        <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">監視中: 安全のため</span>
        <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">アメリカ製1984</span>
      </div>

      <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight neon-title">
        <span className="block flicker-slow">COZY</span>
        <span className="block tracking-[0.15em] text-emerald-300/90">SOFTWARE_DEVELOPER</span>
      </h1>

      <div className="mt-6 max-w-3xl text-emerald-200/90 leading-relaxed">
        <p className="text-base md:text-lg">
        I engineer code in the digital sandbox, where logic and imagination collide.
Software is my art form — a bridge of neon circuitry spanning thought and reality.
With a core forged in <b>backend systems</b> and expanding mastery in <b>frontend design</b>,
I traverse that bridge daily: from deploying sleek, data-driven web applications
to experimenting with <b>language models that simulate human emotion</b>.

Outside the terminal, my quests continue: mapping the physical world,
crafting and absorbing visual art, devouring novels, refining personal style,
and venturing deep into simulated universes.
Always seeking beauty — in pixels, in people, in the single life we get to render.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-widest text-emerald-300/70">
        <span>Saving Viewer Digital Footprint Data…</span>
        <ProgressBar width="w-40" />
        <span className="opacity-60">“Don’t Be Evil”</span>
      </div>
    </header>
  );
}

function Divider({ label }) {
  return (
    <div className="my-10 md:my-14">
      <div className="h-px w-full bg-emerald-500/30 shadow-[0_0_12px_#10b981]" />
      <div className="mt-2 text-[11px] tracking-widest text-emerald-300/70">{label}</div>
    </div>
  );
}

function Panel({ title, children }) {
  return (
    <section className="relative">
      <div className="panel ring-1 ring-emerald-400/30 rounded-xl p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-emerald-200 neon-subtitle">{title}</h2>
          <span className="text-[10px] tracking-widest text-emerald-300/60">LOADING…</span>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "JavaScript","C#","Java","React","HTML","CSS", "Bootstrap", "Tailwind", "Node","Express", "C", "PHP", "Python","AWS","MongoDB","MySQL","TypeScript","Docker","GraphQL","CI/CD", "Git", "AWS"
  ];
  return (
    <Panel title="Technical Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {skills.map((s) => (
          <div key={s} className="skill-chip">
            <span className="mr-2 opacity-70">&gt;</span>
            <span className="truncate">{s}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 text-[11px] text-emerald-300/70 flex items-center gap-3">
        <span>Capability Index</span>
        <ProgressBar width="w-48" />
      </div>
    </Panel>
  );
}

function Projects() {
  const data = [
    { title: "Cozy’s Improved Cats", href: "https://modrinth.com/mod/cozys-improved-cats", blurb: "Minecraft mod overhauling the cat entity system" },
    { title: "Cozy’s Improved Wolves", href: "https://modrinth.com/mod/cozys-improved-wolves", blurb: "Minecraft mod overhauling the wolf entity system" },
    { title: "Synthetic Soul", href: "https://github.com/chris-cozy/SyntheticSoulAPI", blurb: "Experimental artificial intelligence framework that simulates humanlike emotions, thinking, and relationships." },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {data.map((p) => (
        <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="group project-card">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-wide text-emerald-50">{p.title}</h3>
            <span className="text-[10px] opacity-70">OPEN ▶</span>
          </div>
          <p className="mt-3 text-sm text-emerald-200/80 leading-relaxed">{p.blurb}</p>
          <div className="mt-4 flex items-center gap-3 text-[10px] text-emerald-300/70">
            <span>STATUS</span>
            <div className="h-[6px] w-24 overflow-hidden rounded bg-emerald-500/10">
              <div className="h-full w-0 bg-emerald-400/80 animate-progress" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function Experience() {
  const items = [
    { company: "STEPS (Science and Technologies for Phosphorus Sustainability)", role: "Software Engineer", period: "2023 – 2024", desc: "[DATA] Designed and developed multiple proprietary internal programs and applications to improve data collection and management. Proactively engaged in extensive client/stakeholder meetings to comprehensively understand system requirements." },
    { company: "ACA (American Credit Acceptance)", role: "Software Engineer", period: "2024 – 2025", desc: "[DATA] Led the development of a high-value streaming dashboard solution, introducing new technology to the organization with a projected business impact of $150K annually. Successfully completed a document processing application that supported multiple data types, contributing an estimated $350K in annual business value. Maintained and enhanced a critical reporting application, ensuring its continued performance and compatibility with evolving data sources. Proactively monitored and resolved issues to minimize operational disruption, preserving the application’s $150K annual value. " },
  ];
  return (
    <Panel title="Career Experience">
      <ul className="relative border-l border-emerald-400/30 ml-3 pl-6">
        {items.map((it, idx) => (
          <li key={idx} className="mb-8 last:mb-0">
            <div className="timeline-dot" />
            <div className="flex flex-wrap items-center gap-x-3">
              <h4 className="text-emerald-100 text-lg font-semibold">{it.company}</h4>
              <span className="text-emerald-300/70 text-xs tracking-widest">{it.period}</span>
            </div>
            <div className="text-emerald-200/90 text-sm mt-1">{it.role}</div>
            <p className="text-emerald-200/80 text-sm mt-2 leading-relaxed">{it.desc}</p>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function Contact({ sending, sent, onSubmit }) {
  return (
    <Panel title="Contact">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="text-sm text-emerald-200/90"></div>
          <a href="mailto:you@example.com" className="mt-1 block text-xl text-emerald-100 underline decoration-emerald-400/60 hover:decoration-emerald-300">
          </a>
          <p className="mt-3 text-emerald-300/70 text-sm">
            Leave a message using the transmitter. Fields are placeholders — wire this to your handler of choice.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <input className="neon-input" placeholder="Your Name" required />
          <input className="neon-input" placeholder="Your Email" type="email" required />
          <textarea className="neon-input min-h-[120px]" placeholder="Your Message" required />
          <button type="submit" className={`transmit-btn ${sending ? "is-sending" : ""} ${sent ? "is-sent" : ""}`}>
            <span className="btn-label">{sent ? "TRANSMITTED" : sending ? "TRANSMITTING…" : "PRESS TO TRANSMIT"}</span>
            <span className="btn-progress" />
          </button>
        </form>
      </div>
    </Panel>
  );
}

function ProgressBar({ width = "w-32" }) {
  return (
    <div className={`h-[10px] ${width} overflow-hidden rounded bg-emerald-500/10 border border-emerald-400/40`}>
      <div className="h-full w-0 animate-progress bg-emerald-400/80" />
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-12 text-[11px] tracking-widest text-emerald-300/60 flex items-center gap-3">
      <span>YOU WATCH THIS</span>
      <span>•</span>
      <span>THIS WATCHES YOU</span>
      <span className="hidden sm:inline">•</span>
      <span className="hidden sm:inline">© 2084</span>
    </div>
  );
}
