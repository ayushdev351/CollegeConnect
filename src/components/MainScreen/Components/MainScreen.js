import "../styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header.js";
import LeftSide from "./LeftSide.js";
import MainBody from "./Main.js";

import Spaces from "./Spaces.js";
import Questions from "./Question/Questions.js";
import Notifs from "./Notifications.js";
import Profile from "./Profile.js";

function MainScreen(props) {
  return (
    <Router>
      <Header />
      <Body>
        <LeftSide />
        <Route path="/" component={MainBody} exact />
        <Route path="/questions" component={Questions} />
        <Route path="/spaces" component={Spaces} />
        <Route path="/notifications" component={Notifs} />
        <Route path="/profile" component={Profile} />
      </Body>
    </Router>
  );
}

export default MainScreen;

const Body = styled.div`
  display: flex;
  height: 90vh;
  padding-top: 52px;
  overflow-y: hidden;
`;
