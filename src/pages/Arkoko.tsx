import { Footer } from "../components/Footer"
import { Header } from "../components/Header/Header"
import { PromotionLink } from "../components/CaseStudy/PromotionLink"
import { ProductConception } from "../components/CaseStudy/ProductConception"
import { Challenges } from "../components/CaseStudy/Challenges"
import { Improvements } from "../components/CaseStudy/Improvements"
import { motion } from "framer-motion"

export const Arkoko = () => {
  return (
    <div className="min-h-screen  bg-primary font-normal text-darktext">
      <Header
        subtitle="Arkoko (2023)"
        textOrientation="center"
        imageURL="/arkoko.webp"
        imageTitle="Arkoko"
      >
        The ultimate{" "}
        <span className="animate-text bg-gradient-to-r  from-teal-500 via-purple-500  to-orange-500  bg-clip-text  text-transparent">
          toolbox
        </span>{" "}
        application for Lost Ark
      </Header>

      <main>
        <ProductConception
          paragraph="Arkoko was created with the objective to help alleviate the
                problem plaguing MMORPG players: too much information to process
                while playing the game. Users want to be as efficient in the
                least amount of time as possible but many players end up
                spending more time on calculating what's efficient to do instead
                of actually playing the game. All games are built upon numbers and statistics and is the driving force behind Arkoko."
          paragraph2="Many games have a lot of online resources to help new and
                existing players learn more about the game but many websites
                lack certain features that others have and vice-versa. Arkoko
                aims to implement as many features as possible."
        />

        {/* cant put color hexcodes as props for some reason */}
        <motion.section
          className="bg-primary px-8 py-4 lg:py-16"
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-4xl justify-between py-4 lg:flex">
            <div className="pb-4">
              <div className="font-primary text-xs font-semibold uppercase text-slate-700 opacity-70">
                // 02
              </div>
              <h3 className="font-primary text-2xl font-semibold leading-[1.25] tracking-tighter">
                Colors
              </h3>
            </div>
            <div className="flex flex-wrap gap-1">
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-36 w-24 bg-arkokoColorOne sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #15181D
                </p>
              </div>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-36 w-24 bg-arkokoColorTwo sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #1C1F26
                </p>
              </div>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-36 w-24 bg-arkokoColorThree sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-[#15181D]">
                  #C2C2CC
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <Challenges
          firstHeading="Oreha Crafting Calculator"
          firstParagraph="From a technical standpoint, the biggest challenge was
                    definitely the Oreha Crafting Calculator. The data
                    structures involved were complicated since they used nested
                    objects for the recipes. It was also difficult managing data
                    coming from the local API as well as from the
                    LostArkMarketOnline API."
          firstParagraphTwo="The code implementation for this specific tool leaves much
                    to be desired. I believe if I were to re-do the code for
                    this, it would be refactored into much cleaner code. My
                    biggest takeaway from programming this would have to be the
                    merging and manipulation of nested array of objects."
          secondHeading="Arkoko as a whole"
          secondParagraph="This is the biggest project I've done and it is definitely
                    an ambitious one as a junior web developer. It has a lot of
                    working individual parts and has more content than most
                    websites."
          secondParagraphTwo="Determining how I should tackle each challenge proves
                    difficult since every feature of Arkoko is so unique that
                    searching for answers to specific problems I face while
                    coding seems almost an impossible task. However, it is
                    without a doubt twice as rewarding when I figure out the
                    problems myself and I think that is what keeps me working on
                    Arkoko as my main passion project."
        />

        <Improvements
          firstHeading="Responsive Design for Tables"
          firstParagraph="Arkoko has many features and a majority of its content comes
                    in the form of tabular data. Designing tabular data for mobile-first responsive design is a challenging task. The main challenge is figuring out which
                    categories should be omitted on mobile, if needed at all. On the other hand, one alternative is to implement a completely brand new design to an existing component to show to users when on mobile as seen with the Mari's Shop page.  "
          secondHeading="Design System"
          secondParagraph="As mentioned before, this is a large project with a lot of
                    components and pages. One regret I have is not having a
                    design system in place before starting. Everything would be
                    more consistent had I determined which colors, fonts, and
                    designs of components I'd be using from the very start. "
        />

        <PromotionLink URL="https://arkoko.vercel.app" />
      </main>

      <Footer />
    </div>
  )
}
