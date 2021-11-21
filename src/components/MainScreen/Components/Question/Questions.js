import React, { useState } from "react";
import styled from "styled-components";
import questionsData from "../../data/questionsData.js";
import Question from "./Question.js";

function Questions() {
  const [input, setInput] = useState("");

  function InputHandler(event) {
    setInput(event.target.value);
  }

  function SubmitHandler(event) {
    event.preventDefault();

    const questionData = {
      question: input
    };

    questionsData.push(questionData);
    setInput("");
  }

  return (
    <QuestionScreen>
      <QuestionForm>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            placeholder="Add your Question here"
            value={input}
            onChange={InputHandler}
          ></input>
          <button type="submit">Add</button>
        </form>
      </QuestionForm>
      {questionsData.map((questionData) => (
        <Question id={questionData.id} question={questionData.question} />
      ))}
    </QuestionScreen>
  );
}

export default Questions;

const QuestionScreen = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  background-color: #d8d8d8;
  height: 90vh;
  padding: 15px;
  text-align: left;
`;

const QuestionForm = styled.div``;
