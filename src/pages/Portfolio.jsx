import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Download,
  Send,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { Github, Linkedin } from "react-bootstrap-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
} from "react-icons/si";
import emailjs from "@emailjs/browser";
import me from "../images/me.jpeg";
import anime from "../images/anime.png";
import miniShop from "../images/miniShop.png";
import playHop from "../images/playHop.png";
import biteRush from "../images/biteRush.png";

const stackGroups = [
  {
    label: "Frontend",
    items: [
      { Icon: FaHtml5,      name: "HTML5" },
      { Icon: FaCss3Alt,    name: "CSS3" },
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: FaReact,      name: "React" },
      { Icon: SiTailwindcss, name: "Tailwind CSS" },
      { Icon: SiRedux,      name: "Redux" },
    ],
  },
  {
    label: "Backend",
    items: [
      { Icon: SiNodedotjs,  name: "Node.js" },
      { Icon: SiExpress,    name: "Express.js" },
      { Icon: SiMongodb,    name: "MongoDB" },
    ],
  },
  {
    label: "Tooling",
    items: [
      { Icon: FaGitAlt, name: "Git" },
      { Icon: Github,   name: "GitHub" },
      { Icon: SiVercel, name: "Vercel" },
    ],
  },
];

const projects = [
  {
    title: "BiteRush",
    desc: "Full-stack food delivery app with cart, orders, Stripe payments, JWT auth, and an AI food assistant powered by Claude.",
    image: biteRush,
    link: "https://food-delivery-sooty-two-55.vercel.app/",
    github: "https://github.com/lcipaa789-wq/food-delivery.git",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: true,
  },
  {
    title: "Playhop",
    desc: "Game platform built with React, Redux, RAWG API and Tailwind CSS.",
    image: playHop,
    link: "https://steam-clone-green.vercel.app/",
    github: "https://github.com/lcipaa789-wq/steam-clone.git",
    tags: ["React", "Redux", "RAWG API"],
  },
  {
    title: "MiniShop",
    desc: "E-commerce app with cart, product cards, search and React Router.",
    image: miniShop,
    link: "https://mini-shop-react-jet.vercel.app/",
    github: "https://github.com/lcipaa789-wq/MiniShop-React.git",
    tags: ["React", "React Router"],
  },
  {
    title: "Anime",
    desc: "Anime platform with trending titles, search, and details pages.",
    image: anime,
    link: "https://vite-project-six-rho.vercel.app/",
    github: "https://github.com/lcipaa789-wq/vite-project.git",
    tags: ["React", "Vite", "API"],
  },
];

const navLinks = ["about", "skills", "projects", "contact"];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function CornerMarks() {
  const corners = [
    { top: 10, left: 10,   borderTop: "1px solid var(--primary)", borderLeft:  "1px solid var(--primary)" },
    { top: 10, right: 10,  borderTop: "1px solid var(--primary)", borderRight: "1px solid var(--primary)" },
    { bottom: 10, left: 10,  borderBottom: "1px solid var(--primary)", borderLeft:  "1px solid var(--primary)" },
    { bottom: 10, right: 10, borderBottom: "1px solid var(--primary)", borderRight: "1px solid var(--primary)" },
  ];
  return (
    <>
      {corners.map((style, i) => (
        <div key={i} className="absolute w-3.5 h-3.5 pointer-events-none" style={style} />
      ))}
    </>
  );
}

