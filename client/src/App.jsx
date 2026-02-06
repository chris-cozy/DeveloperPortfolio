import React, { useEffect, useRef, useState } from "react";
import packageJson from "../package.json";

const BUILD_VERSION = `V${packageJson.version}`;

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
    <div className="retro-shell min-h-screen w-full overflow-x-hidden text-green-200">
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="noise-layer absolute inset-0" />
        <div className="grid-layer absolute inset-0" />
        <div className="glow-layer absolute inset-0" />
        <div className="crt-scanlines absolute inset-0" />
      </div>
      <CursorTrail />

      <div className="relative mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-10 lg:py-14">
        <div className="neon-frame rounded-[1.35rem] p-[1px]">
          <div className="terminal-shell rounded-[1.3rem] p-4 md:p-10">
            <TopBar />
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

function CursorTrail() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: coarse)");
    if (pointer.matches) return;

    function handleMouseMove(e) {
      if (!cursorRef.current) return;
      cursorRef.current.style.opacity = "1";
      cursorRef.current.style.transform = `translate3d(${e.clientX - 7}px, ${e.clientY - 7}px, 0)`;
    }

    function handleMouseLeave() {
      if (!cursorRef.current) return;
      cursorRef.current.style.opacity = "0";
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 hidden md:block" aria-hidden>
      <span ref={cursorRef} className="cursor-follow-dot" />
    </div>
  );
}

function TopBar() {
  return (
    <div className="mb-7 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-emerald-300/20 bg-black/40 px-3 py-2 text-[10px] tracking-[0.24em] text-emerald-300/75">
      <div className="flex items-center gap-2">
        <span className="signal-dot bg-red-400/80" />
        <span className="signal-dot bg-amber-300/80" />
        <span className="signal-dot bg-emerald-300/80" />
      </div>
      <span className="text-emerald-200/85">REMOTE::PORTFOLIO_NODE</span>
      <span>AUTH: ROOT_GRANTED // 接続: 安定</span>
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-10">
      <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.25em] text-emerald-200/75">
        <span className="status-pill">BUILD: {BUILD_VERSION}</span>
        <span className="status-pill">AUTHOR: COZY</span>
        <span className="status-pill">MODE: CREATIVE OPS</span>
      </div>

      <h1 className="mt-7 display-font text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
        <span className="neon-title glitch block flicker-slow" data-text="COZY">
          COZY
        </span>
        <span className="title-kicker mt-2 block text-sm md:text-base">SOFTWARE // SYSTEMS // AI</span>
      </h1>

      <div className="mt-6 max-w-3xl leading-relaxed text-emerald-100/85">
        <p className="text-base md:text-lg">
          I build reliable backend systems and expressive frontend experiences with the same goal: turn abstract ideas
          into software people can feel and use. Most days I am shipping data-driven web apps, experimenting with
          emotionally aware language-model interfaces, and refining developer tooling that accelerates teams.
        </p>
        <p className="mt-4 text-sm text-emerald-100/75 md:text-base">
          Outside the terminal I explore visual art, fiction, world mapping, and game worlds. I treat all of it as one
          craft: designing experiences that leave a signal.
        </p>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-emerald-300/75">
        <span>Harvesting ambient telemetry...</span>
        <ProgressBar width="w-40" />
        <span className="opacity-60">Zero trust // Full curiosity</span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <StatCard label="Core Focus" value="Full Stack" />
        <StatCard label="Current Stack" value="C#, Angular, Node, React" />
        <StatCard label="Build Mood" value="Retro Futurism" />
      </div>
    </header>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <div className="text-[10px] tracking-[0.24em] text-emerald-300/65">{label}</div>
      <div className="mt-2 text-sm text-emerald-50">{value}</div>
    </div>
  );
}

function Divider({ label }) {
  const moduleName = label.replace("SYSTEM: ", "").toLowerCase();
  const command = `boot --module ${moduleName}`;
  const promptWidth = `calc(${command.length + 1}ch + ${(Math.max(command.length - 1, 0) * 0.16).toFixed(2)}em)`;

  return (
    <div className="my-11 md:my-14">
      <div className="terminal-command">
        <span className="prompt-host">cozy@terminal</span>
        <span className="prompt-sign">$</span>
        <span className="prompt-text" style={{ "--prompt-width": promptWidth }}>
          {command}
        </span>
        <span className="prompt-cursor" />
      </div>
      <div className="boot-log-list">
        <p className="boot-log-line">
          <span className="boot-tag">[起動]</span>
          <span>{moduleName} subsystem online</span>
        </p>
        <p className="boot-log-line delay-1">
          <span className="boot-tag">[確認]</span>
          <span>signal integrity stable</span>
        </p>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
      <div className="mt-2 text-[11px] tracking-[0.25em] text-emerald-300/70">{label}</div>
    </div>
  );
}

