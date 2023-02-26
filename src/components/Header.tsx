import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" mb-20 flex items-center justify-between  pt-8">
      <Link to="/">
        <h1 className="font-heading text-4xl tracking-tighter transition-colors hover:text-accent">
          kv.
        </h1>
      </Link>
      <nav className="font-bold">x</nav>
    </header>
  );
};
