import { Link } from "react-router-dom"
import { VisitButton } from "./Buttons/VisitButton"

type Props = {
  children: React.ReactNode
  imgURL: string
  title: string
  demoLINK: string
}

export const SmallProject = ({ children, imgURL, title, demoLINK }: Props) => {
  return (
    <section>
      <a href={demoLINK} target="_blank" rel="noreferrer">
        <img
          src={imgURL}
          className="mb-4 max-h-[200px] max-w-[300px] flex-1 rounded object-cover shadow-md"
          alt={title}
        ></img>
      </a>

      <div className="flex flex-col justify-between">
        <div className="border-b-[1px] border-darktext/40 pb-6">
          <div className="flex items-center justify-between gap-3">
            <Link to={demoLINK} target="_blank" rel="noreferrer">
              <h3 className="font-faustina text-3xl leading-[1.25] opacity-90 hover:text-accent">
                {title}
              </h3>
            </Link>
            <VisitButton url={demoLINK}>Visit</VisitButton>
          </div>
        </div>
        <div className="flex max-w-[300px] flex-col gap-8">
          <p className="pt-6 font-inter text-sm leading-[2] opacity-80">{children}</p>
        </div>
      </div>
    </section>
  )
}
