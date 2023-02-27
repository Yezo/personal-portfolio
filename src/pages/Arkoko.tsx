import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PromotionLink } from "../components/CaseStudy/PromotionLink";
import { ProductConception } from "../components/CaseStudy/ProductConception";
import { Colors } from "../components/CaseStudy/Colors";
import { Challenges } from "../components/CaseStudy/Challenges";
import { Improvements } from "../components/CaseStudy/Improvements";

export const Arkoko = () => {
  return (
    <div className="min-h-screen  bg-primary font-normal text-darktext">
      <Header
        title="The ultimate toolbox application for Lost Ark"
        subtitle="Arkoko (2023)"
        textOrientation="center"
        imageURL="/arkoko.webp"
        imageTitle="Arkoko"
      />

      <main className="">
        <ProductConception
          paragraph="Arkoko was created with the objective to help alleviate the
                problem plaguing MMORPG players: too much information to process
                while playing the game. Users want to be as efficient in the
                least amount of time as possible but many players end up
                spending more time on calculating what's efficient to do instead
                of actually playing the game."
          paragraph2="Many games have a lot of online resources to help new and
                existing players learn more about the game but many websites
                lack certain features that others have and vice-versa. Arkoko
                aims to implement as many features as possible."
        />

        <Colors colorOne="#15181D" colorTwo="#1C1F26" colorThree="#C2C2CC" />

        <Challenges
          firstHeading="Oreha Crafting Calculator"
          firstParagraph="From a technical standpoint, the biggest challenge was
                    definitely the Oreha Crafting Calculator. The data
                    structures involved were complicated since they used nested
                    objects for the recipes. It was also difficult managing data
                    coming from the local API as well as from the
                    LostArkMarketOnline API."
          firstParagraphTwo="The code implementation for this specific tool leaves much
                    to be desired. I believe if I were to re-do the code for
                    this, it would be refactored into much cleaner code. My
                    biggest takeaway from programming this would have to be the
                    merging and manipulation of nested array of objects."
          secondHeading="Arkoko as a whole"
          secondParagraph="This is the biggest project I've done and it is definitely
                    an ambitious one as a junior web developer. It has a lot of
                    working individual parts and has more content than most
                    websites."
          secondParagraphTwo="Determining how I should tackle each challenge proves
                    difficult since every feature of Arkoko is so unique that
                    searching for answers to specific problems I face while
                    coding seems almost an impossible task. However, it is
                    without a doubt twice as rewarding when I figure out the
                    problems myself and I think that is what keeps me working on
                    Arkoko as my main passion project."
        />

        <Improvements
          firstHeading="Responsive Design for Tables"
          firstParagraph="Arkoko has many features and a majority of its content comes
                    in the form of tabular data. The data tables found on the
                    Marketplace page requires a revamp in terms of
                    responsiveness. The challenge is figuring out which
                    categories should be omitted on mobile, if needed at all."
          secondHeading="Design System"
          secondParagraph="As mentioned before, this is a large project with a lot of
                    components and pages. One regret I have is not having a
                    design system in place before starting. Everything would be
                    more consistent had I determined which colors, fonts, and
                    designs of components I'd be using from the very start."
        />

        <PromotionLink URL="https://arkoko.vercel.app" />
      </main>

      <Footer />
    </div>
  );
};
