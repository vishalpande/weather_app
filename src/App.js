import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
      
         Developed by{" "}
        <a target="_blank" href="">
          Vishal Pande
       
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
