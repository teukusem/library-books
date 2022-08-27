import React from "react";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail-book" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
