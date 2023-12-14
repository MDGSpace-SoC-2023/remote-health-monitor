import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
const Question = ({ ques, ans }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Box style={{ minHeight: `${showInfo ? "4rem" : "2rem"}` }}>
      <QuestionContainer>
        <QuestionDiv>{ques}</QuestionDiv>
        <Button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </Button>
      </QuestionContainer>
      {showInfo && <Ans>{ans}</Ans>}
    </Box>
  );
};

export default Question;

const Box = styled.div`
  width: 45%;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: blue;
  display: flex;
  flex-direction: column;
  background-color: #4b92da33;
  &:hover {
    background-color: #4b92da;
  }
  @media (max-width: 700px) {
    min-width: 80%;
  }
  @media (max-width: 400px) {
    min-width: 100%;
  }
`;

const QuestionContainer = styled.header`
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const QuestionDiv = styled.div`
  display: flex;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const Ans = styled.div`
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: flex-start;
  border-radius: 0 0 0.5rem 0.5rem;
  width: 100%;
  background-color: #00172ecc;
`;
