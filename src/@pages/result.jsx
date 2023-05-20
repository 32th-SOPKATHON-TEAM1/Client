import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import ShareButton from "../@components/common/shareButton";

export default function Result() {
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
  const baseUrl = `http://localhost:5173`; //배포 시 절대 경로 설정

  return (
    <>
      <PrintingImgWrapper>
        <p>김대덕님의 감정사진이에요</p>
        <Polaroid>
          {/* <Img src={imgSrc} alt="프린팅이미지" /> */}
          <p>이얏후~!</p>
        </Polaroid>
        <ShareButton text={`내 사진 공유하기`} onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)} />
        <ShareButton text={`사진 다시 찍기`} onClick={handleNavigate} />
      </PrintingImgWrapper>
    </>
  );
}

const PrintingImgWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Polaroid = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30rem;
  height: 40rem;
  padding-bottom: 8rem;

  border: 1px solid black;
`;

const Img = styled.img`
  width: 25rem;
  height: 25rem;

  border: 1px solid black;
`;
