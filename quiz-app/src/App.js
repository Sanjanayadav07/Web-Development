import React from "react";
import { useQuiz } from "./context/QuizContext";


import CategorySelect from "./components/CategorySelect";
import QuestionCard from "./components/QuestionCard";
import Review from "./components/Review";
import Result from "./components/Result";

export default function App() {
  const {
    category,
    showReview,
    isQuizFinished,
  } = useQuiz();

  if (!category) return <CategorySelect />;

  if (showReview) return <Review />;

  if (isQuizFinished) return <Result />;

  return <QuestionCard />;
}


