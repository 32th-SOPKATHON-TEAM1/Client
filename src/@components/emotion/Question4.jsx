import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Button from '../common/button';
import { useRecoilState } from 'recoil';
import { clickedEmotion, emotionData } from '../../recoil/emotion';
import next_btn from  '../../assets/image/next_btn.png'
import previous_btn from  '../../assets/image/previous_btn.png'


export default function Question4({setStep, propsName}) {
  const [emotion, setEmotion]=useRecoilState(emotionData);
  const [clickedMood, setClickedMood]=useRecoilState(clickedEmotion);
  const [isClicked, setIsClicked] = useState(false);
  const [id, setId] = useState(-1)
  const moveToStep3 = () => {
    setStep(3);
  }
  const moveToStep5 = () => {
    setStep(5);
  }

  useEffect(()=>{
    console.log(emotion)
  }, [emotion])

  const ClickedEmotionBtn = (e, id) => {
    setIsClicked(true);
    setId(id);
    const newEmotions=[...emotion.emotions]
    newEmotions.push(id)
    setEmotion((prev)=>({...prev, emotions: newEmotions})) 
  }

  return (
      <>
      <St.AskWrapper>
        <St.AskName> 
          <p> 알려주셔서 고마워요. </p>
          <p> 어떤 {propsName}이었죠? </p>
        </St.AskName>
        <St.QuestionContainer> 
        {clickedMood.map((item) => (
        <St.Questions isClicked={item.id === id} onClick={(e)=>ClickedEmotionBtn(e, item.id)} key={item.id} value={item.detailEmotion}>{item.detailEmotion}</St.Questions>
          ))} 
        </St.QuestionContainer>
      <St.ButtonContainer>
          <img className="prev_btn" src={previous_btn} onClick={moveToStep3} />
          <img className="next_btn" src={next_btn}  onClick={moveToStep5}  />
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
  margin-bottom: 30px;
    
  `,
  QuestionContainer: styled.section `
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px
`,
  Questions: styled.button `
  height: 50px;
  width: 158px;
  left: 0px;
  top: 0px;
  border-radius: 12px;
  background: linear-gradient(120.7deg, rgba(255, 255, 255, 0.8) 5.47%, rgba(255, 255, 255, 0) 100%),
  linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  margin: 5px 5px;
  border: ${({isClicked}) => (isClicked ? '1px solid rgba(113, 123, 214, 1)' : '1px solid rgba(255, 255, 255, 1);')};
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
`,
}