import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import testLandscape from "./assets/test-landscape.png";
import Ps from "./components/ps/ps";

const Style = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 16px;
    font-family: Arial, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <>
      <Style />
      <Ps src={testLandscape} />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
