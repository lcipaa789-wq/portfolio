import {
  Instagram,
  TwitterX,
  Github,
  Linkedin,
  List,
  ArrowUpRight,
} from "react-bootstrap-icons";

import me from "../images/me.jpeg";
import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center p-8 text-white">
      <section className="relative w-full max-w-300 min-h-100 overflow-hidden rounded-[42px] border-4 border-blue-600 shadow-[0_0_70px_rgba(37,99,235,0.45)]">
        <img
          src={me}
          alt="Case Jons"
          className="absolute inset-0 w-full h-full object-cover translate-x-60"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black to-transparent"></div>

        <div className="absolute inset-0 bg-linear-to-br from-blue-950/90 via-transparent to-blue-600/35"></div>

        <div className="absolute inset-0 bg-linear-to-t from-[#020617]/80 via-transparent to-transparent"></div>

        <nav className="relative z-10 flex items-center justify-between px-16 py-10">
          <List size={36} className="text-white" />

          <h1 className="text-3xl font-black">
            Tsydyp <span className="text-blue-500">Lundukov</span>
          </h1>

          <div className="w-9"></div>
        </nav>

        <div className="relative z-10 flex min-h-162.5">
          <aside className="w-44 flex flex-col items-center justify-center gap-10 text-white">
            <a
              href="https://github.com/lcipaa789-wq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                size={34}
                className="hover:text-blue-400 cursor-pointer transition"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tsydyp-lundukov-a5507a3b5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={34}
                className="hover:text-blue-400 cursor-pointer transition"
              />
            </a>
          </aside>

          <div className="flex flex-col justify-center max-w-3xl">
            <div className="flex items-center gap-5 mb-8">
              <span className="w-16 h-1 bg-blue-500"></span>

              <p className="text-blue-400 text-2xl font-medium">Hello</p>
            </div>

            <h2 className="text-7xl font-black leading-tight">
              I'm{" "}
              <span className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                Tsydyp
              </span>
            </h2>

            <h3 className="text-4xl text-zinc-300 mt-6 font-semibold">
              Frontend Developer
            </h3>

            <p className="text-zinc-300 text-xl leading-9 mt-8 max-w-xl">
              A frontend developer focused on building modern React apps,
              beautiful UI, and real-world web projects.
            </p>

            <button
              onClick={() => navigate("/info")}
              className="mt-12 w-fit bg-linear-to-r from-blue-700 to-sky-400 px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-4 hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition"
            >
              Learn more
              <ArrowUpRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
