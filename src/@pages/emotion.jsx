import React, { useState } from "react";
import StepRender from "../@components/emotion/StepRenderer";
import ProgressBar from "../@components/common/progressBar";
import BackgroundImg from "../assets/image/backgroundImg.png";
import { styled } from "styled-components";

export default function Emotion() {
  const [step, setStep] = useState(1);
  return (
    <>
      <ProgressBar step={step} />
      <StepRender step={step} setStep={setStep} />
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
