import React, { useState } from "react";
import quizForm from "../../../data/quizForm";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ShowScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizForm.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <div className="w-full h-full">
        <div className="grid grid-cols-6 grid-rows-3 p-16 place-content-center h-3/5 ">
          <div className="col-span-2 row-span-4 text-center">
            <img
              className="w-full h-full"
              src="assets/images/c3po.png"
              alt="c3p0 et r2d2"
            />
          </div>
          <div className="row-span-1 py-4 mx-1 text-5xl text-center text-white">
            <span className="items-center justify-center text-center rounded-2xl font-exo text-shadow-3">
              {currentQuestion + 1}/{quizForm.length}
            </span>
          </div>

          <div className="col-span-3 row-span-1 py-4 mx-1 text-5xl text-center text-white ">
            <p className="items-center justify-center rounded-2xl font-exo text-shadow-3">
              {quizForm[currentQuestion].questionText}
            </p>
          </div>

          <div className="col-span-2 row-span-2 py-4 m-5 text-5xl text-center text-white rounded-lg box-shadow-1 hover:scale-105">
            {quizForm[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="w-full h-full text-3xl text-center text-slate-50 font-exo text-shadow-3"
                type="button"
                onClick={() => handleAnswerOptionClick(answerOption)}
              >
                <img
                  className=""
                  src={answerOption.img}
                  alt={answerOption.answerText}
                />
                <span>{answerOption.answerText}</span>
              </button>
            ))}
          </div>
          <div className="col-span-2 row-span-2 py-4 m-5 text-5xl text-center text-white rounded-lg box-shadow-1 hover:scale-105">
            {quizForm[currentQuestion].answerOptions2.map((answerOption2) => (
              <button
                className="w-full h-full text-3xl text-center text-slate-50 font-exo text-shadow-3"
                type="button"
                onClick={() => handleAnswerOptionClick(answerOption2)}
              >
                <img
                  className=""
                  src={answerOption2.img2}
                  alt={answerOption2.answerText2}
                />
                <span>{answerOption2.answerText2}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Question;
