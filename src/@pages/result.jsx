import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styled from "styled-components";
import resultBtn1 from "../assets/bomi/result1.svg";
import resultBtn2 from "../assets/bomi/result2.svg";
import BackgroundImg from "../assets/bomi/result_bg.svg";

import testImg from "../assets/bomi/testImg.svg";

import { useRecoilValue } from "recoil";
import { responseEmotion } from "../recoil/emotion";

export default function Result() {
  const [photos, setPhotos] = useState();
  const data = useRecoilValue(responseEmotion);

  console.log(data);

  // 버튼 컴포넌트 라우팅
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/`);
  };
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
  const baseUrl = `https://emotion-studio.netlify.app/`; //배포 시 절대 경로 설정

  // 사진 및 이름 상태 가져오기
  //   const id = useRecoilValue(); // recoil에서 id 받아오기
  //   async function fetchPhotoInfo() {
  //     const response = await getPhotoInfo(id);
  //     setPhotos(response);
  //   }
  //   useEffect(() => {
  //     fetchPhotoInfo();
  //     console.log(photos);
  //   }, []);

  return (
    <>
      <PrintingImgWrapper>
        <PolaroidUserName>
          <p>{data?.name}님,</p>
          <p>촬영한 사진이에요</p>
        </PolaroidUserName>
        <Polaroid>
          <Img src={data?.imgUrl} alt="프린팅이미지" />
          <Caption>{data?.title}</Caption>
        </Polaroid>
        <ShareButtonContainer>
          <ShareButton
            src={resultBtn1}
            alt="내 사진 공유하기"
            onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}></ShareButton>
          <ShareButton src={resultBtn2} alt="사진 다시 찍기" onClick={handleNavigate}></ShareButton>
        </ShareButtonContainer>
      </PrintingImgWrapper>
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
const PrintingImgWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PolaroidUserName = styled.h1`
  margin-top: 80px;
  margin-bottom: 32px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  text-align: center;

  /* black1 */

  color: #171819;
`;
const Polaroid = styled.article`
  position: relative;

  width: 292px;
  height: 353px;
  background: #ffffff;

  border: 1px solid #8a9299;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
`;

const Img = styled.img`
  position: absolute;

  margin: 20px 20px 0px 20px;
  width: 252px;
  height: 252px;
`;
const Caption = styled.span`
  position: absolute;
  width: 100%;

  margin: 285px 187px 38px 20px;

  font-family: "AnSsangCe";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 30px;
  /* identical to box height, or 43% */

  color: #000000;
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
