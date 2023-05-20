import React from "react";
import { styled } from "styled-components";

export default function Button(props) {
  const { text, width, onClick } = props;

  return (
    <St.ButtonWrapper width={width} onClick={onClick}>
      {text}
    </St.ButtonWrapper>
  );
}

const St = {
  ButtonWrapper: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ width }) => width}rem;

    height: 6rem;

    border: 1px solid pink;
  `,
};
