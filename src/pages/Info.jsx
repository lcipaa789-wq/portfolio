import { useRef, useEffect } from "react";
import me from "../images/me.jpeg";
import anime from "../images/anime.png";
import miniShop from "../images/miniShop.png";
import playHop from "../images/playHop.png";
import {
  Download,
  Mail,
  MapPin,
  Send,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin } from "react-bootstrap-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiRedux } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function CornerMarks() {
  const positions = [
    { top: 10, left: 10,  borderTop: "1px solid var(--primary)", borderLeft:  "1px solid var(--primary)" },
    { top: 10, right: 10, borderTop: "1px solid var(--primary)", borderRight: "1px solid var(--primary)" },
    { bottom: 10, left: 10,  borderBottom: "1px solid var(--primary)", borderLeft:  "1px solid var(--primary)" },
    { bottom: 10, right: 10, borderBottom: "1px solid var(--primary)", borderRight: "1px solid var(--primary)" },
  ];
  return (
    <>
      {positions.map((style, i) => (
        <div key={i} className="absolute w-3.5 h-3.5 pointer-events-none" style={style} />
      ))}
    </>
  );
}

const stackGroups = [
  {
    label: "Core",
    items: [
      { Icon: FaHtml5,       name: "HTML5" },
      { Icon: FaCss3Alt,     name: "CSS3" },
      { Icon: SiJavascript,  name: "JavaScript" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { Icon: FaReact,       name: "React" },
      { Icon: SiRedux,       name: "Redux" },
      { Icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    label: "Tooling",
    items: [
      { Icon: FaGitAlt, name: "Git" },
      { Icon: Github,   name: "GitHub" },
    ],
  },
];

const projects = [
  {
    title: "Playhop",
    desc: "Game platform built with React, Redux, RAWG API and Tailwind CSS.",
    image: playHop,
    link: "https://steam-clone-green.vercel.app/",
    github: "https://github.com/lcipaa789-wq/steam-clone.git",
    featured: true,
  },
  {
    title: "MiniShop",
    desc: "E-commerce app with cart, product cards, search and React Router.",
    image: miniShop,
    link: "https://mini-shop-react-jet.vercel.app/",
    github: "https://github.com/lcipaa789-wq/MiniShop-React.git",
  },
  {
    title: "Anime",
    desc: "Anime platform with trending titles, search, and details pages.",
    image: anime,
    link: "https://vite-project-six-rho.vercel.app/",
    github: "https://github.com/lcipaa789-wq/vite-project.git",
  },
];

const SectionHeading = ({ children }) => (
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
    {children}
  </h2>
);

const MonoLabel = ({ children }) => (
  <span
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "0.65rem",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--accent)",
    }}
  >
    {children}
  </span>
);

