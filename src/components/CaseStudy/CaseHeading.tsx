type Props = {
  index: string
  children: React.ReactNode
}

export const CaseHeading = ({ index, children }: Props) => {
  return (
    <div className="pb-10 pt-5">
      <div className="font-faustina text-xs uppercase text-slate-700 opacity-70">// {index}</div>
      <h3 className="font-faustina text-4xl leading-[1.25] tracking-tight opacity-90">
        {children}
      </h3>
    </div>
  )
}
