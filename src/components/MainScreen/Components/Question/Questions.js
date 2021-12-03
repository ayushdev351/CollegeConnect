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
            placeholder="You can Add your Question or Link here."
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
  overflow-y: scroll;
`;

const QuestionForm = styled.div`
  margin-bottom: 8px;

  > form {
    padding: 10px;
    background-color: white;
    border-radius: 5px;

    > input {
      background-color: transparent;
      color: grey;
      margin-left: 5px;
      font-weight: bolder;
      font-size: 18px;
      border-color: white;
      border-width: 0px;
      border-bottom-width: 1px;
      padding: 0px 2px;
      outline: none;
      width: 80%;
    }

    > button {
      padding: 8px;
      width: 80px;
      background-color: #861657;
      color: white;
      border-radius: 5px;
    }
  }
`;
