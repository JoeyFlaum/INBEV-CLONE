import { links } from "../Links";
export default function Footer() {
    const shortLinks = []
    for(let i=0;i<3;i++){
        shortLinks.push(links.tabs[i])
    }
    
    console.log(shortLinks)
  return (
    <footer>
      <div className="footer__links-wrapper">
        <ul className = "footer__short-links">
        <li>
        <a href="/" rel="home">
          <img
            src="https://www.ab-inbev.com/etc.clientlibs/abinbev/clientlibs/clientlib-site/resources/brand-assets/abinbev_logo_en.svg"
            alt="AB Inbev logo"
          />
        </a>
        </li>
        </ul>
      </div>
    </footer>
  );
}
