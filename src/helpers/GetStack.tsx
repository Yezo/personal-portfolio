import { SKILLS } from "../components/Skillset/Data"

export const getArkokoStack = () => {
  const stack = SKILLS.filter(
    ({ name }) =>
      name === "React" ||
      name === "TailwindCSS" ||
      name === "MongoDB" ||
      name === "TypeScript" ||
      name === "Node.js"
  )
  const items = stack.map(({ name, icon }) => (
    <div
      className="inline-flex h-8 w-8 rounded bg-[#282828] p-1.5 text-white shadow-sm "
      key={name}
    >
      <img src={icon} className="" />
    </div>
  ))
  return items
}

export const getAnifluxStack = () => {
  const stack = SKILLS.filter(
    ({ name }) =>
      name === "React" || name === "TailwindCSS" || name === "TypeScript" || name === "Prism.js"
  )
  const items = stack.map(({ name, icon }) => (
    <div
      className="inline-flex h-8 w-8 rounded bg-[#282828] p-1.5 text-white shadow-sm "
      key={name}
    >
      <img src={icon} className="" />
    </div>
  ))
  return items
}

export const getSnippitsStack = () => {
  const stack = SKILLS.filter(
    ({ name }) => name === "React" || name === "TailwindCSS" || name === "TypeScript"
  )
  const items = stack.map(({ name, icon }) => (
    <div
      className="inline-flex h-8 w-8 rounded bg-[#282828] p-1.5 text-white shadow-sm "
      key={name}
    >
      <img src={icon} className="" />
    </div>
  ))
  return items
}
