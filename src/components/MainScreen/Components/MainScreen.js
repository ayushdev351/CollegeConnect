import "../styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header.js";
import LeftSide from "./LeftSide.js";
import MainBody from "./Main.js";
import RightSide from "./RightSide.js";

import Spaces from "./Spaces.js";
import Questions from "./Question/Questions.js";
import Admin from "./Admin.js";
import Profile from "./Profile.js";

import Studying from "./Studying.js";
import Exams from "./Exams.js";

function MainScreen(props) {
  return (
    <Router>
      <Header />
      <Body>
        <LeftSide />
        <Route path="/" component={MainBody} exact />
        <Route path="/questions" component={Questions} />
        <Route path="/spaces" component={Spaces} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin" component={Admin} />
        <Route path="/studying" component={Studying} />
        <Route path="/exams" component={Exams} />
        <RightSide />
      </Body>
    </Router>
  );
}

export default MainScreen;

const Body = styled.div`
  display: flex;
  height: 92.5vh;
  padding-top: 52px;
  overflow-y: hidden;
`;
