export default function Header() {
  const links = {
    tabs: [
      {
        mainTab: { title: "WHO WE ARE", link: "#" },
        subTabs: [
          { title: "Our Colleagues", link: "#" },
          { title: "Our Leaders", link: "#" },
          {
            title: "Our Vision",
            link: "#",
            subTabs: [
              { title: "Our Values", link: "#" },
              { title: "Manifesto", link: "#" },
            ],
          },
          { title: "Diversity & Inclusion", link: "#" },
          { title: "Heritage", link: "#" },
        ],
      },
      {
        mainTab: { title: "WHAT WE DO", link: "#" },
        subTabs: [
          { title: "Beer & Brewing", link: "#" },
          { title: "Innovation", link: "#" },
          { title: "Road Safety", link: "#" },
        ],
      },
      {mainTab: { title: "OUR BRANDS", link: "#" },//TODO: COMPLETE SUBTABS
      subTabs: []},
      {mainTab: { title: "OUR POLICIES", link: "#" },
      subTabs: []},
      {mainTab: { title: "SMART DRINKING", link: "#" },
      subTabs: []},
      {mainTab: { title: "SUSTAINABILITY", link: "#" },
      subTabs: []},
      {mainTab: { title: "INVESTORS", link: "#" },
      subTabs: []},
      {mainTab: { title: "CAREERS", link: "#" },
      subTabs: []},
      {mainTab: { title: "SUPPLIERS", link: "#" },
      subTabs: []},
      {mainTab: { title: "NEWS & MEDIA", link: "#" },
      subTabs: []},
    ],
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
        <ul></ul>
      </nav>
    </header>
  );
}
