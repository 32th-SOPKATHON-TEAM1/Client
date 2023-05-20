import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BackgroundImg from "../assets/bomi/result_bg.svg";
import ShareBtn from "../assets/bomi/share.svg";

export default function Share() {
  // let { id } = useParams();
  // const [photos, setPhotos] = useState();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/`);
  };

  // async function fetchPhotoInfo() {
  //   const response = await getPhotoInfo(id);
  //   setPhotos(response);
  // }
  // useEffect(() => {
  //   fetchPhotoInfo();
  //   console.log(photos);
  // }, []);

  return (
    <>
      <PrintingImgWrapper>
        <PolaroidUserName>
          <p>김대덕님,</p>
          <p>감정사진이에요</p>
        </PolaroidUserName>
        <Polaroid>
          {/* <Img src={imgSrc} alt="프린팅이미지" /> */}
          <p>이얏후~!</p>
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
const PrintingImgWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const Polaroid = styled.article`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  width: 292px;
  height: 353px;

  border: 1px solid black;
`;

const Img = styled.img`
  width: 25rem;
  height: 25rem;

  border: 1px solid black;
  width: 292px;
  height: 353px;
`;
