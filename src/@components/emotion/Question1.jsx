import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import Button from '../common/button';
import { useRecoilState } from 'recoil';
import { emotionData } from '../../recoil/emotion';

export default function Question1({setStep}) {
  const [emotion, setEmotion]=useRecoilState(emotionData);
  const moveToStep2 = () => {
    setEmotion((prev)=>({...prev, name: nameRef.current.value})) 
    setStep(2);
  }
  const nameRef=useRef(null);
  
  useEffect(() => {
    console.log(emotion)
  }, [emotion])



  return (
      <>
      <St.AskWrapper>
        <St.AskBox>
          <St.QuestionContainer>
            <p> 반가워요. </p>
            <p> 저는 당신이 오늘 느낀 감정을 한 장의 사진으로 전달해 드릴 사진사 로버트입니다. </p>
            <p> 먼저 당신의 이름을 알려주시겠어요? </p>
          </St.QuestionContainer>
        </St.AskBox>
        <St.AnswerName type='text' ref={nameRef}/>
        <St.ButtonContainer>
          <Button width={50} text="이전"/>
          <Button width={50} text="다음" onClick={moveToStep2}/>
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
