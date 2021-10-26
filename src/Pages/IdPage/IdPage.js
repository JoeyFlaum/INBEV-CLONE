import "./IdPage.css";
import { useState } from "react";
import countries from "./CountriesCombined";
import AgeGate from "./AgeGate";
import { formData } from "./FormData";
import ColorStrip from "../../Assets/ColorStrip";
import AgeGateQuestion from "./AgeGateQuestion";

export default function IdPage({
  setisLegalAge,//pass in state from App.js
  isLegalAge,//pass in state from App.js
  loginAttempts,//pass in state from App.js
  setloginAttempts,//pass in state from App.js
}) {
  //state is set from form fields
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [legalAge, setLegalAge] = useState("");

  
  

  return (
    <main id="id-page">
      <div className="background-image id-page"></div>
      <div className="id-wrapper">
        <AgeGateQuestion legalAge = {legalAge} isLegalAge = {isLegalAge} country={country} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            AgeGate({
              //checks legal age of form user
              setisLegalAge,
              day,
              month,
              year,
              country,
              countries,
              setLegalAge,
              loginAttempts,
              setloginAttempts,
            });
          }}
        >
          <select
            name="country"
            className="locations"
            onChange={(e) => {
              setCountry(e.target.value);
              setisLegalAge(undefined); //resets form to original state variable that gets reset is "isLegalAge"
            }}
          >
            <option value="">Location</option>
            {countries().map((country, i) => {
              //maps over array created by function that combines CountryData and DrinkingAgeByCountry
              return (
                <option key={country + i} value={country.code}>
                  {country.name}
                </option>
              );
            })}
          </select>
          <div className="dob-wrapper">
            <select
              name="month"
              id="month"
              className="DOB"
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="">Month</option>
              {formData.months.map((month, i) => {
                return (
                  <option key={month + i} value={i}>
                    {month}
                  </option>
                );
              })}
            </select>
            <select
              name="day"
              id="day"
              className="DOB"
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="">Day</option>
              {[...Array(31)].map((day, i) => {
                //maps 31 days into options
                return (
                  <option key={"day" + (i + 1)} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              name="year"
              id="year"
              className="DOB"
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Year</option>
              {[...formData.getYears()].map((year) => {
                //[formData.getYears][0] also works
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="enter-site">ENTER</button>
        </form>
        <p>Enjoy Responsibly</p>
        <footer className="footer_id-page">
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
        <ColorStrip additionalClassName="fixed-bottom" />
      </div>
    </main>
  );
}
