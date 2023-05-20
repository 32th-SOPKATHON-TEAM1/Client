import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "../common/button";
import { useRecoilState } from "recoil";
import { clickedEmotion, emotionData } from "../../recoil/emotion";

export default function Question4({ setStep }) {
  const [emotion, setEmotion] = useRecoilState(emotionData);
  const [clickedMood, setClickedMood] = useRecoilState(clickedEmotion);
  const [isClicked, setIsClicked] = useState(false);
  const moveToStep3 = () => {
    setStep(3);
  };
  const moveToStep5 = () => {
    setStep(5);
  };

  useEffect(() => {
    console.log(emotion);
  }, [emotion]);

  const ClickedEmotionBtn = (e, id) => {
    setIsClicked(true);
    const newEmotions = [...emotion.emotions];
    newEmotions.push(id);
    console.log("newEmotions", newEmotions);
    setEmotion((prev) => ({ ...prev, emotions: newEmotions }));
  };

  return (
    <>
      <St.AskWrapper>
        <St.AskName>
          <p> 알려주셔서 고마워요. </p>
          <p> 어떤 기쁨이었죠? </p>
        </St.AskName>
        <St.QuestionContainer>
          {clickedMood.map((item) => (
            <St.Questions onClick={(e) => ClickedEmotionBtn(e, item.id)} key={item.id} value={item.detailEmotion}>
              {item.detailEmotion}
            </St.Questions>
          ))}
        </St.QuestionContainer>
        <St.ButtonContainer>
          <Button width={50} text="이전" onClick={moveToStep3} />
          <Button width={50} text="다음" onClick={moveToStep5} />
        </St.ButtonContainer>
      </St.AskWrapper>
    </>
  );
}

const St = {
  AskWrapper: styled.section`
    display: flex;
    flex-direction: column;
  `,
  AskName: styled.h1`
    font-size: 20px;
  `,
  QuestionContainer: styled.section`
    display: flex;
    flex-wrap: wrap;
  `,
  Questions: styled.button`
    width: 50%;
    border: black 2px solid;
    padding: 2px;
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;
  `,
};
