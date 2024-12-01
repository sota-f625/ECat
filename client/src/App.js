import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";


const App = () => {
  useEffect(() => {
    axios.get("http://localhost:5001/")
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className = "App">
      <header className = "App-header">
        <img src = {logo} className = "App-logo" alt = "logo" />
        <h1>ECat</h1>
      </header>
    </div>
  );
};

export default App;
