import { motion as m } from "framer-motion"

export const HeaderScrollIndicator = () => {
  return (
    <m.div
      className="hidden min-w-full animate-bounce place-items-center text-darktext lg:grid"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.85, delay: 3.5 }}
      viewport={{ once: true }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="7 13 12 18 17 13"></polyline>
        <polyline points="7 6 12 11 17 6"></polyline>
      </svg>
    </m.div>
  )
}
