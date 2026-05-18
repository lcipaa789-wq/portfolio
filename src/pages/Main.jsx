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
    <main className="min-h-screen bg-[#020617] flex items-center justify-center p-4 md:p-8 text-white">
      <section className="relative w-full max-w-375 min-h-screen md:min-h-212.5 overflow-hidden rounded-[28px] md:rounded-[42px]">
        <img
          src={me}
          alt="Case Jons"
          className="absolute inset-0 w-full h-full object-cover md:translate-x-60 object-[85%_center]"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black to-transparent"></div>

        <div className="absolute inset-0 bg-linear-to-br from-blue-950/90 via-transparent to-blue-600/35"></div>

        <div className="absolute inset-0 bg-linear-to-t from-[#020617]/80 via-transparent to-transparent"></div>

        <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6 md:py-10">
          <List size={36} className="text-white" />

          <h1 className="text-lg md:text-3xl font-black">
            Tsydyp <span className="text-blue-500">Lundukov</span>
          </h1>

          <div className="w-9"></div>
        </nav>

        <div className="relative z-10 flex flex-col md:flex-row min-h-175 md:min-h-162.5">
          <aside className="w-full md:w-44 flex md:flex-col items-center justify-center gap-6 md:gap-10 py-6">
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

          <div className="flex flex-col justify-center px-6 md:px-0 pb-12 md:pb-0 max-w-3xl">
            <div className="flex items-center gap-5 mb-8">
              <span className="w-16 h-1 bg-blue-500"></span>

              <p className="text-blue-400 text-2xl font-medium">Hello</p>
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              I'm{" "}
              <span className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                Tsydyp
              </span>
            </h2>

            <h3 className="text-2xl md:text-4xl text-zinc-300 mt-6 font-semibold">
              Frontend Developer
            </h3>

            <p className="text-zinc-300 text-base md:text-xl leading-7 md:leading-9 mt-6 md:mt-8 max-w-xl">
              A frontend developer focused on building modern React apps,
              beautiful UI, and real-world web projects.
            </p>

            <button
              onClick={() => navigate("/info")}
              className=" mt-8 md:mt-12 w-fit bg-linear-to-r from-blue-700 to-sky-400 px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-4 hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition"
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
