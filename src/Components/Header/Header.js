import { links } from "./Links";
import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [screenX, setscreenX] = useState();
  const [screenY, setscreenY] = useState();
  const [tabX, settabX] = useState();
  const [tabY, settabY] = useState();
  const [activeMainTab, setactiveMainTab] = useState();
  const [subMenu, setsubMenu] = useState([]);

  //when window/menu x and y match, menu should be visible
  const menuShow = (e) => {
    if (
      //set active main tab to track which tab list is active using dataset
      e.target.classList.value.toLowerCase().includes("main-tab") && //only store "main-tab" in activeMainTab
      (!activeMainTab || // <==== if active main tab is undefined
        e.target.dataset.tabCollection !== activeMainTab.dataset.tabCollection) //compare target element to activeMainTab
    ) {
      setactiveMainTab(e.target.nextSibling); //sets UL element for drop down
    }

    if (e.target.classList.value.includes("has-submenu")) {
      if (subMenu) {
        if (!subMenu.find((item) => item === e.target.nextSibling)) {
          setsubMenu((oldArray = Array.from(subMenu)) => [
            ...oldArray,
            e.target.nextSibling,
          ]);
        }
      } else {
        setsubMenu(e.target.nextSibling);
      }
    }
    activeMainTab?.classList.add("active");

    // return subMenu.forEach((element) => element.classList.add("active"));
  };
  //when leaving menu, menu should be hidden
  const menuHide = () => {
    activeMainTab.classList.remove("active");
  };
  console.log(subMenu);
  useEffect(() => {
    //remove active class from dataset that does not match activeMainTab
    //compare activeMainTab to subMenu
    // if datasets do not match remove class "active" from elements that do not match
    if (activeMainTab && subMenu) {
      const arraySubMenu = [...subMenu];
      const inactiveSubMenu = arraySubMenu.filter(
        (element) => element.dataset.tabCollection !== activeMainTab.dataset.tabCollection
      );
      inactiveSubMenu.forEach((element) => element.classList.remove("active"));
      // remove non matches from subMenu
      // const newSubMenu = arraySubMenu.filter(
      //   (element) => element.dataset.tabCollection === activeMainTab.dataset.tabCollection
      // );
      // setsubMenu(newSubMenu)
    }
  }, [activeMainTab, subMenu]);
  useEffect(() => {
    window.addEventListener("mousemove", windowMousePostion);
    return () => window.removeEventListener("mousemove", windowMousePostion);
  });

  const windowMousePostion = (e) => {
    setscreenX(e.screenX);
    setscreenY(e.screenY);
    if (screenX !== tabX && screenY !== tabY && activeMainTab) {
      menuHide();
    }
  };

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
        <ul className="list-main-tabs" onMouseLeave={menuHide}>
          {links.tabs.map((tab, i) => {
            //map all main tabs, level 1 subtabs, level 2 subtabs
            return (
              <li
                className={`main-tab`}
                data-tab-collection={`tab${i + 1}`}
                onMouseMove={(e) => {
                  settabX(e.screenX);
                  settabY(e.screenY);
                  menuShow(e);
                }}
              >
                <a
                  className={`main-tab-link has-submenu`}
                  data-tab-collection={`tab${i + 1}`}
                  href={tab.mainTab.link}
                >
                  {tab.mainTab.title}
                </a>
                <ul
                  className={`list-sub-tabs-1`}
                  data-tab-collection={`tab${i + 1}`}
                >
                  {tab.subTabs.map((subTab) => (
                    <li
                      className={`sub-tab-1`}
                      data-tab-collection={`tab${i + 1}`}
                    >
                      <a
                        className={`sub-tab-1 link ${
                          subTab.subTabs ? "has-submenu" : ""
                        }`} //if submenu exists, add class
                        data-tab-collection={`tab${i + 1}`}
                        href={subTab.link}
                        onMouseLeave={menuHide}
                      >
                        {subTab.title}
                      </a>
                      {subTab.subTabs ? (
                        <ul
                          className={`list-sub-tabs-2 `}
                          data-tab-collection={`tab${i + 1}`}
                        >
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
