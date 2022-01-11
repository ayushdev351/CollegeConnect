import React from "react";
import styled from "styled-components";

function Exams() {
  return (
    <>
      <NotiStyle>
        <h1>Exams Related Artcles</h1>
        <Card>
          <h3>How to study during exams</h3>
          <p>
            Make sure you have enough space to spread your textbooks and notes
            out. Have you got enough light? Is your chair comfortable? Are your
            computer games out of sight? Try and get rid of all distractions,
            and make sure you feel as comfortable and able to focus as possible.
            For some people, this may mean almost complete silence, for others,
            background music helps. Some of us need everything completely tidy
            and organized in order to concentrate, while others thrive in a more
            cluttered environment. Think about what works for you, and take the
            time to get it right.While you may think it's best to study for as
            many hours as possible, this can actually be counterproductive. If
            you were training for a marathon, you wouldn't try and run 24 hours
            a day. Likewise, studies have shown that for long-term retention of
            knowledge, taking regular breaks really helps. Everyone's different,
            so develop a study routine that works for you. If you study better
            in the morning, start early before taking a break at lunchtime. Or,
            if you're more productive at nighttime, take a larger break earlier
            on so you're ready to settle down come evening. Try not to feel
            guilty about being out enjoying the sunshine instead of hunched over
            your textbooks. Remember Vitamin D is important for a healthy brain.
          </p>
        </Card>
      </NotiStyle>
    </>
  );
}

export default Exams;

const NotiStyle = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  background-color: #d8d8d8;
  height: 90vh;
  padding: 15px;
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;

  > h1 {
    width: 100%;
    background-color: darkgreen;
    border: solid 2px;
    text-align: center;
    padding: 5px 0;
    border-radius: 10px;
  }
`;

const Card = styled.div`
  margin: 2% 10%;
  background-color: white;
  border-radius: 10px;

  border: solid 3px;

  > p {
    padding: 20px;
  }

  h3 {
    background-color: lightgreen;
    padding: 5px;
    border-radius: 10px;
  }
`;
