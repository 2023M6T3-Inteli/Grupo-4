import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/globals.module.scss"
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
