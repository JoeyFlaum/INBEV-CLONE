import countries from "./CountryData";
import drinkingAgeByCounty from "./DrinkingAgeByCountry";

function combineCountries() {
  let countriesCombined = [];
  let countryAge = Object.values(drinkingAgeByCounty).reduce((a, b) =>
    a.concat(b)
  );

  countries.forEach((object, i) => {
    let match = countryAge.filter((obj) => obj.code === object.code);
    match.length = 1
      ? countriesCombined.push({ ...object, ...match[0]})
      :countriesCombined.push(object)
      if (!countriesCombined[i].age){countriesCombined[i].age = null}
  });
  console.log(countriesCombined);
  return countriesCombined;
}

export default combineCountries;
