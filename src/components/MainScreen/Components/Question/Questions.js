import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import styled from "styled-components";

import { db } from "../../../../firebase/index";

function Questions() {
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const questionsCollectionRef = collection(db, "questions");

  const createQuestion = async () => {
    await addDoc(questionsCollectionRef, { que: newQuestion });
  };

  useEffect(() => {
    const getQuestions = async () => {
      const data = await getDocs(questionsCollectionRef);
      setQuestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getQuestions();
  });

  return (
    <QuestionScreen>
      <QuestionForm>
        <input
          placeholder="Add your Question or Link here."
          onChange={(event) => {
            setNewQuestion(event.target.value);
          }}
        />
        <button onClick={createQuestion}> Add Que </button>
      </QuestionForm>

      {questions.map((question) => {
        return <h1>{question.que}</h1>;
      })}
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
  background-color: white;
  padding: 5px;
  border-radius: 8px;
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
`;
