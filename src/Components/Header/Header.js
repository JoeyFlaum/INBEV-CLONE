import { links } from "./Links";
import "./Header.css";
import { useEffect, useState } from "react";
import Search from "../DesignElements/Search";
import Globe from "../DesignElements/Globe";

//ToDo: Refactor Menu show functionality | Move window position useEffect to lower level component(Idea is to stop rerendering entire header every time the window event triggers)

export default function Header() {
  const [screenX, setscreenX] = useState();
  const [screenY, setscreenY] = useState();
  const [tabX, settabX] = useState();
  const [tabY, settabY] = useState();
  const [activeMainTab, setactiveMainTab] = useState();
  const [subMenu, setsubMenu] = useState([]);
  const [scrollY, setscrollY] = useState(0);
  const [scrollDirection, setscrollDirection] = useState("up");

  //when window/menu x and y match, menu should be visible
  const menuShow = (e) => {////////////>>>>>>>>> ACCEPTABLE <<<<<<<<<<<< ////////////////
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
        if (!subMenu.find((item) => item === e.target.nextSibling)) {//finds the next sibling to the <a> tag which would be <ul>
          setsubMenu((oldArray = Array.from(subMenu)) => [
            ...oldArray,
            e.target.nextSibling,
          ]);
        }
      } else {
        setsubMenu(e.target.nextSibling);//sets first array item
      }
    }
  return subMenu.forEach((element) => element.classList.add("active"));//sets all sub menus in array to active to show menus
  };

  //when leaving menu, menu and sub menus should be hidden
  const menuHide = () => { ////////////>>>>>>>>> ACCEPTABLE <<<<<<<<<<<< ////////////////
    activeMainTab?.classList.remove("active");
    subMenu.forEach((element) => element.classList.remove("active"));
    setsubMenu([])
  };
  const subMenuHide = (e) => {  
    if (e.target.classList.value.toLowerCase().includes("sub-tab-2")) {////////////>>>>>>>>> ACCEPTABLE <<<<<<<<<<<< ////////////////
      const uListElement= e.target.parentNode.parentNode
      const activeSubMenu = [...subMenu].filter((element) => {
        return element !== uListElement;//removing <ul> from submenu
      });
      uListElement.classList.remove("active");
      return setsubMenu(activeSubMenu);
    } else if (e.target.classList.value.toLowerCase().includes("has-submenu")) {////////////>>>>>>>>> ACCEPTABLE <<<<<<<<<<<< ////////////////
      const activeSubMenu = [...subMenu].filter(//filtering out <ul> with <a class = "has-submenu"> as sibling that is in <li> 
        (element) => element !== e.target.nextSibling
      );
      e.target.nextSibling.classList.remove("active");
      return setsubMenu(activeSubMenu);
    }
  };
  useEffect(() => {
    //remove active class from dataset that does not match activeMainTab
    //compare activeMainTab to subMenu
    // if datasets do not match remove class "active" from elements that do not match
    if (activeMainTab && subMenu) {
      const arraySubMenu = [...subMenu];
      const inactiveSubMenu = arraySubMenu.filter(
        (element) =>
          element.dataset.tabCollection !== activeMainTab.dataset.tabCollection
      );
      inactiveSubMenu.forEach((element) => element.classList.remove("active"));
      //remove menus not in current element dataset("tabCollection")
      setsubMenu((oldArray = Array.from(subMenu)) => [
        ...oldArray.filter(
          (element) =>
            element.dataset.tabCollection ===
            activeMainTab.dataset.tabCollection
        ),
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMainTab]); //including subMenu in dependencies creates infinite loop

  useEffect(() => {////////////>>>>>>>>> ACCEPTABLE <<<<<<<<<<<< ////////////////
    window.addEventListener("mousemove", windowMousePostion);
    window.addEventListener("scroll", scrollPath);
    return () => {
      window.removeEventListener("mousemove", windowMousePostion);
      window.removeEventListener("scroll", scrollPath);
    };
  });

  const scrollPath = (e) => {////////////>>>>>>>>> ACCEPTABLE <<<<<<<<<<<< ////////////////
    window.scrollY < scrollY
      ? setscrollDirection("up")
      : setscrollDirection("down");
    setscrollY(window.scrollY);
  };
  const windowMousePostion = (e) => {////////////>>>>>>>>> ACCEPTABLE <<<<<<<<<<<< ////////////////
    setscreenX(e.screenX);
    setscreenY(e.screenY);
    if (screenX !== tabX && screenY !== tabY && activeMainTab) {
      menuHide();
    }
  };
  return (
    <header className={scrollDirection === "up" ? "fixed" : "absolute"}>
      <h1 className="logo">
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
                key={`${tab.title}li${i}`}
                className={`main-tab`}
                data-tab-collection={`tab${i + 1}`}
                onMouseMove={(e) => {
                  settabX(e.screenX);
                  settabY(e.screenY);
                  menuShow(e);
                }}
                onClick={() =>
                  subMenu.forEach((element) =>
                    element.classList.remove("active")
                  )
                }
              >
                <a
                  key={`${tab.title}a${i + 10}`}
                  className={`main-tab-link has-submenu`}
                  data-tab-collection={`tab${i + 1}`}
                  href={tab.mainTab.link}
                >
                  {tab.mainTab.title}
                </a>
                <ul
                  key={`${tab.title}ul${i + 1000}`}
                  className={`list sub-tabs-1`}
                  data-tab-collection={`tab${i + 1}`}
                >
                  {tab.subTabs.map((subTab) => (
                    <li
                      key={`${subTab.title}li${i + 10000}`}
                      className={`sub-tab-1`}
                      data-tab-collection={`tab${i + 1}`}
                      onMouseLeave={subMenuHide}
                    >
                      <a
                        key={`${subTab.title}a${i + 20000}`}
                        className={`sub-tab-1 link ${
                          subTab.subTabs ? "has-submenu" : ""
                        }`} //if submenu exists, add class
                        data-tab-collection={`tab${i + 1}`}
                        href={subTab.link}
                      >
                        {subTab.title}
                      </a>
                      {subTab.subTabs ? (
                        <ul
                          key={`${subTab.title}ul${i + 30000}`}
                          className={`list sub-tabs-2`}
                          data-tab-collection={`tab${i + 1}`}
                        >
                          {subTab.subTabs.map((subTab) => (
                            <li
                              key={`${subTab.title}li${i + 40000}`}
                              className={`sub-tab-2 tab${i + 1}`}
                              data-tab-collection={`tab${i + 1}`}
                            >
                              <a
                                key={`${subTab.title}a${i + 50000}`}
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
      <div className="utilities-container">
        <div className="utilities-globe">
          <Globe />
        </div>
        <div className="utilities-search">
          <Search />
        </div>
      </div>
    </header>
  );
}
