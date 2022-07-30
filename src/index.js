import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Yekan.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";
import "./index.css";

//==========================================
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
