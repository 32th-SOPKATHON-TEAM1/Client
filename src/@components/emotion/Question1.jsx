import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import Button from '../common/button';
import { useRecoilState } from 'recoil';
import { emotionData } from '../../recoil/emotion';
import ask_frame from '../../assets/image/ask_frame.png'
import next_btn from  '../../assets/image/next_btn.png'
import previous_btn from  '../../assets/image/previous_btn.png'
export default function Question1({setStep,setName}) {
  const [emotion, setEmotion]=useRecoilState(emotionData);
  const moveToStep2 = () => {
    setEmotion((prev)=>({...prev, name: nameRef.current.value})) 
    setStep(2);
  }
  const nameRef=useRef(null);
  
  useEffect(() => {
    console.log(emotion)
  }, [emotion])

  const getUserName = (e) => {
    setName(e.target.value)
  }


  return (
      <>
      <St.AskWrapper>
        <St.AskBox>
          <St.QuestionContainer>
            <img src={ask_frame} />
          </St.QuestionContainer>
        </St.AskBox>
        <St.AnswerName onChange={getUserName} placeholder='이름을 입력해주세요' type='text' ref={nameRef}/>
        <St.ButtonContainer>
          <img className="prev_btn" src={previous_btn} />
          <img className="next_btn" src={next_btn}  onClick={moveToStep2}  />
        </St.ButtonContainer>
      </St.AskWrapper>
      </>
  )
}

const St = {
  AskWrapper : styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  `,

  AskBox : styled.div`
    height: 210px;
    width: 272px;
    border-radius: 0px;
  `,

  QuestionContainer : styled.article `
    > img { 
      margin-left: 24px;
      width: 272px;
    }
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
  flex-direction: row;

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
