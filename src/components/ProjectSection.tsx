import { Link } from "react-router-dom"
import { motion } from "framer-motion"

type Props = {
  title: string
  demoLink: string
  caseStudyLink: string
  description: string
  imageLink: string
  getStack: () => JSX.Element[]
}

export const ProjectSection = ({
  title,
  demoLink,
  caseStudyLink,
  description,
  imageLink,
  getStack,
}: Props) => {
  return (
    <motion.article
      className="flex flex-col items-center justify-center gap-8 px-8 py-20 sm:flex-row sm:items-center sm:gap-20 sm:px-16"
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <a href={demoLink} target="_blank" rel="noreferrer">
        <img
          src={imageLink}
          className="max-h-[420px] max-w-[325px] flex-1 rounded-[3.5rem] object-cover shadow-md"
          alt={title}
        ></img>
      </a>

      <div className="flex flex-col justify-between">
        <div className="border-b-[1px] border-darktext/40 pb-6">
          <div className="flex flex-col gap-3">
            <Link to={demoLink} target="_blank" rel="noreferrer">
              <h3 className="font-faustina text-4xl leading-[1.25] tracking-tight opacity-90 hover:text-accent">
                {title}
              </h3>
            </Link>
            <p className="hidden sm:flex sm:gap-2 ">{getStack()}</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="pt-6 font-inter text-sm leading-[2] opacity-80">{description}</p>
          <div className="buttons flex flex-wrap gap-4">
            <Link
              to={demoLink}
              className="inline-flex select-none items-center gap-2 rounded bg-transparent px-4 py-2 font-urban font-semibold text-darktext shadow-md ring-1 ring-black/[.70] transition-colors hover:bg-accent hover:text-primary focus:outline-none"
            >
              <button>Visit</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z" />
              </svg>
            </Link>
            <Link
              to={caseStudyLink}
              className="inline-flex select-none items-center gap-2 rounded bg-accent px-4 py-2 font-urban  font-semibold text-white shadow-md ring-1 ring-black/[.70] transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none"
            >
              <button>View Case Study</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right "
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
