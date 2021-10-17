import Social from "../Social"

export default function MobileFooter(){
    return(

<footer className="footer__main">
      <div className="footer__container">
                <a href="/" rel="home">
                  <img
                    className="footer__image-logo"
                    src="https://www.ab-inbev.com/etc.clientlibs/abinbev/clientlibs/clientlib-site/resources/brand-assets/abinbev_logo_en.svg"
                    alt="AB Inbev logo"
                  />
                </a>
        <Social fill="#000000"/>
        </div>
        </footer>
    )
}