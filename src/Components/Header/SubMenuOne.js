import { links } from "../Links";
import { useState } from "react";
import SubMenuTwo from "./SubMenuTwo";
export default function SubMenuOne({
  nextMenuMainTitle,
  setnextMenuMainTitle,
}) {
  const [nextSubMenuMainTitle, setnextSubMenuMainTitle] = useState("");
  const [isSubMenuTwoVisible, setisSubMenuTwoVisible] = useState(false);

  const showNextMenu = (e) => {
    if (e.target.nodeName.toLowerCase() !== "button") {
      setnextSubMenuMainTitle(e.target.innerText.toString());
      setisSubMenuTwoVisible(true);
    }
  };
  const previousMenu = () => {
    console.log("hit")
    setnextMenuMainTitle("");
  };
  let filteredTab = nextMenuMainTitle
    ? links.tabs.filter((tab) => {
        return (
          tab.mainTab.title.toLowerCase() === nextMenuMainTitle.toLowerCase()
        );
      })
    : undefined;
  console.log(nextSubMenuMainTitle);
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
            <div className="sub-menu-nav_container">
              <button
                className="sub-tab-2_button back-button"
                onClick={previousMenu}
              >{`<`}</button>
              <a
                className="main-tab-link has-submenu"
                href={filteredTab[0].mainTab.link}
              >
                {filteredTab[0].mainTab.title}
              </a>
            </div>
          ) : null}
        </li>
        {filteredTab
          ? filteredTab[0].subTabs.map(
              (subTab, i /**if submenu exists, remove link */) => (
                <li key={`${subTab.title}mobile${i}`} className={`sub-tab-1`}>
                  {subTab.subTabs ? (
                    subTab.title
                  ) : (
                    <a
                      className="link_sub-tab-1"
                      href={subTab.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {subTab.title}
                    </a>
                  )}
                </li>
              )
            )
          : null}
      </ul>
      <SubMenuTwo
        nextSubMenuMainTitle={nextSubMenuMainTitle}
        filteredTab={filteredTab}
        isSubMenuTwoVisible={isSubMenuTwoVisible}
      />
    </div>
  );
}
