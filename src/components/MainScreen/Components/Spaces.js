import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../../firebase/index";

function Spaces() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  });

  return (
    <>
      <SpaceStyle>
        <h1>Our Users</h1>
        {users.map((user) => {
          return (
            <div>
              <h3>Name: {user.Uname}</h3>
              <p>Email: {user.Uemail}</p>
            </div>
          );
        })}
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
  overflow-y: scroll;

  > h1 {
    font-family: cursive;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    width: 30%;
    position: sticky;
  }

  > div {
    background-color: white;
    background-image: linear-gradient(326deg, #861657 0%, #ec6f6f 74%);
    border-radius: 100px;
    font-family: cursive;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: black;
    margin-bottom: 20px;
    width: 45%;

    > h3 {
      margin: 10px;
    }

    > p {
      margin: 10px;
      padding-bottom: 5px;
    }
  }
`;
