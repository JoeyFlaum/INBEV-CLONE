import { links } from "../Links";
export default function SubMenuOne({ nextMenuMainTitle }) {
  let filteredTab = nextMenuMainTitle
    ? links.tabs.filter((tab) => {
        return (
          tab.mainTab.title.toLowerCase() === nextMenuMainTitle.toLowerCase()
        );
      })
    : undefined;
console.log("sub1");
  return (
    <div className="sub-tabs-1_container">
      <ul className="list-main-tabs">
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
          ? filteredTab[0].subTabs.map((subTab, i) => (
              <li key={`${subTab.title}mobile${i}`} className={`sub-tab-1`}>
                {subTab.title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
