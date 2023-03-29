import { Link } from "react-router-dom"

type Props = {
  url: string
  title: string
}
export const FooterVisitLink = ({ url, title }: Props) => {
  return (
    <div className="min-w-screen grid min-h-[20rem] place-items-center bg-text font-faustina text-2xl text-primary">
      <Link
        to={url}
        className="inline-flex select-none items-center gap-4 rounded-full bg-transparent px-8 py-4 font-faustina  text-white opacity-90 shadow-md ring-2 ring-white/[.70] transition-colors hover:bg-darktext hover:text-primary hover:ring-black focus:outline-none"
      >
        <button className="">{title}</button>
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
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </Link>
    </div>
  )
}
