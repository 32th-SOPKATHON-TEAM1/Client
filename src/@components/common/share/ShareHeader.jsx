import React from "react";
import styled from "styled-components";

export default function ShareHeader(props) {
  const { headerText } = props;
  return (
    <>
      <St.Header>{headerText}</St.Header>
    </>
  );
}

const St = {
  Header: styled.header``,
};
