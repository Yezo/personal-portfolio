import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header/Header"

export const About = () => {
  return (
    <div className="min-h-screen bg-primary font-normal text-darktext">
      <div className="mx-auto max-w-4xl pb-20">
        <Header homepage={true} subtitle="Hey, call me Kev" textOrientation="left">
          Get to know more{" "}
          <span className="animate-text bg-gradient-to-r  from-teal-500 via-purple-500  to-orange-500  bg-clip-text  text-transparent">
            about me
          </span>{" "}
        </Header>
        <main className="pt-20">
          <motion.section
            className="divide-y divide-stone-300 px-8"
            id="projects"
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-16">
              <div className="min-w-[8rem] max-w-[8rem] font-faustina text-3xl sm:py-16">
                Kevin Vo
              </div>

              <div className="basis-auto space-y-10 pb-16 pt-4 sm:py-16">
                <div className="flex flex-col gap-1">
                  <h4 className="font-faustina text-lg">The craft</h4>
                  <p className="font-inter text-sm leading-8 opacity-[0.85] md:pr-32">
                    Self-taught fullstack software engineer from Canada that specializes in
                    front-end operations. My focus lies in crafting mobile-first responsive
                    websites. Web development has become my creative outlet and it has been a blast
                    to progressively hone my ability in translating my visions onto the browser.
                    These days, I've been pursuing higher knowledge on UI/UX design to enhance the
                    web experience for others. I'm looking for a new place to call home - let's
                    build something{" "}
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
                  <p className="font-inter text-sm leading-8 opacity-[0.85] md:pr-32">
                    Some time after graduating from York University with an Honours BA. in
                    Psychology, I realized that path was not for me and transitioned to web
                    development. Within my first experience of HTML and CSS, I knew this was my
                    calling after seeing my gibberish of code translate to something visual on the
                    browser screen. I've been loving the journey ever since.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-16">
              <div className="min-w-[8rem] max-w-[8rem] font-faustina text-3xl sm:py-16">
                Values
              </div>
              <div className="basis-auto space-y-10 pb-16 pt-4 sm:py-16">
                <div className="flex flex-col gap-1">
                  <h4 className="font-faustina text-lg">The objective</h4>
                  <p className="font-inter text-sm leading-8 opacity-[0.85] md:pr-32">
                    Each project is unique and should be carefully approached with specialized
                    solutions in solving these problems. I help trim the unnecessary fat that
                    plagues the design and development process. The user experience ought to be
                    seamless and unforgettable. Interfaces don't have to be complex.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="font-faustina text-lg">The details</h4>
                  <p className="font-inter text-sm leading-8 opacity-[0.85] md:pr-32">
                    It's the finer details that contribute the most to an amazing user experience.
                    Color theory, typography choice, and the quirky animations are at the forefront
                    of my design philosophy. The majority of my designs are inspired by simplicity
                    and minimalism, but I can architect any composition to life.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="font-faustina text-lg">The growth</h4>
                  <p className="font-inter text-sm leading-8 opacity-[0.85] md:pr-32">
                    Video games have been a large part of my life and I contribute it in part to a
                    game developer's ability to fully immerse a player into the experience. As much
                    as players love the atmosphere, the environment, and the interactions within a
                    game, I hope to replicate that experience for others through an enriching and
                    powerful web experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-16">
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
                      <li>Node.js & Express</li>
                      <li>MongoDB & Mongoose</li>
                      <li>Bootstrap & MaterialUI</li>
                      <li>HeadlessUI & RadixUI</li>
                      <li>SASS</li>
                    </ul>
                  </div>
                  <div className="flex min-w-[15rem] flex-col gap-4">
                    <h4 className="font-faustina text-lg">👨‍🎓 Learning more</h4>
                    <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                      <li>Framer Motion</li>
                      <li>Jest</li>
                      <li>Figma</li>
                      <li>SQL</li>
                      <li>Redux</li>
                      <li>Storybook</li>
                    </ul>
                  </div>
                  <div className="flex min-w-[15rem] flex-col gap-4">
                    <h4 className="font-faustina text-lg">📚 Knowledge of</h4>
                    <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                      <li>Agile Methodology</li>
                      <li>Unit Tests & TDD</li>
                      <li>Docker & Containers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-16">
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
            </div>

            <div className="flex gap-4 sm:gap-16">
              <div className="min-w-[8rem] max-w-[8rem] py-16 font-faustina text-3xl">
                Interests
              </div>
              <div className="basis-4/5 py-16">
                <div className="flex flex-wrap gap-10">
                  <div className="flex min-w-[15rem] flex-col gap-4">
                    <h4 className="font-faustina text-lg">🕹️ Video Games</h4>
                    <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                      <li>Lost Ark</li>
                      <li>League of Legends</li>
                      <li>Yugioh MD</li>
                      <li>Diablo IV</li>
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
            </div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </div>
  )
}
