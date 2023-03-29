import { Link } from "react-router-dom"

type Props = {
  url: string
  children: React.ReactNode
}

export const FooterLink = ({ url, children }: Props) => {
  return (
    <li className="max-w-fit">
      <Link
        to={url}
        className="hover:animate-text hover:bg-gradient-to-r  hover:from-teal-500 hover:via-purple-500 hover:to-orange-500  hover:bg-clip-text  hover:text-transparent"
      >
        {children}
      </Link>
    </li>
  )
}
