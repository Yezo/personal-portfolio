/* eslint-disable react/jsx-no-comment-textnodes */

import { Link } from "react-router-dom";
import { ProjectSection } from "../components/ProjectSection";

/* eslint-disable react/no-unescaped-entities */
export const HomePage = () => {
  return (
    <main className="min-h-screen  bg-primary font-normal text-darktext">
      <div className="mx-auto max-w-4xl px-8">
        <header className=" mb-20 flex items-center justify-between  pt-8">
          <h1 className="font-heading text-4xl tracking-tighter text-[] ">
            kv.
          </h1>
          <nav className="font-bold">x</nav>
        </header>
        <section className="mb-20">
          <h2 className="font-primary mb-2 font-semibold uppercase tracking-widest text-slate-700 opacity-30">
            // Kevin Vo
          </h2>
          <h2 className="font-heading text-4xl leading-[1.25] tracking-tight text-darktext">
            I'm a full-stack web developer with a creative mind who can help
            solve your problems.
          </h2>
        </section>

        <section className="bg-sectionOneBG text-sectionOneText">
          <h3 className="font-heading text-3xl leading-[1.25] tracking-tight">
            Arkoko.
          </h3>
        </section>

        <section className="bg-sectionTwoBG text-sectionTwoText">
          <h3 className="font-heading text-3xl leading-[1.25] tracking-tight">
            AniFlux.
          </h3>
        </section>

        <section className="bg-sectionThreeBG text-sectionThreeText">
          <h3 className="font-heading text-3xl leading-[1.25] tracking-tight">
            Snippits.
          </h3>
        </section>
      </div>
      //TODO md breakpoint turn the card into a flex
      <div className="mt-5 min-h-screen w-full">
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
          description="Arkoko allows users to view in-game information in a centralized
          location and aims to provide players the necessary data for them to
          make informed decisions all at a single glance."
          gitHubLink="https://github.com/Yezo/arkoko"
          caseStudyLink="/project/arkoko"
          demoLink="https://arkoko.vercel.app"
        ></ProjectSection>
      </div>
    </main>
  );
};
