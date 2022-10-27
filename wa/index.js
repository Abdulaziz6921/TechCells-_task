import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PIN from "./Pages/PIN";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import In from "./Pages/In";
import Out from "./Pages/Out";
import Login from "./Pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/PIN" element={<PIN />} />
        <Route path="/clocked_in" element={<In />} />
        <Route path="/clocked_out" element={<Out />} />
        <Route path="/admin_login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
