import React from "react";
import { styled } from "styled-components";

export default function ProgressBar(props) {
  const { step } = props;

  return (
    <ProgressBarWrapper>
      <ProgressBarBox step={step} />
    </ProgressBarWrapper>
  );
}

const ProgressBarWrapper = styled.section`
  width: 100%;
  height: 4px;

  margin: 72px 0 62px 0;

  border-radius: 50%;
  background-color: #fdf9e1;
`;

const ProgressBarBox = styled.article`
  width: ${({ step }) => step * (33.6 / 5)}rem;
  height: 4px;

  background-color: white;
`;
