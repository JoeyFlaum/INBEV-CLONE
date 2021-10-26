import AgeGate from "./AgeGate";
import { formData } from "./FormData";
import countries from "./CountriesCombined";
import { useState } from "react";

export default function AgeGateForm({
  setisLegalAge,
  country,
  setLegalAge,
  loginAttempts,
  setloginAttempts,
  setCountry,
}) {

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
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
  );
}
