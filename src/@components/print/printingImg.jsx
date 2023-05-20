import React from "react";
import { styled } from "styled-components";

export default function PrintingImg(props) {
  const { name, imgSrc, title } = props;

  return (
    <>
      <p>{name}의 감정사진이에요</p>
      <PrintingImgWrapper>
        <Img src={imgSrc} alt="프린팅이미지" />
        <p>{title}</p>
      </PrintingImgWrapper>
    </>
  );
}

const PrintingImgWrapper = styled.section`
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
