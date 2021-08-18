import { links } from "./Links";
import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [screenX, setscreenX] = useState();
  const [screenY, setscreenY] = useState();
  const [tabX, settabX] = useState();
  const [tabY, settabY] = useState();
  const [activeMainTab, setactiveMainTab] = useState();
  const [activeMenu, setactiveMenu] = useState([]);

  //when window/menu x and y match, menu should be visible
  const menuShow = () => {
    // console.log("value",activeMenu);
    activeMainTab.classList.add("active");
    // return activeMenu.forEach((element) => element.classList.add("active"));
  };
  //when leaving menu, menu should be hidden
  const menuHide = (e) => {
    // const newArray = Array.from(
    //   activeMenu.filter((element) => element !== e.target.nextSibling)
    // );
    // setactiveMenu(newArray)
    // if(e.target.nextSibling.classList.value.includes("active")){e.target.nextSibling.classList.remove("active")}
  };
  useEffect(() => {
    //remove active class from dataset that does not match activeMainTab
    if(activeMainTab&&activeMenu){
    const inactiveMenuArray = Array.from(activeMenu.filter((element) => element.dataset.tab !== activeMainTab.dataset.tabCollection))
    inactiveMenuArray.forEach(element=>element.classList.remove("active"))}
      //compare activeMainTab to activeMenu
        // if datasets do not match remove class "active" from elements that do not match 
        // remove non matches from activeMenu  
  }, [activeMainTab, activeMenu]);
  useEffect(() => {
    window.addEventListener("mousemove", windowMousePostion);
    return () => window.removeEventListener("mousemove", windowMousePostion);
  });

  const windowMousePostion = (e) => {
    setscreenX(e.screenX);
    setscreenY(e.screenY);
  };

  const linksMousePosition = (e) => {
    settabX(e.screenX);
    settabY(e.screenY);
    //set active main tab to track which tab list is active
    if (
      e.target.classList.value.toLowerCase().includes("main-tab") &&
      (!activeMainTab ||
        e.target.dataset.tabCollection !== activeMainTab.dataset.tabCollection)
    ) {
      setactiveMainTab(e.target.nextSibling);
    }
    console.log("activeMainTab", activeMainTab);
    // console.log("currentMenu",currentMenu)
    if (e.target.classList.value.includes("has-submenu")) {
      if (activeMenu) {
        if (!activeMenu.find((item) => item === e.target.nextSibling)) {
          setactiveMenu((oldArray = Array.from(activeMenu)) => [
            ...oldArray,
            e.target.nextSibling,
          ]);
          // console.log("hit");
        }
      } else {
        setactiveMenu(e.target.nextSibling);
      }
      // console.log(activeMenu);
    }
    return tabX === screenX && tabY === screenY && activeMenu
      ? menuShow()
      : null;
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
        <ul className="list-main-tabs">
          {links.tabs.map((tab, i) => {
            //map all main tabs, level 1 subtabs, level 2 subtabs
            return (
              <li
                className={`main-tab`}
                data-tab-collection={`tab${i + 1}`}
                onMouseMove={linksMousePosition}
              >
                <a
                  className={`main-tab-link has-submenu`}
                  data-tab-collection={`tab${i + 1}`}
                  href={tab.mainTab.link}
                  onMouseLeave={menuHide}
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
