import React from "react";
import styled from "styled-components";
import { useUserContext } from "../../../context/userContext";

function Profile() {
  const { user, logoutUser } = useUserContext();

  return (
    <ProfileStyle>
      <h1>Profile</h1>
      <h3>Name : {user.displayName}</h3>
      <br />
      <h4>Email : {user.email}</h4>
    </ProfileStyle>
  );
}

export default Profile;

const ProfileStyle = styled.div``;
