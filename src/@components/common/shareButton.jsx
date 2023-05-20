import React from "react";
import { styled } from "styled-components";

export default function ShareButton(props) {
  const { text, onClick } = props;

  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.8rem;

  height: 6rem;

  border: 1px solid pink;
  background: #ffffff;
  border-radius: 100px;
`;
