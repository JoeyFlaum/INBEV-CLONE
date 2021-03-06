import "./App.css";
import IdPage from "./Pages/IdPage/IdPage";
import HomePage from "./Pages/HomePage/HomePage";
import { useState } from "react";

function underage() {
  window.location.href = "https://www.familytalkaboutdrinking.com/";
}

export default function App() {
  const [isLegalAge, setisLegalAge] = useState();
  const [loginAttempts, setloginAttempts] = useState(0);
  return (
    <div className="App">
      {isLegalAge!==false || loginAttempts !== 2 ? (
        !isLegalAge ? (
          <IdPage
            setisLegalAge={setisLegalAge}
            isLegalAge={isLegalAge}
            loginAttempts={loginAttempts}
            setloginAttempts ={setloginAttempts}
          />
        ) : (
          <HomePage/>
        )
      ) : (
        underage()
      )}
    </div>
  );
}
