"use client";

import { FormEvent, useState } from "react";

type GrammarChoice = {
  options: string[];
  answer: string;
};

type GrammarExerciseItem = {
  parts: string[];
  choices: GrammarChoice[];
};

type GrammarExerciseProps = {
  exercises: GrammarExerciseItem[];
};

type Result = "idle" | "correct" | "incorrect";

export default function GrammarExercise({ exercises }: GrammarExerciseProps) {
  const [values, setValues] = useState(() => exercises.map((exercise) => exercise.choices.map(() => "")));
  const [results, setResults] = useState<Result[][]>(() => exercises.map((exercise) => exercise.choices.map(() => "idle")));

  const updateValue = (exerciseIndex: number, choiceIndex: number, value: string) => {
    setValues((currentValues) => currentValues.map((exerciseValues, currentExerciseIndex) =>
      currentExerciseIndex === exerciseIndex
        ? exerciseValues.map((currentValue, currentChoiceIndex) => currentChoiceIndex === choiceIndex ? value : currentValue)
        : exerciseValues
    ));
    setResults((currentResults) => currentResults.map((exerciseResults, currentExerciseIndex) =>
      currentExerciseIndex === exerciseIndex
        ? exerciseResults.map((currentResult, currentChoiceIndex) => currentChoiceIndex === choiceIndex ? "idle" : currentResult)
        : exerciseResults
    ));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResults(exercises.map((exercise, exerciseIndex) => exercise.choices.map((choice, choiceIndex) =>
      values[exerciseIndex][choiceIndex] === choice.answer ? "correct" : "incorrect"
    )));
  };

  const checkedResults = results.flat().filter((result) => result !== "idle");
  const hasChecked = checkedResults.length > 0;
  const allCorrect = hasChecked && checkedResults.length === results.flat().length && checkedResults.every((result) => result === "correct");

  return (
    <form className="grammar-form" onSubmit={handleSubmit}>
      <ol className="grammar-list">
        {exercises.map((exercise, exerciseIndex) => <li key={exercise.parts.join("|")}>
          <span className="grammar-number">{String(exerciseIndex + 1).padStart(2, "0")}</span>
          <p className="grammar-sentence">
            {exercise.parts.map((part, choiceIndex) => {
              const choice = exercise.choices[choiceIndex];
              const result = results[exerciseIndex][choiceIndex];

              return <span key={`${part}-${choiceIndex}`}>
                {part}
                {choice && <select
                  className={`grammar-select${result === "correct" ? " is-correct" : result === "incorrect" ? " is-incorrect" : ""}`}
                  name={`grammar-${exerciseIndex}-${choiceIndex}`}
                  value={values[exerciseIndex][choiceIndex]}
                  onChange={(event) => updateValue(exerciseIndex, choiceIndex, event.target.value)}
                  aria-label={`Grammar question ${exerciseIndex + 1}, choice ${choiceIndex + 1}`}
                  aria-invalid={result === "incorrect"}
                >
                  <option value="" disabled>Choose</option>
                  {choice.options.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>}
              </span>;
            })}
          </p>
        </li>)}
      </ol>
      <button className="grammar-check-button" type="submit">Check grammar answers</button>
      <p className={`grammar-summary${allCorrect ? " is-correct" : ""}`} aria-live="polite">
        {hasChecked ? allCorrect ? "All answers are correct!" : "Review the answers shown in red." : ""}
      </p>
    </form>
  );
}
