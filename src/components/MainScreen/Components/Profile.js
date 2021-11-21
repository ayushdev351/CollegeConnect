import React from "react";
import styled from "styled-components";

import { useUserContext } from "../../../context/userContext";

function Profile() {
  const { user, logoutUser } = useUserContext();
  //  const photoURL = user.photoURL;

  return (
    <ProfileStyle>
      <Card>
        <h1>Profile</h1>
        <p>User Name : {user.displayName}</p>
        <p>User Email : {user.email}</p>
        <p>Joining Date : {user.metadata.creationTime}</p>
        <p>Last SignIn : {user.metadata.lastSignInTime}</p>
        {/* <img src={photoURL} alt="user Profile"></img> */}
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
  text-align: left;
`;

const Card = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 15px;
  width: 500px;
  height: 300px;

  > h1 {
    padding: 20px;
    font-weight: bold;
    text-align: center;
    color: #ec6f6f;
  }

  > p {
    padding: 10px;
    font-weight: bold;
    text-align: center;
  }
`;
