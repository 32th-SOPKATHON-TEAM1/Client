import React from "react";
import { keyframes, styled } from "styled-components";

export default function PrintingImg(props) {
  const { name, imgSrc, title } = props;

  return (
    <>
      <Printer />
      <PrintingImgWrapper>
        <p>{name}의 감정사진이에요</p>
        <Polaroid>
          <Img src={imgSrc} alt="프린팅이미지" />
          <p>{title}</p>
        </Polaroid>
      </PrintingImgWrapper>
    </>
  );
}

const PrintImg = keyframes`
 from {
		transform: translate(0, -30rem);
    }
    to {
        transform: translate(0, 20rem);
    }
`;

const Printer = styled.div`
  position: absolute;
  z-index: 2;

  width: 34rem;
  height: 10rem;

  background-color: blue;
`;

const PrintingImgWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${PrintImg} 3s linear forwards;
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
