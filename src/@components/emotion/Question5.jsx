import React, { useEffect, useState} from 'react'
import { styled } from 'styled-components';
import Button from '../common/button';
import { useRecoilState } from 'recoil';
import { emotionData } from '../../recoil/emotion';
import {Today} from '../../core/emotionsList';
import axios from 'axios';
import { postEmotionData } from '../../api/emotion';
import last_btn from  '../../assets/image/last_btn.png'
import previous_btn from  '../../assets/image/previous_btn.png'
import { useNavigate } from 'react-router-dom';


export default function Question5({setStep}) {
    const [emotion, setEmotion]=useRecoilState(emotionData);
    const [isClicked, setIsClicked] = useState(false);
    const [id, setId] = useState(-1)

    const moveToStep4 = () => {
        setStep(4);
    }
    const navigate = useNavigate();
    const MoveToPrint = () => {
      navigate(`/Print`);
    }
    
const ClickedEmotionBtn = (e, id) => {
    setIsClicked(true);
    setId(id);
    const newEmotions=[...emotion.emotions]
    newEmotions.push(id)
    console.log("newEmotions", newEmotions)
    setEmotion((prev)=>({...prev, emotions: newEmotions})) 

    lastEmotionData()
    }

  useEffect(() => {
    console.log(emotion)
  }, [emotion] )


    async function lastEmotionData() {
        const response = await postEmotionData(emotion);
        console.log(response)
    }
  return (
      <>
      <St.AskWrapper>
        <St.AskName> 오늘의 일은 </St.AskName>
        <St.QuestionContainer> 
        {Today.map((item) => (
        <St.Questions isClicked={item.id === id} onClick={(e)=>ClickedEmotionBtn(e, item.id)} key={item.id} value={item.sentence}>{item.sentence}</St.Questions>
          ))} 
        </St.QuestionContainer>
      <St.ButtonContainer>
          <img className="prev_btn" src={previous_btn} onClick={moveToStep4} />
          <img className="last_btn" src={last_btn} onClick={MoveToPrint} />
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
  flex-direction: column;
  margin-bottom: 50px
`,
  Questions: styled.button `
    height: 50px;
    width: 40s0px;
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
.last_btn {
  height: 70px;
  width: 220px;
  border-radius: 0px;
}
`
}