const Info = () => {
  const formRef = useRef();
  const navigate = useNavigate();
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
        () => {
          alert("Message sent!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  const featured = projects[0];
  const secondary = projects.slice(1);

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
    transition: "border-color 0.15s",
  };

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── Sticky nav ─────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-16 py-5"
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "oklch(0.08 0 0 / 0.94)",
          backdropFilter: "blur(14px)",
        }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
          style={{
            color: "var(--muted)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: 0,
          }}
        >
          <ArrowLeft size={13} />
          Back
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Projects", "Stack", "Contact"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              style={{
                color: "var(--muted)",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', monospace",
                textDecoration: "none",
              }}
              className="transition-colors duration-200 hover:text-white"
            >
              {s}
            </a>
          ))}
        </div>
      </nav>

      {/* ── About ──────────────────────────────────── */}
      <section id="about" className="px-8 md:px-16 py-20 md:py-28">
        <div
          className="max-w-5xl mx-auto grid items-center gap-12 md:gap-20"
          style={{ gridTemplateColumns: "auto 1fr" }}
        >
          {/* Photo */}
          <div
            className="reveal relative overflow-hidden"
            style={{
              width: "clamp(160px, 22vw, 280px)",
              aspectRatio: "3 / 4",
              border: "1px solid var(--border-primary)",
              flexShrink: 0,
            }}
          >
            <img
              src={me}
              alt="Tsydyp Lundukov"
              className="w-full h-full object-cover"
              style={{ objectPosition: "85% top" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{
                background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
              }}
            />
            <CornerMarks />
          </div>

          {/* Text */}
          <div>
            <div className="reveal mb-3" style={{ transitionDelay: "0.07s" }}>
              <MonoLabel>About</MonoLabel>
            </div>

            <div className="reveal" style={{ transitionDelay: "0.13s" }}>
              <SectionHeading>
                I'm Tsydyp<br />
                <span style={{ color: "var(--primary)" }}>Lundukov</span>
              </SectionHeading>
            </div>

            <div
              className="reveal flex items-center gap-3 mt-5 mb-6"
              style={{ transitionDelay: "0.19s" }}
            >
              <div style={{ width: 32, height: 1, background: "var(--primary)", flexShrink: 0 }} />
              <MonoLabel>Frontend Developer</MonoLabel>
            </div>

            <p
              className="reveal"
              style={{
                transitionDelay: "0.24s",
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: 1.85,
                maxWidth: "52ch",
                margin: "0 0 28px",
              }}
            >
              I build modern, responsive web applications using React, Tailwind CSS,
              JavaScript, and Redux. Focused on clean UI, smooth user experience,
              and code that's readable and maintainable.
            </p>

            <div className="reveal" style={{ transitionDelay: "0.3s" }}>
              <a
                href="/Tsydyp_Lundukov_Resume.pdf"
                download="Tsydyp_Lundukov_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.03]"
                style={{
                  background: "var(--primary)",
                  color: "oklch(1 0 0)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                Download CV
                <Download size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────── */}
      <section
        id="projects"
        className="px-8 md:px-16 py-20 md:py-28"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-12">
            <SectionHeading>Projects</SectionHeading>
          </div>

          {/* Featured project */}
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
                  src={featured.image}
                  alt={featured.title}
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
                  {featured.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    marginBottom: 22,
                  }}
                >
                  {featured.desc}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.03]"
                    style={{
                      background: "var(--primary)",
                      color: "oklch(1 0 0)",
                      fontSize: "0.78rem",
                      textDecoration: "none",
                    }}
                  >
                    View Project
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold transition-colors duration-150 hover:border-white/30"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                      fontSize: "0.78rem",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                    <Github size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary projects */}
          <div className="grid md:grid-cols-2 gap-4">
            {secondary.map((project, i) => (
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
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                      marginBottom: 16,
                    }}
                  >
                    {project.desc}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-md font-semibold transition-transform duration-150 hover:scale-[1.03]"
                      style={{
                        background: "var(--primary)",
                        color: "oklch(1 0 0)",
                        fontSize: "0.72rem",
                        textDecoration: "none",
                      }}
                    >
                      View
                      <ExternalLink size={10} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-md font-semibold transition-colors duration-150"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                        fontSize: "0.72rem",
                        textDecoration: "none",
                      }}
                    >
                      GitHub
                      <Github size={10} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ─────────────────────────────── */}
      <section
        id="stack"
        className="px-8 md:px-16 py-20 md:py-28"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-12">
            <SectionHeading>Tech Stack</SectionHeading>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stackGroups.map((group, gi) => (
              <div
                key={group.label}
                className="reveal"
                style={{ transitionDelay: `${gi * 0.09}s` }}
              >
                <div style={{ marginBottom: 18 }}>
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
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--ink)",
                          fontWeight: 500,
                        }}
                      >
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

      {/* ── Contact ────────────────────────────────── */}
      <section
        id="contact"
        className="px-8 md:px-16 py-20 md:py-28"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20">

          {/* Left: info */}
          <div>
            <div className="reveal mb-3">
              <MonoLabel>Contact</MonoLabel>
            </div>
            <div className="reveal" style={{ transitionDelay: "0.07s" }}>
              <SectionHeading>
                Let's work<br />
                <span style={{ color: "var(--primary)" }}>together</span>
              </SectionHeading>
            </div>
            <p
              className="reveal"
              style={{
                transitionDelay: "0.13s",
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                margin: "20px 0 28px",
                maxWidth: "38ch",
              }}
            >
              Available for frontend developer opportunities. Let's build
              something clean, fast, and precise.
            </p>

            <div
              className="reveal flex flex-col gap-4"
              style={{ transitionDelay: "0.19s" }}
            >
              {[
                { icon: <Mail size={15} style={{ color: "var(--primary)" }} />, label: "tsydyplundukov@gmail.com", href: null },
                { icon: <MapPin size={15} style={{ color: "var(--primary)" }} />, label: "New York, USA", href: null },
                { icon: <Github size={15} style={{ color: "var(--primary)" }} />, label: "GitHub", href: "https://github.com/lcipaa789-wq" },
                { icon: <Linkedin size={15} style={{ color: "var(--primary)" }} />, label: "LinkedIn", href: "https://www.linkedin.com/in/tsydyp-lundukov-a5507a3b5/" },
              ].map(({ icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    {icon}
                    {label}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-3">
                    {icon}
                    <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>{label}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal" style={{ transitionDelay: "0.13s" }}>
            <form ref={formRef} className="flex flex-col gap-4" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={inputStyle}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={inputStyle}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                style={{ ...inputStyle, resize: "none" }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
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

      {/* ── Footer ─────────────────────────────────── */}
      <footer
        className="px-8 md:px-16 py-7 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <MonoLabel>Tsydyp Lundukov · {new Date().getFullYear()}</MonoLabel>
        <MonoLabel>Frontend Developer</MonoLabel>
      </footer>
    </div>
  );
};

export default Info;
