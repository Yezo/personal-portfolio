import { motion } from "framer-motion"

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
    <motion.section
      className="bg-primary px-8 py-4 lg:py-16"
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl justify-between py-4 lg:flex ">
        <div className="">
          <div className="font-primary text-xs font-semibold uppercase text-slate-700 opacity-70">
            // 04
          </div>
          <h3 className="font-primary text-2xl font-semibold leading-[1.25] tracking-tighter">
            Areas of Improvement
          </h3>
        </div>

        <div className="flex flex-col lg:max-w-[50ch]">
          <div className="py-5">
            <h4 className="font-primary   font-bold uppercase tracking-tight opacity-80">
              {firstHeading}
            </h4>
            <div className="space-y-4">
              <p className=" font-inter text-sm leading-[1.75] opacity-80">{firstParagraph}</p>
              {firstParagraphTwo && (
                <p className=" font-inter text-sm leading-[1.75] opacity-80">{firstParagraphTwo}</p>
              )}
            </div>
          </div>
          <div className="py-5">
            <h4 className="font-primary font-bold uppercase tracking-tight opacity-80">
              {secondHeading}
            </h4>
            <div className="space-y-4">
              <p className=" font-inter text-sm leading-[1.75] opacity-80">{secondParagraph}</p>

              {secondParagraphTwo && (
                <p className=" font-inter text-sm leading-[1.75] opacity-80">
                  {secondParagraphTwo}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
