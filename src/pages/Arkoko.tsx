import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const Arkoko = () => {
  return (
    <div className="min-h-screen  bg-primary font-normal text-darktext">
      {/* <div className="mx-auto max-w-4xl px-8"></div> */}
      <header className="max-h-[90vh]">
        <div className=" mx-auto mb-20 flex max-w-4xl items-center justify-between px-8 pt-8">
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
              // ARKOKO 2023
            </h2>
            <h2 className="text-center font-heading text-5xl leading-[1.25] tracking-tight text-darktext md:text-7xl">
              The ultimate toolbox application for Lost Ark
            </h2>
          </div>
          <div className="grid w-full place-items-center">
            <img src="/arkoko.webp" alt="Arkoko" className="max-h-[25rem]" />
          </div>
        </section>
      </header>

      <main className="">
        <section className=" bg-primary px-8 py-4 lg:py-16">
          <div className="mx-auto max-w-4xl justify-between py-4 lg:flex">
            <div className="pb-5">
              <div className="font-primary text-xs font-semibold uppercase text-slate-700 opacity-70">
                // 01
              </div>
              <h3 className="font-primary text-2xl font-semibold leading-[1.25] tracking-tighter">
                Product Conception
              </h3>
            </div>
            <div className="space-y-8 lg:max-w-[50ch]">
              <p className=" font-inter text-sm leading-[1.75] opacity-80">
                Arkoko was created with the objective to help alleviate the
                problem plaguing MMORPG players: too much information to process
                while playing the game. Users want to be as efficient in the
                least amount of time as possible but many players end up
                spending more time on calculating what's efficient to do instead
                of actually playing the game.
              </p>
              <p className="font-inter text-sm leading-[1.75] opacity-80">
                Many games have a lot of online resources to help new and
                existing players learn more about the game but many websites
                lack certain features that others have and vice-versa. Arkoko
                aims to implement as many features as possible (
                <span className="italic">eventually</span>
                ).
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary px-8 py-4 lg:py-16">
          <div className="mx-auto max-w-4xl justify-between py-4 lg:flex">
            <div className="pb-4">
              <div className="font-primary text-xs font-semibold uppercase text-slate-700 opacity-70">
                // 02
              </div>
              <h3 className="font-primary text-2xl font-semibold leading-[1.25] tracking-tighter">
                Colors
              </h3>
            </div>
            <div className="flex flex-wrap gap-1">
              <div className="grid">
                <div className="col-start-1 row-start-1 h-36 w-24 bg-[#15181D] sm:w-36"></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #15181D
                </p>
              </div>
              <div className="grid">
                <div className="col-start-1 row-start-1 h-36 w-24 bg-[#1C1F26] sm:w-36"></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #1C1F26
                </p>
              </div>
              <div className="grid">
                <div className="col-start-1 row-start-1 h-36 w-24 bg-[#C2C2CC] sm:w-36"></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-[#15181D]">
                  #15181D
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary px-8 py-4 lg:py-16">
          <div className="mx-auto max-w-4xl justify-between py-4 lg:flex ">
            <div className="">
              <div className="font-primary text-xs font-semibold uppercase text-slate-700 opacity-70">
                // 03
              </div>
              <h3 className="font-primary text-2xl font-semibold leading-[1.25] tracking-tighter">
                Challenges
              </h3>
            </div>

            <div className="flex flex-col lg:max-w-[50ch]">
              <div className="py-5">
                <h4 className="font-primary   font-bold uppercase tracking-tight opacity-80">
                  Oreha Crafting Calculator
                </h4>
                <div className="space-y-4">
                  <p className=" font-inter text-sm leading-[1.75] opacity-80">
                    From a technical standpoint, the biggest challenge was
                    definitely the Oreha Crafting Calculator. The data
                    structures involved were complicated since they used nested
                    objects for the recipes. It was also difficult managing data
                    coming from the local API as well as from the
                    LostArkMarketOnline API.
                  </p>
                  <p className="font-inter text-sm leading-[1.75] opacity-80">
                    The code implementation for this specific tool leaves much
                    to be desired. I believe if I were to re-do the code for
                    this, it would be refactored into much cleaner code. My
                    biggest takeaway from programming this would have to be the
                    merging and manipulation of nested array of objects.
                  </p>
                </div>
              </div>
              <div className="py-5">
                <h4 className="font-primary   font-bold uppercase tracking-tight opacity-80">
                  Arkoko as a whole
                </h4>
                <div className="space-y-4">
                  <p className=" font-inter text-sm leading-[1.75] opacity-80">
                    This is the biggest project I've done and it is definitely
                    an ambitious one as a junior web developer. It has a lot of
                    working individual parts and has more content than most
                    websites.
                  </p>
                  <p className="font-inter text-sm leading-[1.75] opacity-80">
                    Determining how I should tackle each challenge proves
                    difficult since every feature of Arkoko is so unique that
                    searching for answers to specific problems I face while
                    coding seems almost an impossible task. However, it is
                    without a doubt twice as rewarding when I figure out the
                    problems myself and I think that is what keeps me working on
                    Arkoko as my main passion project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary px-8 py-4 lg:py-16">
          <div className="mx-auto max-w-4xl justify-between py-4 lg:flex ">
            <div className="">
              <div className="font-primary text-xs font-semibold uppercase text-slate-700 opacity-70">
                // 04
              </div>
              <h3 className="font-primary text-2xl font-semibold leading-[1.25] tracking-tighter">
                Areas of Improvement
              </h3>
            </div>

            <div className="flex flex-col lg:max-w-[50ch]">
              <div className="py-5">
                <h4 className="font-primary   font-bold uppercase tracking-tight opacity-80">
                  Responsive Design for Tables
                </h4>
                <div className="space-y-4">
                  <p className=" font-inter text-sm leading-[1.75] opacity-80">
                    Arkoko has many features and a majority of its content comes
                    in the form of tabular data. The data tables found on the
                    Marketplace page requires a revamp in terms of
                    responsiveness. The challenge is figuring out which
                    categories should be omitted on mobile, if needed at all.
                  </p>
                </div>
              </div>
              <div className="py-5">
                <h4 className="font-primary font-bold uppercase tracking-tight opacity-80">
                  Design System
                </h4>
                <div className="space-y-4">
                  <p className=" font-inter text-sm leading-[1.75] opacity-80">
                    As mentioned before, this is a large project with a lot of
                    components and pages. One regret I have is not having a
                    design system in place before starting. Everything would be
                    more consistent had I determined which colors, fonts, and
                    designs of components I'd be using from the very start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-12 px-8 lg:py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 py-4 md:gap-10">
            <h5 className="text-center font-heading text-5xl tracking-tight">
              Check it out.
            </h5>
            <Link to="https://arkoko.vercel.app" target="_blank">
              <div className="max-w-fit rounded-full bg-darktext px-14 py-3 font-heading font-semibold tracking-widest text-primary transition-colors hover:bg-accent hover:text-white">
                https://arkoko.vercel.app
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
