import { links } from "./Links";
import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [screenX, setscreenX] = useState();
  const [screenY, setscreenY] = useState();
  const [tabX, settabX] = useState();
  const [tabY, settabY] = useState();
  const [activeMenu, setactiveMenu] = useState();

  //when window/menu x and y match, menu should be visible
  const menuShow = () => {
    activeMenu?.nextSibling&&activeMenu.nextSibling.classList.add("active")
  };
  //when leaving menu, menu should be hidden
  const menuHide = () => {
  };

  useEffect(() => {
    window.addEventListener("mousemove", windowMousePostion);
    return () => window.removeEventListener("mousemove", windowMousePostion);
  });
  useEffect(()=>{
    //remove class "active" from non active menu item

  },[activeMenu])

  const windowMousePostion = (e) => {
    setscreenX(e.screenX);
    setscreenY(e.screenY);
    return tabX === screenX && tabY === screenY ? menuShow() : menuHide(); //capture when window x and y meet menu x and y
  };

  const linksMousePosition = (e) => {
    settabX(e.screenX);
    settabY(e.screenY);
    setactiveMenu(e.target);
  };

  // console.dir(activeMenu);
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
        <ul className="list-main-tabs">
          {links.tabs.map((tab, i) => {
            //map all main tabs, level 1 subtabs, level 2 subtabs
            return (
              <li
                className={`main-tab tab${i + 1}`}
                data-tab-collection={`tab${i + 1}`}
                onMouseMove={linksMousePosition}
              >
                <a
                  className={`main-tab-link tab${i + 1}`}
                  data-tab-collection={`tab${i + 1}`}
                  href={tab.mainTab.link}
                >
                  {tab.mainTab.title}
                </a>
                <ul
                  className={`list-sub-tabs-1 tab${i + 1}` }
                  data-tab-collection={`tab${i + 1}`}
                >
                  {tab.subTabs.map((subTab) => (
                    <li
                      className={`sub-tab-1 tab${i + 1}`}
                      data-tab-collection={`tab${i + 1}`}
                    >
                      <a
                        className={`sub-tab-1 tab${i + 1} link`}
                        data-tab-collection={`tab${i + 1}`}
                        href={subTab.link}
                      >
                        {subTab.title}
                      </a>
                      {subTab.subTabs ? (
                        <ul className={`list-sub-tabs-2 tab${i + 1}`}>
                          {subTab.subTabs.map((subTab) => (
                            <li
                              className={`sub-tab-2 tab${i + 1}`}
                              data-tab-collection={`tab${i + 1}`}
                            >
                              <a
                                className={`sub-tab-2 link tab${i + 1}`}
                                href={subTab.link}
                                data-tab-collection={`tab${i + 1}`}
                              >
                                {subTab.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
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
