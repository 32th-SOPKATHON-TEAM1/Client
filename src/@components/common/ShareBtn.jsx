import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function ShareBtn() {
  const location = useLocation();

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
      <ShareButton onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}>공유하기</ShareButton>
    </>
  );
}

const ShareButton = styled.div``;
