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
  height: 3px;

  background-color: grey;

  margin: 5rem 0;
`;

const ProgressBarBox = styled.article`
  width: ${({ step }) => step * (33.6 / 5)}rem;
  height: 3px;

  background-color: blue;
`;
