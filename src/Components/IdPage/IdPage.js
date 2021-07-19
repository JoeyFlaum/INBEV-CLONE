import "./IdPage.css";
import countries from "./CountryData";

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const addOrangeBorder = (e) => {
  const target = e.target;
  const selectElements = document.querySelectorAll("select");
  selectElements.forEach((item) => item.classList.remove("orange-border"));
  if (target.localName === "select") {
    target.classList.add("orange-border");
  }
};

function IdPage() {
  return (
    <main id="id-page" onClick={addOrangeBorder}>
      <div className="background-image"></div>
      <div className="id-wrapper">
        <h1>Can we see some ID?</h1>
        <p>
          As part of our commitment to responsible drinking,
          <br />
          please confirm you are of legal drinking age.
        </p>
        <form onSubmit={(e) => e.preventDefault()} onClick={addOrangeBorder}>
          <select name="country" className="locations">
            <option value="null">Location</option>
            {countries.map((country) => {
              return <option value={country.code}>{country.name}</option>;
            })}
          </select>
          <div className="dob-wrapper">
            <select name="month" id="month" className="DOB">
              <option value="0">Month</option>
              {months.map((month,i)=>{
                return <option value={i+1}>{month}</option>
              })}
            </select>
            <select name="day" id="day" className="DOB">
              <option value="null">Day</option>
            </select>
            <select name="year" id="year" className="DOB">
              <option value="null">Year</option>
            </select>
          </div>
          <button className="enter-site">ENTER</button>
        </form>
        <p>Enjoy Responsibly</p>
        <footer>
          <p>
            By submitting this form, you agree to be bound by the Terms of
            Service and Privacy Policy
          </p>
          <div className="footer-links">
            <a
              href="https://www.ab-inbev.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PRIVACY POLICY{" "}
            </a>
            <span className="link-separator">|</span>{" "}
            <a
              href="https://www.ab-inbev.com/terms-conditions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TERMS & CONDITIONS{" "}
            </a>{" "}
            <span className="link-separator">|</span>
            <a
              href="https://www.ab-inbev.com/terms-conditions/california-residents-privacy-rights/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              DO NOT SELL MY PERSONAL INFORMATION
            </a>
          </div>
          <p>© 2021 Anheuser-Busch Companies LLC, St. Louis, MO 63118</p>
        </footer>
        <div className="color-strip-bottom"></div>
      </div>
    </main>
  );
}

export default IdPage;
