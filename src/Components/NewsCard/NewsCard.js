export default function NewsCard({ content }) {
  return (
    <>
      {content.map((obj,i) => {
        return (
          <section className="news-section" key = {obj.title + i}>
            <div className="news-section__image-container">
              <img className="news-section__image" src={obj.image} alt = {obj.alt} />
            </div>
            <div className="news-section__paragraph-container">
              <p className="news-section__title">{obj.title}</p>
              <p className="news-section__snippet">{obj.snippet}</p>
            </div>
          </section>
        );
      })}
    </>
  );
}
