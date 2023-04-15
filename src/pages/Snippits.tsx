import { CaseHeading } from "../components/CaseStudy/CaseHeading"
import { CaseParagraph } from "../components/CaseStudy/CaseParagraph"
import { CaseStudyContainer } from "../components/CaseStudy/CaseStudyContainer"
import { CaseTextContainer } from "../components/CaseStudy/CaseTextContainer"
import { ColorsContainer } from "../components/CaseStudy/ColorsContainer"
import { Footer } from "../components/Footer/Footer"
import { MainContainer } from "../components/MainContainer"
import { HeaderContainer } from "../components/NewHeader/HeaderContainer"
import { HeaderImage } from "../components/NewHeader/HeaderImage"
import { HeaderNav } from "../components/NewHeader/HeaderNav"
import { HeaderScrollIndicator } from "../components/NewHeader/HeaderScrollIndicator"
import { HeaderTitle } from "../components/NewHeader/HeaderTitle"

export const Snippits = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <HeaderNav />
          <HeaderTitle subtitle="Snippits (2023)" orientation="center">
            Unforgettable{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              code snippets
            </span>{" "}
            for coders with forgettable minds
          </HeaderTitle>
          <HeaderImage title="snippits" url="/snippits.webp" />
        </div>

        <HeaderScrollIndicator></HeaderScrollIndicator>
      </HeaderContainer>

      <MainContainer>
        <CaseStudyContainer>
          <CaseHeading index="01">Product Conception</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              I was forgetting a lot of basic code syntax while learning how to program as do many
              other coders. This web application is meant to serve as a mini cheatsheet filled with
              code excerpts and other tips and tricks I've found over the course of teaching myself
              how to code as a web developer.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="02">Colors</CaseHeading>

          <CaseParagraph>
            <ColorsContainer>
              <div className="grid">
                <div className={`col-start-1 row-start-1 h-36 w-24 bg-[#F1EFE9] sm:w-36`}></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-black">
                  #F1EFE9
                </p>
              </div>
              <div className="grid">
                <div className={`col-start-1 row-start-1 h-36 w-24 bg-[#20232b] sm:w-36`}></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #20232B
                </p>
              </div>
              <div className="grid">
                <div className={`col-start-1 row-start-1 h-36 w-24 bg-[#282828] sm:w-36`}></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #282828
                </p>
              </div>
            </ColorsContainer>
          </CaseParagraph>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="03">Challenges</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Between in-depth articles, blog posts, or a grid of random snippets, it was rather
              challenging trying to figure out which format I wanted the website to use. The idea of
              code snippets was for it to be easily accessible and fast to look up on a whim. "
              firstParagraphTwo="In-depth articles didn't satisfy either of those although articles
              and blog posts would have allowed me to go a lot more indepth. Ultimately, I went with
              dropdown selections for the code snippets and added a mini description to help
              facilitate further explanation if needed.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="04">Areas of improvement</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Snippits can be expanded to allow users from across the world to enter in their own
              code snippets into a database and have it displayed on the website. There would have
              to a way to filter between code snippets that actually help people or useless
              excerpts. Otherwise, users could input wrong data and spread false information. For
              now, the code snippets are purely curated by myself.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>
      </MainContainer>
      <Footer url="https://snippits.vercel.app" title="Check out Snippits" />
    </>
  )
}
