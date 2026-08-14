"use client";

import { FormEvent, useState } from "react";

type ComprehensionQuestion = {
  prompt: string;
  options: string[];
  answer: string;
};

type ComprehensionExerciseProps = {
  questions: ComprehensionQuestion[];
};

type Result = "idle" | "correct" | "incorrect";

export default function ComprehensionExercise({ questions }: ComprehensionExerciseProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [correctAnswers, setCorrectAnswers] = useState<number[] | null>(null);
  const [results, setResults] = useState<Result[]>(() => questions.map(() => "idle"));

  const selectAnswer = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((currentAnswers) => currentAnswers.map((answer, index) => index === questionIndex ? optionIndex : answer));
    setResults((currentResults) => currentResults.map((result, index) => index === questionIndex ? "idle" : result));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = correctAnswers ?? questions.map((question) => question.options.indexOf(question.answer));

    if (!correctAnswers) setCorrectAnswers(answers);
    setResults(selectedAnswers.map((answer, index) => answer === answers[index] ? "correct" : "incorrect"));
  };

  const hasCheckedAll = results.every((result) => result !== "idle");
  const allCorrect = hasCheckedAll && results.every((result) => result === "correct");

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      {questions.map((question, questionIndex) => <fieldset key={question.prompt}>
        <legend><span>{String(questionIndex + 1).padStart(2, "0")}</span>{question.prompt}</legend>
        <div className="quiz-options">
          {question.options.map((option, optionIndex) => {
            const isCorrectOption = results[questionIndex] !== "idle" && correctAnswers?.[questionIndex] === optionIndex;
            const isIncorrectSelection = results[questionIndex] === "incorrect" && selectedAnswers[questionIndex] === optionIndex;

            return <label key={option}>
              <input
                type="radio"
                name={`question-${questionIndex}`}
                checked={selectedAnswers[questionIndex] === optionIndex}
                onChange={() => selectAnswer(questionIndex, optionIndex)}
              />
              <span className={isCorrectOption ? "is-correct" : isIncorrectSelection ? "is-incorrect" : ""}>{option}</span>
            </label>;
          })}
        </div>
        <p className={`quiz-question-feedback${results[questionIndex] === "correct" ? " is-correct" : results[questionIndex] === "incorrect" ? " is-incorrect" : ""}`} aria-live="polite">
          {results[questionIndex] === "correct" ? "Correct" : results[questionIndex] === "incorrect" ? "Incorrect" : ""}
        </p>
      </fieldset>)}
      <button className="quiz-check-button" type="submit">Check comprehension answers</button>
      <p className={`quiz-summary${allCorrect ? " is-correct" : ""}`} aria-live="polite">
        {hasCheckedAll ? allCorrect ? "All answers are correct!" : "Review your answers and try again." : ""}
      </p>
    </form>
  );
}
