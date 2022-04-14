import React, { useState } from "react";
import quizForm from "../../../data/quizForm";
import PropTypes from "prop-types";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [, setShowScore] = useState(false);

  const QuestionCard = ({ answerText, img }) => {
    QuestionCard.propTypes = {
      answerText: PropTypes.string.isRequired,
    };
    QuestionCard.propTypes = {
      img: PropTypes.string.isRequired,
    };

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
          <div className="grid grid-cols-6 grid-rows-6 p-16 place-content-center h-4/5 ">
            <div className="col-span-2 row-span-6 text-center">
              <img
                className="w-full h-full"
                src="assets/images/r2d2.png"
                alt="r2d2"
              />
            </div>
            <div className="row-span-2 py-4 mx-1 text-5xl text-center text-white">
              <span className="items-center justify-center text-center rounded-2xl font-exo text-shadow-3">
                {currentQuestion + 1}/{quizForm.length}
              </span>
            </div>

            <div className="col-span-3 row-span-2 py-4 mx-1 text-5xl text-center text-white ">
              <p className="items-center justify-center rounded-2xl font-exo text-shadow-3">
                {quizForm[currentQuestion].questionText}
              </p>
            </div>

            <div className="col-span-2 row-span-4 py-4 m-5 text-5xl text-center text-white bg-[url{questions.img}] bg-cover bg-center rounded-lg box-shadow-1 hover:scale-105">
              <button
                type="button"
                onClick={() => handleAnswerOptionClick(QuestionCard)}
              >
                <img src={img} alt={answerText} />
                <p className="z-10 text-4xl text-slate-50 font-exo text-shadow-3">
                  {answerText}
                </p>
              </button>
            </div>
            {/* <div className="col-span-2 row-span-4 py-4 m-5 text-5xl text-center text-white rounded-lg bg-[url{img}] bg-cover bg-center box-shadow-1 hover:scale-105 ">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="w-full h-full text-3xl text-center text-slate-50 font-exo text-shadow-3 "
                type="button"
                onClick={() => handleAnswerOptionClick(answerOption)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div> */}
          </div>
        </div>
      </div>
    );
  };
};
export default Question;
