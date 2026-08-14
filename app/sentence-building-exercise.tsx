"use client";

import { FormEvent, useId, useState } from "react";

type SentenceBuildingExerciseItem = {
  words: string;
  answer: string;
  acceptedAnswers?: string[];
};

type SentenceBuildingExerciseProps = {
  exercises: SentenceBuildingExerciseItem[];
};

type Feedback = "idle" | "correct" | "incorrect";

const normaliseSentence = (value: string) =>
  value
    .toLocaleLowerCase("en-GB")
    .replace(/[.,!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function SentenceBuildingExercise({ exercises }: SentenceBuildingExerciseProps) {
  const inputId = useId();
  const [values, setValues] = useState(() => exercises.map(() => ""));
  const [feedback, setFeedback] = useState<Feedback[]>(() => exercises.map(() => "idle"));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(exercises.map((exercise, index) => {
      const validAnswers = [exercise.answer, ...(exercise.acceptedAnswers ?? [])].map(normaliseSentence);
      return validAnswers.includes(normaliseSentence(values[index])) ? "correct" : "incorrect";
    }));
  };

  const updateValue = (index: number, value: string) => {
    setValues((currentValues) => currentValues.map((currentValue, currentIndex) => currentIndex === index ? value : currentValue));
    setFeedback((currentFeedback) => currentFeedback.map((currentResult, currentIndex) => currentIndex === index ? "idle" : currentResult));
  };

  return (
    <form className="sentence-building-form" onSubmit={handleSubmit}>
      <div className="sentence-building-list">
        {exercises.map((exercise, index) => {
          const exerciseInputId = `${inputId}-${index}`;
          const result = feedback[index];

          return <div className="sentence-building-item" key={exercise.words}>
            <span className="sentence-building-number">{String(index + 1).padStart(2, "0")}</span>
            <p className="sentence-word-bank">{exercise.words}</p>
            <label className="sr-only" htmlFor={exerciseInputId}>Write sentence {index + 1}</label>
            <input
              className="sentence-building-input"
              id={exerciseInputId}
              value={values[index]}
              onChange={(event) => updateValue(index, event.target.value)}
              placeholder="Write the complete sentence"
              autoComplete="off"
              spellCheck="true"
            />
            <p className={`sentence-feedback${result === "correct" ? " is-correct" : result === "incorrect" ? " is-incorrect" : ""}`} aria-live="polite">
              {result === "correct" ? "Correct — well done!" : result === "incorrect" ? exercise.answer : ""}
            </p>
          </div>;
        })}
      </div>
      <button className="sentence-check-button" type="submit">Check all answers</button>
    </form>
  );
}
