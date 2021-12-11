import React, { useRef } from "react";
import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";

import { useUserContext } from "../context/userContext";
import { db } from "../firebase/index";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
  const usersCollectionRef = collection(db, "users");

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;

    if (email && password && name) registerUser(email, password, name);

    addDoc(usersCollectionRef, { Uname: name, Uemail: email });
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
  background-color: #6b0f1a;
  background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);
  text-align: center;

  >h2{
     color : white;
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
          padding: 6px;
          margin: 15px;
          width: 30%;
          border-radius: 5px;
          background-color: white;
          font-size: 19px;
          font-weight: bold;
          font-family: cursive;
          color: black;
          :hover{
            cursor: pointer;
            color: grey;
          }
        }


`;
