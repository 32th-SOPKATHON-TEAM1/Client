import React from "react";
import { styled } from "styled-components";

export default function Button(props) {
  const { text, width } = props;

  return <ButtonWrapper width={width}>{text}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width}rem;
  /* 여기서부터 변경하기 */
  height: 5rem;

  border: 1px solid pink;
`;
