import React, { useEffect } from "react";
import "./App.css";
import IdPage from "./Components/IdPage/IdPage";
import HomePage from "./Components/HomePage/HomePage";
import { useState } from "react";

function underage() {
  window.location.href = "https://www.familytalkaboutdrinking.com/";
}

export default function App() {
  const [islegalAge, setisLegalAge] = useState();
  const [loginAttempts, setloginAttempts] = useState(0);

  console.log("app.js, ", islegalAge, loginAttempts);
  return (
    <div className="App">
      {islegalAge!==false || loginAttempts !== 2 ? (
        !islegalAge ? (
          <IdPage
            isLegalAge={setisLegalAge}
            formSubmitted={islegalAge}
            loginAttempts={loginAttempts}
            setloginAttempts ={setloginAttempts}
          />
        ) : (
          <HomePage />
        )
      ) : (
        underage()
      )}
    </div>
  );
}
