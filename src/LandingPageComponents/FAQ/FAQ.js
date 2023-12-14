import React from "react";
import styled from "styled-components";
import data from "./data";
import Question from "./question.js";
import bgImg from "./bg.png";
const questions = data;
function FAQ() {
  return (
    <MainContainer>
      <Heading>FAQs</Heading>
      <Text>
        Explore the frequently asked questions (FAQs) below to find answers to
        common inquiries.
      </Text>
      <QuestionsDiv>
        {questions.map((question) => {
          return <Question key={question.id} {...question}></Question>;
        })}
      </QuestionsDiv>
    </MainContainer>
  );
}

const MainContainer = styled.div`
overflow-x: hidden;
  min-height: fit-content;
  overflow-y: auto;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  color: white;
  background: #0f2c4c url(${bgImg}) no-repeat center/cover;
  justify-content: center;
  align-items: center;
`;
const QuestionsDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 2.5rem 2rem;
  gap: 1rem 2rem;

  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 930px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const Heading = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  font-size: 3rem;
  font-weight: 600;
`;
const Text = styled.div`
  margin-bottom: 3rem;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  font-size: 0.9rem;
`;

export default FAQ;
