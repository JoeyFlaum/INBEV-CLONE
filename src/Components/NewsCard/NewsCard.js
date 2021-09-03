export default function NewsCard({ content }) {
  return (
    <>
      {content.length?content.map((obj,i) => {
        return (
          <section className="news-section" key = {obj.title + i}>
          
            <div className="news-section__image-container">
              <img className="news-section__image" src={obj.image} alt = {obj.alt} />
            </div>
            <div className="news-section__paragraph-container">
              <p className="news-section__title">{obj.title}</p>
              <a className="news-section__snippet-link" href = {obj.href} target="_blank" rel="noreferrer">
              <p className="news-section__snippet">{obj.snippet}</p>
              </a>
            </div>
          </section>
        );
      })
      :
      <section className="news-section" key = {content.title}>
          
          <div className="news-section__image-container">
            <img className="news-section__image" src={content.image} alt = {content.alt} />
          </div>
          <div className="news-section__paragraph-container">
            <p className="news-section__title">{content.title}</p>
            <a className="news-section__snippet-link" href = {content.href} target="_blank" rel="noreferrer">
            <p className="news-section__snippet">{content.snippet}</p>
            </a>
          </div>
        </section>
      }
    </>
  );
}
