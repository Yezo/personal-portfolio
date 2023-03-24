import { Icon } from "./Icon"
import { SKILLS } from "./Data"
export const Skillset = () => {
  return (
    <div>
      Skillset
      <Icon></Icon>
      {SKILLS.map((item, index) => (
        <Icon title={item.name} key={index}></Icon>
      ))}
    </div>
  )
}
