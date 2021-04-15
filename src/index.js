import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { MarvelApp } from "./MarvelApp";

ReactDOM.render(<MarvelApp />, document.getElementById("root"));
