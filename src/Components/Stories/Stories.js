import NewsCard from "../NewsCard/NewsCard";
import Social from "../Social";
const content = [
  {
    title: "INNOVATION",
    image:
      "https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/esports-how-ab-inbev-is-capturing-one-of-the-worlds-fastest-growing-entertainment-segments/ESports_427x248.jpg",
    snippet:
      "Esports: How AB InBev is Capturing One of the World’s Fastest Growing Entertainment Segments",
    alt: "Sports Drinks",
    href: "#",
  },
  {
    title: "WATER STEWARDSHIP",
    image:
      "https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/suma-nativas-working-together-we-can-restore-what-was-destroyed/SumaNativas_427x248.jpg",
    snippet:
      "Sumá Nativas: “Working together we can restore what was destroyed”",
    alt: "Man with plants",
    href: "#",
  },
  {
    title: "BEER & BREWING",
    image:
      "	https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/bavaria-launches-nativa-a-cassava-based-beer-grown-in-the-colombian-caribbean-/_Nativa_427x248.jpg",
    snippet:
      "Bavaria launches Nativa, a cassava-based beer grown in the Colombian Caribbean",
    alt: "Beer with vegetables in a basket",
    href: "#",
  },
  {
    title: "DREAM PEOPLE CULTURE",
    image:
      "https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/our-commitment-to-a-better-and-equal-world-for-all--/EqualWorld_427x248.jpg",
    snippet: "Michel Doukeris Assumes CEO Role at Anheuser-Busch InBev",
    alt: "Our Commitment to a Better and Equal World for All",
    href: "#",
  },
  {
    title: "OUR STORIES",
    image:
      "https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/our-response-to-covid19-making-an-impact-where-it-matters/OurGlobalResponse_427x248.jpg",
    snippet: "Anheuser Busch InBev Reports Second Quarter 2021 Results",
    alt: "Our response to COVID19: Making an impact where it matters",
    href: "#",
  },
];
export default function Stories() {
    let newsCardArray = [];
    content.forEach((obj,i)=>newsCardArray.push(<div className ="stories_news-cards" ><NewsCard content = {obj}/></div>))
  return (
  <section className = "stories__container" >
    {newsCardArray.map(card=>card)}
    <div className = "stories_news-cards">
    <Social fill = "#FFFFFF"/>
    </div>    
</section>   
     )
}
