import React, {useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Button from '../common/button';
import { useRecoilState } from 'recoil';
import { clickedEmotion, emotionData } from '../../recoil/emotion';
import {HAPPY, SCARED, SORROWFUL, UNPLEASANT, detailEmotions} from '../../core/emotionsList';

export default function Question3({setStep}) {
  const [emotion, setEmotion]=useRecoilState(emotionData);
  const [clickedMood, setClickedMood]=useRecoilState(clickedEmotion);

  const [isClicked, setIsClicked] = useState(false);

  const moveToStep2 = () => {
    setStep(2);
  }
  const moveToStep4 = (e) => {  
    setStep(4);
  }

  const ClickedEmotionBtn = (e, id) => {
    setIsClicked(true);
    const newEmotions=[...emotion.emotions]
    newEmotions.push(id)
    console.log("newEmotions", newEmotions)
    setEmotion((prev)=>({...prev, emotions: newEmotions})) 
    setClickedMood(e.target.value)
  }

  useEffect(() => {
    ChangeName(clickedMood)
  }, [clickedMood])

  const ChangeName = (clickedMood) => {
    switch (clickedMood) {
        case "기쁨":
          return setClickedMood(HAPPY)
        case "두려움":
          return setClickedMood(SCARED)
        case "불쾌":
          return setClickedMood(UNPLEASANT)
        case "슬픔":
          return setClickedMood(SORROWFUL)
    }
  }



  return (
    <>
    <St.AskWrapper>
      <St.AskName> Step3. 오늘 기분 어땠삼 </St.AskName>
      <St.QuestionContainer> 
        {detailEmotions.map((item) => (
        <St.Questions onClick={(e)=>ClickedEmotionBtn(e, item.id)} key={item.id} value={item.emotion}>{item.emotion}</St.Questions>
          ))} 
      </St.QuestionContainer>
      <St.ButtonContainer>
        <Button isClicked={isClicked} width={50} text="이전" onClick={moveToStep2}/>
        <Button isClicked={isClicked} width={50} text="다음" onClick={moveToStep4}/>
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
      background-color: ${props => props.isClicked ? 'red' : 'blue'};
`,
ButtonContainer : styled.div`
display: flex;
flex-direction: row;
`
}
