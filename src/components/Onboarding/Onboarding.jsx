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
        return existing.includes(selectedOption)
          ? { ...prev, [questionId]: existing.filter((opt) => opt !== selectedOption) }
          : { ...prev, [questionId]: [...existing, selectedOption] };
      }
      return { ...prev, [questionId]: selectedOption };
    });
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate("/feed", { state: { answers } });
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  const currentAnswer = answers[questions[currentIndex]?.id];
  const disableNext =
    !currentAnswer || (Array.isArray(currentAnswer) && currentAnswer.length === 0);

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

          {/* Responsive buttons */}
          <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-4 px-4">
            {currentIndex > 0 && (
              <button
                onClick={handleBack}
                className="flex-1 max-w-[140px] sm:max-w-[200px] h-10 px-4 bg-gray-500 text-white font-bold rounded-full hover:bg-gray-600 transition-colors text-sm sm:text-base"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={disableNext}
              className="flex-1 max-w-[140px] sm:max-w-[200px] h-10 px-4 bg-[#38e07b] text-[#111714] font-bold rounded-full hover:bg-[#2fe074] transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentIndex === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-white mt-20 px-4">
          Thank you! Redirecting to Feed...
        </h1>
      )}
    </>
  );
}
