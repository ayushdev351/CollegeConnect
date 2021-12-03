import React from "react";
import styled from "styled-components";
import { BigHead } from "@bigheads/core";

import { useUserContext } from "../../../context/userContext";
import { getRandomOptions } from "./Helpers/BigHead.js";

function Profile() {
  const { user, logoutUser } = useUserContext();

  return (
    <ProfileStyle>
      <Card>
        <h1>User Profile</h1>
        <div style={{ width: "200px" }}>
          <BigHead {...getRandomOptions()} />
        </div>
        <p>User Name : {user.displayName}</p>
        <p>User Email : {user.email}</p>
        <p>First Login : {user.metadata.creationTime}</p>
        <p>Last SignIn : {user.metadata.lastSignInTime}</p>
      </Card>
    </ProfileStyle>
  );
}

export default Profile;

const ProfileStyle = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #d8d8d8;
  height: 90vh;
  padding: 15px;
  text-align: center;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  margin-top: 5%;
  width: 500px;
  height: 450px;

  > h1 {
    padding: 10px;
    font-weight: bold;
    text-align: center;
    color: #ec6f6f;
  }

  > div {
    margin-left: auto;
    margin-right: auto;
  }

  > p {
    padding: 10px;
    font-weight: bold;
    text-align: center;
  }
`;
