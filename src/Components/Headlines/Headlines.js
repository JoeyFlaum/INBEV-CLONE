import NewsCard from "../NewsCard/NewsCard";

export default function Headlines() {
  const content = [
    {
      title: "PRESS RELEASE",
      image:
        "https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/michel-doukeris-assumes-ceo-role-at-anheuser-busch-inbev/MichelDayOne_96x96.jpg",
      snippet: "Michel Doukeris Assumes CEO Role at Anheuser-Busch InBev",
      alt: "Michel Doukeris Assumes CEO Role at Anheuser-Busch InBev",
    },
    {
        title: "PRESS RELEASE",
        image:
          "https://www.ab-inbev.com//content/dam/universaltemplate/ab-inbev/News/Stories/anheuser-busch-inbev-reports-second-quarter-2021-results/2Q21_96x96.jpg",
        snippet: "Anheuser Busch InBev Reports Second Quarter 2021 Results",
        alt: "Anheuser Busch Factory With Second Quarter 2021 Results Headline",
      },
      {
        title: "PRESS RELEASE",
        image:
          "	https://www.ab-inbev.com/content/dam/universaltemplate/ab-inbev/News/Stories/2020-annual-report/AR2020_96x96.jpg",
        snippet: "2020 Annual Report",
        alt: "Woman Holding A Budweiser Beer",
      },
  ];
  return (
    <div className="headlines__container">
      <div>Latest Headlines</div>
      <NewsCard content = {content} />
    </div>
  );
}
