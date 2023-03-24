type Props = {
  index: string
  title: string
}

export default function CaseStudyHeading({ index, title }: Props) {
  return (
    <div className="pb-10 pt-5">
      <div className="font-primary text-xs font-semibold uppercase text-slate-700 opacity-70">
        // {index}
      </div>
      <h3 className="font-primary text-2xl font-semibold leading-[1.25] tracking-tighter">
        {title}
      </h3>
    </div>
  )
}
