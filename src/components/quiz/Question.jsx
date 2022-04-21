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
          {/* CREATION DIV ENGLOBANT FORM DROIT & GAUCHE */}
          <div className="flex flex-wrap justify-center bp2_1:flex-col">
            {/* CREATION SECTION FORM GAUCHE - R2D2 */}
            <section className="flex justify-center w-1/3 bp2_1:flex-col bp2_1:w-full">
              {/* CREATION DIV FORM GAUCHE */}
              <div className="relative flex flex-col ">
                {/* CREATION R2D2 */}
                <div className="relative z-0 flex flex-row pt-32 m-5">
                  <img
                    className="w-full h-full "
                    src="assets/images/c3po.png"
                    alt="c3p0 et r2d2"
                  />
                </div>
              </div>
            </section>
            {/* CREATION SECTION FORM DROITE - QUESTION/REPONSES */}
            <section className="flex justify-center w-2/3 bp2_1:flex-col bp2_1:w-full">
              {/* CREATION DIV FORM DROIT */}
              <div className="relative flex flex-col w-full pt-32 m-5">
                {/* CREATION DIV NB+QUESTION */}
                <div className="relative flex flex-row justify-center">
                  {/* CREATION NB */}
                  <div className="relative flex flex-row w-1/6 m-5">
                    <span className="items-center justify-center p-10 text-2xl text-center rounded-2xl font-exo text-shadow-3 text-slate-50 box-shadow-1 bg-black/50">
                      {currentQuestion + 1}/{quizForm.length}
                    </span>
                  </div>
                  {/* CREATION QUESTION */}
                  <div className="relative flex flex-row justify-start w-5/6 m-5">
                    <span className="items-center justify-center w-4/5 p-10 text-2xl text-center text-slate-50 rounded-2xl font-exo text-shadow-3 box-shadow-1 bg-black/50 ">
                      {quizForm[currentQuestion].questionText}
                    </span>
                  </div>
                </div>
                {/* CREATION REPONSES */}
                <div className="relative flex flex-row mt-10 bp2_1:flex-col bp2_1:w-full">
                  {/* CREATION REPONSE 1 */}
                  <div className="relative flex flex-row w-1/2 m-5 bp2_1:w-full">
                    {quizForm[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <button
                          className="flex items-center justify-center h-[18rem] w-[22rem] text-4xl text-center text-slate-50 font-exo text-shadow-3 bp2:h-[7rem] bp2:w-[10rem] bp2:text-xl"
                          type="button"
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                        >
                          <img
                            className="absolute h-[18rem] w-[22rem] rounded-2xl box-shadow-1 hover:scale-105 bp2:h-[7rem] bp2:w-[10rem]"
                            src={answerOption.img}
                            alt={answerOption.answerText}
                          />
                          <span className="z-10">
                            {answerOption.answerText}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                  {/* CREATION REPONSE 2 */}
                  <div className="relative z-0 flex flex-row justify-start w-1/2 m-5 bp2_1:w-full bp2_1:h-full">
                    {quizForm[currentQuestion].answerOptions2.map(
                      (answerOption2) => (
                        <button
                          className="flex items-center justify-center h-[18rem] w-[22rem] text-4xl text-center text-slate-50 font-exo text-shadow-3 bp2_1:w-auto bp2:text-xl "
                          type="button"
                          onClick={() =>
                            handleAnswerOptionClick(answerOption2.isCorrect)
                          }
                        >
                          <img
                            className="absolute h-[18rem] w-[22rem] rounded-2xl box-shadow-1 hover:scale-105 bp2_1:w-full bp2_1:h-full"
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
            </section>
          </div>
        </>
      )}
    </div>
  );
};
export default Question;
