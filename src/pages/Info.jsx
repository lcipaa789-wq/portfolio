import React, { useRef } from "react";
import me from "../images/me.jpeg";
import anime from "../images/anime.png";
import miniShop from "../images/miniShop.png";
import playHop from "../images/playHop.png";
import { Download, Mail, MapPin, Send, Code2, Monitor } from "lucide-react";
import { Git, Github, Linkedin } from "react-bootstrap-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { SiJavascript, SiTailwindcss, SiRedux } from "react-icons/si";

const Info = () => {
  const projects = [
    {
      title: "Playhop",
      desc: "Game platform built with React, Redux, RAWG API and Tailwind CSS",
      image: playHop,
      link: "https://steam-clone-green.vercel.app/",
      github: "https://github.com/lcipaa789-wq/steam-clone.git",
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

      desc: "Anime platform with trending anime, search, and details pages.",
      image: anime,
      link: "https://vite-project-six-rho.vercel.app/",
      github: "https://github.com/lcipaa789-wq/vite-project.git",
    },
  ];
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
    <>
      <main className="min-h-screen bg-linear-to-br from-[#020617] via-[#07142c] to-[#020617] text-white px-8 py-12">
        <section className="max-w-375 mx-auto grid grid-cols-1 xl:grid-cols-[1.4fr_0.9fr] gap-8">
          <div className="rounded-4xl border border-blue-500/40 bg-[#06111f]/80 shadow-[0_0_50px_rgba(37,99,235,0.25)] p-10">
            <div className="grid md:grid-cols-[360px_1fr] gap-10 items-center">
              <img
                src={me}
                alt="Case Jons"
                className="w-full h-107.5 object-cover rounded-3xl border border-blue-500/40"
              />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-1 bg-blue-500"></span>

                  <h2 className="text-2xl font-bold">About me</h2>
                </div>

                <h1 className="text-6xl font-black leading-tight">
                  I'm{" "}
                  <span className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                    Tsydyp Lundukov
                  </span>
                </h1>

                <h3 className="text-3xl text-zinc-300 mt-4">
                  Frontend Developer
                </h3>

                <p className="text-zinc-300 text-lg leading-8 mt-6 max-w-xl">
                  I build modern and responsive web applications using React,
                  Tailwind CSS, JavaScript, and Redux. I focus on clean UI,
                  smooth user experience, and maintainable code.
                </p>

                <a
                  href="/Tsydyp_Lundukov_Resume.pdf"
                  download="Tsydyp_Lundukov_Resume.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-blue-700 to-blue-400 text-white font-semibold hover:scale-105 transition"
                >
                  Download CV
                  <Download size={20} />
                </a>
              </div>
            </div>

            <div className="mt-20">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-1 bg-blue-500"></span>

                  <h2 className="text-2xl font-bold">Featured Projects</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-3">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-3xl border border-blue-500/30 bg-[#081120] p-4 hover:scale-105 transition"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover rounded-2xl"
                    />

                    <h3 className="text-2xl font-bold mt-5">{project.title}</h3>

                    <p className="text-zinc-400 mt-3 leading-7">
                      {project.desc}
                    </p>
                    <div className="grid grid-cols-1 gap-3 mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-blue-500/50 px-5 py-3 rounded-xl text-blue-400 hover:bg-blue-600 hover:text-white transition"
                      >
                        View Project →
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-zinc-700 px-5 py-3 rounded-xl text-zinc-300 hover:border-blue-500 hover:text-blue-400 transition"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-blue-500/40 bg-[#06111f]/80 shadow-[0_0_50px_rgba(37,99,235,0.25)] p-10">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-1 bg-blue-500"></span>

                <h2 className="text-2xl font-bold">Tech Stack</h2>
              </div>

              <div className="grid grid-cols-5 gap-8">
                <div className="text-center">
                  <FaHtml5 className="text-5xl text-blue-500 mx-auto mb-3" />
                  <p className="text-sm text-zinc-300">HTML5</p>
                </div>

                <div className="text-center">
                  <FaCss3Alt className="text-5xl text-blue-500 mx-auto mb-3" />
                  <p className="text-sm text-zinc-300">CSS3</p>
                </div>

                <div className="text-center">
                  <SiJavascript className="text-5xl text-blue-500 mx-auto mb-3" />
                  <p className="text-sm text-zinc-300">JavaScript</p>
                </div>

                <div className="text-center">
                  <FaReact className="text-5xl text-blue-500 mx-auto mb-3" />
                  <p className="text-sm text-zinc-300">React</p>
                </div>

                <div className="text-center">
                  <SiTailwindcss className="text-5xl text-blue-500 mx-auto mb-3" />
                  <p className="text-sm text-zinc-300">Tailwind</p>
                </div>

                <div className="text-center">
                  <FaGitAlt className="text-5xl text-blue-500 mx-auto mb-3" />
                  <p className="text-sm text-zinc-300">Git</p>
                </div>

                <div className="text-center">
                  <Github className="text-5xl text-blue-500 mx-auto mb-3" />
                  <p className="text-sm text-zinc-300">GitHub</p>
                </div>

                <div className="text-center">
                  <SiRedux className="text-5xl text-blue-500 mx-auto mb-3" />
                  <p className="text-sm text-zinc-300">Redux</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-1 bg-blue-500"></span>

                <h2 className="text-2xl font-bold">Let's work together</h2>
              </div>

              <p className="text-zinc-400 leading-7 mb-8">
                I'm available for frontend developer opportunities. Let's build
                something clean, modern, and useful.
              </p>

              <div className="space-y-5 text-zinc-300 mb-10">
                <p className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={20} />
                  tsydyplundukov@gmail.com
                </p>

                <p className="flex items-center gap-3">
                  <MapPin className="text-blue-400" size={20} />
                  New York, USA
                </p>

                <a
                  className="flex items-center gap-3"
                  href="https://github.com/lcipaa789-wq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="text-blue-400" size={20} />
                  GitHub
                </a>

                <a
                  className="flex items-center gap-3"
                  href="https://www.linkedin.com/in/tsydyp-lundukov-a5507a3b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="text-blue-400" size={20} />
                  LinkedIn
                </a>
              </div>

              <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-[#0b172a] border border-blue-500/30 rounded-xl px-5 py-4 outline-none focus:border-blue-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-[#0b172a] border border-blue-500/30 rounded-xl px-5 py-4 outline-none focus:border-blue-400"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-[#0b172a] border border-blue-500/30 rounded-xl px-5 py-4 outline-none focus:border-blue-400 resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-blue-700 to-sky-400 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Info;
