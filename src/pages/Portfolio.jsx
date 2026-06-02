import { useState, useRef } from "react";
import {
  Menu,
  X,
  Download,
  Send,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin } from "react-bootstrap-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiRedux } from "react-icons/si";
import emailjs from "@emailjs/browser";
import me from "../images/me.jpeg";
import anime from "../images/anime.png";
import miniShop from "../images/miniShop.png";
import playHop from "../images/playHop.png";

const skills = [
  { Icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
  { Icon: FaReact, name: "React", color: "text-cyan-500" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "text-teal-500" },
  { Icon: SiRedux, name: "Redux", color: "text-purple-500" },
  { Icon: FaGitAlt, name: "Git", color: "text-orange-600" },
  { Icon: Github, name: "GitHub", color: "text-slate-800" },
];

const projects = [
  {
    title: "Playhop",
    desc: "Game platform built with React, Redux, RAWG API and Tailwind CSS",
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
    desc: "Anime platform with trending anime, search, and details pages.",
    image: anime,
    link: "https://vite-project-six-rho.vercel.app/",
    github: "https://github.com/lcipaa789-wq/vite-project.git",
    tags: ["React", "Vite", "API"],
  },
];

const navLinks = ["about", "skills", "projects", "contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message");
        },
      );
  };

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* ── NAVIGATION ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#about" className="text-xl font-black tracking-tight">
            TL<span className="text-blue-600">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm"
              >
                {link}
              </a>
            ))}
            <a
              href="/Tsydyp_Lundukov_Resume.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Resume <Download size={14} />
            </a>
          </nav>

          <button
            className="md:hidden p-2 -mr-2 text-slate-600"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize text-slate-700 font-medium py-3 border-b border-slate-50 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="/Tsydyp_Lundukov_Resume.pdf"
              download
              className="mt-3 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        )}
      </header>

      {/* ── HERO / ABOUT ── */}
      <section id="about" className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center py-20">
          {/* Photo — appears first on mobile */}
          <div className="flex justify-center order-first md:order-last">
            <div className="relative">
              <div className="absolute -inset-3 bg-blue-100 rounded-[2rem] rotate-6 -z-10" />
              <div className="absolute -inset-3 bg-slate-100 rounded-[2rem] -rotate-3 -z-10" />
              <img
                src={me}
                alt="Tsydyp Lundukov"
                className="w-56 h-72 sm:w-72 sm:h-96 object-cover object-top rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              Available for work
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Tsydyp
              <br />
              <span className="text-blue-600">Lundukov</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 font-medium mt-3">
              Frontend Developer
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-8 mt-6 max-w-lg">
              I build modern and responsive web applications using React,
              Tailwind CSS, JavaScript, and Redux. Focused on clean UI, smooth
              UX, and maintainable code.
            </p>

            <div className="flex gap-3 mt-8 flex-wrap">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Contact me
              </a>
            </div>

            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/lcipaa789-wq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tsydyp-lundukov-a5507a3b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
              My toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">Tech Stack</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map(({ Icon, name, color }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 bg-white px-6 py-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all w-28"
              >
                <Icon className={`text-4xl ${color}`} />
                <span className="text-slate-600 text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
              What I've built
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">
              Featured Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="overflow-hidden h-48 bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-slate-500 mt-2 text-sm leading-6 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex gap-3 mt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Live <ExternalLink size={13} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 border border-slate-200 text-slate-600 py-2.5 rounded-xl text-sm font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                    >
                      GitHub <Github size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
              Let's talk
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Info */}
            <div className="space-y-8">
              <p className="text-slate-600 text-lg leading-8">
                I'm available for frontend developer opportunities. Let's build
                something clean, modern, and useful together.
              </p>

              <div className="space-y-4">
                {[
                  {
                    Icon: Mail,
                    label: "tsydyplundukov@gmail.com",
                    href: "mailto:tsydyplundukov@gmail.com",
                  },
                  { Icon: MapPin, label: "New York, USA", href: null },
                  {
                    Icon: Github,
                    label: "GitHub",
                    href: "https://github.com/lcipaa789-wq",
                  },
                  {
                    Icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/tsydyp-lundukov-a5507a3b5/",
                  },
                ].map(({ Icon, label, href }) => {
                  const content = (
                    <>
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-blue-600" />
                      </div>
                      <span className="text-slate-600">{label}</span>
                    </>
                  );
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 hover:text-blue-600 transition-colors group"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-4">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition text-slate-800 placeholder:text-slate-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition text-slate-800 placeholder:text-slate-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition resize-none text-slate-800 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 bg-slate-900 text-center">
        <p className="text-slate-400 text-sm">
          © 2025 Tsydyp Lundukov — Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
