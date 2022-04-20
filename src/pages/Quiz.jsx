import React from "react";
import NavBar from "../components/Navbar";
import Question from "../components/quiz/Question";
// import Result from "../components/quiz/Result";

const Quiz = () => {
  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <Question />
      {/* <Result /> */}
    </div>
  );
};

export default Quiz;
