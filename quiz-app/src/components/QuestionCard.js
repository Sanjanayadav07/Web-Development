import React from "react";
import { useQuiz } from "../context/QuizContext";

const QuestionCard = () => {
  const { questions, currentIndex, handleAnswer, timeLeft, category } = useQuiz(); // ✅ include category

  // Debug logs
  console.log("category:", category);
  console.log("questions:", questions);
  console.log("currentQuestion:", questions[currentIndex]);

  // Guard to prevent crash if question isn't loaded yet
  if (!questions || questions.length === 0 || !questions[currentIndex]) {
    return <div className="text-center p-6">Loading question...</div>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="question-card p-6 bg-white rounded shadow-md max-w-lg mx-auto">
      <div className="timer mb-4 text-right font-semibold text-red-600">
        Time Left: {timeLeft}s
      </div>
      <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, idx) => (
          <li
            key={idx}
            onClick={() => handleAnswer(option)}
            className="option cursor-pointer p-2 my-2 bg-blue-100 rounded hover:bg-blue-300 transition"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;






