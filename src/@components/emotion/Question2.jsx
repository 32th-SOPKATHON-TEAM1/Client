import React from 'react'
import { styled } from 'styled-components';
import Button from '../common/button';

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
      <St.AskBox>
        <St.QuestionContainer>
          <p> 김솝트 님, </p>
          <p> 오늘 하루는 어땠나요? </p>
          <p> 한 줄로 이야기해 주세요. </p>
          <p> 이게 사진의 이름이 될 거예요.</p>
        </St.QuestionContainer>
      </St.AskBox>
      <St.AnswerName type='text'/>
      <St.ButtonContainer>
        <Button width={50} text="이전" onClick={moveToStep1}/>
        <Button width={50} text="다음" onClick={moveToStep3}/>
      </St.ButtonContainer>
    </St.AskWrapper>
    </>
  )
}

const St = {
  AskWrapper : styled.section`
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(250, 202, 79, 0) 0%, #B5DFF7 100%);
  `,
  AskBox : styled.div`
    font-size: 16px;
    width: 272px;
    height: 210px;
    border: solid 2px #000000;
    background-color: #fff;
  `,

  QuestionContainer : styled.article `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 45px;
  `,

  AnswerName : styled.input`
    
  `,

  ButtonContainer : styled.div`
  display: flex;
  flex-direction: row;
  background-color: red;
  `
}