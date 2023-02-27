import { Link } from "react-router-dom";

type Props = {
  URL: string;
};

export const PromotionLink = ({ URL }: Props) => {
  return (
    <section className="bg-primary py-12 px-8 lg:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 py-4 md:gap-10">
        <h5 className="text-center font-heading text-5xl tracking-tight">
          Check it out.
        </h5>
        <Link to={URL} target="_blank">
          <div className="max-w-fit rounded-full bg-darktext px-14 py-3 font-heading font-semibold tracking-widest text-primary shadow-lg transition-colors hover:bg-accent hover:text-white">
            {URL}
          </div>
        </Link>
      </div>
    </section>
  );
};
