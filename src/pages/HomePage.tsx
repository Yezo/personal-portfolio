import { motion as m } from "framer-motion"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header/Header"
import { ProjectSection } from "../components/ProjectSection"
import { getArkokoStack, getAnifluxStack, getSnippitsStack } from "../helpers/GetStack"

//TODO update data icons with https://devicon.dev/

export const HomePage = () => {
  return (
    <div className="min-h-screen  bg-primary font-normal text-darktext">
      <div className="mx-auto max-w-4xl pb-20">
        <Header
          homepage={true}
          learn={true}
          subtitle="Hey, call me Kev"
          textOrientation="left"
          description="My passion thrives in frontend web development where I carefully build mobile-first responsive designs. Currently focused on honing my craft in order to forge better and unforgettable user experiences. I'm looking to join a team of creative designers and developers. If you think I am a good fit, let's partner up."
        >
          Software engineer at work - {<br />}
          digital{" "}
          <span className="animate-text bg-gradient-to-r  from-teal-500 via-purple-500  to-orange-500  bg-clip-text  text-transparent">
            designer
          </span>{" "}
          at heart.
        </Header>
        <m.div
          className="hidden min-w-full animate-bounce place-items-center text-accent sm:mt-48 sm:grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.85, delay: 3.5 }}
          viewport={{ once: true }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="8 12 12 16 16 12"></polyline>
            <line x1="12" y1="8" x2="12" y2="16"></line>
          </svg>
        </m.div>
        <main className="pt-20">
          <section className="divide-y divide-stone-300" id="projects">
            <ProjectSection
              title="Arkoko"
              description="Minimizing micro-decisions through analyzing in-game data for Lost Ark. Discover how Arkoko aims to be the leading data-driven resource platform for gamers worldwide."
              caseStudyLink="/project/arkoko"
              demoLink="https://arkoko.vercel.app"
              imageLink="/arkoko.webp"
              getStack={getArkokoStack}
            ></ProjectSection>

            <ProjectSection
              title="AniFlux"
              description="Reimagining what it means to be an anime platform paired with a modern design. Explore in great detail any anime from any time period with AniFlux."
              caseStudyLink="/project/aniflux"
              demoLink="https://aniflux.onrender.com"
              imageLink="/aniflux.webp"
              getStack={getAnifluxStack}
            ></ProjectSection>

            <ProjectSection
              title="Snippits"
              description="A golden repository built for programmers who have the memory of a goldfish made by a programmer with the memory of a goldfish. "
              caseStudyLink="/project/snippits"
              demoLink="https://snippits.vercel.app"
              imageLink="/snippits.webp"
              getStack={getSnippitsStack}
            ></ProjectSection>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}
