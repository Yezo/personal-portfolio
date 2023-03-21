import { motion } from "framer-motion"

type Props = {
  paragraph: string
  paragraph2?: string
}

export const ProductConception = ({ paragraph, paragraph2 }: Props) => {
  return (
    <motion.section
      className=" bg-primary px-8 py-4 lg:py-16"
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.85, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl justify-between py-4 lg:flex">
        <div className="pb-5">
          <div className="font-primary text-xs font-semibold uppercase text-slate-700 opacity-70">
            // 01
          </div>
          <h3 className="font-primary text-2xl font-semibold leading-[1.25] tracking-tighter">
            Product Conception
          </h3>
        </div>
        <div className="space-y-8 lg:max-w-[50ch]">
          <p className=" font-inter text-sm leading-[1.75] opacity-80">{paragraph}</p>
          {paragraph2 && (
            <p className="font-inter text-sm leading-[1.75] opacity-80">{paragraph2}</p>
          )}
        </div>
      </div>
    </motion.section>
  )
}
