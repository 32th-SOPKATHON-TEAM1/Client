import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import landingBtn1 from "../assets/bomi/landing01.svg";
import landingBtn2 from "../assets/bomi/landing02.svg";
import BackgroundImg from "../assets/bomi/lading_bg.svg";
import landingTitle from "../assets/bomi/landing_title.svg";
import landingMain from "../assets/bomi/landing_main.svg";

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
      <LandingPageWrapper>
        <LandingMain src={landingMain} alt="랜딩 이미지" />
        <LandingTitle src={landingTitle} alt="랜딩 타이틀" />
        <LandingContent>
          <span>속마음을 사진으로 담아내는</span>
          <span>로버트의 사진관에 오신 것을 환영해요.</span>
        </LandingContent>
        <ShareButtonContainer>
          <ShareButton src={landingBtn1} alt="사진 인화하기" onClick={handleNavigate}></ShareButton>
          <ShareButton
            src={landingBtn2}
            alt="URL 공유"
            onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}></ShareButton>
        </ShareButtonContainer>
      </LandingPageWrapper>
      <Background />
    </>
  );
}
const Background = styled.div`
  width: 360px;
  height: 800px;

  position: absolute;
  z-index: -1;
  top: 0;
  margin-left: -1.4rem;

  background-image: url(${BackgroundImg});
`;
const LandingPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LandingMain = styled.img`
  width: 180px;
  height: 200px;
  margin-top: 100px;
`;
const LandingTitle = styled.img`
  margin: 33px 0px 24px 0px;
`;
const LandingContent = styled.h3`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;

  text-align: center;

  color: #171819;
`;
const ShareButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 60px 16px 12px 16px;
`;
const ShareButton = styled.img``;
