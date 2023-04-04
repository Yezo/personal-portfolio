import { Link } from "react-router-dom"

type Props = {
  children: React.ReactNode
  url: string
}

export const VisitButton = ({ children, url }: Props) => {
  return (
    <Link
      to={url}
      className={`inline-flex select-none items-center gap-2 rounded bg-transparent px-4 py-2 font-urban  font-semibold text-darktext shadow-md ring-1  ring-black/[.70]
      transition-colors hover:bg-accent hover:text-primary focus:outline-none`}
      target="_blank"
    >
      <button>{children}</button>
      <SecondarySVG />
    </Link>
  )
}

const SecondarySVG = () => {
  return (
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
  )
}
