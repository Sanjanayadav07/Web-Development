import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function Review() {
  const { selectedOptions, resetQuiz, setShowReview } = useQuiz();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Review Your Answers</h2>
      <div className="flex flex-col gap-4">
        {selectedOptions.map(({ question, options, answer, selected }, idx) => (
          <div key={idx} className="p-4 border rounded">
            <p className="font-semibold">{question}</p>
            <p>
              Your answer:{" "}
              <span
                className={
                  selected === answer ? "text-green-600" : "text-red-600 line-through"
                }
              >
                {selected}
              </span>
            </p>
            {selected !== answer && (
              <p className="text-green-700">Correct answer: {answer}</p>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setShowReview(false);
          resetQuiz();
        }}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Restart Quiz
      </button>
    </div>
  );
}

