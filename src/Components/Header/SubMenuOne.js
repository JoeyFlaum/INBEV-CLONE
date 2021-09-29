import { links } from "../Links";
import { useState } from "react";
import { useEffect } from "react";
import SubMenuTwo from "./SubMenuTwo";
export default function SubMenuOne({
  nextMenuMainTitle,
  setnextMenuMainTitle,
  isMenuOpen,
  setisMenuOpen,
}) {
  const [nextSubMenuMainTitle, setnextSubMenuMainTitle] = useState("");
  const [isSubMenuTwoVisible, setisSubMenuTwoVisible] = useState(false);
  useEffect(() => {
    isMenuOpen === false && nextMenuMainTitle && setnextMenuMainTitle("");
    setisSubMenuTwoVisible(false);
    setnextSubMenuMainTitle("");
  }, [
    isMenuOpen,
    nextMenuMainTitle,
    setnextMenuMainTitle,
    setnextSubMenuMainTitle,
  ]);

  const showNextMenu = (e) => {
    if (e.target.nodeName.toLowerCase() !== "button") {
      setnextSubMenuMainTitle(e.target.innerText.toString());
      setisSubMenuTwoVisible(true);
    }
  };
  const previousMenu = () => {
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
                onClick = {()=>{alert("Thanks for clicking me, but I don't go anywhere 🤷");setisMenuOpen(false);}}
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
                      onClick={() => {
                        alert(
                          "Thanks for clicking me, but I don't go anywhere 🤷"
                        );
                        setisMenuOpen(false);
                      }}
                    >
                      {subTab.title}
                    </a>
                  )}
                </li>
              )
            )
          : null}
      </ul>
      {isMenuOpen ? (
        <SubMenuTwo
          setisMenuOpen={setisMenuOpen}
          nextSubMenuMainTitle={nextSubMenuMainTitle}
          filteredTab={filteredTab}
          isSubMenuTwoVisible={isSubMenuTwoVisible}
          setisSubMenuTwoVisible={setisSubMenuTwoVisible}
          setnextSubMenuMainTitle={setnextSubMenuMainTitle}
        />
      ) : null}
    </div>
  );
}
