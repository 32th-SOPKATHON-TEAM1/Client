import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Button from '../common/button';

export default function Question3({setStep}) {
  const [mood, setMood] = useState("");
  const moveToStep2 = () => {
    setStep(2);
  }
  const moveToStep4 = () => {
    setStep(4);
  }

  const moveToDetailMood = (e) => {
    setMood(e.target.value);
  }

  useEffect(() => {
    console.log(mood)
  }, [mood] )


  return (
    <>
    <St.AskWrapper>
      <St.AskName> Step3. 오늘 기분 어땠삼 </St.AskName>
      <St.QuestionContainer> 
        <St.Questions value="Happy" onClick={(e) => moveToDetailMood(e)}>기쁨</St.Questions>
        <St.Questions value="Scared" onClick={(e) => moveToDetailMood(e)}>두려움</St.Questions>
        <St.Questions value="Bad" onClick={(e) => moveToDetailMood(e)}>불쾌</St.Questions>
        <St.Questions value="Sad" onClick={(e) => moveToDetailMood(e)}>슬픔</St.Questions>
      </St.QuestionContainer>
      <St.ButtonContainer>
        <Button width={50} text="이전" onClick={moveToStep2}/>
        <Button width={50} text="다음" onClick={moveToStep4}/>
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
Questions: styled.button `
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
