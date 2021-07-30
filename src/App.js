import React from "react";
import "./App.css";
import IdPage from "./Components/IdPage/IdPage";
import { useState } from "react";

export default function App() {
  const [islegalAge, setisLegalAge] = useState(false);
  console.log("app.js, ", islegalAge);
  return (
    <div className="App">
      <IdPage isLegalAge ={setisLegalAge} />
    </div>
  );
}