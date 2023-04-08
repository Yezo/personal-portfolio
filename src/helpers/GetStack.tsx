import { NavIcon } from "../components/NewHeader/NavIcon"
import { SKILLS } from "../components/Skillset/Data"

export const getArkokoStack = () => {
  const stack = SKILLS.filter(
    ({ name }) =>
      name === "React" ||
      name === "TailwindCSS" ||
      name === "MongoDB" ||
      name === "TypeScript" ||
      name === "Node.js" ||
      name === "Vite" ||
      name === "Mongoose" ||
      name === "React Router"
  )
  const items = stack.map(({ name, icon }) => (
    <NavIcon tooltipText={name} key={name}>
      <div className="inline-flex h-8 w-8 rounded bg-[#282828] p-1.5 text-white shadow-sm ">
        <img src={icon} />
      </div>
    </NavIcon>
  ))
  return items
}

export const getAnifluxStack = () => {
  const stack = SKILLS.filter(
    ({ name }) =>
      name === "React" ||
      name === "TailwindCSS" ||
      name === "TypeScript" ||
      name === "Redux Toolkit" ||
      name === "Vite" ||
      name === "React Router" ||
      name === "RadixUI"
  )
  const items = stack.map(({ name, icon }) => (
    <NavIcon tooltipText={name} key={name}>
      <div className="inline-flex h-8 w-8 rounded bg-[#282828] p-1.5 text-white shadow-sm ">
        <img src={icon} />
      </div>
    </NavIcon>
  ))
  return items
}

export const getSnippitsStack = () => {
  const stack = SKILLS.filter(
    ({ name }) =>
      name === "React" ||
      name === "TailwindCSS" ||
      name === "TypeScript" ||
      name === "React Router" ||
      name === "Vite" ||
      name === "Prism.js"
  )
  const items = stack.map(({ name, icon }) => (
    <NavIcon tooltipText={name} key={name}>
      <div className="inline-flex h-8 w-8 rounded bg-[#282828] p-1.5 text-white shadow-sm ">
        <img src={icon} />
      </div>
    </NavIcon>
  ))
  return items
}
