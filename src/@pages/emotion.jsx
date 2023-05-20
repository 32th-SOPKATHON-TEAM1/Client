import React, { useState } from "react";
import StepRender from "../@components/emotion/StepRenderer"
import ProgressBar from "../@components/common/progressBar";
import { styled } from "styled-components";

export default function Emotion() {
  const [step, setStep] = useState(1);
  return (
    <St.EmotionWrapper>
      <ProgressBar step={step} />
      <StepRender step={step} setStep={setStep} />
    </St.EmotionWrapper>
  );
}

const St = {
  EmotionWrapper : styled.section`
    width: 100%;
    height: 800px;
  `
}
