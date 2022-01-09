import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import styled from "styled-components";

import { db } from "../../../../firebase/index";
import { useUserContext } from "../../../../context/userContext";

function Questions() {
  const { user } = useUserContext();

  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const questionsCollectionRef = collection(db, "questions");

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  const date = day + "/" + month + "/" + year;

  const createQuestion = async () => {
    await addDoc(questionsCollectionRef, {
      que: newQuestion,
      addedBy: user.displayName,
      addedOn: date
    });
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
        <UserName>
          <i className="fas fa-user"></i>
          <span>{user.displayName}</span>
        </UserName>
        <Break></Break>
        <input
          placeholder="Add your Question or Link here."
          onChange={(event) => {
            setNewQuestion(event.target.value);
          }}
        />
        <button onClick={createQuestion}> Add Que </button>
      </QuestionForm>
      <QuestionCard>
        <div>
          {questions.map((question) => {
            return (
              <>
                <p>Q: {question.que}</p>
                <button>Add Ans</button>
                <span>{question.addedBy}</span>
                <span>{question.addedOn}</span>
              </>
            );
          })}
        </div>
      </QuestionCard>
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
  margin-bottom: 20px;

  > input {
    background-color: transparent;
    color: grey;
    margin-left: 5px;
    font-weight: bolder;
    font-size: 18px;
    border-color: white;
    border-width: 0px;
    border-bottom-width: 1px;
    padding: 2px 3px;
    outline: none;
    width: 89%;
  }

  > button {
    padding: 8px;
    width: 80px;
    background-color: #861657;
    background-image: linear-gradient(326deg, #861657 0%, #ec6f6f 74%);
    color: white;
    font-weight: bold;
    font-size: 12px;
    border-radius: 5px;
  }
`;

const QuestionCard = styled.div`
  > div {
    > p {
      display: flex;
      flex-direction: column;
      background-color: white;
      font-size: 15px;
      font-weight: bold;
      padding: 9px;
      margin-bottom: 0px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    > button {
      margin-bottom: 15px;
      padding: 4px;
      width: 80px;
      background-color: #861657;
      background-image: linear-gradient(326deg, #861657 0%, #ec6f6f 74%);
      color: white;
      font-weight: bold;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;

const UserName = styled.div`
  padding-top: 2px;
  > span {
    padding-left: 3px;
    font-size: 14px;
  }
`;

const Break = styled.div`
  background-color: #861657;
  background-image: linear-gradient(326deg, #861657 0%, #ec6f6f 74%);
  margin-top: 8px;
  margin-bottom: 10px;
  height: 3.5px;
  margin-left: -5.5px;
  margin-right: -5.5px;
  border-radius: 5px;
`;
