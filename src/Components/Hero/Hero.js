import "./Hero.css";
import TwitterBird from "../DesignElements/TwitterBird";
import Headlines from "../Headlines/Headlines"


export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero--background">
        <div className="hero--background-image-container">
          <img
            className="hero--background-image"
            src="https://www.ab-inbev.com/content/dam/universaltemplate/abinbev/home/UNGA2020_1440x472.jpg"
            alt="green field of crops with irrigation and sunset, trees and hills in the background"
          />
          <div className="hero--background-image overlay"></div>
        </div>
      </div>
      <div className = "hero__content-wrapper">
      <h2 className="hero--paragraph">
        <a
          className="hero--hashtag"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/search?q=%23togetherforbetter&src=typed_query"
        >
          #TOGETHERFORBETTER
        </a>
        <p>
          Rebuilding together: How we are helping drive economic recovery around
          the world
        </p>
        <a
          className="hero--secondary-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.ab-inbev.com/news-media/news-stories/how-the-beer-industry-is-driving-economic-recovery.html"
        >
          Click to learn how a strong beer value chain plays a critical role in
          boosting the economy and enabling a sustainable recovery
        </a>
      </h2>
      <aside className="hero-aside-wrapper">
        <div className="twitter-box">
          <a
            className="@abinbev"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/abinbev"
          >
            <div className="twitter-bird">
              <TwitterBird />
            </div>
            <p>@abinbev</p>
          </a>
        </div>
        <div className = "card-headlines-wrapper">
          <h3>
            Latest Headlines
          </h3>
          <Headlines/>
        </div>
      </aside>
      </div>
    </section>
  );
}
