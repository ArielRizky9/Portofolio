"use client";

import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit,
  Github, Linkedin, Mail, Menu, X, Database, Sparkles, Code2,
  Layers3, GraduationCap, ExternalLink
} from "lucide-react";

const projects = [
  {
    id: "01",
    category: "DATA SCIENCE · CASE STUDY",
    title: "Student Performance Analysis",
    subtitle: "Finding the signals behind learning outcomes.",
    description: "A data science case study exploring student achievement data, identifying patterns that may relate to academic performance, and translating analysis into useful educational insights.",
    stack: ["Python", "Pandas", "Data Analysis", "Machine Learning"],
    accent: "violet",
    icon: BarChart3,
    status: "CASE STUDY",
  },
  {
    id: "02",
    category: "PRODUCT STRATEGY · UI/UX",
    title: "Everyday Muslim Ecosystem",
    subtitle: "Connecting everyday needs through digital experiences.",
    description: "A product concept and ecosystem redesign focused on bringing relevant everyday services into a more cohesive, accessible, and thoughtful digital experience.",
    stack: ["Product Research", "UI/UX", "Figma", "Strategy"],
    accent: "blue",
    icon: Layers3,
    status: "PRODUCT CONCEPT",
  },
  {
    id: "03",
    category: "EXPLORATION · IN PROGRESS",
    title: "More projects coming soon",
    subtitle: "The next question is always worth exploring.",
    description: "I'm continuously learning, experimenting with new tools, and developing projects that connect analytical thinking with real-world problems.",
    stack: ["Learning", "Experimentation", "Building"],
    accent: "silver",
    icon: BrainCircuit,
    status: "IN PROGRESS",
  },
];

const capabilities = [
  { icon: Database, title: "Data & Analysis", text: "Exploring datasets, finding patterns, and communicating insights." },
  { icon: BrainCircuit, title: "Machine Learning", text: "Building foundational knowledge of predictive modelling and evaluation." },
  { icon: Layers3, title: "Product Thinking", text: "Connecting user needs, research, and practical digital solutions." },
  { icon: Code2, title: "Continuous Learning", text: "Learning by doing, documenting, iterating, and improving." },
];

const tools = ["Python", "Pandas", "SQL · Learning", "Data Visualization", "Figma", "Microsoft Excel", "Research", "Problem Solving"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav shell">
        <a className="wordmark" href="#home" onClick={closeMenu}>AR<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={14} /></a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-content">
          <div className="availability"><span className="pulse" /> STUDENT & ASPIRING DATA SCIENTIST</div>
          <p className="hero-pretitle">HELLO, I'M MUHAMMAD ARIEL RIZKY</p>
          <h1>Turning data<br />into <span>direction.</span></h1>
          <p className="hero-description">
            I&apos;m a student driven by curiosity about data, technology, and the stories hidden behind information. I enjoy learning, exploring problems, and shaping ideas into meaningful solutions.
          </p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#work">Explore projects <ArrowUpRight size={16} /></a>
            <a className="button button-quiet" href="#about">Discover my story <ArrowDown size={15} /></a>
          </div>
          <div className="hero-meta"><span>BASED IN INDONESIA</span><span>PORTFOLIO / 2026</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract purple data-inspired artwork">
          <div className="visual-grid" />
          <div className="ring ring-a" /><div className="ring ring-b" /><div className="ring ring-c" />
          <div className="orb"><div className="orb-shine" /><Sparkles size={30} strokeWidth={1.2} /></div>
          <div className="orbit-dot dot-a" /><div className="orbit-dot dot-b" /><div className="orbit-dot dot-c" />
          <div className="visual-label label-a">DATA / INSIGHT</div>
          <div className="visual-label label-b">CURIOSITY IN MOTION</div>
          <div className="visual-coordinate">06°12&apos; S<br />106°49&apos; E</div>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="statement">
        <div className="shell statement-inner">
          <span className="eyebrow">A GUIDING THOUGHT</span>
          <p>Good questions lead to better insights.<br /><em>Better insights create better possibilities.</em></p>
          <span className="statement-mark">✳</span>
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div className="section-side">
          <span className="eyebrow">01 / ABOUT ME</span>
          <h2>Curiosity is<br />my <em>starting point.</em></h2>
        </div>
        <div className="about-main">
          <p className="lead">I&apos;m Muhammad Ariel Rizky, a student and aspiring data scientist interested in how data and technology can help us understand the world a little better.</p>
          <p className="body-copy">I&apos;m building my foundation in data analysis, programming, and machine learning while exploring how thoughtful digital products can solve practical problems. I believe progress comes from staying curious, being willing to experiment, and learning from every iteration.</p>
          <div className="about-details">
            <div><span className="detail-icon"><GraduationCap size={18} /></span><div><b>Current focus</b><small>Learning & building foundations</small></div></div>
            <div><span className="detail-icon"><Database size={18} /></span><div><b>Areas of interest</b><small>Data science · Technology · Product</small></div></div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="work">
        <div className="shell">
          <div className="section-header">
            <div><span className="eyebrow">02 / SELECTED WORK</span><h2>Projects with<br /><em>a purpose.</em></h2></div>
            <p>A selection of case studies and explorations. Each project is a chance to ask better questions and turn learning into something tangible.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card ${project.accent}`} key={project.id}>
                  <div className="project-card-top"><span>{project.id} — {project.category}</span><span className="project-status">{project.status}</span></div>
                  <div className="project-art"><div className="project-art-ring" /><div className="project-icon"><Icon size={34} strokeWidth={1.25} /></div><span className="art-index">AR / {project.id}</span></div>
                  <div className="project-info">
                    <p className="project-subtitle">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  <div className="project-card-bottom"><span>PROJECT OVERVIEW</span><ArrowUpRight size={17} /></div>
                </article>
              );
            })}
          </div>
          <p className="project-footnote">Selected work · More case studies will be added as projects develop.</p>
        </div>
      </section>

      <section className="section shell capabilities-section" id="capabilities">
        <div className="section-side">
          <span className="eyebrow">03 / WHAT I EXPLORE</span>
          <h2>Building a<br /><em>useful toolkit.</em></h2>
        </div>
        <div className="capabilities-main">
          <p className="lead">A growing mix of technical foundations and ways of thinking that help me approach problems from different angles.</p>
          <div className="capability-list">
            {capabilities.map(({ icon: Icon, title, text }, i) => (
              <div className="capability" key={title}>
                <span className="cap-number">0{i + 1}</span><span className="cap-icon"><Icon size={20} /></span>
                <div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="cap-arrow" size={17} />
              </div>
            ))}
          </div>
          <div className="tools-block"><span className="eyebrow">TOOLS & TOPICS</span><div className="tool-tags">{tools.map(tool => <span key={tool}>{tool}</span>)}</div></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <span className="eyebrow">04 / CONTACT</span>
          <p className="contact-overline">HAVE A PROJECT, AN IDEA, OR JUST WANT TO CONNECT?</p>
          <h2>Let&apos;s make<br /><em>something meaningful.</em></h2>
          <a className="contact-email" href="mailto:muhammadarielrizkyy@gmail.com">muhammadarielrizkyy@gmail.com <ArrowUpRight size={19} /></a>
          <div className="contact-bottom">
            <p>Open to learning, thoughtful conversations, and opportunities to grow.</p>
            <div className="social-links">
              <a href="https://github.com/ArielRizky9" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={12} /></a>
              <a href="mailto:muhammadarielrizkyy@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="wordmark" href="#home">AR<span>.</span></a>
        <span>© 2026 Muhammad Ariel Rizky. Built with curiosity.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
