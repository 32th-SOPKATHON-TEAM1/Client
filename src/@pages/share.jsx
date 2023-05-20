import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import ShareButton from "../@components/common/shareButton";

export default function Share() {
  // const location = useLocation();

  // const handleCopyClipBoard = async (text) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     alert("클립보드에 링크가 복사되었어요.");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const baseUrl = `http://localhost:5173`; //배포 시 절대 경로 설정
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/`);
  };

  return (
    <>
      <ShareButton
        text={`나도 사진 찍으러 가기`}
        // onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}
        onClick={handleNavigate}></ShareButton>
    </>
  );
}
