import { links } from "../Links";
import "./Footer.css";
import Social from "../Social";

export default function Footer() {
  let shortLinks = [];
  for (let i = 0; i < 3; i++) {
    shortLinks.push(links.tabs[i]);
  }
  let linksWithSubList = links.tabs.filter((tab) => {
    let title = tab.mainTab.title.toLowerCase();
    return (
      title === "sustainability" ||
      title === "investors" ||
      title === "careers" ||
      title === "suppliers"
    );
  });
  const connectTab = [
    <Social fill="#000000" />,
    "News & Media",
    "Contact",
    "FAQ",
    "Compliance Helpline",
  ];
  return (
    <footer className="footer__main">
      <div className="footer__container">
        <ul className="footer__links-wrapper">
          <li className="footer__list-column">
            <ul className="footer__ul-list">
              <li className="footer_main-tab logo">
                <a href="/" rel="home">
                  <img
                    className="footer__image-logo"
                    src="https://www.ab-inbev.com/etc.clientlibs/abinbev/clientlibs/clientlib-site/resources/brand-assets/abinbev_logo_en.svg"
                    alt="AB Inbev logo"
                  />
                </a>
              </li>
              {shortLinks.map((tab, i) => (
                <li
                  key={`${tab}footerli${i}`}
                  className={`footer_main-tab`}
                  data-tab-collection={`tab${i + 1}`}
                >
                  <a href={tab.mainTab.link} target="_blank" rel="noreferrer">
                    {tab.mainTab.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {linksWithSubList.map((tab, i) => (
            <li
              className="footer__list-column"
              key={`${tab}footerli${i + 100}`}
            >
              <ul className="footer__ul-list">
                <li
                  className="footer_main-tab"
                  data-tab-collection={`tab${i + 1}`}
                >
                  <a href={tab.mainTab.link} target="_blank" rel="noreferrer">
                    {tab.mainTab.title}
                  </a>
                  <div className="footer_divider"></div>
                  <ul className="footer_sub-tab">
                    {tab.subTabs.map((subTab) => (
                      <li
                        key={`${subTab.title}footerSubli${i}`}
                        className={`footer_sub-tab`}
                        data-tab-collection={`tab${i + 1}`}
                      >
                        <a href={subTab.link} target="_blank" rel="noreferrer">
                          {subTab.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
          ))}
          <li className="footer__list-column">
            <ul className="footer__ul-list connect">
              <li className="footer_main-tab">
                <a href="/" target="_blank" rel="noreferrer">
                  CONNECT
                </a>
              </li>
              <div className="footer_divider"></div>
              {connectTab.map((tab, i) => (
                <li
                  key={`footerConnectTab${i}`}
                  className="footer_main-tab"
                  data-tab-collection={`tab${i + 1}`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="footer__bottom">
          <div className="footer__bottom-section one">
            <p>© 2020 Anheuser-Busch InBev All rights reserved.</p>
            <p>Enjoy Responsibly. Do not share this content with minors.</p>
          </div>
          <div className="footer__bottom-section two">
            <ul className="footer__util-items">
              <li className="footer__util-item">
                <a href="/sitemap/" className="footer__util-link">
                  SiteMap
                </a>
              </li>
              <li className="footer__util-item">
                <a href="/privacy-policy/" className="footer__util-link">
                  Privacy & Cookies
                </a>
              </li>
              <li className="footer__util-item">
                <a href="/terms-conditions/" className="footer__util-link">
                  Terms and Conditions
                </a>
              </li>
              <li className="footer__util-item">
                <a
                  href="/terms-conditions/california-residents-privacy-rights/"
                  className="footer__util-link"
                >
                  Do Not Sell My Personal Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className="footer__wave"
        alt="footer waver pattern"
        src="https://www.ab-inbev.com/etc.clientlibs/abinbev/clientlibs/clientlib-site/resources/brand-assets/footer_wave.svg"
      ></img>
    </footer>
  );
}
