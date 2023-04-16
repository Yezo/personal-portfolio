import { motion as m } from "framer-motion"
import { SmallProject } from "./SmallProject"

export const SmallProjectSection = () => {
  return (
    <m.article
      className="flex flex-wrap gap-8 px-8 py-20 sm:flex-row sm:items-center sm:justify-evenly sm:gap-20 sm:px-4"
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <SmallProject imgURL="/kore.png" demoLINK="https://kore-beta.vercel.app/" title="Kore">
        Minigame where players are able to view the Korean alphabet and mark letters as memorized
        when they're done learning it.
      </SmallProject>
      <SmallProject imgURL="/trackr.png" demoLINK="https://trackr-beta.vercel.app/" title="Trackr">
        Keep track of your job applications by adding them to Trackr. Edit or remove job
        applications as needed. It also track stats!
      </SmallProject>
    </m.article>
  )
}
