import { links } from "../Links";
export default function SubMenuTwo({ nextSubMenuMainTitle }) {

  let filteredTab = nextSubMenuMainTitle
    ? links.tabs.filter((tab) => {
        return (
          tab.mainTab.title.toLowerCase() === nextSubMenuMainTitle.toLowerCase()
        );
      })
    : undefined;
  console.log("sub2");
  return (
    <div
      className={`sub-tabs-2_container ${filteredTab ? "visible" : "hidden"}`}
    >
      <ul
        className={`list-main-tabs ${filteredTab ? "visible" : "hidden"}`}
      >
         {/*<li className="sub-tab-1">
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
              (subTab, i ) => (
                <li key={`${subTab.title}mobile${i}`} className={`sub-tab-2`}>
                  {subTab.subTabs ? (
                    subTab.title
                  ) : (
                    <a href={subTab.link} target="_blank" rel="noreferrer">
                      {subTab.title}
                    </a>
                  )}
                </li>
              )
            )
          : null}*/}
      </ul> 
    </div>
  );
}