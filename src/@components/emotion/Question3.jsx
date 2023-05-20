import React, {useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Button from '../common/button';
import { useRecoilState } from 'recoil';
import { clickedEmotion, emotionData } from '../../recoil/emotion';
import {HAPPY, SCARED, SORROWFUL, UNPLEASANT, detailEmotions} from '../../core/emotionsList';
import next_btn from  '../../assets/image/next_btn.png'
import previous_btn from  '../../assets/image/previous_btn.png'

export default function Question3({setStep ,setPropsName}) {
  const [emotion, setEmotion]=useRecoilState(emotionData);
  const [clickedMood, setClickedMood]=useRecoilState(clickedEmotion);
  const [id, setId] = useState(-1)

  const [isClicked, setIsClicked] = useState(false);

  const moveToStep2 = () => {
    setStep(2);
  }
  const moveToStep4 = (e) => {  
    setStep(4);
  }

  const ClickedEmotionBtn = (e, id) => {
    setIsClicked(true);
    setId(id);
    const newEmotions=[...emotion.emotions]
    newEmotions.push(id)
    setPropsName(e.target.value)
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
        case "불쾌감":
          return setClickedMood(UNPLEASANT)
        case "슬픔":
          return setClickedMood(SORROWFUL)
    }
  }

  return (
    <>
    <St.AskWrapper>
      <St.AskName> 
        <p>알려주셔서 고마워요.</p>
        <p>오늘 기분은 어땠나요? </p>
      </St.AskName>
      <St.QuestionContainer> 
        {detailEmotions.map((item) => (
          <St.Questions isClicked={item.id===id} onClick={(e)=>ClickedEmotionBtn(e, item.id)} key={item.id} value={item.emotion}>{item.emotion}</St.Questions>
          ))} 
      </St.QuestionContainer>
      <St.ButtonContainer>
          <img className="prev_btn" src={previous_btn} onClick={moveToStep2} />
          <img className="next_btn" src={next_btn}  onClick={moveToStep4}  />
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
  margin-bottom: 60px;
`,
QuestionContainer: styled.section `
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 120px
`,
Questions: styled.button `
height: 50px;
width: 158px;
left: 0px;
top: 0px;
border-radius: 12px;
  background: linear-gradient(120.7deg, rgba(255, 255, 255, 0.8) 5.47%, rgba(255, 255, 255, 0) 100%),
  linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  border: ${({isClicked}) => (isClicked ? '1px solid rgba(113, 123, 214, 1)' : '1px solid rgba(255, 255, 255, 1);')};


  margin: 5px 5px;


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
