import React from "react";
import { styled } from "styled-components";

export default function PrintingImg(props) {
  const { name, imgSrc, title } = props;

  return (
    <>
      <PrintingImgWrapper>
        <Img src={imgSrc} alt="프린팅이미지" />
        <p>{name}</p>
      </PrintingImgWrapper>
    </>
  );
}

const PrintingImgWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30rem;
  height: 40rem;

  border: 1px solid black;
`;

const Img = styled.img`
  width: 25rem;
  height: 25rem;
  margin-bottom: 8rem;

  border: 1px solid black;
`;
