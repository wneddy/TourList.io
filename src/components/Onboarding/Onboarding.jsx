import { useState } from "react";
import Navbar from "../Navbar";
import Question from "./Question";
import { questions } from "../../data/questions";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const progress = ((currentIndex + 1) / questions.length) * 100;

  function handleAnswer(questionId, selectedOption) {
    setAnswers((prev) => {
      if (questionId === 6) {
        const existing = prev[questionId] || [];

        if (existing.includes(selectedOption)) {
          return {
            ...prev,
            [questionId]: existing.filter((opt) => opt !== selectedOption),
          };
        } else {
          return {
            ...prev,
            [questionId]: [...existing, selectedOption],
          };
        }
      }

      return {
        ...prev,
        [questionId]: selectedOption,
      };
    });
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      console.log("Final answers:", answers); 
      navigate("/feed", {state: { answers } });
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  const currentAnswer = answers[questions[currentIndex]?.id];
  const disableNext =
    !currentAnswer ||
    (Array.isArray(currentAnswer) && currentAnswer.length === 0);

  return (
    <>
      <Navbar />

      {currentIndex < questions.length ? (
        <>
          <Question
            question={questions[currentIndex]}
            currentIndex={currentIndex}
            total={questions.length}
            progress={progress}
            selectedAnswer={answers[questions[currentIndex]?.id]}
            onAnswer={handleAnswer}
          />

          <div className="absolute bottom-20 w-full flex justify-center gap-4">
            {currentIndex > 0 && (
              <button
                onClick={handleBack}
                className="min-w-[84px] max-w-[200px] cursor-pointer bg-gray-500 text-white h-10 px-5 font-bold rounded-full hover:bg-gray-600 transition-colors"
              >
                Back
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={disableNext}
              className="min-w-[84px] max-w-[200px] cursor-pointer bg-[#38e07b] text-[#111714] h-10 px-5 font-bold rounded-full hover:bg-[#2fe074] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentIndex === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <h1 className="text-center text-3xl font-bold text-white mt-20">
            Thank you! Redirecting to Feed...
        </h1>
      )}
    </>
  );
}
