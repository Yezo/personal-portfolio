import { motion } from "framer-motion"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header/Header"

export const About = () => {
  return (
    <div className="min-h-screen  bg-primary font-normal text-darktext">
      <div className="mx-auto max-w-4xl pb-20">
        <Header
          homepage={true}
          subtitle="Hey, call me Kev"
          textOrientation="left"
          description="My passion thrives in frontend web development where I carefully build mobile-first
              responsive designs. Currently focused on honing my craft to forge seamless user
              experiences. Let's build a product together and bring your vision to life."
        >
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
            <div className="flex gap-4 sm:gap-16">
              <div className="min-w-[8rem] max-w-[8rem] py-16 font-cabin text-2xl">Profile</div>
              <div className="basis-4/5 py-16">
                <div className="flex flex-wrap gap-10">
                  <div className="flex min-w-[10rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">👨‍🏫 Self-taught?</h4>
                    <p className="font-inter text-sm opacity-[0.85]">Yup</p>
                  </div>
                  <div className="flex min-w-[10rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">⏳ Since when?</h4>
                    <p className="font-inter text-sm opacity-[0.85]">2021</p>
                  </div>
                  <div className="flex min-w-[10rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">
                      📈 Currently unemployed and looking for opportunities as a passionate software
                      engineer during a recession?
                    </h4>
                    <p className="font-inter text-sm opacity-[0.85]">Yes...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-16">
              <div className="min-w-[8rem] max-w-[8rem] py-16 font-cabin text-2xl">
                Languages for computers
              </div>
              <div className="basis-auto py-16">
                <div className="flex flex-wrap gap-10">
                  <div className="flex min-w-[15rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">🔥 The Daily</h4>
                    <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                      <li>HTML & CSS</li>
                      <li>Javascript & TypeScript</li>
                      <li>React & React Router</li>
                      <li>TailwindCSS</li>
                      <li>Git</li>
                    </ul>
                  </div>
                  <div className="flex min-w-[15rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">🖥️ I've Built With</h4>
                    <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                      <li>Node.js & Express</li>
                      <li>MongoDB & Mongoose</li>
                      <li>Bootstrap & MaterialUI</li>
                      <li>HeadlessUI & RadixUI</li>
                      <li>SASS</li>
                    </ul>
                  </div>
                  <div className="flex min-w-[15rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">👨‍🎓 Learning more</h4>
                    <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                      <li>Jest</li>
                      <li>Figma</li>
                      <li>SQL</li>
                      <li>Zustand</li>
                      <li>Redux</li>
                      <li>Framer Motion</li>
                    </ul>
                  </div>
                  <div className="flex min-w-[15rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">📚 Knowledge of</h4>
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
              <div className="min-w-[8rem] max-w-[8rem] py-16 font-cabin text-2xl">
                Languages for humans
              </div>
              <div className="basis-4/5 py-16">
                <div className="flex flex-wrap gap-10">
                  <div className="flex min-w-[10rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">🇨🇦 English</h4>
                    <p className="font-inter text-sm opacity-[0.85]">Native</p>
                  </div>
                  <div className="flex min-w-[10rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">🇻🇳 Vietnamese</h4>
                    <p className="font-inter text-sm opacity-[0.85]">Limited</p>
                  </div>
                  <div className="flex min-w-[10rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">🇰🇷 Korean</h4>
                    <p className="font-inter text-sm opacity-[0.85]">Limited</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-16">
              <div className="min-w-[8rem] max-w-[8rem] py-16 font-cabin text-2xl">Interests</div>
              <div className="basis-4/5 py-16">
                <div className="flex flex-wrap gap-10">
                  <div className="flex min-w-[15rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">🕹️ Video Games</h4>
                    <ul className="space-y-2 font-inter text-sm opacity-[0.85]">
                      <li>Lost Ark</li>
                      <li>Diablo IV</li>
                      <li>League of Legends</li>
                      <li>Yugioh MD</li>
                    </ul>
                  </div>
                  <div className="flex min-w-[15rem] flex-col gap-4">
                    <h4 className="font-cabin text-xl">👍 Spare Time</h4>
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
