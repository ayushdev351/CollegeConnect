// This Component is for styling the Question Card

import React from "react";
import styled from "styled-components";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Question(props) {
  return (
    <QuestionStyle>
      <Card>
        <CardBody>
          <CardTitle>
            <p>
              {" "}
              <i className="fas fa-user"></i>
              <span> {props.userName}</span>
            </p>
          </CardTitle>
          <CardText>
            <p style={{ paddingTop: "8px" }}>{props.question}</p>
          </CardText>
        </CardBody>
      </Card>
    </QuestionStyle>
  );
}

export default Question;

const QuestionStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 7px;
  margin-bottom: 8px;
  border-radius: 5px;
 }

`;
