import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function Result() {
  const { score, questions, setShowReview } = useQuiz();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4">Quiz Finished!</h2>
      <p className="text-xl mb-6">
        Your Score: {score} / {questions.length}
      </p>
      <button
        onClick={() => setShowReview(true)}
        className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Review Answers
      </button>
    </div>
  );
}

