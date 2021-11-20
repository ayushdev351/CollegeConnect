import React, { useRef } from "react";
import styled from "styled-components";

import { useUserContext } from "../context/userContext";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <WebName>Welcome To Galgotia Connect</WebName>
      <SignUp>
        <h2> New User</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <br />
          <input placeholder="Name" type="name" ref={nameRef} />
          <br />
          <input placeholder="Password" type="password" ref={psdRef} />
          <br />
          <button type="submit">Register</button>
        </form>
      </SignUp>
    </div>
  );
};

export default Signup;

const WebName = styled.div`
  margin-top: 20px;
  font-size: 40px;
  font-family: cursive;
`;

const SignUp = styled.div`
  margin-top: 7%;
  padding: 20px;
  margin-left: 30%;
  margin-right: 30%;

  border-radius: 20px;
  background-color: #f2cf43;
  background-image: linear-gradient(315deg, #f2cf43 0%, #19a186 74%); 
  text-align: center;

  >h2{
     color : black;
     padding-bottom: 20px;
     font-size : 35px;
     font-family: cursive;  
   }
    
    >form{
      >input{
        color: black;
        height: 25px;
        width: 50%;
        margin: 10px;
        border-color: white;
        border-radius: 10px;
        }

        >button{
          padding: 9px;
          margin: 15px;
          width: 30%;
          border-radius: 5px;
          background-color: black;
          font-size: 15px;
          font-weight: bold;
          font-family: cursive;
          color: white;
          :hover{
            cursor: pointer;
            color: blue;
          }
        }


`;
