import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Quiz from "./pages/Quiz";
import Booking from "./pages/Booking";
import Ships from "./pages/Ships";
import Contact from "./pages/Contact";
import "flowbite";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Planets />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/ships" element={<Ships />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
