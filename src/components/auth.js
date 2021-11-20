import React, { useState } from "react";
import styled from "styled-components";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <NewUserAlt>
        <p onClick={toggleIndex}>
          {!index ? "New user? Register here " : "Already have an acount?"}
        </p>
      </NewUserAlt>
    </div>
  );
};

export default Auth;

const NewUserAlt = styled.div`
  margin-top: 35px;
  font-size: 20px;
  font-family: cursive;
  font-weight: bold;

  :hover {
    color: blue;
    cursor: pointer;
  }
`;
