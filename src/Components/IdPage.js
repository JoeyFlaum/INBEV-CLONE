import './IdPage.css'

function IdPage() {
  return (
    <main id="id-page">
      <div className = 'background-image'></div>
      <div className = 'id-wrapper'>
      <h1>Can we see some ID?</h1>
      <p>
        As part of our commitment to responsible drinking,
        <br />
        please confirm you are of legal drinking age.
      </p>
      <form onSubmit={(e)=>e.preventDefault()}>
        <select name = "country" className="locations">
          <option value="null">Location</option>
        </select>
        <div className = 'dob-wrapper'>
        <select name = "month" id="month" className="DOB">
          <option value="null">Month</option>
        </select>
        <select name = "day" id="day" className="DOB">
          <option value="null">Day</option>
        </select>
        <select name = "year" id="year" className="DOB">
          <option value="null">Year</option>
        </select>
        </div>
        <button className="enter-site">ENTER</button>
      </form>
        <p>Enjoy Responsibly</p>
      </div>
    </main>
  );
}

export default IdPage;
