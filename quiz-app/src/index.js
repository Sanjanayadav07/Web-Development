import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QuizProvider } from "./context/QuizContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);

