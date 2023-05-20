import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "../common/button";
import { useRecoilState } from "recoil";
import { emotionData, responseEmotion } from "../../recoil/emotion";
import { Today } from "../../core/emotionsList";
import axios from "axios";
import { postEmotionData } from "../../api/emotion";
import { useNavigate } from "react-router-dom";

export default function Question5({ setStep }) {
  const [emotion, setEmotion] = useRecoilState(emotionData);
  const [responseData, setResponseData] = useRecoilState(responseEmotion);
  const navigate = useNavigate();
  const [isBool, setIsBool] = useState(false);

  useEffect(() => {
    isBool && navigate("/loading");
  }, [isBool]);

  const moveToStep4 = () => {
    setStep(4);
  };
  const moveToStep6 = () => {
    setStep(6);
  };

  const ClickedEmotionBtn = (e, id) => {
    const newEmotions = [...emotion.emotions];
    newEmotions.push(id);
    console.log("newEmotions", newEmotions);
    setEmotion((prev) => ({ ...prev, emotions: newEmotions }));

    lastEmotionData(newEmotions);
  };

  useEffect(() => {
    console.log(emotion);
  }, [emotion]);

  //api 함수 호출해오는 함수 : api 통신하는 컴포넌트 안에서 사용
  async function lastEmotionData(newEmotions) {
    const response = await postEmotionData({ ...emotion, emotions: newEmotions });
    console.log(response);
    setResponseData(response);
    setIsBool(!isBool);
  }
  return (
    <>
      <St.AskWrapper>
        <St.AskName> Step5. 오늘의 일은 </St.AskName>
        <St.QuestionContainer>
          {Today.map((item) => (
            <St.Questions onClick={(e) => ClickedEmotionBtn(e, item.id)} key={item.id} value={item.sentence}>
              {item.sentence}
            </St.Questions>
          ))}
        </St.QuestionContainer>
        <St.ButtonContainer>
          <Button width={50} text="이전" onClick={moveToStep4} />
          <Button width={50} text="다음" onClick={moveToStep6} />
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
