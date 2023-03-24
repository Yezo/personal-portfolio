import { Link, useNavigate, useLocation } from "react-router-dom"
import { NavIcon } from "./NavIcon"
import { motion } from "framer-motion"

type Props = {
  title?: string
  subtitle: string
  description?: string
  textOrientation: string
  imageURL?: string
  imageTitle?: string
  children?: React.ReactNode
  homepage?: boolean
}

export const Header = ({
  subtitle,
  textOrientation,
  imageURL,
  imageTitle,
  description,
  children,
  homepage,
}: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  function handleRefreshHomePage() {
    return location.pathname === "/" ? window.location.reload() : navigate("/")
  }
  return (
    <header className="mb-8 max-h-[90vh]">
      <div className=" mx-auto mb-20 flex max-w-4xl items-center justify-between p-8">
        <Link to="/" onClick={handleRefreshHomePage}>
          <motion.h1
            className="font-heading text-4xl tracking-tighter transition-colors hover:text-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            kv.
          </motion.h1>
        </Link>
        <motion.nav
          className="flex gap-4 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <NavIcon tooltipText={"Contact Me"} url={"mailto:kvo.codes@gmail.com"}>
            <ContactMailSVG />
          </NavIcon>

          <NavIcon tooltipText={"Visit LinkedIn"} url={"https://www.linkedin.com/in/kvocodes/"}>
            <LinkedInSVG />
          </NavIcon>

          <NavIcon tooltipText={"Visit GitHub"} url={"https://github.com/Yezo"}>
            <GitHubSVG />
          </NavIcon>

          <NavIcon tooltipText={"View Resume"} url={"/resume.pdf"}>
            <ResumeSVG />
          </NavIcon>
        </motion.nav>
      </div>
      <section className="mx-auto max-h-screen max-w-4xl space-y-4 px-8 pb-20 md:space-y-8">
        <div>
          <motion.h2
            className="font-primary mb-2 font-semibold uppercase tracking-widest text-slate-500 opacity-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            // {subtitle}
          </motion.h2>
          <motion.h2
            className={`max-w-full font-cabin text-5xl font-bold tracking-tight text-darktext md:pt-8 md:text-6xl ${
              textOrientation === "left" ? "text-left" : "text-center"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.h2>
        </div>
        {description && (
          <motion.div
            className="flex min-w-full pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.85, delay: 2 }}
            viewport={{ once: true }}
          >
            <p className="max-w-[50ch] font-inter text-sm leading-7 opacity-80">{description}</p>
          </motion.div>
        )}
        {imageURL && (
          <motion.div
            className="grid w-full place-items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.85, delay: 2 }}
            viewport={{ once: true }}
          >
            <img
              src={imageURL}
              alt={imageTitle}
              className=" max-h-[365px] max-w-[325px] rounded-[3.5rem] shadow-md ring-1 ring-darktext/20"
              loading="lazy"
            />
          </motion.div>
        )}
        {homepage && (
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.85, delay: 2.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/about"
              className="inline-flex select-none items-center gap-2 rounded bg-transparent px-4 py-2 font-urban font-semibold text-darktext shadow-md ring-1 ring-black/[.70] transition-colors hover:bg-accent hover:text-primary focus:outline-none"
            >
              <button>Learn More</button>
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
              to="mailto:kvo.codes@gmail.com"
              className="inline-flex select-none items-center gap-2 rounded bg-accent px-4 py-2 font-urban  font-semibold text-white shadow-md ring-1 ring-black/[.70] transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none"
            >
              <button>Contact Me</button>
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
          </motion.div>
        )}
      </section>
    </header>
  )
}

const ContactMailSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-envelope-fill"
      viewBox="0 0 16 16"
    >
      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
    </svg>
  )
}

const LinkedInSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      className="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  )
}

const GitHubSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

const ResumeSVG = () => {
  return (
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  )
}
