import React from "react";
import { styled } from "styled-components";

export default function Button(props) {
  const { text, width, onClick } = props;

  function isNext() {
    return text === "다음";
  }

  return (
    <St.ButtonWrapper width={width} onClick={onClick} isNext={isNext}>
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

    border: 1px solid black;

    background-color: ${({ isNext }) => (isNext ? "#92D5FF" : "#ffffff")};
  `,
};
