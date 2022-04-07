import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Quiz from "./pages/Quiz";
import Booking from "./pages/Booking";
import Ships from "./pages/Ships";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Planets />
      <Quiz />
      <Booking />
      <Ships />
      <Contact />
    </div>
  );
}

export default App;
