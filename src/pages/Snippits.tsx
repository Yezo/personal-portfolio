import { Footer } from "../components/Footer";
import { Header } from "../components/Header/Header";
import { PromotionLink } from "../components/CaseStudy/PromotionLink";
import { ProductConception } from "../components/CaseStudy/ProductConception";
import { Colors } from "../components/CaseStudy/Colors";
import { Challenges } from "../components/CaseStudy/Challenges";
import { Improvements } from "../components/CaseStudy/Improvements";

export const Snippits = () => {
  return (
    <div className="min-h-screen  bg-primary font-normal text-darktext">
      <Header
        title="Unforgettable code snippets for coders with forgettable minds"
        subtitle="Snippits (2023)"
        textOrientation="center"
        imageURL="/snippits.webp"
        imageTitle="Snippits"
      />

      <main>
        <ProductConception paragraph="I was forgetting a lot of basic code syntax while learning how to program as do many other coders. This web application is meant to serve as a mini cheatsheet filled with code excerpts and other tips and tricks I've found over the course of teaching myself how to code as a web developer." />
        {/* cant put color hexcodes as props for some reason */}
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
                  className={`col-start-1 row-start-1 h-36 w-24 bg-[#F1EFE9] sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-black">
                  #F1EFE9
                </p>
              </div>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-36 w-24 bg-[#20232b] sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #20232B
                </p>
              </div>
              <div className="grid">
                <div
                  className={`col-start-1 row-start-1 h-36 w-24 bg-[#282828] sm:w-36`}
                ></div>
                <p className="col-start-1 row-start-1 self-end justify-self-end p-2 font-inter text-sm font-semibold tracking-tight text-white">
                  #282828
                </p>
              </div>
            </div>
          </div>
        </section>

        <Challenges
          firstHeading="Design Format"
          firstParagraph="Between in-depth articles, blog posts, or a grid of random snippets, it was rather challenging trying to figure out which format I wanted the website to use. The idea of code snippets was for it to be easily accessible and fast to look up on a whim. "
          firstParagraphTwo="In-depth articles didn't satisfy either of those although articles and blog posts would have allowed me to go a lot more indepth. Ultimately, I went with dropdown selections for the code snippets and added a mini description to help facilitate further explanation if needed."
        />

        <Improvements
          firstHeading="User-generated content"
          firstParagraph="Snippits can be expanded to allow users from across the world to enter in their own code snippets into a database and have it displayed on the website.  There would have to a way to filter between code snippets that actually help people or useless excerpts. Otherwise, users could input wrong data and spread false information. For now, the code snippets are purely curated by myself."
        />

        <PromotionLink URL="https://snippits.vercel.app" />
      </main>

      <Footer />
    </div>
  );
};
