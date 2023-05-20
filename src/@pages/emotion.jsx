import React, { useState } from "react";
import StepRender from "../@components/emotion/StepRenderer"

export default function Emotion() {
  const [step, setStep] = useState(1);
  return (
    <StepRender step={step} setStep={setStep} />
  );
}
