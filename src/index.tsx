import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { makeServer } from "./services/mirage";
import "./styles/global.scss";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
