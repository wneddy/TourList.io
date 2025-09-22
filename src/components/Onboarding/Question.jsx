export default function Question({
  question,
  currentIndex,
  total,
  progress,
  selectedAnswer,
  onAnswer,
}) {
  return (
    <main className="mx-auto bg-[#111111] min-h-screen flex flex-1 items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center text-center w-full">
          {/* Progress info */}
          <div className="w-full mb-3 flex justify-between text-xs sm:text-sm">
            <p className="font-medium text-white/50">
              Question {currentIndex + 1} of {total}
            </p>
            <p className="font-bold text-white">{Math.round(progress)}%</p>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-2 bg-green-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Question */}
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {question.question}
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-white/60 px-2">
            {question.id === 6
              ? "Select all amenities that matter to you."
              : "Select one option that best describes you."}
          </p>

          {/* Options */}
          <form className="mt-6 w-full">
            <fieldset>
              <legend className="sr-only">{question.question}</legend>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {question.options.map((option, idx) => (
                  <label
                    key={idx}
                    className="relative flex cursor-pointer rounded-lg border-2 border-white/20 bg-white/5 px-4 py-3 text-center text-sm sm:text-base font-semibold text-white transition-all has-[:checked]:border-[var(--primary-400)] has-[:checked]:bg-[var(--primary-950)] has-[:checked]:text-[var(--primary-300)] hover:bg-white/10"
                  >
                    <input
                      className="sr-only"
                      type={question.id === 6 ? "checkbox" : "radio"}
                      name={`question_${question.id}`}
                      value={option}
                      checked={
                        question.id === 6
                          ? (selectedAnswer || []).includes(option)
                          : selectedAnswer === option
                      }
                      onChange={() => onAnswer(question.id, option)}
                    />
                    <span className="flex-1">{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
}
