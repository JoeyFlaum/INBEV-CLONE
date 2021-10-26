
import countries from "./CountriesCombined";
export default function AgeGate ({setisLegalAge,day, month, year, country,setLegalAge, loginAttempts,setloginAttempts}){
        if([day,month,year,country].filter(param=>param).length !== 4){return alert("All fields are required")}//gate for blank fields
        setloginAttempts(loginAttempts+1)//tracks the amount of underage logins that have been attempted. Sends to App.js through IdPage.
        
        //Check legal age of country selected against birthday
        const countryDrinkAge = countries().filter((arrayItem)=>arrayItem.code === country)[0].age
        setLegalAge(countryDrinkAge)
        const userAge = new Date(year,month,day).getTime()
        const today = new Date().getTime()
        const ageCheck = Math.floor((today-userAge)/(1000 * 60 * 60 * 24 * 365.25))
        if(countryDrinkAge===null){return setisLegalAge(false)}
        else{return countryDrinkAge === 0 || ageCheck >= countryDrinkAge ? setisLegalAge(true):setisLegalAge(false)}//sends true or false to App.js
      }


