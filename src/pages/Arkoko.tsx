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
import { ColorsBox } from "../components/CaseStudy/ColorsBox"

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
          <CaseHeading index="01">The Problem</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              People enjoy playing video games but they tend to dislike figuring out efficient
              methods or calculating various outcomes themselves. It's tedious, time-consuming, and
              it ultimately takes away from the precious time they could have spent playing the
              video game in the first place.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="02">The Solution</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Arkoko aims to alleviate this situation by providing an all-in-one pitstop for
              calculators, guides, tools, and resources for the online MMORPG "Lost Ark." Players no
              longer need to spend minutes themselves calculating whether or not an item is
              profitable to craft. The tools that Arkoko provides calculates everything for the user
              when provided with minimal input values.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="03">Colors</CaseHeading>

          <CaseParagraph>
            <ColorsContainer>
              <ColorsBox bgColor="bg-arkokoColorOne" textColor="#3F4246" dark={true}></ColorsBox>
              <ColorsBox bgColor="bg-arkokoColorTwo" textColor="#1C1F26" dark={true}></ColorsBox>
              <ColorsBox bgColor="bg-arkokoColorThree" textColor="#C2C2CC" dark={false}></ColorsBox>
            </ColorsContainer>
          </CaseParagraph>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="04">Challenges</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Arkoko was a project I've wanted to create ever since I started my first line of code.
              I knew this was a goal I wanted to achieve and the process of developing it was quite
              the hurdle. Ultimately, it has gone through many different versions, both from a
              technological standpoint and a visual one. Designing a website from scratch was
              definitely difficult but I am confident the current look of Arkoko is modern and
              unique. The in-game tools I've developed are unique and it was a challenge getting the
              calculators to work how I wanted them to without any guidance or documentation to
              refer to. However, it is without a doubt twice as rewarding when I figure out the
              problems myself and I think that is what keeps me working on Arkoko as my main passion
              project.
            </CaseParagraph>
            <CaseParagraph>
              From a technical standpoint, the biggest challenge was definitely the Oreha Crafting
              Calculator. The data structures involved were complicated since they used nested
              objects for the recipes. It was also difficult managing data coming from the local API
              as well as from the LostArkMarketOnline API. The code implementation for this specific
              tool leaves much to be desired. I would definitely refactor the code into a more
              elegant solution the next time I re-visit that component. My biggest takeaway from
              programming this would have to be the merging and manipulation of nested array of
              objects.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="05">Areas of improvement</CaseHeading>
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
              The website itself fetches a lot of data from multiple sources. It pulls data from our
              own API that has stored data in MongoDB and it also takes in data from an external
              API. It would be a huge improvement to the codebase as well as the developer
              experience if I added a state management library like Redux, SWR, or Zustand. To
              further abstract the component logic from the view logic, it would be wise to create
              custom hooks for many of the components.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>
      </MainContainer>
      <Footer url="https://arkoko.vercel.app/" title="Check out Arkoko" />
    </>
  )
}
