import countryData from "./CountryData";
import drinkingAgeByCounty from "./DrinkingAgeByCountry";

function countries() {
  console.log("running")
  let countriesCombined = [];
  //flatten array
  let countryAge = Object.values(drinkingAgeByCounty).reduce((a, b) =>
    a.concat(b)
  );

  countryData.forEach((object,i) => {
    let match = countryAge.filter((obj) => obj.code === object.code);//finds the match for callback 
    match.length === 1 //checks to see if match exists
      ? countriesCombined.push({ ...object, ...match[0]})
      :countriesCombined.push(object)
      if (!countriesCombined[i].age){countriesCombined[i].age = null}//if no age available returns null
  });
  return countriesCombined;
}

export default countries;
