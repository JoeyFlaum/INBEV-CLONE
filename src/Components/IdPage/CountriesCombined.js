import countryData from "./CountryData";
import drinkingAgeByCounty from "./DrinkingAgeByCountry";

function countries() {
  let countriesCombined = [];
  let countryAge = Object.values(drinkingAgeByCounty).reduce((a, b) =>
    a.concat(b)
  );

  countryData.forEach((object,i) => {
    let match = countryAge.filter((obj) => obj.code === object.code);//finds the match for callback 
    match.length === 1
      ? countriesCombined.push({ ...object, ...match[0]})
      :countriesCombined.push(object)
      if (!countriesCombined[i].age){countriesCombined[i].age = null}
  });
  return countriesCombined;
}

export default countries;
