import { links } from "./Links";
import "./Header.css"
export default function Header() {
  console.log(links);
  return (
    <header>
      <h1>
        <a href="/" rel="home">
          <img
            src="https://www.ab-inbev.com/etc.clientlibs/abinbev/clientlibs/clientlib-site/resources/brand-assets/abinbev_logo_en.svg"
            alt="AB Inbev logo"
          />
        </a>
      </h1>
      <nav>
        <ul className="list-main-tabs" onBlur = {(e)=>console.log(e)} >
          {links.tabs.map((tab) => {
            //map all main tabs, level 1 subtabs, level 2 subtabs
            return (
              <li className="header-tab-main" >
                <a href={tab.mainTab.link}> {tab.mainTab.title}</a>
                <ul className="list-sub-tabs-1">
                  {tab.subTabs.map((subTab) => (
                    <li className="sub-tab-1">
                      <a href={subTab.link}>{subTab.title}</a>
                      {subTab.subTabs?<ul className="list-sub-tabs-2">{subTab.subTabs.map((subTab)=><li className = "sub-tab-2"><a href = {subTab.link}>{subTab.title}</a></li>)}</ul>:null}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
