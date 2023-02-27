import { Link } from "react-router-dom";
interface Props {
  title: string;
  subtitle: string;
  textOrientation: string;
  imageURL?: string;
  imageTitle?: string;
}
export const Header = ({
  title,
  subtitle,
  textOrientation,
  imageURL,
  imageTitle,
}: Props) => {
  return (
    <header className="max-h-[90vh] ">
      <div className=" mx-auto mb-20 flex max-w-4xl items-center justify-between px-8 pt-8 ">
        <Link to="/">
          <h1 className="font-heading text-4xl tracking-tighter transition-colors hover:text-accent">
            kv.
          </h1>
        </Link>
        <nav className="font-bold">x</nav>
      </div>
      <section className="mx-auto mb-20 max-h-screen max-w-4xl space-y-4 px-8 md:space-y-8">
        <div>
          <h2 className="font-primary mb-2 font-semibold uppercase tracking-widest text-slate-700 opacity-30">
            // {subtitle}
          </h2>
          <h2
            className={`max-w-[15ch] font-heading text-5xl text-darktext md:text-7xl ${
              textOrientation === "left" ? "text-left" : "text-center"
            }`}
          >
            {title}
          </h2>
        </div>
        {imageURL && (
          <div className="grid w-full place-items-center">
            <img src={imageURL} alt={imageTitle} className="max-h-[25rem]" />
          </div>
        )}
      </section>
    </header>
  );
};
