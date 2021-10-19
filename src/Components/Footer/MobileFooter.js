import Social from "../Social";
import FooterDisclamers from "./FooterDisclaimers";
import FooterWave from "./FooterWave";
import { links } from "../Links";
export default function MobileFooter() {
  return (
    <footer className="footer__main">
      <div className="footer__container">
        <a href="/" rel="home">
          <img
            className="footer__image-logo"
            src="https://www.ab-inbev.com/etc.clientlibs/abinbev/clientlibs/clientlib-site/resources/brand-assets/abinbev_logo_en.svg"
            alt="AB Inbev logo"
          />
        </a>
        <Social fill="#000000" />
      </div>
      <ul className ="footer__ul-list">
        {links.tabs.map((link, i) => {
          return (
            <li
              key={`${link.mainTab}footerli${i}`}
              className={`footer_main-tab`}
              data-tab-collection={`tab${i + 1}`}
            >
              <a href={link.mainTab.link} target="_blank" rel="noreferrer">
                {link.mainTab.title}
              </a>
            </li>
          );
        })}
      </ul>
      <FooterDisclamers />
      <FooterWave />
    </footer>
  );
}
