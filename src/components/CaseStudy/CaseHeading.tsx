type Props = {
  index: string
  children: React.ReactNode
}

export const CaseHeading = ({ index, children }: Props) => {
  return (
    <div className="pb-10 pt-5">
      <div className="font-primary text-xs font-semibold uppercase text-slate-700 opacity-70">
        // {index}
      </div>
      <h3 className="font-primary text-2xl font-semibold leading-[1.25] tracking-tighter">
        {children}
      </h3>
    </div>
  )
}
