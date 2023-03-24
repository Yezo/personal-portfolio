import React from "react"

type Props = {
  title: string
  children?: React.ReactNode
}

export default function Paragraph({ title, children }: Props) {
  return (
    <div className="py-10 lg:max-w-[50ch]">
      <h4 className="font-cabin font-bold uppercase tracking-tight opacity-80">{title}</h4>
      <p className=" font-inter text-sm leading-[2.2] opacity-80">{children}</p>
    </div>
  )
}
