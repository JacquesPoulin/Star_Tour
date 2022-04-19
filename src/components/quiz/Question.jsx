/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from "react";
import quizForm from "../../../data/quizForm";
import Result from "./Result";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + isCorrect);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizForm.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <Result />
      ) : (
        <>
          <div>
            <div className="w-auto h-auto">
              <div className="grid grid-cols-6 grid-rows-3 px-10 pt-36 place-content-center h-3/5 ">
                <div className="col-span-2 row-span-4 text-center">
                  <img
                    className="w-full h-full"
                    src="assets/images/c3po.png"
                    alt="c3p0 et r2d2"
                  />
                </div>
                <div className="row-span-1 p-3 ml-16 text-5xl mt-14">
                  <span className="items-center justify-center p-10 text-center rounded-2xl font-exo text-shadow-3 text-slate-50 box-shadow-1 bg-black/50">
                    {currentQuestion + 1}/{quizForm.length}
                  </span>
                </div>
                <div className="col-span-3 row-span-1 text-5xl mt-14">
                  <span className="items-center justify-center p-10 text-center text-slate-50 rounded-2xl font-exo text-shadow-3 box-shadow-1 bg-black/50">
                    {quizForm[currentQuestion].questionText}
                  </span>
                </div>

                <div className="col-span-2 row-span-2 ">
                  {quizForm[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        className="flex items-center justify-center h-[25rem] w-[30rem] text-7xl text-center text-slate-50 font-exo text-shadow-3 "
                        type="button"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        <img
                          className="absolute h-[25rem] w-[30rem] rounded-2xl box-shadow-1 hover:scale-105"
                          src={answerOption.img}
                          alt={answerOption.answerText}
                        />
                        <span className="z-10">{answerOption.answerText}</span>
                      </button>
                    )
                  )}
                </div>
                <div className="col-span-2 row-span-2 ">
                  {quizForm[currentQuestion].answerOptions2.map(
                    (answerOption2) => (
                      <button
                        className="flex items-center justify-center  h-[25rem] w-[30rem]  text-7xl text-center text-slate-50 font-exo text-shadow-3 "
                        type="button"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption2.isCorrect)
                        }
                      >
                        <img
                          className="absolute h-[25rem] w-[30rem]  rounded-2xl box-shadow-1 hover:scale-105"
                          src={answerOption2.img2}
                          alt={answerOption2.answerText2}
                        />
                        <span className="z-10">
                          {answerOption2.answerText2}
                        </span>
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Question;
