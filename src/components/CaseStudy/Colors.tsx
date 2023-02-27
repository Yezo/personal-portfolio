type Props = {
  colorOne: string;
  colorTwo: string;
  colorThree?: string;
  colorFour?: string;
};

export const Colors = ({
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
}: Props) => {
  return (
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
            <div
              className={`col-start-1 row-start-1 h-36 w-24 bg-${colorOne}sm:w-36`}
            ></div>
            <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
              {colorOne}
            </p>
          </div>
          <div className="grid">
            <div
              className={`col-start-1 row-start-1 h-36 w-24 bg-${colorTwo} sm:w-36`}
            ></div>
            <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
              #1C1F26
            </p>
          </div>

          <div className="grid">
            <div
              className={`col-start-1 row-start-1 h-36 w-24 bg-${colorThree} sm:w-36`}
            ></div>
            <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-[#15181D]">
              #C2C2CC
            </p>
          </div>

          {colorFour && (
            <div className="grid">
              <div
                className={`col-start-1 row-start-1 h-36 w-24 bg-${colorFour} sm:w-36`}
              ></div>
              <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-[#15181D]">
                {colorFour}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
