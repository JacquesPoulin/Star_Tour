import React from "react";
import NavBar from "../components/Navbar";
import Question from "../components/quiz/Question";

const Quiz = () => {
  return (
    <div className="bg_nightsky dark:bg_lightsky">
      <NavBar />
      <Question />
    </div>
  );
};

export default Quiz;
