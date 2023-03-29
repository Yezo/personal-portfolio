import { Link, useNavigate, useLocation } from "react-router-dom"

type Props = {
  url: string
}
export default function NewFooter({ url }: Props) {
  const navigate = useNavigate()
  const location = useLocation()
  function handleRefreshHomePage() {
    return location.pathname === "/" ? window.location.reload() : navigate("/")
  }
  return (
    <footer className="min-w-screen">
      <div className="min-w-screen grid min-h-[20rem] place-items-center bg-text font-faustina text-2xl text-primary">
        <Link
          to={url}
          className="inline-flex select-none items-center gap-4 rounded-full bg-transparent px-8 py-4 font-faustina text-darktext opacity-90 shadow-md ring-2 ring-black/[.70] transition-colors hover:bg-darktext hover:text-primary focus:outline-none"
        >
          <button className="">{url}</button>
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
      <div className="flex min-h-screen">
        <section className="grid basis-1/2 place-items-center bg-accent">
          <Link to="/" onClick={handleRefreshHomePage}>
            <h2 className="font-faustina text-6xl font-bold text-primary transition-all hover:text-[4rem] ">
              kv.
            </h2>
          </Link>
        </section>
        <section className="grid basis-1/2 place-items-center bg-primary font-faustina text-3xl tracking-normal text-accent">
          <ul className="space-y-6">
            <li className="max-w-fit">
              <Link
                to="mailto:kvo.codes@gmail.com"
                className="hover:animate-text hover:bg-gradient-to-r  hover:from-teal-500 hover:via-purple-500 hover:to-orange-500  hover:bg-clip-text  hover:text-transparent"
              >
                email
              </Link>
            </li>

            <li className="max-w-fit">
              <Link
                to="https://github.com/Yezo"
                className="hover:animate-text hover:bg-gradient-to-r  hover:from-teal-500 hover:via-purple-500  hover:to-orange-500  hover:bg-clip-text  hover:text-transparent"
                target="_blank"
              >
                github
              </Link>
            </li>
            <li className="max-w-fit">
              <Link
                to="https://www.linkedin.com/in/kvocodes/"
                className="hover:animate-text hover:bg-gradient-to-r  hover:from-teal-500 hover:via-purple-500  hover:to-orange-500  hover:bg-clip-text  hover:text-transparent"
                target="_blank"
              >
                linkedin
              </Link>
            </li>
            <li className="max-w-fit">
              <Link
                to="/resume.pdf"
                className="hover:animate-text hover:bg-gradient-to-r  hover:from-teal-500 hover:via-purple-500  hover:to-orange-500  hover:bg-clip-text  hover:text-transparent"
                target="_blank"
              >
                resume
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
