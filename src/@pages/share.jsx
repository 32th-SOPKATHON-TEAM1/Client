import React from "react";
import styled from "styled-components";
import ShareHeader from "../@components/common/share/ShareHeader";

export default function Share() {
  return (
    <>
      <St.ShareWrapper>
        <ShareHeader headerText={`헤더입니다.`} />
        <St.Img>이미지입니다.</St.Img>
        <St.Button>나도 사진 찍으러 가기</St.Button>
      </St.ShareWrapper>
    </>
  );
}
const St = {
  ShareWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 66.7rem;
  `,
  Img: styled.div``,
  Button: styled.button``,
};
