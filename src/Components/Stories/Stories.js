import NewsCard from "../NewsCard/NewsCard";
import Social from "../Social";
import "./Stories.css";
import ShareArrow from "../../Assets/ShareArrow";
import { content } from "./StoriesContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",bottom:"-30px",top:"unset", right:"25%", background: "red",zIndex:"2"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",bottom:"-30px",top:"unset", right:"unset",left:"25%", background: "red",zIndex:"2"}}
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
    infinite:true,
    centerMode:true,
    initialSlide:0,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div
        style={{
        }}
      >
        <ul style={{ marginBottom: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="stories__wrapper">
      <section className="stories__container">
      <Slider {...settings}>
        {newsCardArray.map((card) => <div className = "slider_card_container">{card}</div>)}
        <div className = "slider_card_container">
        <div className="stories_news-cards social">
          <p>Follow us on Social Media</p>
          <Social fill="#FFFFFF" />
        </div>
        </div>
        </Slider>
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
