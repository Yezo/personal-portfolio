import { Footer } from "../components/Footer/Footer"
import { CaseHeading } from "../components/CaseStudy/CaseHeading"
import { CaseParagraph } from "../components/CaseStudy/CaseParagraph"
import { CaseStudyContainer } from "../components/CaseStudy/CaseStudyContainer"
import { CaseTextContainer } from "../components/CaseStudy/CaseTextContainer"
import { ColorsContainer } from "../components/CaseStudy/ColorsContainer"
import { HeaderContainer } from "../components/NewHeader/HeaderContainer"
import { HeaderImage } from "../components/NewHeader/HeaderImage"
import { HeaderNav } from "../components/NewHeader/HeaderNav"
import { HeaderScrollIndicator } from "../components/NewHeader/HeaderScrollIndicator"
import { HeaderTitle } from "../components/NewHeader/HeaderTitle"
import { MainContainer } from "../components/MainContainer"
import { ColorsBox } from "../components/CaseStudy/ColorsBox"

export const AniFlux = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <HeaderNav />
          <HeaderTitle subtitle="Aniflux (2023)" orientation="center">
            A sleek and modern design for the{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              new age
            </span>{" "}
            of anime
          </HeaderTitle>
          <HeaderImage title="aniflux" url="/aniflux.webp" />
        </div>

        <HeaderScrollIndicator></HeaderScrollIndicator>
      </HeaderContainer>

      <MainContainer>
        <CaseStudyContainer>
          <CaseHeading index="01">The Problem</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              There are a lot of anime and manga related websites out there but a large majority of
              them do not have a modern experience. It is often bloated with unnecessary information
              making it difficult to digest the details of whatever it is the user is trying to
              read. As a byproduct, it can be hard to navigate around the website as well.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="02">The Solution</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Aniflux is my rendition of an anime/manga website built with modern technologies with
              modern visuals and a pleasant user experience. Many of the bloat is removed and what
              remains is the important details regarding a specific anime or manga. Navigation is
              intuitive and provides many of the resources to allow a user to find exactly which
              anime or manga they're looking for.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="03">Colors</CaseHeading>
          <CaseParagraph>
            <ColorsContainer>
              <ColorsBox bgColor="bg-anifluxColorOne" textColor="#EDF1F5" dark={false}></ColorsBox>
              <ColorsBox bgColor="bg-anifluxColorTwo" textColor="#7B8EA1" dark={false}></ColorsBox>
              <ColorsBox bgColor="bg-anifluxColorThree" textColor="#2D2D29" dark={true}></ColorsBox>
              <ColorsBox bgColor="bg-anifluxColorFour" textColor="#3480EA" dark={true}></ColorsBox>
            </ColorsContainer>
          </CaseParagraph>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="04">Challenges</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Unfortunately, the JikanAPI has some shortcomings despite providing a ton of data
              about anime. It is missing some data points for obscure anime. The API is also free
              which results in rate-limiting to prevent too many requests. Users that visit AniFlux
              may experience missing data due to being rate-limited. Despite being such a great API
              resource, it was rather difficult to develop with it since I would often run into 429
              Too Many Requests errors while testing out components. As such, it's difficult to
              populate pages with multiple pieces of content from the API since you cannot exceed 3
              requests a second.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="05">Areas of improvement</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              The Jikan API has many endpoints to fetch data from. Aniflux can definitely be
              improved by adding more links to more content including recommendations for different
              anime and manga, fetching reviews, and even schedules for currently airing anime.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>
      </MainContainer>
      <Footer url="https://aniflux.onrender.com/" title="Check out Aniflux" />
    </>
  )
}
