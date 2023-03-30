import { motion as m } from "framer-motion"

export const CaseStudyContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <m.section
      className=" bg-gray px-8 py-4 lg:py-16"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl justify-between py-4 lg:flex">{children}</div>
    </m.section>
  )
}
