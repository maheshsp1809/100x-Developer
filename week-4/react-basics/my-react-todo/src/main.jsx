import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactToDo from "./ReactToDo.jsx";
import Apps from "./Components/Apps.jsx";
import BusinessCard from "./Components/BusinessCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Apps />
  </React.StrictMode>
);
