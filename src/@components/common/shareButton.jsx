import React from "react";
import { styled } from "styled-components";

export default function ShareButton(props) {
  const { text, onClick } = props;

  return <ButtonWrapper onClick={onClick}></ButtonWrapper>;
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.8rem;
  height: 6rem;
`;
