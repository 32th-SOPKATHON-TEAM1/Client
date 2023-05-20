import React from 'react'
import { styled } from 'styled-components'

export default function Question1({setStep}) {
  const moveToStep2 = () => {
    setStep(2);
  }

  return (
      <>
      <St.AskWrapper>
        <St.AskName> Q.당신의 이름은? </St.AskName>
        <St.AnswerName type='text'/>
        <St.ButtonContainer>
          <button> 이전 </button>
          <button onClick={() => moveToStep2()}> 다음 </button>
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
    
  `,
  AnswerName : styled.input`
    
  `,
  ButtonContainer : styled.div`
  display: flex;
  flex-direction: row;
  background-color: red;
  
    
  `
}