const MonoLabel = ({ children, style }) => (
  <span
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "0.65rem",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--accent)",
      ...style,
    }}
  >
    {children}
  </span>
);

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef();
  useScrollReveal();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => { alert("Message sent!"); formRef.current.reset(); },
        () => { alert("Failed to send message."); }
      );
  };

  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: "var(--ink)",
    fontSize: "0.9rem",
    fontFamily: "'Manrope', sans-serif",
    width: "100%",
    padding: "14px 16px",
    outline: "none",
    display: "block",
  };

  return (
    <div
      className="dot-grid"
      style={{ backgroundColor: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}
    >
      {/* Ambient hero glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 50% at 35% 40%, oklch(0.62 0.19 158 / 0.06) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />

      {/* ── NAVIGATION ────────────────────────────────── */}
      <header
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-14 h-16"
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "oklch(0.08 0 0 / 0.92)",
          backdropFilter: "blur(14px)",
        }}
      >
        <a
          href="#about"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted)",
            textDecoration: "none",
          }}
        >
          tsydyp.lundukov
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
              }}
              className="transition-colors duration-200 hover:text-white"
            >
              {link}
            </a>
          ))}
          <a
            href="/Tsydyp_Lundukov_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.03]"
            style={{
              background: "var(--primary)",
              color: "oklch(1 0 0)",
              fontSize: "0.78rem",
              fontFamily: "'Manrope', sans-serif",
              textDecoration: "none",
            }}
          >
            Resume
            <Download size={13} />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 -mr-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted)" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          className="fixed inset-x-0 top-16 z-40 flex flex-col px-6 py-5 gap-1 md:hidden"
          style={{
            backgroundColor: "oklch(0.10 0.006 165 / 0.97)",
            borderBottom: "1px solid var(--border)",
            backdropFilter: "blur(14px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize py-3.5 transition-colors duration-150 hover:text-white"
              style={{
                color: "var(--muted)",
                borderBottom: "1px solid var(--border)",
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="/Tsydyp_Lundukov_Resume.pdf"
            download
            className="mt-4 flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold"
            style={{
              background: "var(--primary)",
              color: "oklch(1 0 0)",
              fontFamily: "'Manrope', sans-serif",
              textDecoration: "none",
            }}
          >
            Download Resume
            <Download size={16} />
          </a>
        </div>
      )}

      {/* ── HERO / ABOUT ─────────────────────────────── */}
      <section
        id="about"
        className="relative z-10 flex items-center min-h-screen pt-16 px-6 md:px-14 py-20 md:py-0"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-14 md:gap-8">

          {/* Left: typography */}
          <div className="flex-1">
            {/* Role */}
            <div className="animate-fadeIn mb-7" style={{ animationDelay: "0.05s" }}>
              <MonoLabel>[ Frontend Developer ]</MonoLabel>
            </div>

            {/* Name */}
            <h1 style={{ margin: 0, lineHeight: 0.88, letterSpacing: "-0.025em" }}>
              <div style={{ overflow: "hidden" }}>
                <div
                  className="animate-slideUp"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
                    color: "var(--ink)",
                    animationDelay: "0.12s",
                  }}
                >
                  TSYDYP
                </div>
              </div>
              <div style={{ overflow: "hidden" }}>
                <div
                  className="animate-slideUp"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
                    color: "var(--primary)",
                    animationDelay: "0.25s",
                  }}
                >
                  LUNDUKOV
                </div>
              </div>
            </h1>

            {/* Stack hint */}
            <div
              className="animate-fadeIn flex items-center gap-4 mt-7 mb-7"
              style={{ animationDelay: "0.52s" }}
            >
              <div style={{ width: 40, height: 1, background: "var(--primary)", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                React · Tailwind · Redux
              </span>
            </div>

            {/* Bio */}
            <p
              className="animate-fadeIn"
              style={{
                animationDelay: "0.62s",
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: 1.85,
                maxWidth: "40ch",
                margin: 0,
              }}
            >
              Building fast, precise React applications. Focused on clean UI,
              maintainable code, and real-world delivery.
            </p>

            {/* CTAs */}
            <div
              className="animate-fadeIn flex flex-wrap gap-3 mt-10"
              style={{ animationDelay: "0.78s" }}
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.03]"
                style={{
                  background: "var(--primary)",
                  color: "oklch(1 0 0)",
                  fontSize: "0.875rem",
                  fontFamily: "'Manrope', sans-serif",
                  textDecoration: "none",
                }}
              >
                View Projects
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.03]"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--ink)",
                  fontSize: "0.875rem",
                  fontFamily: "'Manrope', sans-serif",
                  textDecoration: "none",
                }}
              >
                Contact me
              </a>
            </div>

            {/* Social */}
            <div className="animate-fadeIn flex items-center gap-5 mt-10" style={{ animationDelay: "0.9s" }}>
              <a
                href="https://github.com/lcipaa789-wq"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted)" }}
                className="transition-colors duration-200 hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/tsydyp-lundukov-a5507a3b5/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted)" }}
                className="transition-colors duration-200 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="flex-shrink-0 self-center md:self-auto">
            <div
              className="animate-fadeIn relative overflow-hidden"
              style={{
                animationDelay: "0.18s",
                width: "clamp(164px, 24vw, 300px)",
                aspectRatio: "3 / 4",
                border: "1px solid var(--border-primary)",
              }}
            >
              <img
                src={me}
                alt="Tsydyp Lundukov, Frontend Developer"
                className="w-full h-full object-cover"
                style={{ objectPosition: "85% top" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }}
              />
              <CornerMarks />
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────── */}
      <section
        id="skills"
        className="relative z-10 px-6 md:px-14 py-20 md:py-28"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-14">
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Tech Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stackGroups.map((group, gi) => (
              <div
                key={group.label}
                className="reveal"
                style={{ transitionDelay: `${gi * 0.09}s` }}
              >
                <div style={{ marginBottom: 16 }}>
                  <MonoLabel>{group.label}</MonoLabel>
                </div>
                <div className="flex flex-col gap-2.5">
                  {group.items.map(({ Icon, name }) => (
                    <div
                      key={name}
                      className="flex items-center gap-3"
                      style={{
                        padding: "10px 14px",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                      }}
                    >
                      <Icon size={17} style={{ color: "var(--primary)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.875rem", color: "var(--ink)", fontWeight: 500 }}>
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section
        id="projects"
        className="relative z-10 px-6 md:px-14 py-20 md:py-28"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-14">
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Projects
            </h2>
          </div>

          {/* Featured */}
          <div
            className="reveal mb-5"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              overflow: "hidden",
              transitionDelay: "0.08s",
            }}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-55 overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <MonoLabel>Featured</MonoLabel>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "var(--ink)",
                    margin: "8px 0 10px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {projects[0].title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        padding: "3px 8px",
                        borderRadius: 4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    marginBottom: 22,
                  }}
                >
                  {projects[0].desc}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={projects[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.03]"
                    style={{ background: "var(--primary)", color: "oklch(1 0 0)", fontSize: "0.78rem", textDecoration: "none" }}
                  >
                    View Project <ExternalLink size={12} />
                  </a>
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold transition-colors duration-150"
                    style={{ border: "1px solid var(--border)", color: "var(--muted)", fontSize: "0.78rem", textDecoration: "none" }}
                  >
                    GitHub <Github size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.slice(1).map((project, i) => (
              <div
                key={project.title}
                className="reveal"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  overflow: "hidden",
                  transitionDelay: `${0.14 + i * 0.09}s`,
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.58rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          background: "var(--surface-2)",
                          border: "1px solid var(--border)",
                          padding: "2px 7px",
                          borderRadius: 3,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      color: "var(--ink)",
                      margin: "0 0 8px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: 16 }}>
                    {project.desc}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-md font-semibold transition-transform duration-150 hover:scale-[1.03]"
                      style={{ background: "var(--primary)", color: "oklch(1 0 0)", fontSize: "0.72rem", textDecoration: "none" }}
                    >
                      View <ExternalLink size={10} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-md font-semibold transition-colors duration-150"
                      style={{ border: "1px solid var(--border)", color: "var(--muted)", fontSize: "0.72rem", textDecoration: "none" }}
                    >
                      GitHub <Github size={10} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section
        id="contact"
        className="relative z-10 px-6 md:px-14 py-20 md:py-28"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20">

          {/* Left */}
          <div>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
                margin: "0 0 18px",
              }}
            >
              Let's work<br />
              <span style={{ color: "var(--primary)" }}>together</span>
            </h2>
            <p
              className="reveal"
              style={{
                transitionDelay: "0.08s",
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                margin: "0 0 28px",
                maxWidth: "38ch",
              }}
            >
              Available for frontend developer opportunities. Let's build
              something clean, fast, and precise.
            </p>

            <div
              className="reveal flex flex-col gap-4"
              style={{ transitionDelay: "0.16s" }}
            >
              {[
                { Icon: Mail,     label: "tsydyplundukov@gmail.com", href: "mailto:tsydyplundukov@gmail.com" },
                { Icon: MapPin,   label: "New York, USA",             href: null },
                { Icon: Github,   label: "GitHub",                    href: "https://github.com/lcipaa789-wq" },
                { Icon: Linkedin, label: "LinkedIn",                  href: "https://www.linkedin.com/in/tsydyp-lundukov-a5507a3b5/" },
              ].map(({ Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    <Icon size={15} className="shrink-0" style={{ color: "var(--primary)" }} />
                    {label}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={15} className="shrink-0" style={{ color: "var(--primary)" }} />
                    <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>{label}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal" style={{ transitionDelay: "0.12s" }}>
            <form ref={formRef} className="flex flex-col gap-4" onSubmit={sendEmail}>
              <input type="text"  name="name"    placeholder="Your Name"    required style={inputStyle} />
              <input type="email" name="email"   placeholder="Your Email"   required style={inputStyle} />
              <textarea           name="message" placeholder="Your Message" required rows={6} style={{ ...inputStyle, resize: "none" }} />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.02]"
                style={{
                  background: "var(--primary)",
                  color: "oklch(1 0 0)",
                  fontSize: "0.875rem",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                Send Message
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer
        className="relative z-10 px-6 md:px-14 py-7 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <MonoLabel>Tsydyp Lundukov · {new Date().getFullYear()}</MonoLabel>
        <MonoLabel>Built with React & Tailwind</MonoLabel>
      </footer>
    </div>
  );
}
