import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"
import { Button } from "./Buttons/Button"
import { VisitButton } from "./Buttons/VisitButton"

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
    <m.article
      className="flex flex-col items-center justify-center gap-8 px-8 py-20 sm:flex-row sm:items-center sm:gap-20 sm:px-16"
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <a href={demoLink} target="_blank" rel="noreferrer">
        <img
          src={imageLink}
          className="max-h-[420px] max-w-[325px] flex-1 rounded object-cover shadow-md"
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
          <div className="flex gap-3">
            <VisitButton url={demoLink}>Visit</VisitButton>
            <Button url={caseStudyLink}>View Case Study</Button>
          </div>
        </div>
      </div>
    </m.article>
  )
}
