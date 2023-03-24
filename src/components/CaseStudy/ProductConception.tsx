import { motion as m } from "framer-motion"
import CaseStudyHeading from "./CaseStudyHeading"
import CaseStudyParagraph from "./CaseStudyParagraph"

type Props = {
  heading: string
  heading2?: string
  paragraph: string
  paragraph2?: string
}

export const ProductConception = ({ heading, heading2, paragraph, paragraph2 }: Props) => {
  return (
    <m.section
      className=" bg-primary px-8 py-4 lg:py-16"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl justify-between py-4 lg:flex">
        <CaseStudyHeading index="01" title="Product Conception" />
        <div className="space-y-8">
          <CaseStudyParagraph title={heading}>{paragraph}</CaseStudyParagraph>
          {paragraph2 && heading2 && (
            <CaseStudyParagraph title={heading2}>{paragraph2}</CaseStudyParagraph>
          )}
        </div>
      </div>
    </m.section>
  )
}
