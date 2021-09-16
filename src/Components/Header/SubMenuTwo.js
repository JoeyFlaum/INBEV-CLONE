export default function SubMenuTwo({
  nextSubMenuMainTitle,
  filteredTab,
  isSubMenuTwoVisible,
}) {
  let filteredSubTab = filteredTab
    ? filteredTab[0].subTabs.filter(
        (subTab) =>
          subTab.title.toLowerCase() === nextSubMenuMainTitle.toLowerCase()
      )
    : null;
  return (
    <div
      className={`sub-tabs-2_container ${
        isSubMenuTwoVisible ? "visible" : "hidden"
      }`}
    >
      <ul
        className={`list-main-tabs ${
          isSubMenuTwoVisible ? "visible" : "hidden"
        }`}
      >
        {nextSubMenuMainTitle ? (
          <li className="sub-tab-2">
            <div className="sub-menu-nav_container">
              <button className="sub-tab-2_button back-button ">{`<`}</button>
              <a
                className="main-tab-link has-submenu"
                href={filteredSubTab[0].link}
              >
                {filteredSubTab[0].title}
              </a>
            </div>
          </li>
        ) : null}
        {nextSubMenuMainTitle
          ? filteredSubTab[0].subTabs.map((subTab, i) => (
              <li key={`${subTab.title}mobile${i+100}`} className={`sub-tab-2`}>
                <a href={subTab.link} target="_blank" rel="noreferrer">
                  {subTab.title}
                </a>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
