
export default function AgeGate ({isLegalAge,day, month, year, country,countries,setLegalAge}){
        if([day,month,year,country].filter(param=>param).length !== 4){return alert("All fields are required")}//gate for blank fields
         //Check legal age of country selected against birthday
        const countryDrinkAge = countries().filter((arrayItem)=>arrayItem.code === country)[0].age
        setLegalAge(countryDrinkAge)
        const userAge = new Date(year,month,day).getTime()
        const today = new Date().getTime()
        const ageCheck = Math.floor((today-userAge)/(1000 * 60 * 60 * 24 * 365.25))
        if(countryDrinkAge===null){return isLegalAge(false)}
        else{return countryDrinkAge === 0 || ageCheck >= countryDrinkAge ? isLegalAge(true):isLegalAge(false)}//sends true or false to App.js
      }


