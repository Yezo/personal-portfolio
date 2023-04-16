import { CaseHeading } from "../components/CaseStudy/CaseHeading"
import { CaseParagraph } from "../components/CaseStudy/CaseParagraph"
import { CaseStudyContainer } from "../components/CaseStudy/CaseStudyContainer"
import { CaseTextContainer } from "../components/CaseStudy/CaseTextContainer"
import { ColorsBox } from "../components/CaseStudy/ColorsBox"
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
          <CaseHeading index="01">The Problem</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Newer and even veteran developers often forget basic syntax while programming. Often
              times, a quick google search can consume more time than needed. What if there was a
              single repository for useful code snippets for our favorite programming languages?
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="02">The Solution</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Snippits serves as a mini cheatsheet filled with code snippets and other tips and
              tricks I've found over the course of self teaching myself how to code as a software
              engineer. The code snippits includes CSS, Javascript, TypeScript, React, and even
              includes useful Git commands.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="03">Colors</CaseHeading>
          <CaseParagraph>
            <ColorsContainer>
              <ColorsBox bgColor="bg-snippitsColorOne" textColor="#F1EFE9" dark={false}></ColorsBox>
              <ColorsBox bgColor="bg-snippitsColorTwo" textColor="#20232B" dark={true}></ColorsBox>
              <ColorsBox
                bgColor="bg-snippitsColorThree"
                textColor="#282828"
                dark={true}
              ></ColorsBox>
            </ColorsContainer>
          </CaseParagraph>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="04">Challenges</CaseHeading>
          <CaseTextContainer>
            <CaseParagraph>
              Between in-depth articles, blog posts, or a grid of random snippets, it was rather
              challenging trying to figure out which format I wanted the website to use. The idea of
              code snippets was for it to be easily accessible and fast to look up on a whim.
              In-depth articles didn't satisfy either of those although articles and blog posts
              would have allowed me to go a lot more indepth. Ultimately, I went with dropdown
              selections for the code snippets and added a mini description to help facilitate
              further explanation if needed.
            </CaseParagraph>
          </CaseTextContainer>
        </CaseStudyContainer>

        <CaseStudyContainer>
          <CaseHeading index="05">Areas of improvement</CaseHeading>
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
