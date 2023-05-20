import React from "react";
import { keyframes, styled } from "styled-components";
import imgSrc from "../../assets/image/polaroidImg.png";

export default function PrintingImg() {
  // const imgSrc = "https://item.kakaocdn.net/do/dbcd799aac800f6a680f1d2b04cee5688f324a0b9c48f77dbce3a43bd11ce785";

  return (
    <>
      <Printer />
      <PrintingImgWrapper>
        <Polaroid>
          <Img src={imgSrc} alt="프린팅이미지" />
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

  width: 33rem;
  height: 7rem;

  background-color: grey;
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
  align-items: center;

  width: 292px;
  height: 353px;
  padding-top: 20px;

  /* width: 30rem;
  height: 40rem;
  padding-bottom: 8rem; */

  border: 1px solid #cccccc;
`;

const Img = styled.img`
  width: 25.2rem;
  height: 25.2rem;

  border: 1px solid black;
`;
