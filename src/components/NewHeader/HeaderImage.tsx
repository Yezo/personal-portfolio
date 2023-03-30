import { motion as m } from "framer-motion"

export const HeaderImage = ({ url, title }: { url: string; title: string }) => {
  return (
    <m.div
      className="grid w-full place-items-center py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.85, delay: 2 }}
      viewport={{ once: true }}
    >
      <img
        src={url}
        alt={title}
        className=" max-h-[365px] max-w-[325px] rounded shadow-md ring-1 ring-darktext/20"
        loading="lazy"
      />
    </m.div>
  )
}
