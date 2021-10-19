export default function FooterDisclamers(){
    return(
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
    )
}