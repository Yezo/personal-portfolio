import { motion as m } from "framer-motion"
import CaseStudyHeading from "./CaseStudyHeading"
import CaseStudyParagraph from "./CaseStudyParagraph"

type Props = {
  firstHeading: string
  firstParagraph: string
  firstParagraphTwo?: string
  secondHeading?: string
  secondParagraph?: string
  secondParagraphTwo?: string
}

export const Improvements = ({
  firstHeading,
  firstParagraph,
  firstParagraphTwo,
  secondHeading,
  secondParagraph,
  secondParagraphTwo,
}: Props) => {
  return (
    <m.section
      className="bg-primary px-8 py-4 lg:py-16"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl justify-between py-4 lg:flex ">
        <CaseStudyHeading index="04" title="Areas of Improvement" />

        <div className="flex flex-col lg:max-w-[50ch]">
          <CaseStudyParagraph title={firstHeading}>
            {firstParagraph} {firstParagraphTwo && firstParagraphTwo}
          </CaseStudyParagraph>

          {secondParagraph && secondHeading && (
            <CaseStudyParagraph title={secondHeading}>
              {secondParagraph} {secondParagraphTwo}
            </CaseStudyParagraph>
          )}
        </div>
      </div>
    </m.section>
  )
}
