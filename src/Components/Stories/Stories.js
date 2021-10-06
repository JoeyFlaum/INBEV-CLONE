import NewsCard from "../NewsCard/NewsCard";
import Social from "../Social";
import "./Stories.css";
import ShareArrow from "../../Assets/ShareArrow";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
const content = [
  {
    title: "INNOVATION",
    image:
      "https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/esports-how-ab-inbev-is-capturing-one-of-the-worlds-fastest-growing-entertainment-segments/ESports_427x248.jpg",
    snippet:
      "Esports: How AB InBev is Capturing One of the World’s Fastest Growing Entertainment Segments",
    alt: "Sports Drinks",
    href: "#",
    date: "September 07, 2021",
  },
  {
    title: "WATER STEWARDSHIP",
    image:
      "https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/suma-nativas-working-together-we-can-restore-what-was-destroyed/SumaNativas_427x248.jpg",
    snippet:
      "Sumá Nativas: “Working together we can restore what was destroyed”",
    alt: "Man with plants",
    href: "#",
    date: "August 30, 2021",
  },
  {
    title: "BEER & BREWING",
    image:
      "	https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/bavaria-launches-nativa-a-cassava-based-beer-grown-in-the-colombian-caribbean-/_Nativa_427x248.jpg",
    snippet:
      "Bavaria launches Nativa, a cassava-based beer grown in the Colombian Caribbean",
    alt: "Beer with vegetables in a basket",
    href: "#",
    date: "August 23, 2021",
  },
  {
    title: "DREAM PEOPLE CULTURE",
    image:
      "https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/our-commitment-to-a-better-and-equal-world-for-all--/EqualWorld_427x248.jpg",
    snippet: "Our Commitment to a Better and Equal World for All",
    alt: "Our Commitment to a Better and Equal World for All",
    href: "#",
    date: "June 23, 2020",
  },
  {
    title: "OUR STORIES",
    image:
      "https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/our-response-to-covid19-making-an-impact-where-it-matters/OurGlobalResponse_427x248.jpg",
    snippet: "Our response to COVID19: Making an impact where it matters",
    alt: "black and white portraits of faces in a grid",
    href: "#",
    date: "April 08, 2020",
  },
];
export default function Stories({windowWidth}) {
  let newsCardArray = [];
  content.forEach((obj, i) =>
    newsCardArray.push(
      <div className="stories_news-cards" key={obj + i}>
        <NewsCard content={obj} />
        <span className="stories_date">{obj.date}</span>
        <i className="stories_arrow">{<ShareArrow />}</i>
      </div>
    )
  );


  

  return (
    <div className="stories__wrapper">
      <section className="stories__container">
        {windowWidth < 950 ? (
          <Carousel
            autoPlay={false}
            axis="horizontal"
            dynamicHeight={false}
            centerMode={true}
            showThumbs={false}
          >
            {newsCardArray.map((card) => card)}
            <div className="stories_news-cards social">
              <p>Follow us on Social Media</p>
              <Social fill="#FFFFFF" />
            </div>
          </Carousel>
        ) : (
          <>
            {newsCardArray.map((card) => card)}
            <div className="stories_news-cards social">
              <p>Follow us on Social Media</p>
              <Social fill="#FFFFFF" />
            </div>
          </>
        )}
      </section>
      <a
        href="https://www.ab-inbev.com/news-media/"
        target="_blank"
        rel="noreferrer"
        className="stories__button"
      >
        ALL STORIES
      </a>
    </div>
  );
}
