import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PromotionLink } from "../components/CaseStudy/PromotionLink";
import { ProductConception } from "../components/CaseStudy/ProductConception";
import { Challenges } from "../components/CaseStudy/Challenges";
import { Improvements } from "../components/CaseStudy/Improvements";

export const AniFlux = () => {
  return (
    <div className="min-h-screen bg-primary font-normal text-darktext">
      <Header
        title="A sleek and modern design for the new age of anime"
        subtitle="AniFlux (2023)"
        textOrientation="center"
        imageURL="/aniflux.webp"
        imageTitle="AniFlux"
      />

      <main>
        <ProductConception paragraph="The problem I wanted AniFlux to help solve was that there were a lot of anime-related websites that had outdated designs and bloated with unnecessary content. It became difficult to navigate and digest concise information about specific animes. The goal of this web application is to be able to convey everything about an anime in the least amount of time as possible while visually pleasing the eyes of its users." />

        {/* BUG: color hexcodes cannot be used as props ??? */}
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
                  className={`col-start-1 row-start-1 h-36 w-24 bg-[#EDF1F5] sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-black">
                  #EDF1F5
                </p>
              </div>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-36 w-24 bg-[#7B8EA1] sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-black">
                  #7B8EA1
                </p>
              </div>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-36 w-24 bg-[#2d2d29] sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #2D2D29
                </p>
              </div>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-36 w-24 bg-[#3480EA] sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #3480EA
                </p>
              </div>
            </div>
          </div>
        </section>

        <Challenges
          firstHeading="Pagination"
          firstParagraph="Originally, there were pagination features for some pages on the website. However, I quickly realized hand-coding pagination from scratch was a nightmare. The pagination did work but I ultimately scrapped the idea and ended up displaying all the data at once on a single page. Perhaps less clicks is a better user experience. "
        />

        <Improvements
          firstHeading="Jikan API"
          firstParagraph="Unfortunately, the JikanAPI has some shortcomings despite providing a ton of data about anime. It is missing some data points for obscure anime. The API is also free and has rate-limiting in place to prevent too many requests. Users that visit AniFlux may experience missing data due to being rate-limited."
          secondHeading="Jikan API Continued"
          secondParagraph="Despite the shortcomings, JikanAPI offers a large variety of endpoints for developers to play with. A lot of improvements can be made such as adding features for manga, recommendations, reviews, and many others."
        />

        <PromotionLink URL="https://aniflux.onrender.com" />
      </main>

      <Footer />
    </div>
  );
};
