type Props = {
  children?: React.ReactNode
}

export const CaseParagraph = ({ children }: Props) => {
  return (
    <div className="divide-y divide-stone-300 py-10 lg:max-w-[50ch]">
      <p className=" font-inter text-sm leading-[2.2] opacity-80">{children}</p>
    </div>
  )
}
