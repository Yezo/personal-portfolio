import { Footer } from "../components/Footer"
import { Header } from "../components/Header/Header"
import { PromotionLink } from "../components/CaseStudy/PromotionLink"
import { motion } from "framer-motion"
import { CaseHeading } from "../components/CaseStudy/CaseHeading"
import { CaseParagraph } from "../components/CaseStudy/CaseParagraph"
import { CaseStudyContainer } from "../components/CaseStudy/CaseStudyContainer"
import { CaseTextContainer } from "../components/CaseStudy/CaseTextContainer"
import { ColorsContainer } from "../components/CaseStudy/ColorsContainer"

export const AniFlux = () => {
  return (
    <div className="min-h-screen bg-primary font-normal text-darktext">
      <Header
        subtitle="AniFlux (2023)"
        textOrientation="center"
        imageURL="/aniflux.webp"
        imageTitle="AniFlux"
      >
        A sleek and modern design for the{" "}
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          new age
        </span>{" "}
        of anime
      </Header>

      <main>
        <CaseStudyContainer>
          <CaseHeading index="01">Product Conception</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph title="The Motive">
              The problem I wanted AniFlux to help solve was that there were a lot of anime-related
              websites that had outdated designs and bloated with unnecessary content. It became
              difficult to navigate and digest concise information about specific animes. The goal
              of this web application is to be able to convey everything about an anime in the least
              amount of time as possible while visually pleasing the eyes of its users.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="02">Colors</CaseHeading>

          <CaseParagraph title="Main Colors">
            <ColorsContainer>
              <div className="grid">
                <div className={`col-start-1 row-start-1 h-32 w-24 bg-[#EDF1F5] sm:w-32`}></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-black">
                  #EDF1F5
                </p>
              </div>
              <div className="grid">
                <div className={`col-start-1 row-start-1 h-32 w-24 bg-[#7B8EA1] sm:w-32`}></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-black">
                  #7B8EA1
                </p>
              </div>
              <div className="grid">
                <div className={`col-start-1 row-start-1 h-32 w-24 bg-[#2d2d29] sm:w-32`}></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #2D2D29
                </p>
              </div>
              <div className="grid">
                <div className={`col-start-1 row-start-1 h-32 w-24 bg-[#3480EA] sm:w-32`}></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #3480EA
                </p>
              </div>
            </ColorsContainer>
          </CaseParagraph>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="03">Challenges</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph title="Pagination">
              Originally, there were pagination features for some pages on the website. However, I
              quickly realized hand-coding pagination from scratch was a nightmare. The pagination
              did work but I ultimately scrapped the idea and ended up displaying all the data at
              once on a single page. Perhaps less clicks is a better user experience.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="04">Areas of improvement</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph title="Jikan API">
              Unfortunately, the JikanAPI has some shortcomings despite providing a ton of data
              about anime. It is missing some data points for obscure anime. The API is also free
              and has rate-limiting in place to prevent too many requests. Users that visit AniFlux
              may experience missing data due to being rate-limited.
            </CaseParagraph>
            <CaseParagraph title="Continued">
              Despite the shortcomings, JikanAPI offers a large variety of endpoints for developers
              to play with. A lot of improvements can be made such as adding features for manga,
              recommendations, reviews, and many others.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <PromotionLink URL="https://aniflux.onrender.com" />
      </main>

      <Footer />
    </div>
  )
}
