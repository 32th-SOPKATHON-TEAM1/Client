import React from 'react'
import { styled } from 'styled-components';
import Button from '../common/button';


export default function Question5({setStep}) {
    const moveToStep4 = () => {
      setStep(4);
    }
  const moveToStep6 = () => {
    setStep(6);
  }

  return (
      <>
      <St.AskWrapper>
        <St.AskName> Step5. 오늘의 일은 </St.AskName>
        <St.QuestionContainer> 
          <St.Questions>평생 간직하고 싶어요.</St.Questions>
          <St.Questions>친구들과 나누고 싶어요.</St.Questions>
          <St.Questions>오늘까지만 기억할래요.</St.Questions>
          <St.Questions>없던 일이었으면 좋겠어요</St.Questions>
        </St.QuestionContainer>
        <St.ButtonContainer>
          <Button width={50} text="이전" onClick={moveToStep4}/> 
          <Button width={50} text="다음" onClick={moveToStep6}/>        
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
