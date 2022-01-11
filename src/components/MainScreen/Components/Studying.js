import React from "react";
import styled from "styled-components";

function Studying() {
  return (
    <>
      <NotiStyle>
        <h1>Studying Related Articles</h1>
      </NotiStyle>
    </>
  );
}

export default Studying;

const NotiStyle = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  background-color: #d8d8d8;
  height: 90vh;
  padding: 15px;
  text-align: center;

  > h1 {
    width: 100%;
    overflow-x: hidden;
    background-color: #ff6289;
    border: solid 2px;
    text-align: center;
    padding: 5px 0;
    border-radius: 10px;
  }
`;
