import { Link } from "react-router-dom"

type Props = {
  variant: string
  children: React.ReactNode
  url: string
}

export const Button = ({ variant, children, url }: Props) => {
  return (
    <Link
      to={url}
      className={`inline-flex select-none items-center gap-2 rounded px-4 py-2 font-urban font-semibold  shadow-md ring-1 ring-black/[.70] transition-colors  focus:outline-none
      
      
      ${
        variant === "secondary" && "bg-transparent text-darktext hover:bg-accent hover:text-primary"
      }  ${
        variant === "primary" && "bg-accent text-primary hover:bg-transparent hover:text-darktext"
      }
      
      `}
      target={`${variant === "primary" ? "" : "_blank"}`}
    >
      <button>{children}</button>
      {variant === "secondary" && <SecondarySVG />}
      {variant === "primary" && <PrimarySVG />}
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
