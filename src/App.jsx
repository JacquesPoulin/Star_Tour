import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Quiz from "./pages/Quiz";
import Booking from "./pages/Booking";
import Ships from "./pages/Ships";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accueil" element={<Home />} />
          <Route path="/Destinations" element={<Planets />} />
          <Route path="/Reservation" element={<Booking />} />
          <Route path="/Vaisseaux" element={<Ships />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
