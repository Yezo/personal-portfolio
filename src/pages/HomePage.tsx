import { motion as m, motion } from "framer-motion"
import { Footer } from "../components/Footer/Footer"
import { ProjectSection } from "../components/ProjectSection"
import { getArkokoStack, getAnifluxStack, getSnippitsStack } from "../helpers/GetStack"
import { HeaderContainer } from "../components/NewHeader/HeaderContainer"
import { HeaderNav } from "../components/NewHeader/HeaderNav"
import { HeaderTitle } from "../components/NewHeader/HeaderTitle"
import { HeaderDescription } from "../components/NewHeader/HeaderDescription"
import { Button } from "../components/Buttons/Button"
import { HeaderScrollIndicator } from "../components/NewHeader/HeaderScrollIndicator"
import { SKILLS } from "../components/Skillset/Data"
import { NavIcon } from "../components/NewHeader/NavIcon"
import { LocalButton } from "../components/Buttons/LocalButton"
import { MainContainer } from "../components/MainContainer"

export const HomePage = () => {
  return (
    <div className="bg-gray">
      <HeaderContainer>
        <div>
          <HeaderNav />
          <HeaderTitle subtitle="Hey, call me Kev" orientation="left">
            Software engineer at work - {<br />}
            digital{" "}
            <span className="relative animate-text  bg-gradient-to-r from-teal-500  via-purple-500  to-orange-500  bg-clip-text text-transparent">
              designer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 400"
                className="absolute top-5 right-0 md:top-7 md:right-0"
              >
                <m.path
                  d="M20.179365158081055,180.26904296875C78.17637221018472,183.8564885457357,271.0014721552531,198.65470123291016,368.1614074707031,201.79371643066406C465.32134278615314,204.93273162841797,535.1270192464193,201.34528605143228,603.1389770507812,199.10313415527344C671.1509348551432,196.8609822591146,747.3841247558594,190.13452657063803,776.233154296875,188.34080505371094"
                  fill="none"
                  strokeWidth="9"
                  stroke="#2e2e2e"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 2 }}
                ></m.path>
                <defs>
                  <linearGradient
                    id="SvgjsLinearGradient1004"
                    gradientTransform="rotate(0, 0.5, 0.5)"
                  >
                    <stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop>
                    <stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop>
                  </linearGradient>
                </defs>
              </svg>
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
            <LocalButton url="/about">Learn more</LocalButton>
            <Button url="mailto:kvo.codes@gmail.com">Get in touch</Button>
          </m.div>
        </div>

        <HeaderScrollIndicator></HeaderScrollIndicator>
      </HeaderContainer>

      <motion.section
        className="min-w-screen hidden h-[32rem] grid-cols-7 gap-[1px] bg-gray font-faustina text-3xl text-gray md:grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 1 }}
        viewport={{ once: true }}
      >
        <div className="col-span-2 grid place-items-center bg-black text-3xl tracking-wide">
          The skills.
        </div>
        {SKILLS.slice(0, 24).map((item) => (
          <div
            key={item.name}
            className="hover:bg- flex items-center justify-center gap-3 bg-black px-8 py-4 transition-colors"
          >
            <NavIcon tooltipText={item.name}>
              <img src={item.icon} className="h-14 w-14 rounded "></img>
            </NavIcon>
          </div>
        ))}
        <div className="col-span-2 grid place-items-center  bg-black text-3xl tracking-wide">
          The craft.
        </div>
      </motion.section>

      <MainContainer>
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
      </MainContainer>
      <Footer url="mailto:kvo.codes@gmail.com" title="kvo.codes@gmail.com" />
    </div>
  )
}
