import React, { useState, useEffect } from "react";
import quizForm from "../../../data/quizForm";
import Result from "./Result";
import planets from "../../../data/planets";

const Question = () => {
  // >> STATES & SETTERS
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [chosenPlanet, setChosenPlanet] = useState(0);
  // ------------------------------------------
  // >> FUNCTIONS
  // >> SCORING QUIZZ
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + isCorrect);
    }
    // >> NEXT QUESTIONS & END RESULT
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizForm.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  // >> RESULT QUIZ & DESTINATION
  const getQuizResult = (scoreQuiz) => {
    const destinationResult = planets.filter(
      (planet) => planet.score === scoreQuiz
    );
    const [destinationResultObject] = destinationResult;
    return destinationResultObject;
  };

  useEffect(() => {
    setChosenPlanet(getQuizResult(score));
  }, [score]);
  // ------------------------------------------
  return (
    <div>
      {showScore ? (
        <Result {...chosenPlanet} />
      ) : (
        <>
          {/* >> FORM RIGHT(IMAGE) & LEFT(NUMBER/QUESTIONS/RESPONSES) */}
          <div className="flex flex-wrap items-center justify-center w-screen h-screen">
            {/* >> SECTION FORM LEFT - IMAGE */}
            <section className="flex items-center justify-center w-1/3 bp2_1:hidden">
              {/* >> DIV FORM LEFT */}
              <div className="relative flex flex-col bp2_1:hidden">
                {/* >> DIV R2D2 */}
                <div className="relative z-0 flex mt-16 flex-row m-2 h-[32rem] bp2_1:hidden">
                  <img
                    className="w-full h-full "
                    src="./assets/images/c3po.png"
                    alt="c3p0 et r2d2"
                  />
                </div>
              </div>
            </section>
            {/* // ------------------------------------------ */}
            {/* >> SECTION FORM RIGHT - NUMBER/QUESTIONS/RESPONSES */}
            <section className="flex justify-center w-2/3 bp2_1:w-full">
              {/* >> DIV FORM RIGHT */}
              <div className="relative flex flex-col w-full pt-32 m-5 bp2_1:w-full bp4:pt-8">
                {/* >> DIV NUMBER + QUESTIONS */}
                <div className="relative flex flex-row justify-center bp4:flex-col">
                  {/* >> NUMBER */}
                  <div className="relative flex flex-row items-center w-1/6 m-5 bp2_1:mx-2 bp2_1:w-2/6 bp2_1:justify-center bp4:w-full bp4:h-full ">
                    <span className="items-center justify-center p-10 text-2xl text-center rounded-2xl font-exo text-shadow-3 text-slate-50 dark:text-slate-900 box-shadow-1 dark:box-shadow-2 bg-black/50 dark:bg-white/50 bp2:p-6 bp3:text-xl bp4:text-sm bp4:p-2">
                      {currentQuestion + 1}/{quizForm.length}
                    </span>
                  </div>
                  {/* >> QUESTIONS */}
                  <div className="relative flex flex-row items-center justify-start w-5/6 m-5 bp2:m-1 bp2:w-full bp2_1:mx-2 bp2_1:justify-center bp4:h-full ">
                    <span className="items-center justify-center w-full p-10 text-2xl text-center text-slate-50 dark:text-slate-900 rounded-2xl font-exo text-shadow-3 box-shadow-1 dark:box-shadow-2 bg-black/50 dark:bg-white/50 bp2:p-6 bp2:px-1 bp2_1:text-lg bp4:py-2">
                      {quizForm[currentQuestion].questionText}
                    </span>
                  </div>
                </div>
                {/* >> RESPONSES */}
                <div className="relative flex flex-row mt-10 bp2_1:w-full bp2_1:mt-1 bp4:flex-col">
                  {/* >> RESPONSE 1 */}
                  <div className="relative flex flex-row w-1/2 m-5 bp2_1:w-1/2 bp2_1:justify-center bp4:w-full bp4:h-full bp4:m-2 ">
                    {quizForm[currentQuestion].answerOptions.map(
                      (answerOption, index) => (
                        <button
                          key={index}
                          className="flex items-center justify-center w-full h-64 mb-16 text-4xl text-center text-slate-50 font-exo text-shadow-3 bp4:w-52 bp4:h-44 bp4:text-lg bp4:mb-2"
                          type="button"
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                        >
                          <img
                            className="absolute w-full h-64 rounded-2xl box-shadow-1 dark:box-shadow-2 hover:scale-105 bp4:w-52 bp4:h-44"
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
                  {/* >> RESPONSE 2 */}
                  <div className="relative z-0 flex flex-row justify-start w-1/2 m-5 bp2_1:w-1/2 bp2_1:justify-center bp4:w-full bp4:h-full bp4:m-2 ">
                    {quizForm[currentQuestion].answerOptions2.map(
                      (answerOption2, index) => (
                        <button
                          key={index}
                          className="flex items-center justify-center w-full h-64 mb-16 text-4xl text-center text-slate-50 font-exo text-shadow-3 bp4:w-52 bp4:h-44 bp4:text-lg bp4:mb-0"
                          type="button"
                          onClick={() =>
                            handleAnswerOptionClick(answerOption2.isCorrect)
                          }
                        >
                          <img
                            className="absolute w-full h-64 rounded-2xl box-shadow-1 dark:box-shadow-2 hover:scale-105 bp4:w-52 bp4:h-44"
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
