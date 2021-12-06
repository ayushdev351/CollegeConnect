import React from "react";
import styled from "styled-components";

function RightSide() {
  return (
    <Right>
      <RightHead>Current Events</RightHead>
      <RightContent></RightContent>
    </Right>
  );
}

export default RightSide;

const RightHead = styled.div`
  padding-top: 2px;
  height: 22px;
  color: white;
  font-weight: bold;
  background-color: #6b0f1a;
  background-image: linear-gradient(74deg, #6b0f1a 0%, #b91372 74%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Right = styled.div`
  flex: 0.15;
  overflow-y: scroll;
`;

const RightContent = styled.div`
  width: 80%;
  height: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 10px;
  background-color: #c4aead;
  border-radius: 8px;
`;
