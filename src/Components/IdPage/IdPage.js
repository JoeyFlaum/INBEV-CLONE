import "./IdPage.css";
import { useState } from "react";
import countries from "./CountriesCombined";
import AgeGate from "./AgeGate";

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const getYears = () => {
    const currentDate = new Date().getFullYear()//current year
    let years = [currentDate]
    for (let i = 1;i<100;i++){
      years.push(currentDate-i)//adds 99 prior years to years array
    }
    return years
}
const ageGate = (e,{isLegalAge,day, month, year, country}) => {
  e.preventDefault()
  //get legal age of country selected
  const countryDrinkAge = countries().filter((arrayItem)=>arrayItem.code === country)[0].age
  const userAge = new Date(year,month,day).getTime()
  const today = new Date().getTime()
  const ageCheck = Math.floor((today-userAge)/(1000 * 60 * 60 * 24 * 365.25))
  ageCheck >= countryDrinkAge  ? isLegalAge(true):isLegalAge(false)//sends true or false to App.js
}


function IdPage({isLegalAge}) {
const [day, setDay] = useState("");
const [month, setMonth] = useState("");
const [year, setYear] = useState("");
const [country, setCountry] = useState("");

  return (
    <main id="id-page" >
      <div className="background-image"></div>
      <div className="id-wrapper">
        <h1>Can we see some ID?</h1>
        <p>
          As part of our commitment to responsible drinking,
          <br />
          please confirm you are of legal drinking age.
        </p>
        <form  onSubmit ={(e)=>ageGate(e,{isLegalAge, day, month, year, country})}>
          <select name="country" className="locations" onChange = {(e)=>setCountry(e.target.value)}>
            <option value="null">Location</option>
            {countries().map((country,i) => {//maps over array created by function that combines CountryData and DrinkingAgeByCountry
              return <option key = {country + i} value={country.code}>{country.name}</option>;
            })}
          </select>
          <div className="dob-wrapper">
            <select name="month" id="month" className="DOB" onChange = {(e)=>setMonth(e.target.value)}>
              <option value={null}>Month</option>
              {months.map((month,i)=>{
                return <option key = {month+i} value={i}>{month}</option>
              })}
            </select>
            <select name="day" id="day" className="DOB" onChange = {(e)=>setDay(e.target.value)}>
              <option value="null">Day</option>
              {[...Array(31)].map((day,i)=>{//maps 31 days into options
                return <option key = {"day"+(i+1)} value={i+1}>{i+1}</option>
              })}
            </select>
            <select name="year" id="year" className="DOB" onChange = {(e)=>setYear(e.target.value)}>
              <option value="null">Year</option>
              {[...getYears()].map((year)=>{//[getYears][0] also works 
                return <option key= {year} value={year}>{year}</option>
              })
              }
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
