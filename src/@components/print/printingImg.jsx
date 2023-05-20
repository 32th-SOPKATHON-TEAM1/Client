import React from "react";
import { keyframes, styled } from "styled-components";
import imgSrc from "../../assets/image/polaroidImg.png";
import printerFront from "../../assets/image/printerFront.png";

export default function PrintingImg() {
  return (
    <>
      <Front src={printerFront} alt="프린터앞" />
      <PrintingImgWrapper>
        <Polaroid>
          <Img src={imgSrc} alt="프린팅이미지" />
        </Polaroid>
      </PrintingImgWrapper>
    </>
  );
}

const Front = styled.img`
  position: absolute;
  z-index: 3;

  width: 33.6rem;
`;

const PrintImg = keyframes`
 from {
		transform: translate(0, -30rem);
    }
    to {
        transform: translate(0, 35rem);
    }
`;

const Printer = styled.div`
  /* position: absolute;
  z-index: ; */

  width: 33.6rem;
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

  position: absolute;
  z-index: 2;

  /* width: 30rem;
  height: 40rem;
  padding-bottom: 8rem; */

  background-color: white;
  border: 1px solid #cccccc;
`;

const Img = styled.img`
  width: 25.2rem;
  height: 25.2rem;

  border: 1px solid black;
`;
