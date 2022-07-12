import React, { useEffect, useState } from "react";
import logo from "./images/unnamed.png";
import InputBoxes from "./InputBoxes";

import "./app.css";
const App = () => {
  return (
    <div className="app-root">
      <div className="appbar">
        <p className="logo-center">
          <span>
            <img src={logo} />
          </span>
          obot.ai
        </p>
      </div>
      <div className="style-prop">
        <div className="border"></div>
        <div className="border"></div>
      </div>

      <div className="main-box">
        <img src={logo} />
        <p className="mb-title">It's a delight to have you onboard!</p>
        <p className="mb-static">help us know you better</p>
        <p className="mb-static">
          (This is how we optimize wobot as per your business needs)
        </p>
        <InputBoxes />
      </div>
      <div className="end-text">
        <p>Terms of use </p>
        &#124;
        <p>Privacy policy</p>
      </div>
    </div>
  );
};

export default App;
