import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import StartCoding from "./components/StartCoding";
import Compiler from "./components/Compiler";
import RegisterAndLogin from "./RegisterAndLogin"; 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartCoding />} />
        <Route path="/Compiler" element={<Compiler />} />
        <Route path="/auth" element={<RegisterAndLogin />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
