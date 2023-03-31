import { motion } from "framer-motion"

export const HeaderTitle = ({
  children,
  subtitle,
  orientation,
}: {
  children: React.ReactNode
  subtitle: string
  orientation: string
}) => {
  return (
    <p className="flex flex-col gap-4 pt-32">
      <motion.h2
        className="font-urban font-semibold uppercase italic tracking-widest text-darktext opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        // {subtitle}
      </motion.h2>
      <motion.h2
        className={`max-w-full font-faustina text-5xl text-darktext md:text-6xl ${
          orientation === "left" ? "" : "text-center"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>
    </p>
  )
}
