import { motion } from "framer-motion"

export const HeaderButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="flex min-w-full py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.85, delay: 2 }}
      viewport={{ once: true }}
    >
      <p className="max-w-[55ch] pt-4 font-inter text-sm leading-7 opacity-80">{children}</p>
    </motion.div>
  )
}
