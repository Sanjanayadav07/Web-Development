import React from "react";

const HowToPlayModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg max-w-md text-left">
        <h2 className="text-2xl font-bold mb-4">📘 How to Play</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Select a category to begin the quiz.</li>
          <li>Each question has multiple-choice options.</li>
          <li>You’ll have limited time per question (e.g., 10 seconds).</li>
          <li>Your score is tracked based on correct answers.</li>
          <li>At the end, you'll see your result and can review answers.</li>
        </ul>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HowToPlayModal;