function Panel({ title, children }) {
  return (
    <section className="relative">
      <div className="panel rounded-xl p-4 ring-1 ring-emerald-400/30 md:p-6">
        <div className="flex items-center">
          <h2 className="neon-subtitle text-xl font-bold text-emerald-100 md:text-2xl">{title}</h2>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}

function Skills() {
  const skillGroups = [
    {
      title: "Languages / 言語",
      items: [
        { name: "JavaScript", info: "Core language for modern interactive web applications." },
        { name: "TypeScript", info: "Typed JavaScript for safer, easier-to-maintain codebases." },
        { name: "C#", info: "Primary language for enterprise services and backend APIs." },
        { name: "Java", info: "Object-oriented language used for reliable business systems." },
        { name: "Python", info: "Used for scripting, automation, and AI experimentation." },
        { name: "PHP", info: "Server-side language for traditional web platforms." },
        { name: "C", info: "Low-level language for foundational systems understanding." },
        { name: "HTML", info: "Semantic structure layer for accessible web content." },
        { name: "CSS", info: "Visual styling layer for responsive and expressive interfaces." },
      ],
    },
    {
      title: "Frontend / 表現層",
      items: [
        { name: "React", info: "Component-driven UI library for fast, scalable interfaces." },
        { name: "Angular", info: "Structured frontend framework for large-scale applications." },
        { name: "Tailwind", info: "Utility-first CSS workflow for rapid interface iteration." },
        { name: "Bootstrap", info: "UI toolkit for consistent responsive layout and components." },
      ],
    },
    {
      title: "Backend + Data / 基盤",
      items: [
        { name: "Node", info: "JavaScript runtime powering backend APIs and services." },
        { name: "Express", info: "Minimal Node framework for routing and service endpoints." },
        { name: "GraphQL", info: "Flexible API query layer for efficient client data usage." },
        { name: "MongoDB", info: "Document database for flexible, schema-light storage." },
        { name: "MySQL", info: "Relational database for structured, transactional data." },
        { name: "AWS", info: "Cloud platform used for hosting, storage, and scaling." },
        { name: "Docker", info: "Containerization for consistent environments and deployments." },
        { name: "CI/CD", info: "Automated testing and delivery pipelines for faster releases." },
        { name: "Git", info: "Version control system for collaboration and safe iteration." },
      ],
    },
    {
      title: "Workflow / 開発補助",
      items: [
        { name: "Codex", info: "AI coding workflow for rapid implementation and iteration." },
        { name: "Cursor", info: "AI-assisted IDE tooling for context-aware code generation." },
        { name: "AI-Assisted Development", info: "Using LLM tools responsibly to accelerate delivery quality." },
      ],
    },
  ];

  return (
    <Panel title="Technical Skills">
      <div className="space-y-4">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title} className="skill-group boot-reveal" style={{ animationDelay: `${groupIndex * 65}ms` }}>
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((skill, skillIndex) => (
                <div key={skill.name} className="skill-chip boot-reveal" style={{ animationDelay: `${skillIndex * 30}ms` }} tabIndex={0}>
                  <span className="mr-2 opacity-70">&gt;</span>
                  <span>{skill.name}</span>
                  <div className="skill-tip">{skill.info}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3 text-[11px] text-emerald-300/70">
        <span>Synchronizing Capability Index</span>
        <ProgressBar width="w-48" />
      </div>
    </Panel>
  );
}

function Projects() {
  const data = [
    {
      title: "Cozy's Improved Cats",
      href: "https://modrinth.com/mod/cozys-improved-cats",
      blurb: "Minecraft mod overhauling the cat entity system with richer behavior loops.",
      tag: "Gameplay Systems",
    },
    {
      title: "Cozy's Improved Wolves",
      href: "https://modrinth.com/mod/cozys-improved-wolves",
      blurb: "Minecraft mod overhauling wolves with improved interactions and balancing.",
      tag: "Entity AI",
    },
    {
      title: "Synthetic Soul",
      href: "https://syntheticsoul.netlify.app/",
      blurb: "Experimental AI framework simulating emotion, thought progression, and relational memory.",
      tag: "AI Experiment",
    },
  ];
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {data.map((p, idx) => (
        <a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="group project-card boot-reveal"
          style={{ animationDelay: `${idx * 90}ms` }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-wide text-emerald-50">{p.title}</h3>
            <span className="text-[10px] opacity-70">OPEN &gt;</span>
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-cyan-200/75">{p.tag}</div>
          <p className="mt-3 text-sm leading-relaxed text-emerald-100/75">{p.blurb}</p>
          <div className="mt-4 flex items-center gap-3 text-[10px] text-emerald-300/70">
            <span>CALIBRATING</span>
            <div className="h-[6px] w-full overflow-hidden rounded bg-emerald-500/10">
              <div className="load-bar h-full w-1/4 bg-emerald-400/80" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function Experience() {
  const items = [
    {
      company: "STEPS (Science and Technologies for Phosphorus Sustainability)",
      role: "Software Engineer",
      period: "2023 - 2024",
      desc: "Designed and developed multiple proprietary internal programs and applications to improve data collection and management. Proactively engaged in extensive client and stakeholder meetings to comprehensively understand system requirements.",
    },
    {
      company: "ACA (American Credit Acceptance)",
      role: "Software Engineer",
      period: "2024 - 2025",
      desc: "Led the development of a high-value streaming dashboard solution, introducing new technology to the organization with a projected business impact of $150K annually. Successfully completed a document processing application that supported multiple data types, contributing an estimated $350K in annual business value. Maintained and enhanced a critical reporting application, ensuring performance and compatibility with evolving data sources. Proactively monitored and resolved issues to minimize operational disruption, preserving the application's $150K annual value.",
    },
  ];
  return (
    <Panel title="Career Experience">
      <ul className="relative ml-3 border-l border-emerald-400/30 pl-6">
        {items.map((it, idx) => (
          <li key={idx} className="mb-8 last:mb-0">
            <div className="timeline-dot" />
            <div className="flex flex-wrap items-center gap-x-3">
              <h4 className="text-lg font-semibold text-emerald-100">{it.company}</h4>
              <span className="text-xs tracking-[0.2em] text-emerald-300/70">{it.period}</span>
            </div>
            <div className="mt-1 text-sm text-cyan-100/90">{it.role}</div>
            <p className="mt-2 text-sm leading-relaxed text-emerald-100/75">{it.desc}</p>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function Contact({ sending, sent, onSubmit }) {
  const EMAIL_ENDPOINT = import.meta.env.VITE_EMAIL_ENDPOINT;
  const hasEmailEndpoint = Boolean(EMAIL_ENDPOINT && EMAIL_ENDPOINT.trim());

  const formInitial = { firstName: "", lastName: "", email: "", phone: "", message: "", name: "" };
  const [form, setForm] = useState(formInitial);
  const [status, setStatus] = useState({ ok: false, message: "" });

  function update(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;
    if (!hasEmailEndpoint) {
      setStatus({ ok: false, message: "Transmitter offline: configure VITE_EMAIL_ENDPOINT to enable sending." });
      return;
    }
    setStatus({ ok: false, message: "" });
    const payload = {
      firstName: form.name || form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    try {
      onSubmit(e);
      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(EMAIL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      clearTimeout(t);
      const result = await res.json().catch(() => ({ code: res.ok ? 200 : res.status }));
      setForm(formInitial);
      if (result.code === 200) {
        setStatus({ ok: true, message: "Message sent successfully." });
      } else {
        setStatus({ ok: false, message: "Something went wrong. Please try again later." });
      }
    } catch (err) {
      setStatus({ ok: false, message: err.name === "AbortError" ? "Request timed out. Please retry." : "Network error. Check your connection and try again." });
    }
  }


  return (
    <Panel title="Contact">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-300/70">Uplink channel</div>
          <p className="mt-2 text-sm leading-relaxed text-emerald-100/80">
            Use the transmitter to open a line. I am available for engineering roles, collaborations, and experimental
            product builds.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cyan-100/75">Response target: when available</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="neon-input" placeholder="Your Name" value={form.name} onChange={(e) => update("name", e.target.value)} required />
          <input className="neon-input" placeholder="Your Email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required />
          <textarea className="neon-input min-h-[120px]" placeholder="Your Message" value={form.message} onChange={(e) => update("message", e.target.value)} required />
          <button type="submit" disabled={sending || !hasEmailEndpoint} className={`transmit-btn ${sending ? "is-sending" : ""} ${sent ? "is-sent" : ""}`}>
            <span className="btn-label">
              {!hasEmailEndpoint ? "TRANSMITTER OFFLINE" : sent ? "TRANSMITTED" : sending ? "TRANSMITTING..." : "PRESS TO TRANSMIT"}
            </span>
            <span className="btn-progress" />
          </button>
          {!hasEmailEndpoint && (
            <p className="text-xs uppercase tracking-[0.16em] text-amber-200/70">
              No email relay detected. Set `VITE_EMAIL_ENDPOINT` to activate transmission.
            </p>
          )}
          <div aria-live="polite" className={`text-sm mt-2 ${status.message ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
            <span className={`${status.ok ? "text-emerald-300" : "text-red-300"}`}>{status.message || "_"}</span>
          </div>
        </form>
      </div>
    </Panel>
  );
}

function ProgressBar({ width = "w-32" }) {
  return (
    <div className={`h-[10px] ${width} overflow-hidden rounded bg-emerald-500/10 border border-emerald-400/40`}>
      <div className="load-bar h-full w-1/4 bg-emerald-400/80" />
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-12 flex items-center gap-3 text-[11px] tracking-[0.2em] text-emerald-300/60">
      <span>YOU WATCH THIS</span>
      <span>|</span>
      <span>THIS WATCHES YOU</span>
      <span className="hidden sm:inline">|</span>
      <span className="hidden sm:inline">(C) 2084</span>
    </div>
  );
}
