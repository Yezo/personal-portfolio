import { Footer } from "../components/Footer/Footer"
import { CaseHeading } from "../components/CaseStudy/CaseHeading"
import { CaseParagraph } from "../components/CaseStudy/CaseParagraph"
import { CaseStudyContainer } from "../components/CaseStudy/CaseStudyContainer"
import { CaseTextContainer } from "../components/CaseStudy/CaseTextContainer"
import { ColorsContainer } from "../components/CaseStudy/ColorsContainer"
import { HeaderContainer } from "../components/NewHeader/HeaderContainer"
import { HeaderNav } from "../components/NewHeader/HeaderNav"
import { HeaderScrollIndicator } from "../components/NewHeader/HeaderScrollIndicator"
import { HeaderTitle } from "../components/NewHeader/HeaderTitle"
import { HeaderImage } from "../components/NewHeader/HeaderImage"
import { MainContainer } from "../components/MainContainer"

export const Arkoko = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <HeaderNav />
          <HeaderTitle subtitle="Arkoko (2023)" orientation="center">
            The ultimate{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500  to-orange-500 bg-clip-text text-transparent">
              toolbox
            </span>{" "}
            application for Lost Ark
          </HeaderTitle>
          <HeaderImage title="arkoko" url="/arkoko.webp" />
        </div>

        <HeaderScrollIndicator></HeaderScrollIndicator>
      </HeaderContainer>

      <MainContainer>
        <CaseStudyContainer>
          <CaseHeading index="01">Product Conception</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Arkoko was created with the objective to help alleviate the problem plaguing MMORPG
              players: too much information to process while playing the game. Users want to be as
              efficient in the least amount of time as possible but many players end up spending
              more time on calculating what's efficient to do instead of actually playing the game.
              All games are built upon numbers and statistics and is the driving force behind
              Arkoko.
            </CaseParagraph>
            <CaseParagraph>
              Many games have a lot of online resources to help new and existing players learn more
              about the game but many websites lack certain features that others have and
              vice-versa. Arkoko aims to implement as many features as possible.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="02">Colors</CaseHeading>

          <CaseParagraph>
            <ColorsContainer>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-32 w-24 bg-arkokoColorOne sm:w-32`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #3F4246
                </p>
              </div>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-32 w-24 bg-arkokoColorTwo sm:w-32`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #1C1F26
                </p>
              </div>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-32 w-24 bg-arkokoColorThree sm:w-32`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-[#15181D]">
                  #C2C2CC
                </p>
              </div>
            </ColorsContainer>
          </CaseParagraph>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="03">Challenges</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              From a technical standpoint, the biggest challenge was definitely the Oreha Crafting
              Calculator. The data structures involved were complicated since they used nested
              objects for the recipes. It was also difficult managing data coming from the local API
              as well as from the LostArkMarketOnline API. The code implementation for this specific
              tool leaves much to be desired. I believe if I were to re-do the code for this, it
              would be refactored into much cleaner code. My biggest takeaway from programming this
              would have to be the merging and manipulation of nested array of objects.
            </CaseParagraph>
            <CaseParagraph>
              This is the biggest project I've done and it is definitely an ambitious one as a
              junior web developer. It has a lot of working individual parts and has more content
              than most websites. Determining how I should tackle each challenge proves difficult
              since every feature of Arkoko is so unique that searching for answers to specific
              problems I face while coding seems almost an impossible task. However, it is without a
              doubt twice as rewarding when I figure out the problems myself and I think that is
              what keeps me working on Arkoko as my main passion project.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="04">Areas of improvement</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Arkoko has many features and a majority of its content comes in the form of tabular
              data. Designing tabular data for mobile-first responsive design is a challenging task.
              The main challenge is figuring out which categories should be omitted on mobile, if
              needed at all. On the other hand, one alternative is to implement a completely brand
              new design to an existing component to show to users when on mobile as seen with the
              Mari's Shop page.
            </CaseParagraph>
            <CaseParagraph>
              As mentioned before, this is a large project with a lot of components and pages. One
              regret I have is not having a design system in place before starting. Everything would
              be more consistent had I determined which colors, fonts, and designs of components I'd
              be using from the very start.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>
      </MainContainer>
      <Footer url="https://arkoko.vercel.app/" title="Check out Arkoko" />
    </>
  )
}
