import { Link } from "react-router-dom"
import { motion } from "framer-motion"

type Props = {
  title: string
  technologies: string[]
  demoLink: string
  gitHubLink: string
  caseStudyLink: string
  description: string
  imageLink: string
}

export const ProjectSection = ({
  title,
  technologies,
  demoLink,
  gitHubLink,
  caseStudyLink,
  description,
  imageLink,
}: Props) => {
  return (
    <motion.article
      className="flex w-full flex-wrap py-20"
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.85, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <img
        src={imageLink}
        className="object-fit h-auto flex-1 rounded shadow-md ring-1 ring-darktext/10 md:w-2/4"
        alt={title}
      ></img>
      <div className="flex flex-col justify-between gap-2 pt-8 md:w-2/4 md:px-8 md:pt-0">
        <div className="border-b-[1px] border-darktext/40 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <Link to="/project/arkoko">
                <motion.h3 className="font-heading text-4xl leading-[1.25] tracking-tight hover:text-accent ">
                  {title}
                </motion.h3>
              </Link>
              <p className="hidden font-inter text-sm italic opacity-80 sm:flex sm:gap-1 ">
                {technologies.join(", ")}
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                to={demoLink}
                className="transparent  hidden select-none items-center gap-2 rounded-full bg-transparent px-3 py-1 font-inter text-sm font-medium text-[#171515] shadow-md ring-1 ring-black/[.70] transition-colors hover:bg-[#171515] hover:text-white focus:outline-none focus:ring active:opacity-75 sm:inline-flex"
                target="_blank"
              >
                Demo
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
                to={gitHubLink}
                className=" transparent  hidden select-none items-center gap-2 rounded-full bg-transparent px-3 py-1 font-inter text-sm font-medium text-[#171515] shadow-md ring-1 ring-black/[.70] transition-colors hover:bg-[#171515] hover:text-white focus:outline-none focus:ring active:opacity-75 sm:inline-flex"
                target="_blank"
              >
                GitHub
                <svg
                  className="fontb-o h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <p className="mb-2 font-inter text-sm leading-[1.75] opacity-80 ">{description}</p>
        <div className="buttons flex flex-wrap gap-1">
          <Link
            to={caseStudyLink}
            className="inline-flex select-none items-center gap-2 rounded bg-accent px-4 py-2 font-inter text-sm font-medium text-white shadow-md ring-1 ring-black/[.70] transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none"
          >
            View Case Study
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
    </motion.article>
  )
}
