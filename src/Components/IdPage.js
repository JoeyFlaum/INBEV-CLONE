function IdPage() {
  return (
    <main id="id-page">
      <h1>Can we see some ID?</h1>
      <p>
        As part of our commitment to responsible drinking,
        <br />
        please confirm you are of legal drinking age.
      </p>
      <form>
        <select className="locations">
          <option value="null">Location</option>
        </select>
        <select id="month" className="DOB">
          <option value="null">Month</option>
        </select>
        <select id="day" className="DOB">
          <option value="null">Day</option>
        </select>
        <select id="year" className="DOB">
          <option value="null">Year</option>
        </select>
        <button className="enter-site">Enter</button>
        <p>Enjoy Responsibly</p>
      </form>
    </main>
  );
}

export default IdPage;
