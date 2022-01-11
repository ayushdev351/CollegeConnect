import React from "react";
import styled from "styled-components";

function RightSide() {
  return (
    <Right>
      <RightHead>Current Events</RightHead>

      <RightContent>
        <h4 style={{ backgroundColor: "yellow", marginTop: "10px" }}>
          <a href="https://galgotiacollege.edu/">
            7 B Tech programs now accredited by NBA till 2023-24
          </a>
        </h4>
        <h4 style={{ backgroundColor: "#00FFFF" }}>
          <a href="https://galgotiacollege.edu/assets/pdfs/Brochure-SBP-2022.pdf">
            International Conference SBP-22 to be Organised
          </a>
        </h4>
        <h4 style={{ backgroundColor: "#00FF33" }}>
          <a href="https://galgotiacollege.edu/">
            Ongoing classes to be commenced Online till 15/01/22
          </a>
        </h4>
        <h4 style={{ backgroundColor: "#FF0099" }}>
          <a href="https://galgotiacollege.edu/assets/pdfs/Brochur-SBP-2022.pdf">
            'Sustainable Business Practices-22 on 27th and 28th January 2022
          </a>
        </h4>
        <h4>
          <a href="https://galgotiacollege.edu/curriculum-study-material-of-b-tech-i-year">
            Curriculum Study Material & PYQ for Btech First Year
          </a>
        </h4>
      </RightContent>
    </Right>
  );
}

export default RightSide;

const RightHead = styled.div`
  padding-top: 2px;
  height: 22px;
  color: white;
  font-weight: bold;
  background-color: #6b0f1a;
  background-image: linear-gradient(74deg, #6b0f1a 0%, #b91372 74%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Right = styled.div`
  flex: 0.15;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const RightContent = styled.div`
  width: 80%;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 10px;
  background-color: #c4aead;
  border-radius: 8px;

  > h4 {
    padding: 7px;
    margin: 15px 10px;
    background-color: white;
    border-radius: 5px;
  }
`;
