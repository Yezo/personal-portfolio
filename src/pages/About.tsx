import { motion as m } from "framer-motion"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import { HeaderContainer } from "../components/NewHeader/HeaderContainer"
import { HeaderImage } from "../components/NewHeader/HeaderImage"
import { HeaderNav } from "../components/NewHeader/HeaderNav"
import { HeaderScrollIndicator } from "../components/NewHeader/HeaderScrollIndicator"
import { HeaderTitle } from "../components/NewHeader/HeaderTitle"

export const About = () => {
  return (
    <div className="bg-gray">
      <HeaderContainer>
        <div>
          <HeaderNav />
          <HeaderTitle subtitle="kevin vo" orientation="center">
            Get to know more {<br />}
            <span className="animate-text bg-gradient-to-r  from-teal-500 via-purple-500  to-orange-500  bg-clip-text  text-transparent">
              about me
            </span>{" "}
          </HeaderTitle>
          <HeaderImage title="aniflux" url="/flower.webp" />
        </div>

        <HeaderScrollIndicator></HeaderScrollIndicator>
      </HeaderContainer>

      <main className="mx-auto max-w-4xl bg-gray pt-20 pb-20">
        <section className="divide-y divide-stone-300 px-8" id="projects">
          <m.div
            className="flex flex-col gap-4 sm:flex-row sm:gap-40"
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="min-w-[8rem] max-w-[8rem] pt-16 font-faustina text-3xl sm:py-16">
              Kevin Vo
            </div>

            <div className="basis-auto space-y-10 pb-16 pt-4 sm:py-16">
              <div className="flex flex-col gap-1">
                <h4 className="font-faustina text-lg">The craft</h4>
                <p className="font-inter text-sm leading-8 opacity-[0.85]">
                  Self-taught fullstack software engineer from Canada that specializes in front-end
                  operations. My focus lies in crafting mobile-first responsive websites. Web
                  development has become my creative outlet and it has been a blast to progressively
                  hone my ability in translating my visions onto the browser. These days, I've been
                  pursuing higher knowledge on UI/UX design to enhance the web experience for
                  others. I'm looking for a new place to call home - let's build something{" "}
                  {
                    <Link to="mailto:kvo.codes@gmail.com">
                      <span className="font-bold underline transition-all">together</span>
                    </Link>
                  }
                  .
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-faustina text-lg">The origins</h4>
                <p className="font-inter text-sm leading-8 opacity-[0.85]">
                  Some time after graduating from York University with an Honours BA. in Psychology,
                  I realized that path was not for me and transitioned to web development. Within my
                  first experience of playing with HTML and CSS, I knew this was my calling after
                  seeing the gibberish of code I had just written translate into something visual on
                  my browser screen. I've been loving the journey ever since.
                </p>
              </div>
            </div>
          </m.div>

          <m.div
            className="flex flex-col gap-4 sm:flex-row sm:gap-40"
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="min-w-[8rem] max-w-[8rem] pt-16 font-faustina text-3xl sm:py-16">
              Values
            </div>
            <div className="basis-auto space-y-10 pb-16 pt-4 sm:py-16">
              <div className="flex flex-col gap-1">
                <h4 className="font-faustina text-lg">The objective</h4>
                <p className="font-inter text-sm leading-8 opacity-[0.85]">
                  Each project is unique and should be carefully approached with specialized
                  solutions in solving these problems. I help trim the unnecessary fat that plagues
                  the design and development process. The user experience ought to be seamless and
                  unforgettable. Interfaces don't have to be complex.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-faustina text-lg">The details</h4>
                <p className="font-inter text-sm leading-8 opacity-[0.85]">
                  It's the finer details that contribute the most to an amazing user experience.
                  Color theory, typography choice, and the quirky animations are at the forefront of
                  my design philosophy. The majority of my designs are inspired by simplicity and
                  minimalism, but I can architect any composition to life.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-faustina text-lg">The growth</h4>
                <p className="font-inter text-sm leading-8 opacity-[0.85]">
                  Video games have been a large part of my life and I contribute it in part to a
                  game developer's ability to fully immerse a player into the experience. As much as
                  players love the atmosphere, the environment, and the interactions within a game,
                  I hope to replicate that experience for others through an enriching and powerful
                  web experience.
                </p>
              </div>
            </div>
          </m.div>

          <m.div
            className="flex gap-8 sm:gap-40"
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="min-w-[8rem] max-w-[8rem] py-16 font-faustina text-3xl">
              Languages for computers
            </div>
            <div className="basis-auto py-16">
              <div className="flex flex-wrap gap-10">
                <div className="flex min-w-[15rem] flex-col gap-4">
                  <h4 className="font-faustina text-lg">🔥 The Daily</h4>
                  <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                    <li>React</li>
                    <li>Javascript</li>
                    <li>TypeScript</li>
                    <li>TailwindCSS</li>
                    <li>Git</li>
                  </ul>
                </div>
                <div className="flex min-w-[15rem] flex-col gap-4">
                  <h4 className="font-faustina text-lg">🖥️ I've Built With</h4>
                  <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                    <li>Redux Toolkit + RTK Query</li>
                    <li>Node.js + Express</li>
                    <li>MongoDB + Mongoose</li>
                    <li>Bootstrap + MaterialUI</li>
                    <li>HeadlessUI + RadixUI</li>
                  </ul>
                </div>
                <div className="flex min-w-[15rem] flex-col gap-4">
                  <h4 className="font-faustina text-lg">👨‍🎓 Learning more</h4>
                  <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                    <li>Framer Motion</li>
                    <li>Jest</li>
                    <li>Figma</li>
                    <li>SQL</li>
                    <li>Storybook</li>
                  </ul>
                </div>
                <div className="flex min-w-[15rem] flex-col gap-4">
                  <h4 className="font-faustina text-lg">📚 Knowledge of</h4>
                  <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                    <li>Agile Methodology</li>
                    <li>Unit Tests + TDD</li>
                    <li>Docker + Containers</li>
                  </ul>
                </div>
              </div>
            </div>
          </m.div>

          <m.div
            className="flex gap-8 sm:gap-40"
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="min-w-[8rem] max-w-[8rem] py-16 font-faustina text-3xl">
              Languages for humans
            </div>
            <div className="basis-4/5 py-16">
              <div className="flex flex-wrap gap-10">
                <div className="flex min-w-[10rem] flex-col gap-4">
                  <h4 className="font-faustina text-lg">🇨🇦 English</h4>
                  <p className="font-inter text-sm opacity-[0.85]">Native</p>
                </div>
                <div className="flex min-w-[10rem] flex-col gap-4">
                  <h4 className="font-faustina text-lg">🇻🇳 Vietnamese</h4>
                  <p className="font-inter text-sm opacity-[0.85]">Limited</p>
                </div>
                <div className="flex min-w-[10rem] flex-col gap-4">
                  <h4 className="font-faustina text-lg">🇰🇷 Korean</h4>
                  <p className="font-inter text-sm opacity-[0.85]">Limited</p>
                </div>
              </div>
            </div>
          </m.div>

          <m.div
            className="flex gap-8 sm:gap-40"
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="min-w-[8rem] max-w-[8rem] py-16 font-faustina text-3xl">Interests</div>
            <div className="basis-4/5 py-16">
              <div className="flex flex-wrap gap-10">
                <div className="flex min-w-[15rem] flex-col gap-4">
                  <h4 className="font-faustina text-lg">🕹️ Video Games</h4>
                  <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                    <li>League of Legends</li>
                    <li>Oldschool Runescape</li>
                    <li>Lost Ark</li>
                    <li>Yugioh MD</li>
                  </ul>
                </div>
                <div className="flex min-w-[15rem] flex-col gap-4">
                  <h4 className="font-faustina text-lg">👍 Spare Time</h4>
                  <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                    <li>Taking walks</li>
                    <li>Calisthenics</li>
                    <li>Learning languages</li>
                    <li>Twitch & Youtube</li>
                  </ul>
                </div>
              </div>
            </div>
          </m.div>
        </section>
      </main>
      <Footer url="mailto:kvo.codes@gmail.com" title="kvo.codes@gmail.com" />
    </div>
  )
}
