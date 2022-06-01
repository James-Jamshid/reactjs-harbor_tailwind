import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPages from "./components/LinkPages/AllPages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/btn" element={<AllPages />}></Route>
    </Routes>
  </BrowserRouter>
);
