import { Github, Linkedin } from "react-bootstrap-icons";
import { Download, ArrowUpRight } from "lucide-react";
import me from "../images/me.jpeg";
import { useNavigate } from "react-router";

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
        <div
          key={i}
          className="absolute w-3.5 h-3.5 pointer-events-none"
          style={style}
        />
      ))}
    </>
  );
}

function Main() {
  const navigate = useNavigate();

  return (
    <main
      className="relative min-h-screen overflow-hidden dot-grid"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Ambient teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 38% 52%, oklch(0.62 0.19 158 / 0.07) 0%, transparent 65%)",
        }}
      />

      {/* Nav */}
      <nav
        className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          tsydyp.lundukov
        </span>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/lcipaa789-wq"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--muted)" }}
            className="transition-colors duration-200 hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/tsydyp-lundukov-a5507a3b5/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--muted)" }}
            className="transition-colors duration-200 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 min-h-[calc(100vh-65px)] px-8 md:px-16 py-16 md:py-0">

        {/* Left: typography */}
        <div className="flex-1 max-w-2xl">

          {/* Role label */}
          <div className="animate-fadeIn mb-7" style={{ animationDelay: "0.05s" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              [ Frontend Developer ]
            </span>
          </div>

          {/* Name — clipped slide-up reveal */}
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

          {/* Divider + stack label */}
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
              maxWidth: "38ch",
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
            <button
              onClick={() => navigate("/info")}
              className="flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "var(--primary)",
                color: "oklch(1 0 0)",
                fontSize: "0.875rem",
                fontFamily: "'Manrope', sans-serif",
                letterSpacing: "0.02em",
                border: "none",
                cursor: "pointer",
              }}
            >
              View Work
              <ArrowUpRight size={16} />
            </button>

            <a
              href="/Tsydyp_Lundukov_Resume.pdf"
              download="Tsydyp_Lundukov_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                border: "1px solid var(--border)",
                color: "var(--ink)",
                fontSize: "0.875rem",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
            >
              Download CV
              <Download size={14} />
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="flex-shrink-0 self-center md:self-auto">
          <div
            className="animate-fadeIn relative overflow-hidden"
            style={{
              animationDelay: "0.18s",
              width: "clamp(168px, 26vw, 320px)",
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
            {/* Bottom fade into bg */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{
                background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
              }}
            />
            <CornerMarks />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
