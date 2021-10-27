import NewsCard from "../NewsCard/NewsCard";
import Social from "../Social";
import "./Stories.css";
import ShareArrow from "../../Assets/ShareArrow";
import { content } from "./StoriesContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bottom: "-5rem",
        top: "unset",
        right: "35%",
        width: "2rem",
        height: "2rem",
        background: "grey",
        borderRadius: "1rem",
        zIndex: "2",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bottom: "-5rem",
        top: "unset",
        left: "35%",
        width: "2rem",
        height: "2rem",
        background: "grey",
        borderRadius: "1rem",
        zIndex: "2",
      }}
      onClick={onClick}
    />
  );
}

export default function Stories({ windowWidth }) {
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

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // option to change dot style
    // appendDots: (dots) => ( 
    //   <div style={{}}>
    //     <ul style={{}}> {dots} </ul>
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="stories__wrapper">
      <section className="stories__container">
        {windowWidth < 1250 ? (
          <Slider {...settings}>
            {newsCardArray.map((card, i) => (
              <div className="slider_card_container" key={card + i}>{card}</div>
            ))}
            <div className="slider_card_container">
              <div className="stories_news-cards social">
                <p>Follow us on Social Media</p>
                <Social fill="#FFFFFF" />
              </div>
            </div>
          </Slider>
        ) : (
          <>
            {newsCardArray.map((card, i) => (
              <div className="slider_card_container" key={card + i}>{card}</div>
            ))}
            <div className="slider_card_container">
              <div className="stories_news-cards social">
                <p>Follow us on Social Media</p>
                <Social fill="#FFFFFF" />
              </div>
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
