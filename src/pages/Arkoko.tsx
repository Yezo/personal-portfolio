import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectSection } from "../components/ProjectSection";
import arkoko from "../assets/arkoko.webp";
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
export const Arkoko = () => {
  return (
    <div
      className="min-h-screen  bg-primary font-normal text-darktext"
      id="home"
    >
      <div className="mx-auto max-w-4xl px-8">
        <Header />
        <main>
          <section className="mb-20">
            <h2 className="font-primary mb-2 font-semibold uppercase tracking-widest text-slate-700 opacity-30">
              // Hello, I'm Kev
            </h2>
            <h2 className="max-w-[15ch] font-heading  text-5xl leading-[1.25] tracking-tight text-darktext md:text-7xl">
              I'm a full-stack web developer with a creative mind who can help
              solve your problems.
            </h2>
          </section>
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
              imageLink="/arkoko.webp"
            ></ProjectSection>

            <ProjectSection
              title="AniFlux"
              technologies={["React", "TypeScript", "TailwindCSS", "PrismJS"]}
              description="An application built with React that showcases all kinds of anime ranging from currently airing, the most popular anime of all time, and even provides a random anime for you should you not be able to choose one yourself. Users can even search for any anime that they want to know more about."
              gitHubLink="https://github.com/Yezo/aniflux"
              caseStudyLink="/project/arkoko"
              demoLink="https://arkoko.vercel.app"
              imageLink="/arkoko.webp"
            ></ProjectSection>

            <ProjectSection
              title="Snippits"
              technologies={["React", "TypeScript", "TailwindCSS"]}
              description="Programmers often forget basic code syntax while coding. They can now find code snippets among other tips and tricks located here all in one place. Snippits was programmed for users who have the memory of a goldfish made by a programmer with the memory of a goldfish. "
              gitHubLink="https://github.com/Yezo/snippit"
              caseStudyLink="/project/snippit"
              demoLink="https://snippits.vercel.app"
              imageLink="/arkoko.webp"
            ></ProjectSection>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
