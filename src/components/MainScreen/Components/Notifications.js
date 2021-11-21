import React from "react";
import styled from "styled-components";

function Notifs() {
  return (
    <>
      <NotiStyle>
        <h1>Notifications</h1>
      </NotiStyle>
    </>
  );
}

export default Notifs;

const NotiStyle = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  background-color: #d8d8d8;
  height: 90vh;
  padding: 15px;
  text-align: left;
`;
