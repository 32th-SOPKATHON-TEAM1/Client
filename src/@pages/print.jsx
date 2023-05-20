import React, { useEffect, useState } from "react";
import PrintingImg from "../@components/print/printingImg";
import { keyframes, styled } from "styled-components";
import BackgroundImg from "../assets/image/backgroundImg.png";
import BackImg from "../assets/image/printerBack.png";

export default function Print() {
  const [isImg, setIsImg] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsImg(true);
    }, "4000");
  }, []);
  return (
    <>
      <PrintingImg />
      {!isImg && <Back src={BackImg} alt="뒤" />}
      <Background />
    </>
  );
}

const Fadeout = keyframes`
 50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Back = styled.img`
  width: 33.6rem;
  /* animation: ${Fadeout} 6s; */
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
