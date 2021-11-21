import React from "react";
import styled from "styled-components";

import Wrapper from "./Helpers/Wrapper.js";

function LeftSide() {
  return (
    <Wrapper>
      <Lside>
        <LsideHead>
          <p
            style={{
              marginBottom: "0",
              paddingTop: "2px",
              paddingBottom: "2px"
            }}
          >
            Spaces Tags
          </p>
        </LsideHead>
        <LsideMainContent>
          <i className="fas fa-school"></i>
          <p>Studying</p>
        </LsideMainContent>
        <br />
        <LsideMainContent>
          <i className="fas fa-user-astronaut"></i>
          <p>Astrophysics</p>
        </LsideMainContent>
        <br />
        <LsideMainContent>
          <i className="fas fa-paste"></i>
          <p>Exams</p>
        </LsideMainContent>
        <br />
        <LsideMainContent>
          <i className="fas fa-flag"></i>
          <p>India</p>
        </LsideMainContent>
        <br />
        <LsideMainContent>
          <i className="fas fa-flask"></i>
          <p>Science</p>
        </LsideMainContent>
        <br />
        <LsideMainContent>
          <i className="fas fa-laptop"></i>
          <p>Engineering</p>
        </LsideMainContent>
        <br />
        <LsideMainContent>
          <i className="fas fa-book-reader"></i>
          <p>Books</p>
        </LsideMainContent>
        <br />
        <LsideMainContent>
          <i className="fas fa-graduation-cap"></i>
          <p>College</p>
        </LsideMainContent>
      </Lside>
    </Wrapper>
  );
}

export default LeftSide;

const Lside = styled.div`
  flex: 0.15;
  background-color: white;
  text-align: left;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const LsideHead = styled.div`
  padding-top: 2px;
  padding-left: 15%;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
  opacity: 1;
  background-color: #6b0f1a;
  background-image: linear-gradient(74deg, #6b0f1a 0%, #b91372 74%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const LsideMainContent = styled.div`
  display: flex;
  padding-left: 15%;
  font-size: 14px;
  font-weight: bolder;
  opacity: 0.9;
`;
