import { motion } from "framer-motion"
import { Link } from "react-router-dom"

type Props = {
  url: string
  children: React.ReactNode
}

export const FooterLink = ({ url, children }: Props) => {
  return (
    <motion.li
      className="max-w-fit"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
      viewport={{ once: true }}
    >
      <Link
        to={url}
        className="hover:animate-text hover:bg-gradient-to-r  hover:from-teal-500 hover:via-purple-500 hover:to-orange-500  hover:bg-clip-text  hover:text-transparent"
      >
        {children}
      </Link>
    </motion.li>
  )
}
