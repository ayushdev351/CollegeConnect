// This Component is for styling the Question Card

import React from "react";
import questionsData from "../../data/questionsData";
import styled from "styled-components";

function Question(props) {
  return <QuestionDiv>{props.question}</QuestionDiv>;
}

export default Question;

const QuestionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
