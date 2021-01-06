import React from "react";
import ReactDOM from "react-dom";
import testLandscape from "./assets/test-landscape.png";
import Ps from "./components/ps/ps";

ReactDOM.render(
  <React.StrictMode>
    <Ps src={testLandscape} />
  </React.StrictMode>,
  document.getElementById("root")
);
