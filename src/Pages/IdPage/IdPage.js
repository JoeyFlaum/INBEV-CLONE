import "./IdPage.css";
import { useState } from "react";
import ColorStrip from "../../Assets/ColorStrip";
import AgeGateQuestion from "./AgeGateQuestion";
import AgeGateForm from "./AgeGateForm";

export default function IdPage({
  setisLegalAge, //pass in state from App.js
  isLegalAge, //pass in state from App.js
  loginAttempts, //pass in state from App.js
  setloginAttempts, //pass in state from App.js
}) {
  //state is set from form fields

  const [country, setCountry] = useState("");
  const [legalAge, setLegalAge] = useState("");

  return (
    <main id="id-page">
      <div className="background-image id-page"></div>
      <div className="id-wrapper">
        <AgeGateQuestion
          legalAge={legalAge}
          isLegalAge={isLegalAge}
          country={country}
        />
        <AgeGateForm
          setisLegalAge={setisLegalAge}
          country={country}
          setLegalAge={setLegalAge}
          loginAttempts={loginAttempts}
          setloginAttempts={setloginAttempts}
          setCountry={setCountry}
        />
        <p>Enjoy Responsibly</p>
        <footer className="footer_id-page">
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
        <ColorStrip additionalClassName="fixed-bottom" />
      </div>
    </main>
  );
}
