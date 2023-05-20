import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import ShareButton from "../@components/common/shareButton";

export default function Landing() {
  const location = useLocation();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/emotion`);
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
  const baseUrl = `http://localhost:5173`; //배포 시 절대 경로 설정

  return (
    <>
      <St.LandingWrapper>
        <St.LandingImg></St.LandingImg>
        <St.LandingTitle>나의 마음 사진관</St.LandingTitle>
        <St.LandingContent>속마음을 사진으로 담아내는 로버트의 사진관에 오신 것을 환영해요.</St.LandingContent>
        <ShareButton text={`사진 인화하기`} onClick={handleNavigate} />
        <ShareButton text={`URL 공유`} onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)} />
      </St.LandingWrapper>
    </>
  );
}

const St = {
  LandingWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 360px;
    height: 800px;
  `,
  LandingImg: styled.img``,
  LandingTitle: styled.h1`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */

    text-align: center;

    color: #000000;
  `,
  LandingContent: styled.h2`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */

    text-align: center;

    color: #000000;
  `,
  
};
