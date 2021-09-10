import Search from "../DesignElements/Search";
import Globe from "../DesignElements/Globe";
export default function MobileHeader({scrollDirection}){
    return(
        <header className= {`header__main ${scrollDirection === "up" ? "fixed" : "absolute"}`}>
      <h1 className="logo">
        <a href="/" rel="home">
          <img
            src="https://www.ab-inbev.com/etc.clientlibs/abinbev/clientlibs/clientlib-site/resources/brand-assets/abinbev_logo_en.svg"
            alt="AB Inbev logo"
          />
        </a>
      </h1>
      {/* <nav>
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
      </nav> */}
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