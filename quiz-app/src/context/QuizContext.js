import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} from "react";
import { questionsData } from "../data/questionsData";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showReview, setShowReview] = useState(false);

  const timerRef = useRef(null);

  const questions = useMemo(() => {
    return category ? questionsData[category] || [] : [];
  }, [category]);

  const handleAnswer = useCallback(
    (option) => {
      if (timerRef.current) clearInterval(timerRef.current);

      const currentQuestion = questions[currentIndex];
      if (!currentQuestion) return;

      const isCorrect = option === currentQuestion.answer;
      if (isCorrect) setScore((prev) => prev + 1);

      setSelectedOptions((prev) => [
        ...prev,
        { ...currentQuestion, selected: option }
      ]);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsQuizFinished(true);
      }
    },
    [currentIndex, questions]
  );

  useEffect(() => {
  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return;

  setTimeLeft(15);
  if (timerRef.current) clearInterval(timerRef.current);

  timerRef.current = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev === 1) {
        handleAnswer(null);
        return 15;
      }
      return prev - 1;
    });
  }, 1000);

  // ✅ clear timer on unmount or question change
  return () => clearInterval(timerRef.current);
}, [currentIndex, category, handleAnswer, questions]);

  // ✅ DEFINE resetQuiz HERE
  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOptions([]);
    setIsQuizFinished(false);
    setCategory(null);
    setTimeLeft(15);
    setShowReview(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <QuizContext.Provider
      value={{
        category,
        setCategory,
        currentIndex,
        score,
        questions,
        handleAnswer,
        selectedOptions,
        isQuizFinished,
        resetQuiz, // ✅ use it AFTER defining above
        darkMode,
        setDarkMode,
        timeLeft,
        showReview,
        setShowReview
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};


