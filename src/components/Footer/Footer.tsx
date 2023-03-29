import { motion as m } from "framer-motion"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { FooterLink } from "./FooterLink"
import { FooterVisitLink } from "./FooterVisitLink"

type Props = {
  url: string
  title: string
}
export const Footer = ({ url, title }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()
  function handleRefreshHomePage() {
    return location.pathname === "/" ? window.location.reload() : navigate("/")
  }
  return (
    <footer className="min-w-screen">
      <FooterVisitLink url={url} title={title} />

      <div className="flex min-h-screen">
        <section className="grid basis-1/2 place-items-center bg-accent">
          <Link to="/" onClick={handleRefreshHomePage}>
            <m.h2
              className="font-faustina text-6xl font-bold text-primary transition-all hover:text-[4rem]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              kv.
            </m.h2>
          </Link>
        </section>
        <section className="grid basis-1/2 place-items-center bg-primary font-faustina text-3xl tracking-normal text-accent">
          <ul className="space-y-6">
            <FooterLink url="mailto:kvo.codes@gmail.com">email</FooterLink>
            <FooterLink url="https://github.com/Yezo">github</FooterLink>
            <FooterLink url="https://www.linkedin.com/in/kvocodes/">linkedin</FooterLink>
            <FooterLink url="/resume.pdf">resume</FooterLink>
          </ul>
        </section>
      </div>
    </footer>
  )
}
