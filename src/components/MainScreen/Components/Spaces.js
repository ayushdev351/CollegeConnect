import React from "react";

import styled from "styled-components";

function Spaces() {
  return (
    <>
      <SpaceStyle>
        <h1>Spaces</h1>
      </SpaceStyle>
    </>
  );
}

export default Spaces;

const SpaceStyle = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  background-color: #d8d8d8;
  height: 90vh;
  padding: 15px;
  text-align: left;
`;
