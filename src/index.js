import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Login_check from "./Login_check";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Login_check />
      <App />

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
