import countries from "./CountriesCombined"
export default function AgeGateQuestion({isLegalAge, legalAge, country}){
    return(<>
{isLegalAge === undefined ? ( // isLegalAge is undefined by default, true if old enough to enter, false if underage
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
          : `drinking is not legal in ${ //get country name
              countries().filter(
                (arrayItem) => arrayItem.code === country
              )[0].name
            }`}
      </h1>
      <p>{null}</p>{/*placeholder*/}
    </>
  )}
  </>
)
}