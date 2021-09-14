import { links } from "../Links";
import { useState } from "react";
import SubMenuTwo from "./SubMenuTwo";
export default function SubMenuOne({ nextMenuMainTitle }) {
  const [nextSubMenuMainTitle, setnextSubMenuMainTitle] = useState("");
  const [isSubMenuTwoVisible,setisSubMenuTwoVisible] = useState(false);

  const showNextMenu = (e) => {
    setnextSubMenuMainTitle(e.target.innerText.toString());
    setisSubMenuTwoVisible(true);
  };
  let filteredTab = nextMenuMainTitle
    ? links.tabs.filter((tab) => {
        return (
          tab.mainTab.title.toLowerCase() === nextMenuMainTitle.toLowerCase()
        );
      })
    : undefined;
    console.log(nextSubMenuMainTitle)
  return (
    <div
      className={`sub-tabs-1_container ${filteredTab ? "visible" : "hidden"}`}
    >
      <ul
        className={`list-main-tabs ${filteredTab ? "visible" : "hidden"}`}
        onClick={(e) => showNextMenu(e)}
      >
        <li className="main-tab">
          {filteredTab ? (
            <a
              className="main-tab-link has-submenu"
              href={filteredTab[0].mainTab.link}
            >
              {filteredTab[0].mainTab.title}
            </a>
          ) : null}
        </li>
        {filteredTab
          ? filteredTab[0].subTabs.map(
              (subTab, i /**if submenu exists, remove link */) => (
                <li key={`${subTab.title}mobile${i}`} className={`sub-tab-1`}>
                  {subTab.subTabs ? (
                    subTab.title
                  ) : (
                    <a className ="link sub-tab-1" href={subTab.link} target="_blank" rel="noreferrer">
                      {subTab.title}
                    </a>
                  )}
                </li>
              )
            )
          : null}
      </ul>
      <SubMenuTwo nextSubMenuMainTitle={nextSubMenuMainTitle} filteredTab = {filteredTab} isSubMenuTwoVisible ={isSubMenuTwoVisible} />
    </div>
  );
}
