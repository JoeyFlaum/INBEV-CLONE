export default function Header() {
  const links = {//ToDo: move links to file to clean up Header component, render links to header
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
      {
        mainTab: { title: "OUR BRANDS", link: "#" }, 
        subTabs: [
          { title: "Passion For Beer", link: "#" },
          { title: "Brand Stories", link: "#" },
          { title: "Our Beers", link: "#" },
        ],
      },
      {
        mainTab: { title: "OUR POLICIES", link: "#" },
        subTabs: [
          { title: "Human Rights Policy", link: "#" },
          { title: "Code Of Business Conduct", link: "#" },
          { title: "Global Whistleblower Policy", link: "#" },
          { title: "Diversity And Inclusion Policy", link: "#" },
          { title: "Anti-Harrasment & Anti-Discrimination Policy", link: "#" },
          { title: "Global Responsible Sourcing Policy", link: "#" },
          { title: "Responsible Sourcing Principles For Farms", link: "#" },
          { title: "Marketing Communications Code", link: "#" },
          { title: "Product Quality", link: "#" },
          { title: "Public Policy", link: "#" },
          { title: "Environmental Policy", link: "#" },
          { title: "Smart Drinking Health Policies", link: "#" },
        ],
      },
      {
        mainTab: { title: "SMART DRINKING", link: "#" },
        subTabs: [
          { title: "Smart Drinking Beliefs", link: "#" },
          { title: "Smart Drinking Goals", link: "#" },
          { title: "AB InBev Foundation", link: "#" },
          { title: "Alcohol & Health", link: "#" },
          { title: "Marketing To Change Social Norms", link: "#" },
          { title: "Partnering For Community Impact", link: "#" },
          { title: "Unleashing The Power Of NABLABs", link: "#" },
          { title: "Marketing, Advertising, And Sales", link: "#" },
          { title: "Disrupting Harmful Drinking", link: "#" },
          { title: "Voluntary Labeling For All Products", link: "#" },
        ],
      },
      {
        mainTab: { title: "SUSTAINABILITY", link: "#" },
        subTabs: [
          {
            title: "2025 Sustainability Goals",
            link: "#",
            subTabs: [
              { title: "Smart Agriculture", link: "#" },
              { title: "Water Stewardship", link: "#" },
              { title: "Circular Packaging", link: "#" },
              { title: "Climate Action", link: "#" },
            ],
          },
          { title: "Our Brands Impact", link: "#" },
          { title: "100+ Accelerator", link: "#" },
        ],
      },
      {
        mainTab: { title: "INVESTORS", link: "#" },
        subTabs: [
          { title: "Document Search", link: "#" },
          { title: "Events Center", link: "#" },
          { title: "Results Center", link: "#" },
          { title: "Annual & Half-year Reports", link: "#" },
          { title: "Analysts & Consensus Estimates", link: "#" },
          { title: "Payouts", link: "#" },
          {
            title: "Corporate Governance",
            link: "#",
            subTabs: [
              { title: "Our Board", link: "#" },
              { title: "Shareholder Structure", link: "#" },
              { title: "Corporate Governance Documents", link: "#" },
              { title: "Shareholder Meetings", link: "#" },
              { title: "Guarantor Governance Documents", link: "#" },
              { title: "Special Board Reports", link: "#" },
            ],
          },
          { title: "Fixed Income", link: "#" },
          {
            title: "Share Information",
            link: "#",
            subTabs: [
              { title: "Listings", link: "#" },
              { title: "ADR Program For US Investors", link: "#" },
            ],
          },
          { title: "Investor Contacts", link: "#" },
          { title: "Presentations", link: "#" },
          { title: "ESG Resources", link: "#" },
        ],
      },

      {
        mainTab: { title: "CAREERS", link: "#" },
        subTabs: [
          {
            title: "Working With Us",
            link: "#",
            subTabs: [
              { title: "Our Culture", link: "#" },
              { title: "Our Teams", link: "#" },
              { title: "Our Benefits", link: "#" },
              { title: "Meet The Challengers", link: "#" },
            ],
          },
          {
            title: "Global Talent Programs",
            link: "#",
            subTabs: [
              { title: "Global MBA Program (GMBA)", link: "#" },
              { title: "Global Management Trainee Program (GMT)", link: "#" },
            ],
          },
          { title: "Job Search", link: "#" },
        ],
      },
      {
        mainTab: { title: "SUPPLIERS", link: "#" },
        subTabs: [
          { title: "Working Together", link: "#" },
          { title: "Our Payment Process", link: "#" },
          { title: "Responsible Sourcing", link: "#" },
          { title: "Suppliers & Sustainability", link: "#" },
          { title: "Supply Chain Ethics", link: "#" },
        ],
      },
      {
        mainTab: { title: "NEWS & MEDIA", link: "#" },
        subTabs: [
          { title: "Press Releases", link: "#" },
          { title: "News Stories", link: "#" },
          { title: "Events Center", link: "#" },
        ],
      },
    ],
  };
  console.log(links.tabs[7].subTabs[0]?.subTabs)
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
