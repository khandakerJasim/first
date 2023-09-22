import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Createcontext from "./Component/context/Createcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Createcontext>
    <App />
  </Createcontext>
);
