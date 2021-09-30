import Search from "../../Assets/Search";
import Globe from "../../Assets/Globe";
import "./Header.css";
import { useState } from "react";
import MobileNav from "../MobileNav";
import { links } from "../Links";
import SubMenuOne from "./SubMenuOne";

export default function MobileHeader({ scrollDirection }) {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [nextMenuMainTitle, setnextMenuMainTitle] = useState("");
  const [isSubMenuOpen, setisSubMenuOpen] = useState("");

  //on click show next menu
  //when next menu shows, parent U
  const showNextMenu = (e) => {
    let text = e.target.innerText
    text!=="MENU"&&setnextMenuMainTitle(text.toString());
  };
  return (
    <header
      className={`header__main ${isMenuOpen?"menu__open":""}`}
    >
      <h1 className="logo">
        <a href="/" rel="home">
          <img
            src="https://www.ab-inbev.com/etc.clientlibs/abinbev/clientlibs/clientlib-site/resources/brand-assets/abinbev_logo_en.svg"
            alt="AB Inbev logo"
          />
        </a>
      </h1>
      <nav>
        <ul className={`list-main-tabs ${isMenuOpen ? "visible" : "hidden"}`}>
          <li className="main-tab">MENU</li> 
          {links.tabs.map((tab, i) => {
            //map all main tabs, level 1 subtabs, level 2 subtabs
            return (
              <li
                key={`${tab.mainTab.title}li${i}`}
                className={`main-tab`}
                data-tab-collection={`tab${i + 1}`}
                onClick = {(e)=>showNextMenu(e)}
              >
                  {tab.mainTab.title}
              </li>
            );
          })}
        </ul>
        <SubMenuOne isMenuOpen={isMenuOpen} setisMenuOpen = {setisMenuOpen} nextMenuMainTitle={nextMenuMainTitle} setnextMenuMainTitle = {setnextMenuMainTitle} />
        {/**plan is to send menu value and filter link that matches innerText */}
      </nav>
      <div className="utilities-container">
        <div className="utilities-globe">
          <Globe />
        </div>
        <div className="utilities-search">
          <Search />
        </div>
        <MobileNav setisMenuOpen={setisMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
}
