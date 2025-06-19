
import React from "react";
import { useQuiz } from "../context/QuizContext";

const CategorySelect = () => {
  const { setCategory } = useQuiz();

  const categories = ["java", "os", "dbms", "aptitude"];

  return (
    <div className="text-center p-6">
      <h2 className="text-xl font-bold mb-4">Select a Category</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
