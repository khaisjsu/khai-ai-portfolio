"use client";

import { useEffect, useRef, useState } from "react";
import { findAnswer, pickSuggestions, suggestionPool } from "./assistant-data";

type Message = { role: "assistant" | "recruiter"; text: string };

const LANGUAGES = ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML"];
const TOOLS = ["Figma", "VS Code", "GitHub", "Git", "Docker", "Office365"];

const STATS = [
  { value: "3.628", label: "GPA at San José State" },
  { value: "2", label: "Full-stack projects shipped" },
  { value: "5+", label: "REST endpoints built with a 6-person team" },
  { value: "1.5 yrs", label: "Teaching & mentoring students" },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav shell">
      <a className="wordmark" href="#top">
        KHAI<span>.</span>
      </a>
      <div className="nav-links">
        <a href="#work">Selected work</a>
        <a href="#skills">Skills</a>
        <a href="#about">Experience</a>
        <a href="#conversation">AI conversation</a>
      </div>
      <a className="nav-cta" href="mailto:khainguynwork@gmail.com">
        Let&apos;s connect <span>↗</span>
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`}>
        <a href="#work" onClick={close}>Selected work</a>
        <a href="#skills" onClick={close}>Skills</a>
        <a href="#about" onClick={close}>Experience</a>
        <a href="#conversation" onClick={close}>AI conversation</a>
        <a href="mailto:khainguynwork@gmail.com" onClick={close}>Let&apos;s connect ↗</a>
      </div>
    </nav>
  );
}

function AssistantChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi, I’m Khai’s portfolio assistant. Ask me anything about his experience, projects, or what he’s looking for.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(() => suggestionPool.slice(0, 3));
  const askedRef = useRef<string[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isTyping) return;

    const answer = findAnswer(trimmed);
    setMessages((m) => [...m, { role: "recruiter", text: trimmed }]);
    setInput("");
    setIsTyping(true);
    askedRef.current = [...askedRef.current, trimmed];

    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: answer }]);
      setIsTyping(false);
      setSuggestions(pickSuggestions(askedRef.current));
    }, 550);
  };

  return (
    <div className="chat-card">
      <div className="chat-header">
        <div className="bot-avatar">K</div>
        <div>
          <strong>Khai&apos;s portfolio assistant</strong>
          <small>Answers grounded in Khai&apos;s resume</small>
        </div>
        <span className="spark">✦</span>
      </div>

      <div className="chat-messages" ref={scrollRef} role="log" aria-live="polite">
        {messages.map((m, i) => (
          <div className={`message-row ${m.role}`} key={i}>
            <div className="message">{m.text}</div>
          </div>
        ))}
        {isTyping && (
          <div className="message-row assistant">
            <div className="message typing-indicator" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
      </div>

      <div className="suggestions">
        {suggestions.map((q) => (
          <button type="button" key={q} onClick={() => ask(q)} disabled={isTyping}>
            {q}
          </button>
        ))}
      </div>

      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Khai's experience..."
          aria-label="Ask about Khai's experience"
          disabled={isTyping}
        />
        <button aria-label="Send message" disabled={isTyping || !input.trim()}>
          ↗
        </button>
      </form>
      <p className="chat-foot">Conversation ready · Ask a follow-up anytime</p>
    </div>
  );
}

export default function Home() {
  const skillsRef = useReveal<HTMLElement>();
  const workRef = useReveal<HTMLElement>();
  const conversationRef = useReveal<HTMLElement>();
  const aboutRef = useReveal<HTMLElement>();

  return (
    <main>
      <SiteNav />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <i /> SOFTWARE ENGINEER IN THE MAKING
          </p>
          <h1>
            Building software
            <br />
            <em>with intent.</em>
          </h1>
          <p className="lede">
            I&apos;m Khai — a Software Engineering student at San José State who
            likes making complex systems feel simple, useful, and human.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#conversation">
              Start a conversation <span>↓</span>
            </a>
            <a className="text-link" href="/assets/khai-nguyen-resume.pdf" download>
              Download resume <span>↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span><b>01</b> FULL-STACK BUILDER</span>
            <span><b>02</b> BACKEND THINKER</span>
            <span><b>03</b> CURIOUS BY DEFAULT</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-frame">
            <img src="/assets/khai-nguyen.jpg" alt="Portrait of Khai Hoang Nguyen" />
            <div className="image-label">
              KHAI HOANG
              <br />
              NGUYEN / 2026
            </div>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="plus plus-a">+</span>
          <span className="plus plus-b">+</span>
          <p className="side-note">
            Based in
            <br />
            <strong>San Jose, CA</strong>
          </p>
        </div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div>
          JAVA <span>✦</span> PYTHON <span>✦</span> TYPESCRIPT <span>✦</span> REACT{" "}
          <span>✦</span> FASTAPI <span>✦</span> SPRING BOOT <span>✦</span> SYSTEMS
          THAT MATTER <span>✦</span>
        </div>
      </section>

      <section className="reveal skills shell" id="skills" ref={skillsRef}>
        <div className="section-head">
          <p className="eyebrow"><i /> SKILLS & TOOLING</p>
          <p className="section-index">02 / 05</p>
        </div>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>Languages</h3>
            <div className="pill-row">
              {LANGUAGES.map((l) => (
                <span className="pill" key={l}>{l}</span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <h3>Tools & platforms</h3>
            <div className="pill-row">
              {TOOLS.map((t) => (
                <span className="pill" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="stats-strip">
          {STATS.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal work shell" id="work" ref={workRef}>
        <div className="section-head">
          <p className="eyebrow"><i /> SELECTED WORK</p>
          <p className="section-index">03 / 05</p>
        </div>
        <div className="work-grid">
          <article className="project project-dark">
            <div className="project-top">
              <span>01 — FULL-STACK</span>
              <span>APR 2026</span>
            </div>
            <div>
              <p className="project-kicker">SJHACKS2026</p>
              <h2>Photo<span>Guard</span></h2>
              <p className="project-desc">
                Protecting the images that matter with invisible watermarking and a
                human-first interface.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>FastAPI</span>
                <span>OpenCV</span>
              </div>
              <a href="https://github.com/khainguyen21/SJHacks2026" className="project-link">
                View on GitHub ↗
              </a>
            </div>
            <div className="project-art art-photo">
              <div className="scanline" />
              <span>
                IMG_0426
                <br />
                <small>PROTECTED</small>
              </span>
            </div>
          </article>

          <article className="project project-yellow">
            <div className="project-top">
              <span>02 — BACKEND</span>
              <span>JAN — MAY 2026</span>
            </div>
            <div>
              <p className="project-kicker">SJSU / CMPE 131</p>
              <h2>
                Travel
                <br />
                <span>Platform</span>
              </h2>
              <p className="project-desc">
                A service layer that turns search, reservations, and thoughtful
                business logic into a smoother journey.
              </p>
              <div className="project-tags">
                <span>Spring Boot</span>
                <span>REST API</span>
                <span>Team of 6</span>
              </div>
              <a href="https://github.com/SnellyCS/cmpe131-Project" className="project-link">
                View on GitHub ↗
              </a>
            </div>
            <div className="project-art art-route">
              <span className="route-line" />
              <b>SF</b>
              <b>NY</b>
              <b>TKY</b>
            </div>
          </article>
        </div>
      </section>

      <section
        className="reveal conversation shell"
        id="conversation"
        ref={conversationRef}
      >
        <div className="conversation-intro">
          <p className="eyebrow"><i /> ASK THE PORTFOLIO</p>
          <h2>
            Don&apos;t just
            <br />
            <em>read about me.</em>
          </h2>
          <p>
            Have a real conversation. Ask about my work, how I think, or where
            I&apos;m headed next.
          </p>
          <div className="status">
            <span /> AI assistant is online
          </div>
        </div>
        <AssistantChat />
      </section>

      <section className="reveal about shell" id="about" ref={aboutRef}>
        <div>
          <p className="eyebrow"><i /> EXPERIENCE & EDUCATION</p>
          <h2>
            Still learning.
            <br />
            <em>Already building.</em>
          </h2>
          <p className="about-lede">
            Before writing production code, I spent a year and a half helping
            other students find the bug, understand the why, and ship better
            code. That patience shapes how I build today.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-date">2025 — 2027</span>
            <div>
              <h3>B.S. Software Engineering</h3>
              <p>San José State University · GPA 3.628</p>
              <small>Data Structures &amp; Algorithms · Object-Oriented Design · Software Engineering</small>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">2024 — 2025</span>
            <div>
              <h3>Computer Science Tutor</h3>
              <p>Evergreen Valley College</p>
              <small>
                Taught Java fundamentals, diagnosed OOP gaps, and introduced live
                debugging — improving assignment scores by ~10% and cutting rewrite
                time by ~20%.
              </small>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">2023 — 2025</span>
            <div>
              <h3>A.S. Computer Science</h3>
              <p>Evergreen Valley College · GPA 3.681</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footer-big">
          Let&apos;s make
          <br />
          <em>something useful.</em>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Khai Hoang Nguyen</span>
          <a href="mailto:khainguynwork@gmail.com">khainguynwork@gmail.com ↗</a>
          <a href="https://github.com/khaisjsu">GitHub ↗</a>
        </div>
      </footer>
    </main>
  );
}
