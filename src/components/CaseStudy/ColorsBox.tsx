import React from "react"

type Props = {
  bgColor: string
  textColor: string
  dark: boolean
}

export const ColorsBox = ({ bgColor, textColor, dark }: Props) => {
  return (
    <div className="grid">
      <div className={`col-start-1 row-start-1 h-32 w-24 ${bgColor} sm:w-32`}></div>
      <p
        className={`col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight ${
          dark && "text-white"
        } ${!dark && "text-darktext"}`}
      >
        {textColor}
      </p>
    </div>
  )
}
