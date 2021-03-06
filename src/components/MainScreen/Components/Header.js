import React from "react";
import styled from "styled-components";
// import { Button } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

import Wrapper from "./Helpers/Wrapper.js";
import { useUserContext } from "../../../context/userContext";

function Header() {
  const { user, logoutUser } = useUserContext();

  return (
    <Wrapper>
      <Navbar>
        <NavbarLeft>
          <img src="https://i.ibb.co/vYWX7S8/logo1-modified.png" alt="G"></img>
          <span>onnect</span>
        </NavbarLeft>
        <NavbarCenter>
          <LinkContainer to="/" exact>
            <i className="fas fa-home"></i>
          </LinkContainer>
          <LinkContainer to="/questions">
            <i className="far fa-edit"></i>
          </LinkContainer>
          <LinkContainer to="/spaces">
            <i className="fas fa-users"></i>
          </LinkContainer>

          {user.email === "ayushkvchamp@gmail.com" ? (
            <LinkContainer to="/admin">
              <i className="fas fa-user-shield"></i>
            </LinkContainer>
          ) : (
            <></>
          )}

          <NavbarSearch class="NavbarSearch">
            <i className="fas fa-search search"></i>
            <input type="text" placeholder="Search Quora"></input>
          </NavbarSearch>
        </NavbarCenter>
        <NavbarRight className="NavbarRight">
          <LinkContainer to="/profile">
            <i className="fas fa-user"></i>
          </LinkContainer>

          <Button onClick={logoutUser}>Log out</Button>
        </NavbarRight>
      </Navbar>
    </Wrapper>
  );
}

export default Header;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #6b0f1a;
  background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);

  color: white;
  font-size: 1.1rem;
  padding: 10px;
  position: fixed;
  height: 33.45px;
  width: 100vw;
  z-index: 1000;
`;

const NavbarLeft = styled.div`
  flex: 0.115;
  text-align: left;
  font-size: 1.7rem;
  font-weight: bolder;
  flex-shrink: 100;
  color: white;

  > img {
    width: 25px;
    margin-bottom: -4px;
  }

  > span {
    font-size: 22px;
    font-family: cursive;
  }
`;

const NavbarCenter = styled.div`
  flex: 0.6;
  display: flex !important;
  justify-content: space-around;
  align-items: center;
`;

const NavbarSearch = styled.div`
  > input {
    background-color: transparent;
    color: white;
    margin-left: 5px;
    border-color: white;
    border-width: 0px;
    border-bottom-width: 1px;
    padding: 0px 2px;
    outline: none;
    max-width: 11rem;
    flex-grow: 5000;
  }
`;

const NavbarRight = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 30px;
`;

const Button = styled.div`
  color: black;
  background-color: white;
  border-radius: 8px;
  margin-left: auto;
  padding: 5px;
  width: 40%;
  :hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;
