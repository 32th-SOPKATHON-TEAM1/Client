import React, { useRef } from 'react'
import { styled } from 'styled-components';
import Button from '../common/button';
import { useRecoilState } from 'recoil';
import { emotionData } from '../../recoil/emotion';
import next_btn from  '../../assets/image/next_btn.png'
import previous_btn from  '../../assets/image/previous_btn.png'

export default function Question2({setStep, name}) {
  const [emotion, setEmotion]=useRecoilState(emotionData);

  const moveToStep1 = () => {
    setStep(1);
  }
  const moveToStep3 = () => {
    setEmotion((prev)=>({...prev, title: todayRef.current.value})) 
    setStep(3);
  }

  
  const todayRef=useRef(null);

  return (
    <>
    <St.AskWrapper>
        <St.QuestionContainer>
          <p> {name} 님, </p>
          <p> 오늘 하루는 어땠나요? </p>
          <p> 한 줄로 이야기해 주세요. </p>
          <p>ㅤㅤㅤㅤㅤ</p>
          <p> 이게 사진의 이름이 될 거예요.</p>
        </St.QuestionContainer>
      <St.AnswerName placeholder='오늘 하루를 정리해주세요.' type='text' ref={todayRef}/>
        <St.ButtonContainer>
          <img className="prev_btn" src={previous_btn} onClick={moveToStep1} />
          <img className="next_btn" src={next_btn}  onClick={moveToStep3}  />
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

  QuestionContainer : styled.article `
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 40px;
  background: linear-gradient(120.7deg, rgba(255, 255, 255, 0.8) 5.47%, rgba(255, 255, 255, 0) 100%),
linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));

  `,

  AnswerName : styled.input`
  box-sizing: border-box;
  margin: 55px 0px;
  padding: 10px;
  
  background: rgba(255, 255, 255, 0.5);

  height: 50px;
  width: 100%;
  border-radius: 12px;

  
  border: 1px solid #FFFFFF;
  box-shadow: 0px 0px 4px 3px rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  `,

ButtonContainer : styled.div`
display: flex;
  justify-content: center;

.prev_btn {
  height: 70;
  width: 104px;
  border-radius: 0px;

}
.next_btn {
  height: 70px;
  width: 220px;
  border-radius: 0px;

}
  `
}