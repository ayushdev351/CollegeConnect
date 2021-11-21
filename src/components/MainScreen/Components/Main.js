import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

import Answer from "../Components/Answer.js";
import answersData from "../data/answersData.js";
import questionsData from "../data/questionsData";

function MainBody() {
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
    alert("Your Question is Added");
  }

  return (
    <Main>
      <MainHead>
        <Card
          className="mainScreenQuestion"
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          <CardBody>
            <CardTitle>
              <p className="Username">
                <i class="fas fa-user"></i> User-Name
              </p>
            </CardTitle>
            <CardText>
              <form onSubmit={SubmitHandler}>
                <input
                  type="text"
                  placeholder="Add your Question or Link here"
                  className="Addque"
                  value={input}
                  onChange={InputHandler}
                ></input>
              </form>
            </CardText>
          </CardBody>
        </Card>
      </MainHead>
      {answersData.map((answerData) => (
        <Answer key={answerData._id} answer={answerData} />
      ))}
    </Main>
  );
}

export default MainBody;

const Main = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  background-color: #d8d8d8;
  height: 90vh;
  padding: 15px;
  text-align: left;
  overflow-y: scroll;
`;

const MainHead = styled.div``;
