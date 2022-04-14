import React from "react";
import NavBar from "../components/Navbar";
import Question from "../components/quiz/Question";

const Quiz = () => {
  return (
    <div className="h-screen bg-[url('./assets/images/dark_bg.jpg')]">
      <NavBar />
      <Question />
    </div>
  );
};

export default Quiz;
