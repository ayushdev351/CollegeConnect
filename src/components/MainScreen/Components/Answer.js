import React from "react";
import styled from "styled-components";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function Answer({ answer }) {
  return (
    <Ans className="Ans">
      <Card>
        <CardBody>
          <AnsHead>
            <CardTitle>
              <p>
                {" "}
                <i className="fas fa-user"></i> {answer.userName}
              </p>
              <CardSubtitle>
                <span style={{ fontSize: "12px" }}>{answer.userCred}</span>
              </CardSubtitle>
            </CardTitle>
          </AnsHead>
          <Break></Break>
          <AnsQue>
            <p>{answer.ques}</p>
          </AnsQue>
          <AnsAns>
            <CardText>
              <p className="Answer" id="Answer">
                {answer.ans}
              </p>
            </CardText>
          </AnsAns>
        </CardBody>
      </Card>
    </Ans>
  );
}

export default Answer;

const Ans = styled.div`
  margin-top: 15px;
  padding-top: 10px;
  padding-left: 10px;
  margin-bottom: 8px;
  padding-right: 10px;
  border-radius: 8px;
  background-color: white;
`;

const AnsHead = styled.div`
  padding: 5px;
`;
const AnsQue = styled.div`
  font-size: 18px;
  font-weight: bolder;
  padding-bottom: 10px;
`;

const AnsAns = styled.div`
  /* height: 150px;
  overflow: hidden; */
  line-height: 1.5;
  padding-bottom: 15px;
`;

const Break = styled.div`
  background-color: #861657;
  background-image: linear-gradient(326deg, #861657 0%, #ec6f6f 74%);
  margin-top: 8px;
  margin-bottom: 15px;
  height: 3.5px;
  margin-left: -10px;
  margin-right: -10px;
  border-radius: 5px;
`;
