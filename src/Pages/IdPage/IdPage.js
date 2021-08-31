import "./IdPage.css";
import { useState } from "react";
import countries from "./CountriesCombined"; //TO DO: Countries function re-renders on all updates. Only needed once.
import AgeGate from "./AgeGate";
import ColorStrip from "../../Components/ColorStrip/ColorStrip";

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getYears = () => {
  const currentDate = new Date().getFullYear(); //current year
  let years = [currentDate];
  for (let i = 1; i < 100; i++) {
    years.push(currentDate - i); //adds 99 prior years to years array
  }
  return years;
};
export default function IdPage({ isLegalAge, formSubmitted,loginAttempts,setloginAttempts}) {
  //pass in function from App.js
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [legalAge, setLegalAge] = useState("");
  return (
    <main id="id-page">
      <div className="background-image id-page"></div>
      <div className="id-wrapper">
        {formSubmitted === undefined || formSubmitted ? (// formSubmitted is undefined by default, true if old enough to enter, false if underage
          <>
            <h1>Can we see some ID?</h1>
            <p>
              As part of our commitment to responsible drinking,
              <br />
              please confirm you are of legal drinking age.
            </p>
          </>
        ) : (
          <>
            <h1>
              Sorry,{" "}
              {legalAge || legalAge === 0
                ? `you must be ${legalAge} or older to view this site`
                : `drinking is not legal in ${
                    countries().filter(
                      (arrayItem) => arrayItem.code === country
                    )[0].name
                  }`}
            </h1>
            <p></p>
          </>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            AgeGate({
              isLegalAge,
              day,
              month,
              year,
              country,
              countries,
              setLegalAge,
              loginAttempts,
              setloginAttempts
            });
          }}
        >
          <select
            name="country"
            className="locations"
            onChange={(e) => {
              setCountry(e.target.value);
              isLegalAge(undefined)//resets form to original state variable that gets reset is "formSubmitted"
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
              {months.map((month, i) => {
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
              {[...getYears()].map((year) => {
                //[getYears][0] also works
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
        <ColorStrip additionalClassName = "fixed-bottom"/>
      </div>
    </main>
  );
}
