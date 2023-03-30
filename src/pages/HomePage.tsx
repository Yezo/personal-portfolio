import { motion as m } from "framer-motion"
import { Footer } from "../components/Footer/Footer"
import { ProjectSection } from "../components/ProjectSection"
import { getArkokoStack, getAnifluxStack, getSnippitsStack } from "../helpers/GetStack"
import { HeaderContainer } from "../components/NewHeader/HeaderContainer"
import { HeaderNav } from "../components/NewHeader/HeaderNav"
import { HeaderTitle } from "../components/NewHeader/HeaderTitle"
import { HeaderDescription } from "../components/NewHeader/HeaderDescription"
import { Button } from "../components/Button"
import { HeaderScrollIndicator } from "../components/NewHeader/HeaderScrollIndicator"

export const HomePage = () => {
  return (
    <div className="bg-gray">
      <HeaderContainer>
        <div>
          <HeaderNav />
          <HeaderTitle subtitle="Hey, call me Kev" orientation="left">
            Software engineer at work - {<br />}
            digital{" "}
            <span className="animate-text bg-gradient-to-r  from-teal-500 via-purple-500  to-orange-500  bg-clip-text  text-transparent">
              designer
            </span>{" "}
            at heart.
          </HeaderTitle>
          <HeaderDescription>
            My passion thrives in frontend web development where I carefully build mobile-first
            responsive designs. Currently focused on honing my craft in order to forge better and
            unforgettable user experiences. I'm looking to join a team of creative designers and
            developers. If you think I am a good fit, let's partner up.
          </HeaderDescription>
          <m.div
            className="my-8 flex gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.85, delay: 2.5 }}
            viewport={{ once: true }}
          >
            <Button variant="secondary" url="/about">
              Learn more
            </Button>
            <Button variant="primary" url="mailto:kvo.codes@gmail.com">
              Get in touch
            </Button>
          </m.div>
        </div>

        <HeaderScrollIndicator></HeaderScrollIndicator>
      </HeaderContainer>

      <main className="mx-auto max-w-4xl bg-gray pt-20 pb-20">
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
      <Footer url="mailto:kvo.codes@gmail.com" title="kvo.codes@gmail.com" />
    </div>
  )
}
