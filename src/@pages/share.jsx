import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BackgroundImg from "../assets/bomi/result_bg.svg";
import ShareBtn from "../assets/bomi/share.svg";
import { getPhotoInfo } from "../api/getPhotoInfo";
import testImg from "../assets/bomi/testImg.svg";

export default function Share() {
  let { id } = useParams();
  console.log(id);
  const [data, setData] = useState();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/`);
  };

  async function fetchPhotoInfo() {
    const response = await getPhotoInfo(Number(id));
    setData(response.data);
  }

  useEffect(() => {
    fetchPhotoInfo();
  }, []);

  return (
    <>
      <PrintingImgWrapper>
        <PolaroidUserName>
          {/* <p>${data.name}님,</p> */}
          <p>{data && data?.name}님,</p>
          <p>촬영한 사진이에요</p>
        </PolaroidUserName>
        <Polaroid>
          <Img src={data && data?.imgUrl} alt="프린팅이미지" />
          <Caption>{data && data?.title}</Caption>
        </Polaroid>
        <ShareButtonContainer>
          <ShareButton src={ShareBtn} alt="나도 사진 찍으러 가기" onClick={handleNavigate}></ShareButton>
        </ShareButtonContainer>
      </PrintingImgWrapper>
      <Background />
    </>
  );
}

const Background = styled.div`
  width: 360px;
  height: 800px;

  position: absolute;
  z-index: -1;
  top: 0;
  margin-left: -1.4rem;

  background-image: url(${BackgroundImg});
`;
const PolaroidUserName = styled.h1`
  margin-top: 80px;
  margin-bottom: 32px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  text-align: center;

  /* black1 */

  color: #171819;
`;
const PrintingImgWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Polaroid = styled.article`
  position: relative;

  width: 292px;
  height: 353px;
  background: #ffffff;

  border: 1px solid #8a9299;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
`;

const Img = styled.img`
  position: absolute;

  margin: 20px 20px 0px 20px;
  width: 252px;
  height: 252px;
`;
const Caption = styled.span`
  position: absolute;
  width: 100%;

  margin: 285px 187px 38px 20px;

  font-family: "AnSsangCe";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 30px;
  /* identical to box height, or 43% */

  color: #000000;
`;
const ShareButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 60px 16px 12px 16px;
`;
const ShareButton = styled.img``;
