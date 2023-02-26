/* eslint-disable react/jsx-no-comment-textnodes */

import { Link } from "react-router-dom";
import { ProjectSection } from "../components/ProjectSection";

/* eslint-disable react/no-unescaped-entities */
export const HomePage = () => {
  return (
    <main
      className="min-h-screen  bg-primary font-normal text-darktext"
      id="home"
    >
      <div className="mx-auto max-w-4xl px-8">
        <header className=" mb-20 flex items-center justify-between  pt-8">
          <Link to="/">
            <h1 className="font-heading text-4xl tracking-tighter transition-colors hover:text-accent">
              kv.
            </h1>
          </Link>
          <nav className="font-bold">x</nav>
        </header>
        <section className="mb-20">
          <h2 className="font-primary mb-2 font-semibold uppercase tracking-widest text-slate-700 opacity-30">
            // Hello, I'm Kev
          </h2>
          <h2 className="max-w-[15ch] font-heading  text-5xl leading-[1.25] tracking-tight text-darktext md:text-7xl">
            I'm a full-stack web developer with a creative mind who can help
            solve your problems.
          </h2>
        </section>
        {/* <h2 className="font-heading text-6xl italic">Projects</h2> */}
        <section className="divide-y divide-stone-300" id="projects">
          <ProjectSection
            title="Arkoko"
            technologies={[
              "React",
              "NodeJS",
              "Express",
              "MongoDB",
              "TypeScript",
              "TailwindCSS",
            ]}
            description="Arkoko is a MERN application that allows Lost Ark users to view in-game information in a centralized
          locatio. It aims to provide players the necessary data for them to
          develop informed decisions all at a single glance. Spend more time playing the game while Arkoko does the heavy-lifting for you."
            gitHubLink="https://github.com/Yezo/arkoko"
            caseStudyLink="/project/arkoko"
            demoLink="https://arkoko.vercel.app"
            imageLink="src\assets\arkoko.webp"
          ></ProjectSection>

          <ProjectSection
            title="AniFlux"
            technologies={["React", "TypeScript", "TailwindCSS", "PrismJS"]}
            description="An application built with React that showcases all kinds of anime ranging from currently airing, the most popular anime of all time, and even provides a random anime for you should you not be able to choose one yourself. Users can even search for any anime that they want to know more about."
            gitHubLink="https://github.com/Yezo/aniflux"
            caseStudyLink="/project/arkoko"
            demoLink="https://arkoko.vercel.app"
            imageLink="src\assets\arkoko.webp"
          ></ProjectSection>

          <ProjectSection
            title="Snippits"
            technologies={["React", "TypeScript", "TailwindCSS"]}
            description="Programmers often forget basic code syntax while coding. They can now find code snippets among other tips and tricks located here all in one place. Snippits was programmed for users who have the memory of a goldfish made by a programmer with the memory of a goldfish. "
            gitHubLink="https://github.com/Yezo/snippit"
            caseStudyLink="/project/snippit"
            demoLink="https://snippits.vercel.app"
            imageLink="src\assets\arkoko.webp"
          ></ProjectSection>
        </section>
        {/* <div>
          <h2 className="font-heading text-6xl italic ">About</h2>
        </div> */}
      </div>

      <footer className="min-w-screen bg-accent tracking-tighter text-primary">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 py-10 px-8 md:flex-row">
          <a href="#home">
            <h2 className="font-heading text-4xl transition-all hover:italic">
              kv.
            </h2>
          </a>
          <ul className="flex items-center justify-center gap-4 font-inter text-sm font-semibold tracking-tight">
            <Link
              to="/"
              className=" flex items-center justify-center gap-1 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <h4>LinkedIn</h4>
            </Link>
            <span className="opacity-40">//</span>
            <Link
              to="/"
              className="flex items-center justify-center gap-1 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <h4>GitHub</h4>
            </Link>
            <span className="opacity-40">//</span>
            <Link
              to="/"
              className="flex items-center justify-center gap-1 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              <h4>Resume</h4>
            </Link>
          </ul>
        </div>
      </footer>
    </main>
  );
};
