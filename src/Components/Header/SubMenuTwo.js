export default function SubMenuTwo({
  nextSubMenuMainTitle,
  filteredTab,
  isSubMenuTwoVisible,
  setisSubMenuTwoVisible,
  setnextSubMenuMainTitle,
  setisMenuOpen,
}) {
  const previousMenuOne = () => {
    setisSubMenuTwoVisible(false);
    setnextSubMenuMainTitle("");
  };
  let filteredSubTab = filteredTab
    ? filteredTab[0].subTabs.filter(
        (subTab) =>
          subTab.title.toLowerCase() === nextSubMenuMainTitle.toLowerCase()
      )
    : undefined;
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
        {nextSubMenuMainTitle && filteredSubTab.length>=1 ? (
          <li className="sub-tab-2">
            <div className="sub-menu-nav_container">
              <button
                className="sub-tab-2_button back-button "
                onClick={previousMenuOne}
              >{`<`}</button>
              <a
                className="main-tab-link has-submenu"
                href={filteredSubTab[0].link}
                onClick={() => {
                  alert("Thanks for clicking me, but I don't go anywhere 🤷");
                  setisMenuOpen(false);
                }}
              >
                {filteredSubTab[0].title}
              </a>
            </div>
          </li>
        ) : null}
        {nextSubMenuMainTitle && filteredSubTab 
          ? filteredSubTab[0]?.subTabs.map((subTab, i) => (
              <li
                key={`${subTab.title}mobile${i + 100}`}
                className={`sub-tab-2`}
              >
                <a
                  href={subTab.link}
                  onClick={() => {
                    alert("Thanks for clicking me, but I don't go anywhere 🤷");
                    setisMenuOpen(false);
                  }}
                >
                  {subTab.title}
                </a>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
