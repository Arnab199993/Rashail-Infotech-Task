import { useState } from "react";
import "./App.css";
import SignIn from "./Components/Auth/SignIn";
import Dashboard from "./Components/DashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
