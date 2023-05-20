import React from 'react'
import { styled } from 'styled-components';

export default function Question3({setStep}) {
  const moveToStep2 = () => {
    setStep(2);
  }
  const moveToStep4 = () => {
    setStep(4);
  }

  return (
      <>
      <St.AskWrapper>
        <St.AskName> Step3 </St.AskName>
        <St.QuestionContainer> 
          <div>질문1</div>
          <div>질문2</div>
          <div>질문3</div>
          <div>질문4</div>

        </St.QuestionContainer>
        <St.ButtonContainer>
          <button onClick={moveToStep2}> 이전 </button>
          <button onClick={moveToStep4}> 다음 </button>
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
  QuestionContainer: styled.article `
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 50%;
      border: black 2px solid;
      padding: 2px;
    }
    
  `,
  ButtonContainer : styled.div`
  display: flex;
  flex-direction: row;
  background-color: red;
  `
}