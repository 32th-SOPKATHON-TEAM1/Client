import React from "react";
import PrintingImg from "../@components/print/printingImg";
import { styled } from "styled-components";
import BackgroundImg from "../assets/image/backgroundImg.png";

export default function Print() {
  return (
    <>
      <PrintingImg />
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
