import { motion as m } from "framer-motion"
import { Link } from "react-router-dom"

type Props = {
  URL: string
}

export const PromotionLink = ({ URL }: Props) => {
  return (
    <m.section
      className="bg-primary py-12 px-8 lg:py-16"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 py-4 md:gap-10">
        <h5 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-center font-faustina text-5xl tracking-tight text-transparent">
          Check it out.
        </h5>
        <Link to={URL} target="_blank">
          <div className="max-w-fit rounded-full bg-darktext px-14 py-3 font-faustina font-semibold tracking-widest text-primary shadow-lg transition-colors hover:bg-accent hover:text-white">
            {URL}
          </div>
        </Link>
      </div>
    </m.section>
  )
}
