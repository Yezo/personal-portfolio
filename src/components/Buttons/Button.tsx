import { Link } from "react-router-dom"

type Props = {
  children: React.ReactNode
  url: string
}

export const Button = ({ children, url }: Props) => {
  return (
    <Link
      to={url}
      className={`inline-flex select-none items-center gap-2 rounded bg-accent px-4 py-2 font-urban  font-semibold text-primary shadow-md ring-1  ring-black/[.70]
transition-colors hover:bg-transparent hover:text-darktext focus:outline-none`}
    >
      <button>{children}</button>
      <PrimarySVG />
    </Link>
  )
}

const PrimarySVG = () => {
  return (
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
  )
}
