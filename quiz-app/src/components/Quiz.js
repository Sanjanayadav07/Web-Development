import React from "react";
import { useQuiz } from "../context/QuizContext";
import QuestionCard from "./QuestionCard";

const Quiz = () => {
  const { currentIndex, questions } = useQuiz();

  return (
    <div className="max-w-xl w-full mt-10">
      <div className="mb-4 text-sm text-gray-500">
        Question {currentIndex + 1} of {questions.length}
        <div className="w-full bg-gray-300 h-2 rounded mt-2">
          <div
            className="bg-blue-600 h-2 rounded transition-all"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      <QuestionCard />
    </div>
  );
};

export default Quiz;
