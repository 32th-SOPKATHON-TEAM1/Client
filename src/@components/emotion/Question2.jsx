import React from 'react'
import { styled } from 'styled-components';

export default function Question2({setStep}) {
  const moveToStep1 = () => {
    setStep(1);
  }
  const moveToStep3 = () => {
    setStep(3);
  }

  return (
      <>
      <St.AskWrapper>
        <St.AskName> Step2 </St.AskName>
        <St.QuestionContainer> 
          <St.Questions>질문1</St.Questions>
          <St.Questions>질문2</St.Questions>
          <St.Questions>질문3</St.Questions>
          <St.Questions>질문4</St.Questions>
        </St.QuestionContainer>
        <St.ButtonContainer>
          <button onClick={moveToStep1}> 이전 </button>
          <button onClick={moveToStep3}> 다음 </button>
        </St.ButtonContainer>
      </St.AskWrapper>
      </>
  )
}

const St = {
  AskWrapper : styled.section`
    display: flex;
    flex-direction: column;
  `,
  AskName : styled.h1 `
  font-size: 20px;
    
  `,
  QuestionContainer: styled.section `
    display: flex;
    flex-wrap: wrap;
  `,
  Questions: styled.article `
  width: 50%;
  border: black 2px solid;
  padding: 2px;
  `,
    ButtonContainer : styled.div`
  display: flex;
  flex-direction: row;
  background-color: red;
  `
}