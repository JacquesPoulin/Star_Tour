/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from "react";
import quizForm from "../../../data/quizForm";
import Result from "./Result";
import planets from "../../../data/planets";

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

  const getQuizResult = (scoreQuiz) => {
    const destinationResult = planets.filter(
      (planet) => planet.score === scoreQuiz
    );
    const [destinationResultObject] = destinationResult;
    return destinationResultObject;
  };

  const [chosenPlanet, setChosenPlanet] = useState();

  useEffect(() => {
    setChosenPlanet(getQuizResult(score));
  }, [score]);

  return (
    <div>
      {showScore ? (
        <Result {...chosenPlanet} />
      ) : (
        <>
          <div>
            <div className="w-auto h-auto ">
              <div className="grid grid-cols-6 grid-rows-3 px-10 pt-36 place-content-center h-3/5 bp2:grid bp2:grid-cols-3 bp2:grid-rows-2 bp2:px-10">
                <div className="col-span-2 row-span-4 text-center bp2:grid bp2:col-span-1 bp2:row-span-2">
                  <img
                    className="w-full h-full "
                    src="assets/images/c3po.png"
                    alt="c3p0 et r2d2"
                  />
                </div>
                <div className="row-span-1 p-3 ml-16 text-3xl mt-14 bp2:row-span-1">
                  <span className="items-center justify-center p-10 text-center rounded-2xl font-exo text-shadow-3 text-slate-50 box-shadow-1 bg-black/50">
                    {currentQuestion + 1}/{quizForm.length}
                  </span>
                </div>
                <div className="col-span-3 row-span-1 p-3 text-3xl mt-14 bp2:col-span-1 bp2:row-span-1 bp2:text-xl">
                  <span className="items-center justify-center p-10 text-center text-slate-50 rounded-2xl font-exo text-shadow-3 box-shadow-1 bg-black/50 ">
                    {quizForm[currentQuestion].questionText}
                  </span>
                </div>

                <div className="col-span-2 row-span-2 bp2:col-span-1">
                  {quizForm[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        className="flex items-center justify-center h-[15rem] w-[20rem] text-4xl text-center text-slate-50 font-exo text-shadow-3 bp2:h-[7rem] bp2:w-[10rem] bp2:text-xl"
                        type="button"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        <img
                          className="absolute h-[15rem] w-[20rem] rounded-2xl box-shadow-1 hover:scale-105 bp2:h-[7rem] bp2:w-[10rem]"
                          src={answerOption.img}
                          alt={answerOption.answerText}
                        />
                        <span className="z-10">{answerOption.answerText}</span>
                      </button>
                    )
                  )}
                </div>
                <div className="col-span-2 row-span-2 bp2:col-span-1">
                  {quizForm[currentQuestion].answerOptions2.map(
                    (answerOption2) => (
                      <button
                        className="flex items-center justify-center h-[15rem] w-[20rem] text-4xl text-center text-slate-50 font-exo text-shadow-3 bp2:h-[7rem] bp2:w-[10rem] bp2:text-xl "
                        type="button"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption2.isCorrect)
                        }
                      >
                        <img
                          className="absolute h-[15rem] w-[20rem] rounded-2xl box-shadow-1 hover:scale-105 bp2:h-[7rem] bp2:w-[10rem] "
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
