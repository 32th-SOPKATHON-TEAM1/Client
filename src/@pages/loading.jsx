import React from "react";
import { styled } from "styled-components";
import BackgroundImg from "../assets/image/loadingBackground.png";
import { useRecoilValue } from "recoil";
import { emotionData } from "../recoil/emotionsList";
import { useNavigate } from "react-router-dom";

export default function Loading() {
  const data = useRecoilValue(emotionData);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/print");
    }, "4000");
  }, []);

  return (
    <LoadingWrapper>
      <p>{data.name}님의 이야기를 듣고,</p>
      <p>떠오른 이미지를 촬영했어요.</p>
      <Background />
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  padding-top: 34rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h1``;

const Background = styled.div`
  width: 360px;
  height: 800px;

  position: absolute;
  z-index: -1;
  top: 0;
  margin-left: -0.2rem;

  background-image: url(${BackgroundImg});
`;
