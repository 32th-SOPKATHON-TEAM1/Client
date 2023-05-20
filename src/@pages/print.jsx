import React from "react";
import PrintingImg from "../@components/print/printingImg";
import { styled } from "styled-components";
import BackgroundImg from "../assets/image/backgroundImg.png";
import BackImg from "../assets/image/printerBack.png";

export default function Print() {
  return (
    <>
      <PrintingImg />
      <Back src={BackImg} alt="뒤" />
      <Background />
    </>
  );
}

const Back = styled.img`
  width: 33.6rem;
`;
const Background = styled.div`
  width: 360px;
  height: 800px;

  position: absolute;
  z-index: -1;
  top: 0;
  margin-left: -1.4rem;

  background-image: url(${BackgroundImg});
`;
