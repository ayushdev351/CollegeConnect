import React from "react";
import styled from "styled-components";
import { BigHead } from "@bigheads/core";

import { useUserContext } from "../../../context/userContext";
import { getRandomOptions } from "./Helpers/BigHead.js";

function Profile() {
  const { user } = useUserContext();

  return (
    <ProfileStyle>
      <Card>
        <h1>User Profile</h1>
        <div style={{ width: "200px" }}>
          <BigHead {...getRandomOptions()} />
        </div>
        <InfoStyle>
          <p>User Name : {user.displayName}</p>
          <p>User Email : {user.email}</p>
          <p>First Login : {user.metadata.creationTime}</p>
          <p>Last SignIn : {user.metadata.lastSignInTime}</p>
        </InfoStyle>
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
    padding: 5px;
    font-weight: bold;
    text-align: center;
    color: #ec6f6f;
  }

  > div {
    margin-left: auto;
    margin-right: auto;
  }
`;

const InfoStyle = styled.div`
  margin-top: 5px;
  background-color: #861657;
  background-image: linear-gradient(326deg, #861657 0%, #ec6f6f 74%);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 25px;

  > p {
    color: white;
    padding: 10px;
    padding-left: 15%;
    font-weight: bold;
    text-align: left;
  }
`;
