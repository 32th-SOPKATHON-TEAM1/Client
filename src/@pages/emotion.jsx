import React, { useState } from "react";
import StepRender from "../@components/emotion/StepRenderer"
import ProgressBar from "../@components/common/progressBar";

export default function Emotion() {
  const [step, setStep] = useState(1);
  return (
    <>
    <ProgressBar step={step} />
    <StepRender step={step} setStep={setStep} />
    </>
  );
}
